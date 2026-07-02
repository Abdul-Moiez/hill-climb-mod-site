'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Download, ShieldCheck, Zap, BadgeCheck } from 'lucide-react';
import Image from 'next/image';

interface DownloadOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadOverlay({ isOpen, onClose }: DownloadOverlayProps) {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      // Reset state when closed
      setTimeLeft(10);
      setIsReady(false);
      return;
    }

    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsReady(true);
    }
  }, [isOpen, timeLeft]);

  if (!isOpen) return null;

  // Calculate SVG stroke dashoffset
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (timeLeft / 10) * circumference;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0f172a] animate-fade-in-scale">
      {/* Top bar */}
      <div className="w-full flex items-center p-4 md:p-6 absolute top-0 left-0 z-10">
        <button 
          onClick={onClose}
          className="p-3 rounded-full bg-white/5 hover:bg-white/15 transition-colors text-white"
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md mx-auto px-6 text-center mt-12 md:mt-0">
        {/* Game Logo */}
        <div className="relative w-28 h-28 md:w-32 md:h-32 mb-6 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.2)] ring-1 ring-white/10">
          <Image 
            src="/logo.png" 
            alt="Hill Climb Racing Logo" 
            fill 
            className="object-cover"
          />
        </div>

        {/* Title & Info */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight">
          Hill Climb Racing <br/>
          <span className="text-green-400 text-xl md:text-2xl font-bold">(MOD, Unlimited Money)</span>
        </h2>
        <div className="flex items-center justify-center gap-3 text-slate-300 mb-10 text-sm font-medium mt-4">
          <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/5">1.70.0.apk</span>
          <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/5">Android 7.0 +</span>
        </div>

        {/* Circular Countdown or Download Button */}
        <div className="flex flex-col items-center justify-center min-h-[160px] mb-10 w-full">
          {!isReady ? (
            <div className="relative flex items-center justify-center">
              {/* Circular Progress */}
              <svg className="w-36 h-36 transform -rotate-90">
                {/* Background circle */}
                <circle
                  cx="72"
                  cy="72"
                  r="50"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-slate-800"
                />
                {/* Progress circle */}
                <circle
                  cx="72"
                  cy="72"
                  r="50"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-green-500 transition-all duration-1000 ease-linear"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-5xl font-black text-white drop-shadow-md tracking-tighter">{timeLeft}</span>
                <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest mt-1">Sec</span>
              </div>
            </div>
          ) : (
            <a 
              href="https://drive.google.com/uc?export=download&id=15h1Pxx6qxj_58n1fNKM8sBVc2JrwEV4Y"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:shadow-[0_0_60px_rgba(34,197,94,0.6)] transform hover:-translate-y-1 w-full max-w-[280px]"
            >
              <div className="flex items-center gap-3">
                <Download size={28} className="group-hover:animate-bounce" />
                <span>Download Now</span>
              </div>
            </a>
          )}
        </div>

        {/* Security & Trust Panel */}
        <div className="w-full max-w-[340px] md:max-w-md bg-white/5 backdrop-blur-md border border-green-500/30 rounded-2xl p-4 md:p-5 shadow-[0_0_20px_rgba(34,197,94,0.15)] mx-auto mt-2">
          <div className="flex justify-between items-center gap-2">
            <div className="flex flex-col items-center justify-center gap-2 text-center flex-1">
              <div className="text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
                <ShieldCheck size={24} strokeWidth={2.5} />
              </div>
              <span className="text-[10px] md:text-xs text-slate-300 font-medium leading-tight">100% Virus-Free</span>
            </div>
            <div className="w-px h-10 bg-white/10 rounded-full"></div>
            <div className="flex flex-col items-center justify-center gap-2 text-center flex-1">
              <div className="text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
                <Zap size={24} strokeWidth={2.5} />
              </div>
              <span className="text-[10px] md:text-xs text-slate-300 font-medium leading-tight">Fast Servers</span>
            </div>
            <div className="w-px h-10 bg-white/10 rounded-full"></div>
            <div className="flex flex-col items-center justify-center gap-2 text-center flex-1">
              <div className="text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
                <BadgeCheck size={24} strokeWidth={2.5} />
              </div>
              <span className="text-[10px] md:text-xs text-slate-300 font-medium leading-tight">Verified Mod</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
