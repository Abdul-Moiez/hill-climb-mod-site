import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Send, Mail, MapPin, MessageSquare, MessageCircle, Share2, Globe } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Contact Us',
  description: 'Get in touch with the Hill Climb Racing Mod team. We are here to help with your inquiries.',
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-20 relative">
        {/* Background Accents */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-10">
            <Link href="/" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Information Side */}
            <div className="lg:col-span-2 glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-[50px] -z-10"></div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get in <span className="text-green-400">Touch</span></h1>
                <p className="text-slate-400 mb-10 leading-relaxed">
                  Have questions about the mod, facing an installation issue, or just want to drop some feedback? Fill out the form and we'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-green-400" size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Email Us</p>
                      <a href="mailto:support@hillclimbmod.example.com" className="text-white hover:text-green-400 transition-colors">support@hillclimbmod.example.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="text-blue-400" size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Community Forum</p>
                      <a href="#" className="text-white hover:text-blue-400 transition-colors">Join our Discord</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-yellow-400" size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Location</p>
                      <p className="text-white">Global - Online Community</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-slate-700/50">
                <p className="text-sm font-medium text-slate-400 mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                    <MessageCircle size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                    <Share2 size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                    <Globe size={18} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form Side */}
            <div className="lg:col-span-3 glass-card rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-6 text-white">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="John Doe"
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="john@example.com"
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    placeholder="How can we help?"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all resize-y"
                  ></textarea>
                </div>
                
                <button 
                  type="button" 
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transform hover:-translate-y-0.5"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
