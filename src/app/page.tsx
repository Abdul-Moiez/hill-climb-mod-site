import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SpecsTable from '@/components/SpecsTable';
import Screenshots from '@/components/Screenshots';
import InstallGuide from '@/components/InstallGuide';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Screenshots />
        <Features />
        <SpecsTable />
        <InstallGuide />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
