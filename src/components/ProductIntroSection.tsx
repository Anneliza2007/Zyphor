import React, { useState } from 'react';
import { 
  Activity, 
  ShieldCheck, 
  Map, 
  Radio, 
  BatteryCharging, 
  Droplets, 
  Cpu, 
  Info,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { SECTION_SPECS } from '../data/landingCopy';

interface ProductIntroProps {
  wireframeMode: boolean;
  onOpenOrderModal: () => void;
}

export const ProductIntroSection: React.FC<ProductIntroProps> = ({ 
  wireframeMode, 
  onOpenOrderModal 
}) => {
  const spec = SECTION_SPECS[2];
  const [selectedPillar, setSelectedPillar] = useState(0);

  const pillars = [
    {
      id: 'heart-sentinel',
      icon: Activity,
      title: 'AI Neural Heart & Stroke Sentinel',
      tag: 'Continuous 120/min Telemetry',
      summary:
        'Analyzes blood volume variance and hemodynamic shifts 120 times every single minute. Unlike basic pulse trackers, its predictive neural model flags subtle pre-arrhythmias and Afib micro-spikes directly correlated with early stroke risk.',
      technicalBadge: 'Cardiovascular Anomaly Model v4.2',
      details: [
        'Continuous Afib and tachy/bradycardia screening',
        'Detects nocturnal oxygen drops and irregular spikes',
        'Automatic clinical export report ready for their physician'
      ]
    },
    {
      id: 'fall-verification',
      icon: ShieldCheck,
      title: 'Multi-Vector Fall Verification',
      tag: '99.4% Impact Accuracy',
      summary:
        'Combines micro-barometric air pressure sensors with 6-axis aerospace gyroscopes. It effortlessly distinguishes between someone tossing a book onto a bed and an actual hard hip impact with post-fall immobility.',
      technicalBadge: 'Dual-Vector Pressure Sensing',
      details: [
        'Eliminates 98% of frustrating false-alarm alerts',
        'Automatic 30-second recovery check before dispatch',
        'Works seamlessly in slippery showers and tiled bathrooms'
      ]
    },
    {
      id: 'safezone-gps',
      icon: Map,
      title: 'Autonomous SafeZone GPS & Wandering Alert',
      tag: 'Built-in Cellular 4G LTE',
      summary:
        'Completely self-contained. It doesn’t need a companion phone tethered via Bluetooth. If dementia causes disorientation, your customized SafeZone boundaries instantly push coordinates to family smartphones.',
      technicalBadge: 'Independent Multi-Carrier Dual-SIM',
      details: [
        'Set custom geofence safety zones around homes and gardens',
        'Real-time breadcrumb mapping with turn-by-turn guidance',
        'Nationwide coverage with automated multi-tower switching'
      ]
    },
    {
      id: 'tactile-sos',
      icon: Radio,
      title: 'One-Touch Tactile Emergency SOS',
      tag: 'Zero Screen Menus Required',
      summary:
        'In a moment of dizziness or panic, complex glass touchscreens fail. A recessed, physical tactile button with textured grip summons help with a deliberate 3-second hold—confirming dispatch with reassuring haptic feedback.',
      technicalBadge: 'Haptic Confirmation Engine',
      details: [
        'Direct two-way voice channel with emergency response',
        'Simultaneous alert broadcast to designated family members',
        'Recessed edge prevents accidental triggers during sleep'
      ]
    }
  ];

  return (
    <section id="features-section" className="py-20 bg-stone-50 text-stone-900 border-b border-stone-200">
      {/* Wireframe overlay notes */}
      {wireframeMode && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-stone-800 text-xs space-y-2">
            <div className="flex items-center space-x-1.5 font-bold text-amber-900 uppercase tracking-wider text-[11px]">
              <Info className="w-4 h-4 text-amber-700" />
              <span>Section 3: Product Architecture & Wireframe Flow</span>
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
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100/70 border border-emerald-300/60 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-emerald-700" />
            <span>How AI-Powered Protection Actually Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight font-serif">
            {spec.headline}
          </h2>
          <p className="text-lg text-stone-600 font-sans leading-relaxed">
            {spec.subheadline}
          </p>
        </div>

        {/* Interactive Feature Deep-Dive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Pillar Selectors */}
          <div className="lg:col-span-5 space-y-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isActive = selectedPillar === index;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillar(index)}
                  className={`w-full text-left p-5 rounded-2xl transition-all border flex items-start space-x-4 ${
                    isActive
                      ? 'bg-stone-900 text-white border-stone-800 shadow-lg scale-[1.01]'
                      : 'bg-white text-stone-800 hover:bg-stone-100 border-stone-200'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-emerald-900 text-emerald-400' : 'bg-stone-100 text-stone-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-base font-serif">{pillar.title}</h3>
                    </div>
                    <span
                      className={`text-xs block mt-1 font-mono ${
                        isActive ? 'text-emerald-400' : 'text-stone-500'
                      }`}
                    >
                      {pillar.tag}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Pillar Interactive Detail Inspector */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-md space-y-6">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                {pillars[selectedPillar].technicalBadge}
              </span>
              <span className="text-xs text-stone-400 font-mono">
                Component 0{selectedPillar + 1} of 04
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
                {pillars[selectedPillar].title}
              </h3>
              <p className="text-stone-600 leading-relaxed text-base font-sans">
                {pillars[selectedPillar].summary}
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono">
                System Capabilities:
              </h4>
              {pillars[selectedPillar].details.map((detail, idx) => (
                <div key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span className="text-sm text-stone-700 font-medium">{detail}</span>
                </div>
              ))}
            </div>

            {/* Hardware Quality Sub-badges */}
            <div className="pt-6 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-stone-600">
              <div className="flex items-center space-x-2">
                <BatteryCharging className="w-4 h-4 text-emerald-600" />
                <span>7-Day Magnetic Battery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Droplets className="w-4 h-4 text-cyan-600" />
                <span>IP68 Showerproof</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span>Zero Monthly Contract</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center space-x-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
              >
                <span>Check device compatibility & shipping status</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
