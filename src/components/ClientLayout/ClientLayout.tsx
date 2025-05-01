'use client';

import { useState, useEffect } from 'react';
import LanguageSelector from '@/components/LanguageSelector/LanguageSelector';
import { LanguageProvider } from '@/context/LanguageContext';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [language, setLanguage] = useState('es');

  // Recuperar idioma de localStorage al cargar
  useEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang) setLanguage(storedLang);
  }, []);

  // Guardar idioma en localStorage y recargar
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
  };

  return (
    <LanguageProvider>
      <LanguageSelector 
        currentLang={language} 
        onLanguageChange={handleLanguageChange} 
      />
      {children}
    </LanguageProvider>
  );
} 