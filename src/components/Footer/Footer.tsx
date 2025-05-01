'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div 
            className={styles.brand}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/" className={styles.logo}>
              <Image
                src="/images/logo.png"
                alt="Barbería Premium Logo"
                width={180}
                height={60}
                priority
              />
            </Link>
            <p>
              Tu destino para un estilo único y un servicio excepcional.
              Donde la tradición se encuentra con la innovación.
            </p>
            <div className={styles.social}>
              <a 
                href="https://www.facebook.com/joseortega.exe1" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Síguenos en Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://www.instagram.com/mr.orteg4/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Síguenos en Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://wa.me/52722968204" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Contáctanos por WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="https://www.linkedin.com/in/jose-orteg4" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Síguenos en LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className={styles.links}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/servicios">Servicios</Link></li>
              <li><Link href="/galeria">Galería</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </motion.div>

          <motion.div 
            className={styles.contact}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Contacto</h3>
            <ul>
              <li>
                <strong>Dirección:</strong>
                <span>CP 95000, Orizaba, Veracruz</span>
              </li>
              <li>
                <strong>Teléfono:</strong>
                <a href="tel:+522722968204">+52 272 296 8204</a>
              </li>
              <li>
                <strong>Email:</strong>
                <a href="mailto:contacto@barberiapremium.com">contacto@barberiapremium.com</a>
              </li>
              <li>
                <strong>Horario:</strong>
                <span>Lun-Sáb: 9:00 - 20:00</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className={styles.bottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>
            &copy; {currentYear} Barbería Premium. Todos los derechos reservados.
          </p>
          <div className={styles.legal}>
            <Link href="/privacidad">Política de Privacidad</Link>
            <Link href="/terminos">Términos y Condiciones</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 