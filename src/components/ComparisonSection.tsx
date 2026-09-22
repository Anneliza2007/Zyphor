import React from 'react';
import { Check, X, Shield, Sparkles, Info, ArrowRight } from 'lucide-react';
import { COMPARISON_DATA, SECTION_SPECS } from '../data/landingCopy';

interface ComparisonSectionProps {
  wireframeMode: boolean;
  onOpenOrderModal: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ 
  wireframeMode, 
  onOpenOrderModal 
}) => {
  const spec = SECTION_SPECS[4];

  return (
    <section id="comparison-section" className="py-20 bg-stone-50 text-stone-900 border-b border-stone-200">
      {/* Wireframe overlay notes */}
      {wireframeMode && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-stone-800 text-xs space-y-2">
            <div className="flex items-center space-x-1.5 font-bold text-amber-900 uppercase tracking-wider text-[11px]">
              <Info className="w-4 h-4 text-amber-700" />
              <span>Section 5: Comparison Matrix & Objection Handling Blueprint</span>
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
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-200 text-stone-800 text-xs font-semibold uppercase tracking-wider">
            <span>Honest Head-to-Head Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight font-serif">
            {spec.headline}
          </h2>
          <p className="text-lg text-stone-600 font-sans leading-relaxed">
            {spec.subheadline}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto pb-4">
          <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-md border border-stone-200">
            <thead>
              <tr className="border-b border-stone-200 text-left bg-stone-100/80">
                <th className="p-5 sm:p-6 text-sm font-bold text-stone-900 font-serif w-1/3">
                  Safety & Vital Monitoring Capability
                </th>
                
                {/* Zyphor LifeBand Featured Column */}
                <th className="p-5 sm:p-6 bg-stone-900 text-white w-1/4 relative">
                  <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span>Purpose-Built</span>
                  </div>
                  <div className="text-lg font-bold font-serif text-white">Zyphor LifeBand</div>
                  <div className="text-xs text-stone-400 font-sans font-normal">All-in-One AI Safety</div>
                </th>

                {/* Standard Smartwatch Column */}
                <th className="p-5 sm:p-6 text-stone-700 w-1/4">
                  <div className="text-base font-bold font-serif text-stone-900">Consumer Smartwatch</div>
                  <div className="text-xs text-stone-500 font-sans font-normal">(Apple Watch / Fitbit)</div>
                </th>

                {/* Old-School Medical Pendant Column */}
                <th className="p-5 sm:p-6 text-stone-700 w-1/4">
                  <div className="text-base font-bold font-serif text-stone-900">Medical Alert Button</div>
                  <div className="text-xs text-stone-500 font-sans font-normal">(Plastic Wall Pendant)</div>
                </th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-stone-200">
              {COMPARISON_DATA.map((row, index) => (
                <tr key={index} className="hover:bg-stone-50/70 transition-colors">
                  <td className="p-5 sm:p-6">
                    <div className="font-bold text-stone-900 text-sm font-serif">{row.feature}</div>
                    <div className="text-xs text-stone-500 mt-1 font-sans">{row.advantage}</div>
                  </td>

                  {/* Zyphor Cell */}
                  <td className="p-5 sm:p-6 bg-stone-900/95 text-emerald-300 font-semibold text-xs sm:text-sm border-l border-r border-stone-800">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="text-stone-100">{row.zyphor}</span>
                    </div>
                  </td>

                  {/* Smartwatch Cell */}
                  <td className="p-5 sm:p-6 text-stone-600 text-xs sm:text-sm">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 rounded-full bg-stone-200 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 text-stone-500" />
                      </div>
                      <span>{row.standardWatch}</span>
                    </div>
                  </td>

                  {/* Pendant Cell */}
                  <td className="p-5 sm:p-6 text-stone-600 text-xs sm:text-sm">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 rounded-full bg-stone-200 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 text-stone-500" />
                      </div>
                      <span>{row.medicalPendant}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA push */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenOrderModal}
            className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm shadow-sm transition-all"
          >
            <span>Upgrade to Comprehensive Safety</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
          <div className="text-xs text-stone-500 mt-2 font-medium">
            Includes free return shipping if your parent prefers their old device.
          </div>
        </div>

      </div>
    </section>
  );
};
