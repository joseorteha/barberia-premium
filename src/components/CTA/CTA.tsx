'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import styles from './CTA.module.scss';

const CTA = () => {
  return (
    <section className={styles.cta} aria-label="Reserva tu cita">
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>¿Listo para tu próxima experiencia de barbería?</h2>
          <p>
            Reserva tu cita ahora y disfruta de un servicio premium con nuestros expertos barberos.
            ¡Tu estilo merece lo mejor!
          </p>
          <motion.div 
            className={styles.buttons}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.a 
              href="#booking" 
              className={styles.primaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reservar Ahora
              <FaArrowRight className={styles.icon} aria-hidden="true" />
            </motion.a>
            <motion.a 
              href="#contact" 
              className={styles.secondaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 