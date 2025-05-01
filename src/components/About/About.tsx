'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import styles from './About.module.scss';

const stats = [
  { number: '10+', label: 'Años de experiencia' },
  { number: '5000+', label: 'Clientes satisfechos' },
  { number: '4', label: 'Barberos expertos' },
  { number: '100%', label: 'Calidad garantizada' },
];

const features = [
  'Atención personalizada',
  'Productos premium',
  'Ambiente exclusivo',
  'Técnicas modernas',
];

const About = () => {
  return (
    <section className={styles.about} aria-label="Sobre nosotros">
      <div className={styles.container}>
        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/about.jpg"
            alt="Barbería Premium - Experiencia y calidad"
            width={600}
            height={700}
            className={styles.image}
            priority
          />
        </motion.div>

        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Tu experiencia de barbería premium</h2>
          <p className={styles.description}>
            En Barbería Premium nos dedicamos a ofrecer servicios de la más alta calidad. 
            Nuestro equipo de expertos barberos combina técnicas tradicionales con las últimas 
            tendencias para brindarte el mejor servicio.
          </p>

          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className={styles.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className={styles.number}>{stat.number}</span>
                <span className={styles.label}>{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <ul className={styles.features}>
            {features.map((feature, index) => (
              <motion.li 
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FaCheck className={styles.icon} aria-hidden="true" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 