import React, { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  UserCheck, 
  Smile, 
  Moon, 
  BellRing, 
  Users, 
  ShieldCheck, 
  Info,
  Check
} from 'lucide-react';
import { SECTION_SPECS } from '../data/landingCopy';

export const BenefitsSection: React.FC = () => {
  const spec = SECTION_SPECS[3];
  const [audienceTab, setAudienceTab] = useState<'seniors' | 'caregivers'>('seniors');

  const seniorBenefits = [
    {
      icon: Smile,
      title: 'Uncompromised Independence',
      headline: 'Live in your own home without hovering surveillance',
      description:
        'You value your freedom. You don’t want children calling every thirty minutes to verify you are upright. Zyphor acts as a quiet guardian that respects your private life while giving your family reassurance.'
    },
    {
      icon: Sparkles,
      title: 'Dignified, Modern Design',
      headline: 'Looks like a premium wellness band, not a medical patient tag',
      description:
        'Say goodbye to humiliating clunky red buttons that scream "I am fragile." Zyphor features a slim, brushed matte titanium chassis and an ultra-breathable stretch knit strap that complements everyday clothes.'
    },
    {
      icon: UserCheck,
      title: 'Zero Tech Headaches',
      headline: 'No tiny app menus, passwords, or smartphone pairings',
      description:
        'Never worry about tapping tiny icons or updating software. Put the band on your wrist, snap the magnetic latch, and go about your garden, coffee, or walk. It configures and updates completely on its own.'
    },
    {
      icon: ShieldCheck,
      title: '24/7 Confidence Everywhere',
      headline: 'Bathe, shower, and garden with zero fear of getting stranded',
      description:
        'Completely IP68 waterproof. Wear it in the shower where over 70% of dangerous slip-and-falls take place. If anything happens, help is already on the way before you even try to reach a towel.'
    }
  ];

  const caregiverBenefits = [
    {
      icon: Moon,
      title: 'Unbroken, Restful Sleep',
      headline: 'Stop checking your phone at 3 AM with anxious dread',
      description:
        'Reclaim calm nights. Zyphor continuously monitors vitals and sleep stillness. If cardiac anomalies or falls occur, critical alerts bypass silent phone modes to wake you instantly—leaving your mind calm when all is well.'
    },
    {
      icon: BellRing,
      title: 'Instant 3-Second Crisis Alerts',
      headline: 'Real-time GPS pin, fall impact severity, and automated dispatch',
      description:
        'When an alert triggers, you receive a direct SMS and app notification with exact location coordinates, battery percentage, and vital status. You can immediately speak directly through the band to reassure them.'
    },
    {
      icon: Users,
      title: 'United Family Circle Hub',
      headline: 'Loop in siblings, adult grandchildren, and home nurses in seconds',
      description:
        'Stop playing stressful telephone tag during an emergency. Multiple family members can join the private care circle, receiving simultaneous updates and sharing check-in responsibilities effortlessly.'
    },
    {
      icon: Heart,
      title: 'Proactive Medical Anomaly Insights',
      headline: 'Catch cardiovascular decline weeks before hospital readmission',
      description:
        'Download weekly vital summaries for visits with cardiologists or geriatricians. Spot declining heart rate variability or irregular rhythm patterns before they transform into costly emergency room crises.'
    }
  ];

  return (
    <section id="benefits-section" className="py-20 bg-stone-100 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <span>Tailored for Real Lives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight font-serif">
            {spec.headline}
          </h2>
          <p className="text-lg text-stone-600 font-sans leading-relaxed">
            {spec.subheadline}
          </p>

          {/* Interactive Audience Switcher Tabs */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 bg-stone-200/80 rounded-2xl border border-stone-300">
              <button
                id="benefits-tab-seniors"
                onClick={() => setAudienceTab('seniors')}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  audienceTab === 'seniors'
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                For Aging Loved Ones (Dignity & Freedom)
              </button>
              <button
                id="benefits-tab-caregivers"
                onClick={() => setAudienceTab('caregivers')}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  audienceTab === 'caregivers'
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                For Family & Caregivers (Peace of Mind)
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {(audienceTab === 'seniors' ? seniorBenefits : caregiverBenefits).map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-stone-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/70 text-emerald-800 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold uppercase text-emerald-700 tracking-wider">
                      {item.title}
                    </span>
                    <h3 className="text-xl font-bold text-stone-900 font-serif mt-1">
                      {item.headline}
                    </h3>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-stone-100 flex items-center space-x-2 text-xs font-semibold text-emerald-700">
                  <Check className="w-4 h-4" />
                  <span>Tested & Approved by Geriatric Advocates</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
