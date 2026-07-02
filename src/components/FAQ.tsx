"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    question: "Is the Hill Climb Racing Mod APK safe to install?",
    answer: "Yes, our mod APK is 100% safe. It has been tested with multiple antivirus programs and contains no malware or spyware. We also include an anti-ban feature to keep your account safe."
  },
  {
    question: "Do I need to root my device to use this mod?",
    answer: "No, root access is not required. You can install and play the modded version on any standard Android device without voiding your warranty."
  },
  {
    question: "How do I update the game when a new version is released?",
    answer: "To update the game, simply visit our website again, download the latest version of the Mod APK, and install it over the existing app. Your progress will be saved automatically."
  },
  {
    question: "Is this mod available for iOS devices (iPhone/iPad)?",
    answer: "Currently, this mod is only available for Android devices as an APK file. iOS devices do not natively support APK installations without jailbreaking."
  },
  {
    question: "Why do I see 'App not installed' error?",
    answer: "This usually happens if you haven't enabled 'Unknown Sources' in your settings, or if you don't have enough storage space. It can also occur if you have a conflicting version of the game installed. Uninstall the original game before installing the mod."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="text-green-400">Questions</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Got questions? We've got answers. If you need more help, feel free to contact us.
          </p>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} staggerDelay={index * 100}>
              <div 
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.1)]' : 'border-slate-700/50'}`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-lg pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-green-400' : ''}`} 
                    size={20} 
                  />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-400 leading-relaxed border-t border-slate-700/30 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
