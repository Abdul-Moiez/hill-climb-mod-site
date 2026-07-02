import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, ShieldAlert, Mail } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'DMCA Disclaimer',
  description: 'Digital Millennium Copyright Act (DMCA) Disclaimer and takedown request information for Hill Climb Racing Mod.',
});

export default function DMCAPage() {
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] -z-10"></div>
            
            <div className="flex items-center gap-4 border-b border-slate-700 pb-6 mb-8">
              <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-red-500/50 flex items-center justify-center">
                <ShieldAlert className="text-red-400" size={24} />
              </div>
              <h1 className="text-4xl font-bold text-white">DMCA Disclaimer</h1>
            </div>
            
            <div className="space-y-8 text-slate-300 leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Copyright and Intellectual Property</h2>
                <p>
                  Hill Climb Mod highly respects the intellectual property rights of others. We operate in compliance with the Digital Millennium Copyright Act (DMCA) and other applicable copyright laws. Please be aware that this website serves as a third-party directory for downloading Android modifications and is not affiliated with the original developers, Fingersoft.
                </p>
                <p className="mt-3">
                  All trademarks, logos, and game assets belong to their respective owners. We do not host any copyrighted APK files directly on our servers; links are aggregated from web sources or uploaded by third-party contributors.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Takedown Request Process</h2>
                <p className="mb-3">
                  If you are a copyright owner or an agent thereof and believe that any content on this site infringes upon your copyright, you may submit a notification pursuant to the DMCA by providing our designated Copyright Agent with the following information in writing:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                  <li>Identification of the copyrighted work claimed to have been infringed.</li>
                  <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed.</li>
                  <li>Information reasonably sufficient to permit the service provider to contact you, such as an address, telephone number, and email address.</li>
                  <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                  <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Submit a Notice</h2>
                <p className="mb-6">
                  Please send all DMCA takedown notices to our designated email address. We aim to review and respond to valid requests within 48-72 hours.
                </p>
                
                <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex flex-col sm:flex-row items-center gap-4 justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="text-slate-400" />
                    <div>
                      <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">DMCA Contact Email</p>
                      <a href="mailto:dmca@hillclimbmod.example.com" className="text-lg font-semibold text-white hover:text-green-400 transition-colors">
                        dmca@hillclimbmod.example.com
                      </a>
                    </div>
                  </div>
                  <a 
                    href="mailto:dmca@hillclimbmod.example.com?subject=DMCA Takedown Request" 
                    className="w-full sm:w-auto text-center bg-slate-700 hover:bg-slate-600 text-white px-5 py-2 rounded-lg transition-colors border border-slate-600"
                  >
                    Email Us
                  </a>
                </div>
              </section>

              <section className="pt-6 border-t border-slate-700">
                <p className="text-sm text-slate-500">
                  Note: Any misrepresentation of material fact in a written notification automatically subjects the complaining party to liability for any damages, costs, and attorney's fees incurred by us.
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
