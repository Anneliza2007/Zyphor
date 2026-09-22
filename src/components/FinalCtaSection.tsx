import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Truck, 
  RefreshCw, 
  Headphones, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  PhoneCall, 
  Info 
} from 'lucide-react';
import { SECTION_SPECS } from '../data/landingCopy';

interface FinalCtaProps {
  onOpenOrderModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaProps> = ({ onOpenOrderModal }) => {
  const spec = SECTION_SPECS[6];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Will my parent actually agree to wear this every day?',
      a: 'This was our single biggest design priority. Traditional emergency pendants are rejected because they feel like stigmatizing hospital gear. Zyphor LifeBand looks and feels like a comfortable, understated wellness band. It weighs less than 32 grams, has a breathable hypoallergenic band, and requires charging only once a week.'
    },
    {
      q: 'What happens in an emergency if my parent is unconscious?',
      a: 'The moment the AI detects an impact with post-fall immobility or a critical cardiac anomaly, it enters emergency mode immediately. It dials pre-set family contacts, provides exact GPS coordinates, and can connect directly with certified emergency dispatchers—even if your parent cannot speak or press a button.'
    },
    {
      q: 'Does my parent need a smartphone or Wi-Fi in their home?',
      a: 'No. Zyphor LifeBand comes pre-configured with its own independent 4G LTE cellular connection. It works directly out of the box anywhere in the nation with cell service—indoors, outdoors, and on walks—without needing a smartphone or home internet setup.'
    },
    {
      q: 'What is your 60-day in-home trial guarantee?',
      a: 'Have your loved one wear Zyphor for two full months in their normal routine. If they feel uncomfortable, or if your family isn’t 100% delighted with the reassurance and sleep quality it restores, simply return it in the provided prepaid box for a prompt, 100% refund. No questions asked.'
    }
  ];

  return (
    <footer id="final-cta-section" className="bg-stone-900 text-stone-100 pt-20 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Closer Card */}
        <div className="bg-gradient-to-br from-stone-800 to-stone-950 rounded-3xl p-8 sm:p-14 border border-stone-700 shadow-2xl text-center space-y-8 relative overflow-hidden">
          
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-500/30">
              <span>Zero-Risk 60-Day Guarantee</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif">
              {spec.headline}
            </h2>

            <p className="text-stone-300 text-base sm:text-lg font-sans leading-relaxed">
              {spec.subheadline}
            </p>
          </div>

          {/* Primary Action Button */}
          <div className="space-y-4">
            <button
              id="final-cta-btn"
              onClick={onOpenOrderModal}
              className="inline-flex items-center justify-center space-x-3 px-10 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-base shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
            >
              <span>{spec.ctaText}</span>
              <ArrowRight className="w-5 h-5 text-stone-950" />
            </button>

            <div className="text-xs text-stone-400 flex items-center justify-center space-x-2">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>Questions? Call our Senior Care Advisors: <a href="tel:9849895925" className="text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-2">+91 98498 95925</a></span>
            </div>
          </div>

          {/* 4 Conversion Assurance Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-stone-800 text-xs text-stone-300">
            <div className="flex flex-col items-center space-y-1.5 p-2">
              <RefreshCw className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold text-white">60-Day In-Home Trial</span>
              <span className="text-[11px] text-stone-400">100% money back</span>
            </div>
            <div className="flex flex-col items-center space-y-1.5 p-2">
              <Truck className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold text-white">Free Priority Delivery</span>
              <span className="text-[11px] text-stone-400">Ships in 24 hours</span>
            </div>
            <div className="flex flex-col items-center space-y-1.5 p-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold text-white">2-Year Full Warranty</span>
              <span className="text-[11px] text-stone-400">Immediate replacement</span>
            </div>
            <div className="flex flex-col items-center space-y-1.5 p-2">
              <Headphones className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold text-white">Dedicated Family Setup</span>
              <span className="text-[11px] text-stone-400">1-on-1 onboarding call</span>
            </div>
          </div>

        </div>

        {/* Objection Crushing FAQ Accordion */}
        <div className="mt-16 space-y-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-serif text-white">Frequently Asked Questions</h3>
            <p className="text-xs text-stone-400 mt-1">Everything you need to know to make the safest choice.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-stone-800/60 rounded-xl border border-stone-700/80 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between text-stone-200 hover:text-white font-medium text-sm transition-colors"
                  >
                    <span className="font-serif font-semibold">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400 shrink-0 ml-2" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-stone-300 leading-relaxed font-sans border-t border-stone-700/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Legal and Disclaimers */}
        <div className="mt-16 pt-8 border-t border-stone-800 text-center text-xs text-stone-500 space-y-3">
          <p>
            Zyphor LifeBand is an assistive wellness and safety monitoring wearable designed to aid families and caregivers. It does not replace professional clinical diagnosis or hospital telemetry units.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-stone-400">
            <span>© 2026 Zyphor Technologies Inc. All Rights Reserved.</span>
            <a href="#privacy" className="hover:underline">Privacy Policy (HIPAA Secure)</a>
            <a href="#terms" className="hover:underline">Terms of Service</a>
            <a href="#clinical" className="hover:underline">Clinical Validation Whitepaper</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
