'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';
import styles from './LanguageSelector.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();
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
        <span>{languages.find(lang => lang.code === language)?.name}</span>
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
              className={`${styles.option} ${language === lang.code ? styles.active : ''}`}
              onClick={() => {
                setLanguage(lang.code as 'es' | 'en');
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