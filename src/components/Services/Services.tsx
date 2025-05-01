'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCut, FaSprayCan } from 'react-icons/fa';
import { GiRazor, GiScissors } from 'react-icons/gi';
import styles from './Services.module.scss';
import { useLanguage } from '@/context/LanguageContext';
import { services as servicesES } from '@/data/es';
import { services as servicesEN } from '@/data/en';

const Services = () => {
  const { language, t } = useLanguage();
  const services = language === 'es' ? servicesES : servicesEN;
  return (
    <section className={styles.services} id="services" aria-label={t.services.title}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>{t.services.title}</h2>
          <p>{t.services.description}</p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.name}
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.iconWrapper}>
                {index === 0 ? <GiScissors /> : index === 1 ? <GiRazor /> : index === 2 ? <FaCut /> : <FaSprayCan />}
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <span className={styles.price}>{service.price}</span>
              <a
                href="#reservas"
                className={styles.button}
                aria-label={`${t.services.cta} ${service.name}`}
              >
                {t.services.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 