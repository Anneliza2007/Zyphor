import React from 'react';
import { ShieldCheck, PhoneCall, FileText, Layout, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeView: 'landing' | 'copySpec';
  setActiveView: (view: 'landing' | 'copySpec') => void;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  onOpenOrderModal
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#FBFBFA]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-stone-900 flex items-center justify-center text-white shadow-sm">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-stone-900 block leading-none font-serif">
              Zyphor <span className="font-sans font-semibold text-emerald-700 text-sm tracking-normal uppercase ml-1 px-1.5 py-0.5 bg-emerald-50 rounded border border-emerald-200">LifeBand</span>
            </span>
            <span className="text-xs text-stone-500 font-medium">Continuous AI Safety Wearable</span>
          </div>
        </div>

        {/* Navigation Section Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs font-semibold text-stone-600">
          <a href="#features-section" className="hover:text-stone-900 transition-colors">Features</a>
          <a href="#benefits-section" className="hover:text-stone-900 transition-colors">Benefits</a>
          <a href="#comparison-section" className="hover:text-stone-900 transition-colors">Why Zyphor</a>
          <a href="#social-proof-section" className="hover:text-stone-900 transition-colors">Doctor & Caregiver Reviews</a>
          <a href="#final-cta-section" className="hover:text-stone-900 transition-colors">FAQ & Guarantee</a>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center space-x-3">
          <button
            id="nav-view-toggle"
            onClick={() => setActiveView(activeView === 'landing' ? 'copySpec' : 'landing')}
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 transition-colors"
          >
            {activeView === 'landing' ? (
              <>
                <FileText className="w-3.5 h-3.5 text-stone-500" />
                <span>View Full Copy Spec</span>
              </>
            ) : (
              <>
                <Layout className="w-3.5 h-3.5 text-stone-500" />
                <span>Back to Live Page</span>
              </>
            )}
          </button>

          <a
            href="tel:9849895925"
            className="hidden sm:flex items-center space-x-1 text-xs font-medium text-stone-600 hover:text-stone-900"
          >
            <PhoneCall className="w-3.5 h-3.5 text-stone-500" />
            <span>+91 98498 95925</span>
          </a>

          <button
            id="nav-order-cta"
            onClick={onOpenOrderModal}
            className="inline-flex items-center space-x-2 bg-stone-900 hover:bg-stone-800 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-sm hover:shadow transition-all active:scale-95"
          >
            <span>Order Risk-Free</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mobile subnav */}
      <div className="flex md:hidden items-center justify-between border-t border-stone-200 bg-stone-100 px-4 py-2 text-xs">
        <div className="flex space-x-2">
          <a href="#features-section" className="text-stone-600 font-medium py-1 px-2">Features</a>
          <a href="#benefits-section" className="text-stone-600 font-medium py-1 px-2">Benefits</a>
          <a href="#comparison-section" className="text-stone-600 font-medium py-1 px-2">Compare</a>
        </div>
        <button
          onClick={() => setActiveView(activeView === 'landing' ? 'copySpec' : 'landing')}
          className="font-semibold py-1 px-2.5 rounded-md bg-white text-stone-900 shadow-2xs border border-stone-200"
        >
          {activeView === 'landing' ? 'Copy Spec' : 'Live Page'}
        </button>
      </div>
    </header>
  );
};
