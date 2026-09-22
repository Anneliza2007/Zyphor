import React from 'react';
import { X, Play, CheckCircle2, ShieldAlert, Heart, MapPin } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrderModal: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onOpenOrderModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4">
      <div className="bg-stone-900 text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-stone-800 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-5">
          <div>
            <span className="text-[11px] font-mono font-semibold uppercase text-emerald-400 tracking-wider">
              Caregiver Story & Walkthrough (60 Seconds)
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif mt-1">
              "How Zyphor LifeBand Protected My Dad in Seconds"
            </h3>
          </div>

          {/* Simulated Video Player Screen */}
          <div className="relative aspect-video bg-stone-950 rounded-2xl border border-stone-800 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
            {/* Ambient visual overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40 pointer-events-none"></div>

            <div className="relative z-10 space-y-4 max-w-md">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
              <div className="text-xs text-stone-300 leading-relaxed">
                <span className="font-semibold text-white block text-sm">
                  Interactive Product Overview
                </span>
                Witness how the dual-barometer sensor distinguishes a dropped phone from a real fall impact, and how caregivers receive instant GPS alerts without the senior lifting a finger.
              </div>
            </div>

            {/* Simulated video progress bar */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center space-x-2 text-[10px] font-mono text-stone-400">
              <span>0:14</span>
              <div className="h-1 flex-1 bg-stone-800 rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-emerald-500"></div>
              </div>
              <span>1:00</span>
            </div>
          </div>

          {/* 3 Core Highlights */}
          <div className="grid grid-cols-3 gap-3 text-xs text-stone-300 pt-1">
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Cardiac Anomaly AI</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Fall Verification</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>SafeZone Cellular GPS</span>
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="flex items-center justify-between pt-2 border-t border-stone-800">
            <span className="text-xs text-stone-400">Ready to try it in your home?</span>
            <button
              onClick={() => {
                onClose();
                onOpenOrderModal();
              }}
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
            >
              Order 60-Day Trial
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
