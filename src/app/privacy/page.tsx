import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Privacy Policy',
  description: 'Privacy Policy for Hill Climb Racing Mod APK website. Learn about how we handle your data and ensure your safety.',
});

export default function PrivacyPolicy() {
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] -z-10"></div>
            
            <h1 className="text-4xl font-bold mb-8 text-white border-b border-slate-700 pb-6">Privacy Policy</h1>
            
            <div className="space-y-8 text-slate-300 leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                <p>
                  Welcome to the Hill Climb Racing Mod APK website. Your privacy and safety are our top priorities. This Privacy Policy explains how we collect, use, and protect your information when you visit our website to download the Mod APK (Version 1.70.0).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
                <p className="mb-3">
                  We believe in minimizing data collection. When you visit our site, we may collect:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Non-Personal Data:</strong> Standard server logs, browser type, device information, and IP addresses for security and analytics.</li>
                  <li><strong>Cookies:</strong> Small data files stored on your device to enhance site navigation and analyze site usage.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                <p className="mb-3">
                  The information we collect is strictly used to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ensure the website functions properly and securely.</li>
                  <li>Analyze traffic to improve the user experience and loading speeds.</li>
                  <li>Prevent fraudulent activities and maintain anti-ban safety features.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Links & Ads</h2>
                <p>
                  Our website may contain links to third-party websites or display advertisements. Please note that these external sites have their own privacy policies. We are not responsible for the content or privacy practices of these third-party platforms once you leave our site.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. App Safety & Data Handling</h2>
                <p>
                  The Hill Climb Racing Mod APK provided on our site is tested for viruses and malware. However, the APK itself runs locally on your device. We do not collect any personal gameplay data, account credentials, or device contacts through the modified application.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Disclaimer</h2>
                <p>
                  We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with Fingersoft, the original developer of Hill Climb Racing. All product and company names are trademarks™ or registered® trademarks of their respective holders.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Changes to This Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. By continuing to use our website after these changes, you agree to the updated terms.
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
