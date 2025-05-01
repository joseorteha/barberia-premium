'use client';

import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import BookingForm from '../components/BookingForm';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

export default function Home() {
  return (
    <main>
      <motion.div variants={fadeIn} initial="hidden" animate="visible">
        <Hero />
        <Gallery />
        <BookingForm />
        <Testimonials />
      </motion.div>
    </main>
  );
}