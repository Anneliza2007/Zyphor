import React from 'react';
import { Star, ShieldCheck, Lock, Activity, Award, Info, HeartHandshake } from 'lucide-react';
import { TESTIMONIALS, SECTION_SPECS } from '../data/landingCopy';

interface SocialProofProps {
  wireframeMode: boolean;
}

export const SocialProofSection: React.FC<SocialProofProps> = ({ wireframeMode }) => {
  const spec = SECTION_SPECS[5];

  return (
    <section id="social-proof-section" className="py-20 bg-stone-100 text-stone-900 border-b border-stone-200">
      {/* Wireframe overlay notes */}
      {wireframeMode && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-stone-800 text-xs space-y-2">
            <div className="flex items-center space-x-1.5 font-bold text-amber-900 uppercase tracking-wider text-[11px]">
              <Info className="w-4 h-4 text-amber-700" />
              <span>Section 6: Trust Architecture & Clinical Social Proof Wireframe</span>
            </div>
            <p className="font-mono text-stone-700">
              <strong>CRO Strategy:</strong> {spec.croRationale}
            </p>
            <ul className="list-disc pl-5 space-y-1 text-stone-700 font-mono">
              {spec.uxWireframeNotes.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>Real Family Protection & Medical Endorsement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight font-serif">
            {spec.headline}
          </h2>
          <p className="text-lg text-stone-600 font-sans leading-relaxed">
            {spec.subheadline}
          </p>
        </div>

        {/* Quantified Trust Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif">14,200+</div>
            <div className="text-xs text-stone-600 font-medium mt-1">Families Protected Daily</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700 font-serif">99.4%</div>
            <div className="text-xs text-stone-600 font-medium mt-1">Fall Detection Accuracy</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif">11 Sec</div>
            <div className="text-xs text-stone-600 font-medium mt-1">Average Family Alert Time</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700 font-serif">4.9 / 5</div>
            <div className="text-xs text-stone-600 font-medium mt-1">Caregiver Satisfaction Rating</div>
          </div>
        </div>

        {/* 3 High-Credibility Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 border border-stone-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5 Star Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <div className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md inline-block border border-emerald-200/60">
                  "{t.highlight}"
                </div>

                <p className="text-sm text-stone-700 font-sans leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100">
                <div className="font-bold text-stone-900 text-sm font-serif">{t.author}</div>
                <div className="text-xs text-stone-600 font-sans mt-0.5">{t.role}</div>
                <div className="text-[11px] text-stone-600 font-mono mt-0.5">{t.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical & Privacy Trust Badges Ribbon */}
        <div className="bg-stone-900 text-stone-300 rounded-2xl p-6 sm:p-8 border border-stone-800 flex flex-wrap items-center justify-around gap-6 text-xs">
          <div className="flex items-center space-x-2">
            <Lock className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="font-bold text-white block">HIPAA-Compliant Security</span>
              <span className="text-stone-400 text-[11px]">256-bit encrypted health records</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="font-bold text-white block">Medical Sensor Calibrated</span>
              <span className="text-stone-400 text-[11px]">Optical PPG cluster with CE mark</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <HeartHandshake className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="font-bold text-white block">Dual-SIM Cellular Network</span>
              <span className="text-stone-400 text-[11px]">Seamless auto-fallback connectivity</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
