import React, { useState } from 'react';
import { X, ShieldCheck, Truck, Check, Sparkles } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    recipient: 'parent',
    color: 'graphite',
    size: 'regular'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate closing after feedback
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-stone-200 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          id="close-order-modal"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-stone-900">
              Your 60-Day Risk-Free Trial Is Reserved!
            </h3>
            <p className="text-sm text-stone-600 font-sans max-w-sm mx-auto leading-relaxed">
              We’ve routed your reservation to our senior onboarding desk. A discreet starter kit with pre-activated cellular connectivity will ship within 24 hours.
            </p>
            <div className="p-3 bg-stone-100 rounded-xl text-xs text-stone-700 font-mono">
              Confirmation sent to {formData.email || 'your email'}
            </div>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 bg-stone-900 text-white text-xs font-semibold rounded-xl"
            >
              Back to Landing Page
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="inline-flex items-center space-x-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full mb-1">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                <span>60-Day In-Home Guarantee Included</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-stone-900">
                Claim Your Zyphor LifeBand Trial
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Zero contracts. No setup fees. Return anytime within 60 days for a 100% refund.
              </p>
            </div>

            {/* Hardware Preference */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Band Finish</label>
                <select
                  value={formData.color}
                  onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                  className="w-full p-2 rounded-xl border border-stone-300 text-stone-800 bg-stone-50 focus:bg-white text-xs"
                >
                  <option value="graphite">Matte Titanium Graphite</option>
                  <option value="silver">Brushed Warm Silver</option>
                  <option value="rose">Soft Champagne Gold</option>
                </select>
              </div>
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Wrist Size</label>
                <select
                  value={formData.size}
                  onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                  className="w-full p-2 rounded-xl border border-stone-300 text-stone-800 bg-stone-50 focus:bg-white text-xs"
                >
                  <option value="regular">Regular (5.5" - 7.5" wrist)</option>
                  <option value="large">Comfort Large (7.2" - 9.0" wrist)</option>
                </select>
              </div>
            </div>

            {/* Recipient Selector */}
            <div className="space-y-1">
              <label className="font-semibold text-xs text-stone-700 block">Who is this for?</label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {['Aging Parent', 'Spouse', 'Self'].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setFormData({ ...formData, recipient: item })}
                    className={`py-2 px-3 rounded-xl border font-medium text-center transition-all ${
                      formData.recipient === item
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Mitchell"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-stone-300 text-stone-900 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-stone-300 text-stone-900 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">Phone (for dispatch alerts)</label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-stone-300 text-stone-900 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all active:scale-98"
            >
              Start 60-Day Trial (Zero Obligation)
            </button>

            {/* Assurances */}
            <div className="flex items-center justify-center space-x-4 text-[11px] text-stone-500 pt-1">
              <span className="flex items-center space-x-1">
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Free 2-Day Priority Delivery</span>
              </span>
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Encrypted 256-bit HIPAA</span>
              </span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
