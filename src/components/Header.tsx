'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white fixed w-full z-10"
    >
      <nav className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-playfair text-gold">Barbería Premium</Link>
        <ul className="flex space-x-6 font-montserrat">
          <li><Link href="#servicios">Servicios</Link></li>
          <li><Link href="#galeria">Galería</Link></li>
          <li><Link href="#reservas">Reservas</Link></li>
          <li><Link href="#contacto">Contacto</Link></li>
        </ul>
      </nav>
    </motion.header>
  );
}