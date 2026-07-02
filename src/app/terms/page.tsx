import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for downloading and using the Hill Climb Racing Mod APK.',
});

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-20 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-10">
            <Link href="/" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>
          
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] -z-10"></div>
            
            <h1 className="text-4xl font-bold mb-8 text-white border-b border-slate-700 pb-6">Terms & Conditions</h1>
            
            <div className="space-y-8 text-slate-300 leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and downloading content from our website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or download our provided APK files.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Use of the Mod APK</h2>
                <p className="mb-3">
                  The Hill Climb Racing Mod APK (Version 1.70.0) provided on this site is for educational, testing, and entertainment purposes only. By using it, you acknowledge that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are installing third-party software at your own risk.</li>
                  <li>We are not responsible for any potential account bans, data loss, or device issues resulting from the use of the modded application.</li>
                  <li>The unlimited coins, diamonds, and unlocked features are modifications of the original game logic and should not be used in competitive environments.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Intellectual Property</h2>
                <p>
                  All visual content, game assets, and the core mechanics of Hill Climb Racing are the intellectual property of Fingersoft. We do not claim ownership of the original game. This website operates solely as a third-party platform distributing a modified version for personal use.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. User Responsibilities</h2>
                <p>
                  You agree not to use our website or the downloaded files for any illegal or unauthorized purpose. You are prohibited from redistributing the APK file obtained from our site under your own name or brand, or attempting to monetize the modified software.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Website Availability</h2>
                <p>
                  We strive to keep the website up and running smoothly. However, we take no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this website. Continued use of our site indicates your acceptance of any revised terms.
                </p>
              </section>

              <section className="pt-6 border-t border-slate-700">
                <p className="text-sm text-slate-500">
                  Last updated: July 2026
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
