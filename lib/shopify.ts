/**
 * Origin Mirrors - Shopify Storefront API Integration Layer
 * 
 * Note: As per architecture requirements, this integration is strictly architected
 * for seamless Shopify headless connection when store credentials (Storefront API token,
 * Shopify domain) are provided. It is currently in Local Demo Mode and does not claim
 * to be live without configuration.
 */

import { Product, PRODUCTS } from './products';

export interface ShopifyConfig {
  domain?: string;
  storefrontAccessToken?: string;
  apiVersion?: string;
}

export interface ShopifyCartLine {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    product: {
      title: string;
      handle: string;
    };
    priceV2: {
      amount: string;
      currencyCode: string;
    };
  };
}

export interface ShopifyCheckoutPayload {
  checkoutUrl?: string;
  error?: string;
}

export class ShopifyService {
  private config: ShopifyConfig;
  private isConfigured: boolean;

  constructor(config?: ShopifyConfig) {
    this.config = {
      domain: config?.domain || process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
      storefrontAccessToken: config?.storefrontAccessToken || process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      apiVersion: config?.apiVersion || '2024-04',
    };
    this.isConfigured = Boolean(this.config.domain && this.config.storefrontAccessToken);
  }

  /**
   * Check if Shopify Storefront API is configured with real credentials
   */
  public hasLiveConnection(): boolean {
    return this.isConfigured;
  }

  /**
   * Retrieve catalog products. Falls back to static catalog when unconfigured.
   */
  public async getProducts(): Promise<Product[]> {
    if (!this.isConfigured) {
      // In local mode, return centralized catalog
      return PRODUCTS;
    }

    try {
      const response = await this.queryStorefront(`
        query GetProducts {
          products(first: 10) {
            edges {
              node {
                id
                handle
                title
                description
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      `);
      // Parse Shopify response
      return response.data?.products?.edges || PRODUCTS;
    } catch {
      return PRODUCTS;
    }
  }

  /**
   * Create checkout session with Shopify Storefront API.
   * Returns demo fallback if not yet connected to a live Shopify store.
   */
  public async createCheckout(
    items: Array<{ productId: string; quantity: number }>
  ): Promise<ShopifyCheckoutPayload> {
    if (!this.isConfigured) {
      return {
        checkoutUrl: undefined,
        error: 'Shopify Storefront is in Local Demo Mode. Configure SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_ACCESS_TOKEN for live checkout.',
      };
    }

    try {
      // Prepared mutation for when credentials are added
      const lines = items.map((item) => ({
        merchandiseId: item.productId,
        quantity: item.quantity,
      }));

      const res = await this.queryStorefront(
        `mutation cartCreate($input: CartInput!) {
          cartCreate(input: $input) {
            cart {
              id
              checkoutUrl
            }
            userErrors {
              field
              message
            }
          }
        }`,
        { input: { lines } }
      );

      return {
        checkoutUrl: res.data?.cartCreate?.cart?.checkoutUrl,
      };
    } catch (err: any) {
      return {
        error: err.message || 'Failed to initialize Shopify checkout.',
      };
    }
  }

  private async queryStorefront(query: string, variables: Record<string, any> = {}) {
    if (!this.config.domain || !this.config.storefrontAccessToken) {
      throw new Error('Shopify credentials not supplied.');
    }

    const endpoint = `https://${this.config.domain}/api/${this.config.apiVersion}/graphql.json`;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': this.config.storefrontAccessToken,
      },
      body: JSON.stringify({ query, variables }),
    });

    return response.json();
  }
}

export const shopifyService = new ShopifyService();
