'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';
import styles from './FAQ.module.scss';

const FAQ = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cuánto tiempo dura un corte de cabello?",
      answer: "Un corte de cabello profesional tarda aproximadamente 30-45 minutos, dependiendo del estilo y la complejidad del corte."
    },
    {
      question: "¿Necesito reservar cita?",
      answer: "Sí, recomendamos reservar con al menos 24 horas de antelación para garantizar tu horario preferido."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos efectivo, tarjetas de crédito/débito y transferencias bancarias."
    },
    {
      question: "¿Ofrecen servicios para niños?",
      answer: "Sí, ofrecemos cortes especiales para niños con precios reducidos."
    },
    {
      question: "¿Tienen parking disponible?",
      answer: "Sí, contamos con estacionamiento gratuito para nuestros clientes."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FaQuestionCircle className={styles.headerIcon} />
          <h2>{t.faq.title}</h2>
          <p>{t.faq.description}</p>
        </motion.div>

        <motion.div 
          className={styles.accordion}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={styles.item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className={styles.button}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <h3>{faq.question}</h3>
                <FaChevronDown 
                  className={styles.icon}
                  style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0)' }}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className={styles.content}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    aria-hidden={activeIndex !== index}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 