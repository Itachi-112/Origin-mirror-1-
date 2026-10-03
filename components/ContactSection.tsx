'use client';

import React, { useState } from 'react';
import { BRAND_INFO, PRODUCTS } from '@/lib/products';
import { MapPin, Send, Check, Clock, Building2 } from 'lucide-react';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interestedProduct, setInterestedProduct] = useState(PRODUCTS[0].name);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0B0D] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Studio Location & Direct Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-[#D4AF37] font-mono mb-2">
                05. Direct Connect & Studio
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight leading-tight mb-4">
                Inquire Directly With Our Delhi Studio
              </h2>
              <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
                Whether you are an architect specifying mirrors for a residential sanctuary, an
                interior designer curating a luxury vanity, or a homeowner seeking a statement piece,
                our engineering team is ready to assist.
              </p>

              {/* Exact Address Module */}
              <div className="bg-[#121316] p-6 rounded-xl border border-white/10 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-white">{BRAND_INFO.name}</h3>
                    <div className="text-xs text-[#D4AF37] font-mono mb-1">{BRAND_INFO.company}</div>
                    <div className="text-xs text-neutral-300 leading-relaxed font-mono">
                      <div>{BRAND_INFO.address.line1}</div>
                      <div>{BRAND_INFO.address.line2}</div>
                      <div>
                        {BRAND_INFO.address.city} - {BRAND_INFO.address.pincode}
                      </div>
                      <div className="text-neutral-500">{BRAND_INFO.address.country}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                  <Clock className="w-4 h-4 text-neutral-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-neutral-400">
                    <span className="text-white block font-medium">Studio & Dispatch Hours</span>
                    Monday to Saturday: 10:00 AM – 7:00 PM IST
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-xs text-neutral-500 font-mono">
              ORIGIN CREATIVE GLASSES INDIA · DELHI 110094
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#121418] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                    <Check className="w-7 h-7" />
                  </div>
                  <div className="text-xs font-mono uppercase text-[#D4AF37] tracking-wider mb-1">
                    Message Received
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-2">Thank You, {name}</h3>
                  <p className="text-xs text-neutral-400 max-w-sm mx-auto mb-6 leading-relaxed">
                    Our team at {BRAND_INFO.company} in Karawal Nagar has received your inquiry regarding
                    the {interestedProduct}. A dedicated glass specialist will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-black bg-[#D4AF37] rounded hover:bg-[#C5A028] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-white/10 pb-4 mb-2">
                    <h3 className="text-base font-serif text-white">Project Inquiry Form</h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Direct consultation with the Origin Mirrors fabrication team.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-neutral-300 mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Priyanshu Verma"
                        className="w-full bg-[#0C0D0E] border border-white/15 rounded px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-300 mb-1.5 font-medium">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98110 XXXXX"
                        className="w-full bg-[#0C0D0E] border border-white/15 rounded px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-neutral-300 mb-1.5 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="architect@studio.com"
                        className="w-full bg-[#0C0D0E] border border-white/15 rounded px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-300 mb-1.5 font-medium">
                        Interested Mirror Creation
                      </label>
                      <select
                        value={interestedProduct}
                        onChange={(e) => setInterestedProduct(e.target.value)}
                        className="w-full bg-[#0C0D0E] border border-white/15 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        {PRODUCTS.map((p) => (
                          <option key={p.id} value={p.name} className="bg-neutral-900 text-white">
                            {p.name} ({p.formattedPrice})
                          </option>
                        ))}
                        <option value="Custom Project" className="bg-neutral-900 text-white">
                          Custom Architectural Size / Project
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-300 mb-1.5 font-medium">
                      Project Notes or Delivery Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify wall dimensions, delivery timeline, or special electrical requirements..."
                      className="w-full bg-[#0C0D0E] border border-white/15 rounded px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-semibold uppercase tracking-widest text-black bg-[#D4AF37] hover:bg-[#E5C358] rounded transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Submit Inquiry to Studio</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
