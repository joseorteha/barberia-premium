'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';
import { useUser } from '@/context/UserContext';
import LoginModal from '@/components/Auth/LoginModal';
import RegisterModal from '@/components/Auth/RegisterModal';
import ProfileModal from '@/components/Auth/ProfileModal';

const LOGO_SRC = '/logo-barberia.svg'; // Asegúrate de tener este archivo en /public

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useUser();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#home' },
    { label: 'Servicios', href: '#services' },
    { label: 'Galería', href: '#gallery' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Testimonios', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Reservas', href: '#reservas' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="Barbería Premium">
          <Image src={LOGO_SRC} alt="Barbería Premium Logo" width={48} height={48} className={styles.logoImage} priority />
        </Link>
        <nav className={styles.nav} role="navigation" aria-label="Navegación principal">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink} aria-current={pathname === item.href ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.actions}>
          {!user ? (
            <>
              <button
                className={styles.loginButton}
                onClick={() => setShowLogin(true)}
              >
                Iniciar sesión
              </button>
              <button
                className={styles.registerButton}
                onClick={() => setShowRegister(true)}
              >
                Registrarse
              </button>
            </>
          ) : (
            <button className={styles.registerButton} onClick={() => setShowProfile(true)}>
              {user.name || 'Mi perfil'}
            </button>
          )}
        </div>
        <button
          className={styles.menuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Abrir menú"
        >
          <span className={styles.menuIcon}></span>
        </button>
      </div>
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
        role="navigation"
        aria-label="Menú móvil"
      >
        <ul className={styles.mobileNavList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.mobileActions}>
          {!user ? (
            <>
              <button
                className={styles.loginButton}
                onClick={() => setShowLogin(true)}
              >
                Iniciar sesión
              </button>
              <button
                className={styles.registerButton}
                onClick={() => setShowRegister(true)}
              >
                Registrarse
              </button>
            </>
          ) : (
            <button className={styles.registerButton} onClick={() => setShowProfile(true)}>
              {user.name || 'Mi perfil'}
            </button>
          )}
        </div>
      </nav>
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onSwitchToRegister={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
      />
      <RegisterModal
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        onSwitchToLogin={() => {
          setShowRegister(false);
          setShowLogin(true);
        }}
      />
      <ProfileModal isOpen={showProfile} onClose={() => setShowProfile(false)} />
    </header>
  );
};

export default Header; 