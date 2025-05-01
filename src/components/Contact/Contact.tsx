'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import styles from './Contact.module.scss';
import { es, en } from '@/i18n/locales';

interface ContactProps {
  language: string;
}

const Contact = ({ language }: ContactProps) => {
  const t = language === 'es' ? es : en;

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={28} />,
      title: t.contact.location,
      content: 'CP 95000, Orizaba, Veracruz, México',
      link: 'https://maps.google.com'
    },
    {
      icon: <FaPhone size={28} />,
      title: t.contact.phone,
      content: '+52 272 296 8204',
      link: 'tel:+522722968204'
    },
    {
      icon: <FaEnvelope size={28} />,
      title: t.contact.email,
      content: 'contacto@barberiapremium.com',
      link: 'mailto:contacto@barberiapremium.com'
    },
    {
      icon: <FaClock size={28} />,
      title: t.contact.schedule,
      content: t.contact.hours,
      link: null
    }
  ];

  return (
    <section className={styles.contact} id="contact" aria-label="Información de contacto">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>{t.contact.title}</h2>
          <p>
            {t.contact.description}
          </p>
        </motion.div>

        <div className={styles.content}>
          <div className={styles.cards}>
            {contactInfo.map((info, idx) => (
              <motion.div
                key={info.title}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className={styles.icon}>{info.icon}</div>
                <div>
                  <h3>{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      {info.content}
                    </a>
                  ) : (
                    <p>{info.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className={styles.map}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d-97.1!3d18.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c4c7c7c7c7c7c7%3A0x7c7c7c7c7c7c7c7c!2sOrizaba%2C%20Veracruz!5e0!3m2!1ses!2smx!4v1620000000000!5m2!1ses!2smx"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '18px', boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Barbería Premium"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 