'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-black text-white h-screen flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center"
      >
        <h1 className="text-5xl md:text-7xl font-playfair mb-4 text-gold">Elegancia en Cada Corte</h1>
        <p className="text-xl font-montserrat mb-8">Barbería premium en [Tu Ciudad]</p>
        <Link href="#reservas" className="bg-gold text-black px-8 py-3 rounded-full font-montserrat hover:bg-white transition">Reserva Ahora</Link>
      </motion.div>
    </section>
  );
}