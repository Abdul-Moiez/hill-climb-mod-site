import { Download, Settings, Play } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function InstallGuide() {
  return (
    <section id="install" className="py-20 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How to <span className="text-green-400">Install</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Follow these simple steps to install the mod APK on your Android device.
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Step 1 */}
            <ScrollReveal staggerDelay={100}>
              <div className="glass-card rounded-2xl p-8 text-center flex flex-col items-center relative h-full">
                <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-green-500 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                  <Download className="text-green-400" size={28} />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-green-500 text-white font-bold flex items-center justify-center shadow-lg">1</div>
                <h3 className="text-xl font-bold mb-3 text-white">Download APK</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Click the download button on this page to get the latest version of the Mod APK file to your device.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal staggerDelay={250}>
              <div className="glass-card rounded-2xl p-8 text-center flex flex-col items-center relative h-full">
                <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-blue-500 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <Settings className="text-blue-400" size={28} />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center shadow-lg">2</div>
                <h3 className="text-xl font-bold mb-3 text-white">Enable Unknown Sources</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Go to Settings &gt; Security and enable "Unknown Sources" to allow installation outside the Play Store.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal staggerDelay={400}>
              <div className="glass-card rounded-2xl p-8 text-center flex flex-col items-center relative h-full">
                <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-yellow-500 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                  <Play className="text-yellow-400" size={28} />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-yellow-500 text-white font-bold flex items-center justify-center shadow-lg">3</div>
                <h3 className="text-xl font-bold mb-3 text-white">Install & Play</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Open the downloaded file, follow the installation prompts, and launch the game to enjoy unlimited resources!
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
