import React from 'react';
import { AlertTriangle, HeartCrack, Compass, Ban, Info, Quote } from 'lucide-react';
import { SECTION_SPECS } from '../data/landingCopy';

export const ProblemSection: React.FC = () => {
  const spec = SECTION_SPECS[1];

  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'The "Hidden" Fall',
      stat: '80% of elderly falls happen alone in bathrooms or hallways',
      description:
        'When a fall happens, reaching a wall phone or nightstand table is impossible. Without automatic detection, seniors lay stranded on cold floors for hours, turning minor bruises into life-threatening hypothermia and trauma.'
    },
    {
      icon: HeartCrack,
      title: 'Silent Stroke & Arrhythmia',
      stat: 'Stroke is the #1 cause of long-term elderly disability',
      description:
        'Atrial fibrillation doesn’t make an announcement. It strikes silently. Traditional consumer watches only check vitals occasionally or flood you with false readings that breed dangerous alarm fatigue.'
    },
    {
      icon: Compass,
      title: 'The Agony of Dementia Wandering',
      stat: '6 in 10 individuals with dementia wander unexpectedly',
      description:
        'A familiar five-minute walk to pick up the morning paper can morph into severe disorientation within three blocks. Every minute spent searching empty streets multiplies anxiety and danger.'
    },
    {
      icon: Ban,
      title: 'The Humiliating Stigma of Pendants',
      stat: 'Over 65% of medical alarm pendants are left on nightstands',
      description:
        'Nobody wants to wear an oversized plastic red button that broadcasts "I am frail." When parents take it off to shower or sleep, all protection vanishes right during the highest-risk hours.'
    }
  ];

  return (
    <section id="problem-section" className="py-20 bg-stone-100 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold tracking-wide uppercase">
            <span>The Hidden Reality of Elderly Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight font-serif">
            {spec.headline}
          </h2>
          <p className="text-lg text-stone-600 font-sans leading-relaxed">
            {spec.subheadline}
          </p>
        </div>

        {/* 4 Pain Point Asymmetric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-stone-200 shadow-2xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-11 h-11 rounded-xl bg-stone-100 flex items-center justify-center text-stone-900">
                      <Icon className="w-5 h-5 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 font-serif">{item.title}</h3>
                      <span className="text-xs font-semibold text-rose-700 block mt-0.5">
                        {item.stat}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emotional Caregiver Story Callout Box */}
        <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 sm:p-10 border border-stone-800 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-14 h-14 rounded-2xl bg-emerald-950 border border-emerald-700/60 flex items-center justify-center shrink-0 text-emerald-400">
              <Quote className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <p className="text-base sm:text-lg text-stone-200 font-serif italic leading-relaxed">
                "I used to jump out of my skin every time my phone rang past 10 PM. You can’t be there every second of the day, but you also can’t stop loving them. The guilt was eating me alive. Zyphor changed everything because I’m not guessing anymore."
              </p>
              <div className="text-xs text-stone-400 font-sans">
                <span className="font-semibold text-stone-200">Claire Henderson</span> — Primary caregiver for her 83-year-old father with mild cognitive impairment
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
