import { Coins, Car, Map, Ban, ShieldCheck, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    title: 'Unlimited Coins & Diamonds',
    description: 'Never worry about running out of resources. Upgrade your vehicles to the max instantly.',
    icon: Coins,
    color: 'text-yellow-400',
  },
  {
    title: 'All Vehicles Unlocked',
    description: 'From the classic jeep to the moonlander, get access to every vehicle from the start.',
    icon: Car,
    color: 'text-blue-400',
  },
  {
    title: 'All Stages Unlocked',
    description: 'Explore the moon, mars, and beyond without having to grind for hours to unlock them.',
    icon: Map,
    color: 'text-emerald-400',
  },
  {
    title: 'Ad-Free Experience',
    description: 'Enjoy seamless gameplay without any annoying ads interrupting your perfect run.',
    icon: Ban,
    color: 'text-red-400',
  },
  {
    title: 'Safe & Anti-Ban',
    description: 'Our mod is heavily tested and features built-in anti-ban protection for your peace of mind.',
    icon: ShieldCheck,
    color: 'text-green-400',
  },
  {
    title: 'Optimized Performance',
    description: 'Runs smoothly on all supported devices without draining battery or causing lag.',
    icon: Zap,
    color: 'text-purple-400',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our <span className="text-green-400">Mod APK?</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We provide the most stable and feature-rich modified version of Hill Climb Racing.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <ScrollReveal key={index} staggerDelay={index * 100}>
              <div className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] h-full">
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
