'use client';

import React, { createContext, useContext, useState, useMemo, useSyncExternalStore } from 'react';
import { Product, PRODUCTS } from './products';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedLighting?: string;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, quantity?: number, selectedLighting?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  formattedSubtotal: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'origin_mirrors_cart_v1';

let listeners: Array<() => void> = [];

function subscribe(callback: () => void) {
  listeners.push(callback);
  const handleStorage = (e: StorageEvent) => {
    if (e.key === CART_STORAGE_KEY) {
      callback();
    }
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', handleStorage);
  }
  return () => {
    listeners = listeners.filter((l) => l !== callback);
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', handleStorage);
    }
  };
}

function notify() {
  for (const listener of listeners) {
    listener();
  }
}

function getSnapshot(): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(CART_STORAGE_KEY) || '';
}

function getServerSnapshot(): string {
  return '';
}

function saveCartToStorage(rawString: string) {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CART_STORAGE_KEY, rawString);
      notify();
    }
  } catch {
    // ignore quota errors
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  // useSyncExternalStore guarantees SSR & initial client hydration match (both return '')
  const rawCart = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const items = useMemo<CartItem[]>(() => {
    if (!rawCart) return [];
    try {
      const parsed = JSON.parse(rawCart);
      if (!Array.isArray(parsed)) return [];
      const validItems: CartItem[] = [];
      for (const item of parsed) {
        const product = PRODUCTS.find((p) => p.id === item.productId || p.id === item?.product?.id);
        if (product && typeof item.quantity === 'number' && item.quantity > 0) {
          validItems.push({
            product,
            quantity: item.quantity,
            selectedLighting: item.selectedLighting || 'Triple-Lit Multi-Tone',
          });
        }
      }
      return validItems;
    } catch {
      return [];
    }
  }, [rawCart]);

  const updateStorage = (updatedItems: CartItem[]) => {
    const serialized = JSON.stringify(
      updatedItems.map((i) => ({
        productId: i.product.id,
        quantity: i.quantity,
        selectedLighting: i.selectedLighting,
      }))
    );
    saveCartToStorage(serialized);
  };

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  const addItem = (product: Product, quantity = 1, selectedLighting?: string) => {
    const existingIndex = items.findIndex((item) => item.product.id === product.id);
    let updated: CartItem[];
    if (existingIndex > -1) {
      updated = [...items];
      updated[existingIndex] = {
        ...updated[existingIndex],
        quantity: updated[existingIndex].quantity + quantity,
        selectedLighting: selectedLighting || updated[existingIndex].selectedLighting,
      };
    } else {
      updated = [...items, { product, quantity, selectedLighting: selectedLighting || 'Triple-Tone' }];
    }
    updateStorage(updated);
    setIsOpen(true);
  };

  const removeItem = (productId: string) => {
    updateStorage(items.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    updateStorage(
      items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    updateStorage([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const formattedSubtotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(subtotal);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        formattedSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
