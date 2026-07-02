'use client';

import Link from 'next/link';
import { Download } from 'lucide-react';

export default function Header() {
  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.dispatchEvent(new Event('openDownloadOverlay'));
  };
  return (
    <header className="sticky top-0 z-50 bg-zinc-950/70 backdrop-blur-md border-b border-zinc-800/50">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between relative">
        <Link href="/" className="flex items-center gap-2 z-10">
          <span className="text-xl font-extrabold text-white tracking-tight">
            Hill Climb <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">Mod</span>
          </span>
        </Link>
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium z-0">
          <Link href="#features" className="text-zinc-300 hover:text-green-400 transition-colors duration-200">Features</Link>
          <Link href="#specs" className="text-zinc-300 hover:text-green-400 transition-colors duration-200">APK Details</Link>
          <Link href="#install" className="text-zinc-300 hover:text-green-400 transition-colors duration-200">How to Install</Link>
          <Link href="#faq" className="text-zinc-300 hover:text-green-400 transition-colors duration-200">FAQ</Link>
        </nav>
        <button 
          onClick={handleDownloadClick}
          className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white px-5 py-2 rounded-full font-semibold transition-all duration-200 shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transform hover:scale-[0.97] active:scale-95 z-10"
        >
          <Download size={18} />
          <span>Download</span>
        </button>
      </div>
    </header>
  );
}
