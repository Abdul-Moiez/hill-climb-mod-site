import Link from 'next/link';
import { Download } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-10 border-t border-[var(--color-border)] glass relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-green-500/10 blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400">
                Hill Climb Mod
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-8">
              Your ultimate source for the latest and most stable Hill Climb Racing Mod APK. Enjoy unlimited resources and unlocked features instantly.
            </p>
            <Link 
              href="#download"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-full font-medium transition-colors border border-slate-700 hover:border-green-500/50"
            >
              <Download size={18} className="text-green-400" />
              <span>Get Latest Version</span>
            </Link>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-400 hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link href="#features" className="text-slate-400 hover:text-green-400 transition-colors">Features</Link></li>
              <li><Link href="#install" className="text-slate-400 hover:text-green-400 transition-colors">Installation Guide</Link></li>
              <li><Link href="#faq" className="text-slate-400 hover:text-green-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-slate-400 hover:text-green-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-400 hover:text-green-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/dmca" className="text-slate-400 hover:text-green-400 transition-colors">DMCA Disclaimer</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-green-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {currentYear} Hill Climb Mod. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs text-center md:text-right max-w-xl">
            Disclaimer: This website is not affiliated with, endorsed, sponsored, or specifically approved by Fingersoft. Hill Climb Racing and its logos are trademarks of Fingersoft.
          </p>
        </div>
      </div>
    </footer>
  );
}
