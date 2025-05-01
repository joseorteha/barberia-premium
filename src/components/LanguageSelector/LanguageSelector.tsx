'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';
import styles from './LanguageSelector.module.scss';

interface LanguageSelectorProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageSelector = ({ currentLang, onLanguageChange }: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' }
  ];

  return (
    <div className={styles.languageSelector}>
      <motion.button
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaGlobe />
        <span>{languages.find(lang => lang.code === currentLang)?.name}</span>
      </motion.button>

      {isOpen && (
        <motion.div
          className={styles.dropdown}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {languages.map(lang => (
            <button
              key={lang.code}
              className={`${styles.option} ${currentLang === lang.code ? styles.active : ''}`}
              onClick={() => {
                onLanguageChange(lang.code);
                setIsOpen(false);
              }}
            >
              {lang.name}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default LanguageSelector; 