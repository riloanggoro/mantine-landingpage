import Image from 'next/image';
import { Inter } from 'next/font/google';
import HeaderComps from '@/components/Header';
import { FeaturesTitle } from '@/components/Featured';
import { About } from '@/components/About';
import { Pricing } from '@/components/pricing';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <HeaderComps />
      <About />
      <FeaturesTitle />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
