'use client';

import React, { useState } from 'react';
import { BRAND_INFO, PRODUCTS } from '@/lib/products';
import { Check, Send } from 'lucide-react';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interestedProduct, setInterestedProduct] = useState(PRODUCTS[0].name);
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#F7F5F0]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="label-mono mb-2">Project Inquiry</span>
              <h2 className="text-4xl sm:text-5xl font-serif text-[#171717] font-light leading-tight mb-6">
                Direct Connect with our Delhi Studio
              </h2>
              <p className="text-base text-[#68645D] font-light leading-relaxed mb-10">
                Specify architectural requirements or delivery timelines directly with our engineering
                team at Karawal Nagar.
              </p>

              {/* Exact Address Box from Variation 5 */}
              <div className="p-8 border border-[rgba(23,23,23,0.08)] bg-[#FFFFFF] shadow-sm rounded-sm">
                <p className="font-mono text-xs uppercase tracking-widest text-[#B89A62] mb-3">
                  ADDRESS
                </p>
                <p className="font-medium text-[#171717] mb-1 font-serif text-lg">
                  {BRAND_INFO.company}
                </p>
                <p className="text-sm text-[#68645D] font-mono leading-relaxed">
                  {BRAND_INFO.address.line1}, {BRAND_INFO.address.line2}, {BRAND_INFO.address.city} -{' '}
                  {BRAND_INFO.address.pincode}
                </p>
              </div>
            </div>

            <div className="mt-8 text-xs font-mono text-[#68645D]">
              ORIGIN CREATIVE GLASSES INDIA · DELHI 110094
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 border border-[rgba(23,23,23,0.08)] bg-[#FFFFFF] shadow-sm rounded-sm">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-4 text-emerald-600">
                    <Check className="w-6 h-6" />
                  </div>
                  <span className="label-mono mb-2 text-[#B89A62]">Inquiry Received</span>
                  <h3 className="text-3xl font-serif text-[#171717] font-light mb-2">
                    Thank You, {name}
                  </h3>
                  <p className="text-sm text-[#68645D] max-w-sm mx-auto mb-6 leading-relaxed">
                    Our team at {BRAND_INFO.company} in Karawal Nagar has received your inquiry regarding
                    the {interestedProduct}. A dedicated glass specialist will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setNotes('');
                    }}
                    className="btn-outline-var5 text-xs py-3 px-6"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-1">
                    <label className="label-mono text-[0.6rem] mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priyanshu Verma"
                      className="w-full p-3.5 bg-transparent border border-[rgba(23,23,23,0.12)] text-[#171717] text-sm outline-none focus:border-[#B89A62] transition-colors rounded-sm"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label className="label-mono text-[0.6rem] mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98110 XXXXX"
                      className="w-full p-3.5 bg-transparent border border-[rgba(23,23,23,0.12)] text-[#171717] text-sm outline-none focus:border-[#B89A62] transition-colors rounded-sm"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="label-mono text-[0.6rem] mb-2">Mirror Creation</label>
                    <select
                      value={interestedProduct}
                      onChange={(e) => setInterestedProduct(e.target.value)}
                      className="w-full p-3.5 bg-transparent border border-[rgba(23,23,23,0.12)] text-[#171717] text-sm outline-none focus:border-[#B89A62] transition-colors rounded-sm"
                    >
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name} className="bg-white text-[#171717]">
                          {p.name} ({p.formattedPrice})
                        </option>
                      ))}
                      <option value="Custom Project" className="bg-white text-[#171717]">
                        Custom Architectural Project / Dimensions
                      </option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="label-mono text-[0.6rem] mb-2">Notes</label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Specify wall dimensions, delivery timeline, or special electrical requirements..."
                      className="w-full p-3.5 bg-transparent border border-[rgba(23,23,23,0.12)] text-[#171717] text-sm outline-none focus:border-[#B89A62] transition-colors rounded-sm resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="btn-primary-var5 w-full justify-center"
                    >
                      <span>Submit Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
