import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { ProductIntroSection } from './components/ProductIntroSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ComparisonSection } from './components/ComparisonSection';
import { SocialProofSection } from './components/SocialProofSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { CopySpecView } from './components/CopySpecView';
import { OrderModal } from './components/OrderModal';
import { VideoModal } from './components/VideoModal';

export default function App() {
  const [activeView, setActiveView] = useState<'landing' | 'copySpec'>('landing');
  const [orderModalOpen, setOrderModalOpen] = useState<boolean>(false);
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-stone-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Navigation */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenOrderModal={() => setOrderModalOpen(true)}
      />

      {/* Main Content Area: Switch between Live Landing Page and Copywriter Specs */}
      <main>
        {activeView === 'landing' ? (
          <div className="animate-in fade-in duration-200">
            {/* 1. Hero Section */}
            <HeroSection
              onOpenOrderModal={() => setOrderModalOpen(true)}
              onOpenVideoModal={() => setVideoModalOpen(true)}
            />

            {/* 2. The Problem We're Solving */}
            <ProblemSection />

            {/* 3. Introducing Zyphor LifeBand */}
            <ProductIntroSection
              onOpenOrderModal={() => setOrderModalOpen(true)}
            />

            {/* 4. Key Benefits (Seniors & Caregivers) */}
            <BenefitsSection />

            {/* 5. Why Choose Us / Uniqueness Comparison */}
            <ComparisonSection
              onOpenOrderModal={() => setOrderModalOpen(true)}
            />

            {/* 6. Social Proof / Clinical Trust */}
            <SocialProofSection />

            {/* 7. Final Call-to-Action Footer */}
            <FinalCtaSection
              onOpenOrderModal={() => setOrderModalOpen(true)}
            />
          </div>
        ) : (
          <div className="animate-in fade-in duration-200">
            <CopySpecView />
          </div>
        )}
      </main>

      {/* Modals */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        onOpenOrderModal={() => setOrderModalOpen(true)}
      />
    </div>
  );
}
