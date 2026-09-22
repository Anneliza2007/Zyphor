import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  ShieldAlert, 
  MapPin, 
  BatteryMedium, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Clock, 
  Sparkles,
  Info,
  Bell
} from 'lucide-react';
import { SECTION_SPECS } from '../data/landingCopy';

interface HeroSectionProps {
  onOpenOrderModal: () => void;
  onOpenVideoModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenOrderModal,
  onOpenVideoModal
}) => {
  const spec = SECTION_SPECS[0];
  const [pulseBpm, setPulseBpm] = useState(72);
  const [sosActive, setSosActive] = useState(false);
  const [alertSent, setAlertSent] = useState(false);

  // Subtle realistic pulse variation
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseBpm((prev) => 70 + Math.floor(Math.random() * 6));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const triggerSosDemo = () => {
    setSosActive(true);
    setTimeout(() => {
      setAlertSent(true);
      setTimeout(() => {
        setSosActive(false);
        setAlertSent(false);
      }, 4000);
    }, 1200);
  };

  return (
    <section id="hero-section" className="relative pt-10 pb-20 overflow-hidden bg-gradient-to-b from-[#FBFBFA] via-[#F7F6F3] to-[#F1EFE9] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Persuasive Copy */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Trust badge kicker */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Next-Gen Caregiver Safety • Zero Monthly Contracts</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.12] font-serif">
              Stop Wondering If They’re Safe.{' '}
              <span className="text-emerald-800 underline decoration-emerald-300 decoration-wavy decoration-2">
                Know It
              </span>{' '}
              in Real Time.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-sans max-w-2xl">
              {spec.subheadline}
            </p>

            {/* Bullet value list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {spec.bodyCopy.map((point, index) => (
                <div key={index} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-stone-700 leading-snug">{point}</span>
                </div>
              ))}
            </div>

            {/* Primary & Secondary CTA Block */}
            <div className="pt-3 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  id="hero-primary-cta"
                  onClick={onOpenOrderModal}
                  className="group relative inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-base shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  <span>{spec.ctaText}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="hero-video-cta"
                  onClick={onOpenVideoModal}
                  className="inline-flex items-center justify-center space-x-2.5 px-5 py-4 rounded-xl bg-white hover:bg-stone-100 text-stone-800 font-medium text-sm border border-stone-300 shadow-2xs transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  <span>See How It Works (60s)</span>
                </button>
              </div>

              {/* Friction Reducers */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-500 font-medium pt-1">
                <span className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>60-Day In-Home Trial</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>100% Full Refund Guarantee</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>No Setup or App Fees</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Simulated LifeBand Smart Device & Telemetry Feed */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-stone-900 text-stone-100 rounded-3xl p-6 shadow-2xl border border-stone-800 relative overflow-hidden">
              
              {/* Subtle background ambient glow */}
              <div className="absolute -right-20 -top-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
              
              {/* Device Header */}
              <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-5">
                <div className="flex items-center space-x-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    Zyphor AI Sentinel Online
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-stone-400 text-xs">
                  <BatteryMedium className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono">88% (6d left)</span>
                </div>
              </div>

              {/* Physical LifeBand Graphic Representation */}
              <div className="relative bg-stone-950 rounded-2xl p-5 border border-stone-800/90 mb-5 text-center">
                <div className="text-[11px] uppercase tracking-widest text-stone-500 font-mono mb-2">
                  Live Wrist Telemetry Feed
                </div>

                {/* Simulated Heart Pulse Display */}
                <div className="py-3 flex items-center justify-center space-x-4">
                  <div className="relative">
                    <Heart className="w-12 h-12 text-rose-500 animate-pulse fill-rose-500/20" />
                  </div>
                  <div className="text-left">
                    <div className="text-4xl font-extrabold font-mono tracking-tight text-white">
                      {pulseBpm}{' '}
                      <span className="text-xs font-sans text-stone-400 font-normal">BPM</span>
                    </div>
                    <div className="text-xs text-emerald-400 font-medium flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Sinus Rhythm Normal</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Waveform Line */}
                <div className="h-8 flex items-end justify-between space-x-1 px-4 my-2 opacity-80">
                  {[20, 30, 24, 65, 95, 20, 35, 40, 25, 70, 90, 15, 30, 45, 35].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-emerald-500 rounded-t transition-all duration-300"
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}
                </div>

                {/* Interactive Simulated SOS Button */}
                <div className="mt-4 pt-4 border-t border-stone-800">
                  <button
                    id="hero-simulate-sos-btn"
                    onClick={triggerSosDemo}
                    disabled={sosActive}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center justify-center space-x-2 ${
                      sosActive
                        ? 'bg-red-600 text-white animate-bounce'
                        : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700'
                    }`}
                  >
                    <ShieldAlert className="w-4 h-4 text-red-400" />
                    <span>
                      {sosActive ? 'Triggering 3s Tactile SOS...' : 'Test 1-Touch Tactile SOS Feature'}
                    </span>
                  </button>
                  <p className="text-[10px] text-stone-400 mt-1.5 font-mono">
                    Pressing requires zero smartphone app navigation.
                  </p>
                </div>
              </div>

              {/* Simulated Caregiver Phone Notification Banner */}
              {alertSent && (
                <div className="p-3 mb-4 rounded-xl bg-red-950/80 border border-red-700 text-red-200 text-xs flex items-start space-x-2.5 animate-in fade-in slide-in-from-bottom duration-300">
                  <Bell className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-white">
                      Instant Caregiver Push Dispatched!
                    </span>
                    <span>
                      SMS + GPS pin sent to 3 family contacts. Average dispatch response: 11
                      seconds.
                    </span>
                  </div>
                </div>
              )}

              {/* Status matrix */}
              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="p-2.5 rounded-xl bg-stone-800/60 border border-stone-800">
                  <div className="flex items-center space-x-1.5 text-stone-400 text-xs mb-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>SafeZone GPS</span>
                  </div>
                  <div className="text-xs font-semibold text-stone-200">Inside Home Perimeter</div>
                  <div className="text-[10px] text-stone-400">42 Oak Ridge Lane</div>
                </div>

                <div className="p-2.5 rounded-xl bg-stone-800/60 border border-stone-800">
                  <div className="flex items-center space-x-1.5 text-stone-400 text-xs mb-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Fall Vector Engine</span>
                  </div>
                  <div className="text-xs font-semibold text-emerald-400">99.4% Dual Barometer</div>
                  <div className="text-[10px] text-stone-400">False-alarm suppression</div>
                </div>
              </div>

              {/* Discrete Comfort Tag */}
              <div className="mt-4 pt-3 border-t border-stone-800 text-center">
                <span className="text-[11px] text-stone-400 font-medium">
                  Designed like an understated jewelry timepiece • Hypoallergenic breathable knit
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
