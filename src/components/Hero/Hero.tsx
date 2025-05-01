'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import styles from './Hero.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const BARBER_IMAGE = 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>
            <span className={styles.highlight}>{t.hero.title}</span>
            <br />
            {t.hero.subtitle}
          </h1>
          <p className={styles.subtitle}>
            {t.hero.description}
          </p>
          <motion.div 
            className={styles.cta}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#booking" className={styles.button} aria-label={t.hero.cta}>
              {t.hero.cta}
              <FaArrowRight className={styles.icon} aria-hidden="true" />
            </a>
          </motion.div>
          <div className={styles.heroImageWrapper}>
            <Image
              src={BARBER_IMAGE}
              alt="Barbería moderna - corte de cabello"
              width={600}
              height={350}
              className={styles.heroImage}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
