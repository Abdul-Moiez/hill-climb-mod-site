import { Info } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function SpecsTable() {
  return (
    <section id="specs" className="py-20 relative bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">APK <span className="text-green-400">Details</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technical specifications for the Hill Climb Racing Mod APK.
          </p>
        </ScrollReveal>

        <ScrollReveal staggerDelay={150}>
        <div className="max-w-3xl mx-auto glass-card rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-slate-700/50 flex items-center gap-3 bg-slate-800/30">
            <Info className="text-blue-400" />
            <h3 className="text-lg font-medium">Version Information</h3>
          </div>
          <div className="p-0">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-slate-700/30 hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-slate-400 font-medium w-1/3">Game Name</td>
                  <td className="py-4 px-6 text-white font-semibold">Hill Climb Racing</td>
                </tr>
                <tr className="border-b border-slate-700/30 hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-slate-400 font-medium">Version</td>
                  <td className="py-4 px-6 text-white font-semibold">1.70.0 (Latest)</td>
                </tr>
                <tr className="border-b border-slate-700/30 hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-slate-400 font-medium">Size</td>
                  <td className="py-4 px-6 text-white font-semibold">~90 MB</td>
                </tr>
                <tr className="border-b border-slate-700/30 hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-slate-400 font-medium">Mod Features</td>
                  <td className="py-4 px-6 text-green-400 font-semibold">Unlimited Money / Coins / Unlocked</td>
                </tr>
                <tr className="border-b border-slate-700/30 hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-slate-400 font-medium">Developer</td>
                  <td className="py-4 px-6 text-white font-semibold">Fingersoft</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-slate-400 font-medium">Minimum Android</td>
                  <td className="py-4 px-6 text-white font-semibold">5.0 and up</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
