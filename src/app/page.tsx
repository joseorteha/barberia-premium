'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Gallery from '@/components/Gallery/Gallery';
import Team from '@/components/Team/Team';
import Testimonials from '@/components/Testimonials/Testimonials';
import FAQ from '@/components/FAQ/FAQ';
import BookingForm from '@/components/BookingForm/BookingForm';
import Contact from '@/components/Contact/Contact';
import { UserProvider } from '@/context/UserContext';
import { LanguageProvider } from '@/context/LanguageContext';

export default function Home() {
  const [language, setLanguage] = useState('es');

  return (
    <UserProvider>
      <LanguageProvider>
        <main>
          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <Hero />
            <Services />
            <Gallery />
            <Team />
            <Testimonials />
            <FAQ />
            <BookingForm language={language} />
            <Contact language={language} />
          </motion.div>
        </main>
      </LanguageProvider>
    </UserProvider>
  );
}