'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaStar, FaUsers, FaClock, FaAward } from 'react-icons/fa';
import styles from './Features.module.scss';

const features = [
  {
    icon: <FaStar />,
    title: 'Calidad Premium',
    description: 'Utilizamos los mejores productos y técnicas para garantizar resultados excepcionales.',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000&auto=format&fit=crop'
  },
  {
    icon: <FaUsers />,
    title: 'Equipo Experto',
    description: 'Nuestros barberos son profesionales certificados con años de experiencia.',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop'
  },
  {
    icon: <FaClock />,
    title: 'Puntualidad',
    description: 'Respetamos tu tiempo con citas programadas y servicios eficientes.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop'
  },
  {
    icon: <FaAward />,
    title: 'Satisfacción Garantizada',
    description: 'Tu satisfacción es nuestra prioridad. Si no estás contento, lo arreglamos.',
    image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1000&auto=format&fit=crop'
  }
];

const Features = () => {
  return (
    <section className={styles.features} aria-label="¿Por qué elegirnos?">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>¿Por qué elegir Barbería Premium?</h2>
          <p>
            Nos destacamos por ofrecer una experiencia única y personalizada que combina
            tradición con innovación en el arte de la barbería.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <div className={styles.iconWrapper}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a
                  href="#contacto"
                  className={styles.button}
                  aria-label={`Contactar para más información sobre ${feature.title}`}
                >
                  Descubrir más
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 