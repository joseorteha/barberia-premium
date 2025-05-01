'use client';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import styles from './Gallery.module.scss';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop',
    alt: 'Corte clásico con degradado',
    category: 'Cortes Clásicos'
  },
  {
    src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop',
    alt: 'Diseño de barba premium',
    category: 'Barba'
  },
  {
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000&auto=format&fit=crop',
    alt: 'Corte moderno con textura',
    category: 'Cortes Modernos'
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop',
    alt: 'Tratamiento facial premium',
    category: 'Tratamientos'
  },
  {
    src: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1000&auto=format&fit=crop',
    alt: 'Corte degradado con diseño',
    category: 'Degradados'
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    alt: 'Diseño de barba artístico',
    category: 'Barba Premium'
  }
];

const Gallery = () => {
  return (
    <section className={styles.gallery} id="gallery">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Nuestra Galería</h2>
          <p>Descubre nuestros trabajos más destacados</p>
        </motion.div>

        <motion.div
          className={styles.swiperContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.swiperControls}>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="mySwiper"
              aria-label="Galería de trabajos de Barbería Premium"
            >
              {galleryImages.map((image, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className={styles.image}
                    />
                    <div className={styles.overlay}>
                      <span>{image.category}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a
            href="#contacto"
            className={styles.button}
            aria-label="Contactar para solicitar más información sobre trabajos realizados"
          >
            Ver más trabajos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 