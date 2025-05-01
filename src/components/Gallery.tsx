'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

const galleryImages = [
  { before: '/images/before1.jpg', after: '/images/after1.jpg' },
  { before: '/images/before2.jpg', after: '/images/after2.jpg' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-16 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-playfair text-center mb-12 text-black">Antes y Después</h2>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          className="w-full max-w-4xl mx-auto"
        >
          {galleryImages.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <Image src={item.before} alt="Antes" width={500} height={500} className="object-cover rounded-lg" />
                  <p className="text-center font-montserrat mt-2">Antes</p>
                </div>
                <div className="w-full md:w-1/2">
                  <Image src={item.after} alt="Después" width={500} height={500} className="object-cover rounded-lg" />
                  <p className="text-center font-montserrat mt-2">Después</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}