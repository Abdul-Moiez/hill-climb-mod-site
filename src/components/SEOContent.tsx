"use client";

import { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const seoFaqs = [
  {
    question: "Is this Hill Climb Racing Mod APK safe to install?",
    answer: "Yes, our hill climb racing mod apk is completely safe, thoroughly tested, and free from malware. You can install it securely and start playing immediately."
  },
  {
    question: "How to get unlimited hill climb racing money?",
    answer: "By installing this hill climb racing mod apk 1.70.0 - unlimited money version, your account is automatically credited with maximum coins and gems. Just launch the game to see your resources."
  }
];

export default function SEOContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pb-16 relative z-10 max-w-4xl mx-auto px-4 -mt-4 md:-mt-8">
      <ScrollReveal>
        <div className="glass-card rounded-3xl p-6 md:p-8 border border-slate-700/50 shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-slate-900/40 backdrop-blur-md text-left relative overflow-hidden">
          
          <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full"></div>

          <div className="mb-8 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Unlock All Cars and Stages Instantly</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Get the ultimate experience with the <strong>hill climb racing mod apk</strong>. 
              This special modification provides maximum <strong>hill climb racing money</strong> to unlock all cars and stages instantly, 
              giving you a seamless and unrestricted racing adventure without the grind.
            </p>

            <div className="my-6 p-5 rounded-2xl bg-slate-800/20 border border-slate-700/30">
              <h3 className="text-lg font-semibold text-white mb-4">Key Features of the Mod:</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-400 mt-0.5 flex-shrink-0" size={18} />
                  <span><strong>Unlimited Money & Gems</strong> to upgrade vehicles instantly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-400 mt-0.5 flex-shrink-0" size={18} />
                  <span><strong>All Cars Unlocked</strong> (including Monster Truck, Tank, and Super Offroad).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-400 mt-0.5 flex-shrink-0" size={18} />
                  <span><strong>All Stages Unlocked</strong> to explore different terrains right from the start.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-400 mt-0.5 flex-shrink-0" size={18} />
                  <span><strong>Ad-Free Experience</strong> for uninterrupted gameplay.</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-300 leading-relaxed">
              If you are looking for the highly sought-after <strong>hill climb racing mod apk 1.70.0 - unlimited money</strong>, 
              you have found it. Upgrade your engine, suspension, tires, and 4WD to the max and dominate every terrain!
            </p>
          </div>

          <div className="mb-8 p-5 md:p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 relative z-10">
            <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Playing on a Computer?
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Looking for a <strong>hill climb racing download for pc</strong>? While there is no native PC app, 
              PC users can easily play the mod by downloading a popular Android emulator like BlueStacks or LDPlayer. 
              Just install the emulator, drag and drop our APK file into it, and enjoy unlimited racing on a bigger screen!
            </p>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-4 text-white">Quick FAQ</h3>
            <div className="space-y-3">
              {seoFaqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`rounded-xl overflow-hidden transition-all duration-300 bg-slate-800/30 border ${openIndex === index ? 'border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.1)]' : 'border-slate-700/50 hover:border-slate-600'}`}
                >
                  <button
                    className="w-full px-5 py-4 text-left flex justify-between items-center focus:outline-none text-white"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-medium text-[15px] md:text-base pr-8">{faq.question}</span>
                    <ChevronDown 
                      className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-green-400' : ''}`} 
                      size={18} 
                    />
                  </button>
                  
                  <div 
                    className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed border-t border-slate-700/30 pt-3">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
