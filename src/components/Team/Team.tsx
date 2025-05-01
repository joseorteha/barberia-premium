'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import styles from './Team.module.scss';

const team = [
  {
    name: 'Carlos Martínez',
    role: 'Barbero Principal',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    description: 'Especialista en cortes clásicos y modernos con más de 10 años de experiencia.',
    social: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Miguel Rodríguez',
    role: 'Especialista en Barba',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
    description: 'Experto en diseño y mantenimiento de barba, con técnicas tradicionales y modernas.',
    social: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'David Sánchez',
    role: 'Barbero Junior',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop',
    description: 'Joven talento especializado en tendencias actuales y cortes creativos.',
    social: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com'
    }
  }
];

const Team = () => {
  return (
    <section className={styles.team} id="equipo">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Nuestro Equipo</h2>
          <p>Conoce a los expertos que harán de tu experiencia algo único</p>
        </motion.div>

        <div className={styles.grid}>
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.social}>
                    <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Instagram de ${member.name}`}>
                      <FaInstagram />
                    </a>
                    <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" aria-label={`Facebook de ${member.name}`}>
                      <FaFacebook />
                    </a>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label={`Twitter de ${member.name}`}>
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <h3>{member.name}</h3>
                <span className={styles.role}>{member.role}</span>
                <p>{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 