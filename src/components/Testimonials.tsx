'use client';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Juan Pérez',
      text: 'El mejor corte que he tenido. ¡Ambiente de lujo y atención impecable!',
    },
    {
      name: 'Carlos Gómez',
      text: 'El afeitado premium es una experiencia única. 100% recomendado.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-playfair text-center mb-12 text-black">Lo Que Dicen Nuestros Clientes</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-100 p-6 rounded-lg"
            >
              <p className="font-montserrat mb-4">{testimonial.text}</p>
              <p className="font-playfair text-gold">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}