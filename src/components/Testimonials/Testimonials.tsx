'use client';

// Importar estilos de Swiper primero
import 'swiper/css';
import 'swiper/css/pagination';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import styles from './Testimonials.module.scss';

const testimonials = [
  {
    name: 'Carlos Rodríguez',
    role: 'Cliente frecuente',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    rating: 5,
    text: 'La mejor barbería que he visitado. El servicio es excepcional y el ambiente es increíble. Siempre salgo sintiéndome renovado.'
  },
  {
    name: 'Miguel Sánchez',
    role: 'Cliente desde 2020',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
    rating: 5,
    text: 'Los barberos son verdaderos artistas. Cada corte es una obra maestra y la atención al detalle es impresionante.'
  },
  {
    name: 'David Martínez',
    role: 'Cliente VIP',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop',
    rating: 5,
    text: 'El trato personalizado y la calidad del servicio son inigualables. Definitivamente mi barbería de confianza.'
  }
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials} aria-label="Testimonios de clientes">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Lo que dicen nuestros clientes</h2>
          <p>
            Descubre por qué nuestros clientes nos eligen y confían en nosotros
            para su cuidado personal.
          </p>
        </motion.div>

        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation
            aria-label="Testimonios deslizables"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.name}>
                <motion.div
                  className={styles.card}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={styles.quoteIcon}>
                    <FaQuoteLeft aria-hidden="true" />
                  </div>
                  <div className={styles.rating} aria-label={`Calificación: ${testimonial.rating} estrellas`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} aria-hidden="true" />
                    ))}
                  </div>
                  <p className={styles.text}>{testimonial.text}</p>
                  <div className={styles.author}>
                    <div className={styles.avatarWrapper}>
                      <Image 
                        src={testimonial.image} 
                        alt={`Foto de ${testimonial.name}`}
                        width={60}
                        height={60}
                        className={styles.avatar}
                      />
                    </div>
                    <div className={styles.info}>
                      <h3>{testimonial.name}</h3>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 