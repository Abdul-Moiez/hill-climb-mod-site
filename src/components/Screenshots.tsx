"use client";

import { useState } from 'react';
import Image from 'next/image';
import { X, Maximize2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const screenshots = [
  { id: 1, src: '/screenshots/screen1.webp', caption: 'Unlimited Coins & Fuel' },
  { id: 2, src: '/screenshots/screen2.webp', caption: 'Tank Vehicle Unlocked' },
  { id: 3, src: '/screenshots/screen3.webp', caption: 'Premium Stages Unlocked' },
];

export default function Screenshots() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (src: string) => setSelectedImage(src);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <section id="screenshots" className="py-20 relative bg-white/[0.01]">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Screenshots
          </h2>
          <div className="hidden sm:flex items-center gap-2 text-green-400 text-sm font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Latest Mod Version
          </div>
        </ScrollReveal>

        {/* Scrollable Container */}
        <ScrollReveal staggerDelay={150}>
        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-700 [&::-webkit-scrollbar-thumb]:rounded-full">
          {screenshots.map((shot) => (
            <div 
              key={shot.id} 
              onClick={() => openLightbox(shot.src)}
              className="relative flex-none min-w-[300px] sm:min-w-[400px] md:min-w-[500px] aspect-[16/9] snap-start rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 group transition-all duration-300 cursor-pointer"
            >
              {/* Fallback pattern while loading */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] -z-10"></div>
              
              <Image 
                src={shot.src}
                alt={shot.caption}
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 768px) 450px, 600px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={shot.id === 1}
              />
              
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Hover Border Overlay */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-500/80 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
              
              {/* Expand Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm pointer-events-none">
                <Maximize2 className="text-white" size={24} />
              </div>
              
              {/* MOD Badge */}
              <div className="absolute top-4 left-4 bg-green-500 text-black text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded shadow-lg backdrop-blur-sm bg-opacity-90">
                MOD
              </div>
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-lg drop-shadow-md">
                  {shot.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-md bg-black/80 p-4 transition-opacity"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-green-400 bg-black/50 p-2 rounded-full backdrop-blur-sm transition-colors z-[101]"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          
          <div 
            className="relative w-full max-w-5xl aspect-[16/9] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Screenshot Preview"
              fill
              className="object-contain"
              sizes="100vw"
              quality={100}
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
