import React from 'react';
import { ShieldCheck, PhoneCall, FileText, Layout, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeView: 'landing' | 'copySpec';
  setActiveView: (view: 'landing' | 'copySpec') => void;
  wireframeMode: boolean;
  setWireframeMode: (val: boolean) => void;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  wireframeMode,
  setWireframeMode,
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

        {/* Center Mode Switcher for Copywriter & Wireframe Review */}
        <div className="hidden md:flex items-center bg-stone-200/70 p-1 rounded-xl border border-stone-300/60">
          <button
            id="nav-view-landing"
            onClick={() => setActiveView('landing')}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeView === 'landing'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>Live Landing Page</span>
          </button>
          <button
            id="nav-view-spec"
            onClick={() => setActiveView('copySpec')}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeView === 'copySpec'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Copywriter Specs & Wireframes</span>
          </button>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center space-x-3">
          {activeView === 'landing' && (
            <button
              id="nav-wireframe-toggle"
              onClick={() => setWireframeMode(!wireframeMode)}
              className={`hidden lg:flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                wireframeMode
                  ? 'bg-amber-100 border-amber-300 text-amber-900 font-semibold'
                  : 'bg-stone-100 border-stone-200 text-stone-600 hover:bg-stone-200'
              }`}
              title="Show UI/UX Wireframe notes inline on the page"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span>{wireframeMode ? 'Wireframe Notes: ON' : 'Show UX Notes'}</span>
            </button>
          )}

          <a
            href="tel:18005559974"
            className="hidden sm:flex items-center space-x-1 text-xs font-medium text-stone-600 hover:text-stone-900"
          >
            <PhoneCall className="w-3.5 h-3.5 text-stone-500" />
            <span>1-800-555-ZYPHOR</span>
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
      <div className="flex md:hidden items-center justify-around border-t border-stone-200 bg-stone-100 px-4 py-2 text-xs">
        <button
          onClick={() => setActiveView('landing')}
          className={`font-medium py-1 px-3 rounded-md ${activeView === 'landing' ? 'bg-white shadow-xs text-stone-900' : 'text-stone-600'}`}
        >
          Live Page
        </button>
        <button
          onClick={() => setActiveView('copySpec')}
          className={`font-medium py-1 px-3 rounded-md ${activeView === 'copySpec' ? 'bg-white shadow-xs text-stone-900' : 'text-stone-600'}`}
        >
          Full Copy & Notes
        </button>
        <button
          onClick={() => setWireframeMode(!wireframeMode)}
          className={`font-medium py-1 px-2 text-xs rounded-md ${wireframeMode ? 'bg-amber-200 text-amber-900' : 'text-stone-600'}`}
        >
          {wireframeMode ? 'UX Notes On' : 'UX Notes Off'}
        </button>
      </div>
    </header>
  );
};
