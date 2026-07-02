'use client';

import { useState, useEffect } from 'react';
import { Download, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import DownloadOverlay from './DownloadOverlay';

export default function Hero() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  useEffect(() => {
    const handleOpenOverlay = () => setIsOverlayOpen(true);
    window.addEventListener('openDownloadOverlay', handleOpenOverlay);
    return () => window.removeEventListener('openDownloadOverlay', handleOpenOverlay);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-500 opacity-20 blur-[100px]"></div>
        <div className="absolute left-1/3 right-0 top-1/4 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-yellow-500 opacity-20 blur-[100px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl flex flex-col items-center">
        
        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.3)] ring-2 ring-white/10 transition-all duration-300 opacity-0 animate-fade-in-up hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] active:scale-95 cursor-pointer">
          <Image 
            src="/logo.png" 
            alt="Hill Climb Racing Logo" 
            fill 
            className="object-cover"
            priority 
          />
        </div>

        <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400 mb-6 backdrop-blur-sm opacity-0 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
          <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
          Updated for v1.70.0
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          Drive with <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400">No Limits</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
          Experience the ultimate racing adventure with our Hill Climb Racing Mod APK. 
          Enjoy <strong className="text-white">Unlimited Money & Coins</strong> and all vehicles unlocked right from the start.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <button 
            onClick={() => setIsOverlayOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:scale-105 active:scale-95"
          >
            <Download size={24} />
            <span>Download APK Now</span>
          </button>
          <Link 
            href="#features"
            className="w-full sm:w-auto flex items-center justify-center gap-2 glass px-8 py-4 rounded-full font-semibold text-white hover:bg-white/10 transition-colors"
          >
            View Features
            <ChevronRight size={20} className="text-slate-400" />
          </Link>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            100% Safe & Secure
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Anti-Ban Protected
          </div>
        </div>
      </div>

      <DownloadOverlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />
    </section>
  );
}
