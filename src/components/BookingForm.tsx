'use client';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion } from 'framer-motion';

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Nueva reserva:
Nombre: ${name}
Email: ${email}
Servicio: ${service}
Fecha: ${selectedDate?.toLocaleDateString()}`;
    window.open(`https://wa.me/+1234567890?text=${encodeURIComponent(message)}`);
  };

  return (
    <section id="reservas" className="py-16 bg-black text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-playfair text-center mb-12 text-gold">Reserva Tu Cita</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div>
            <label className="block font-montserrat mb-2">Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 text-white"
              required
            />
          </div>
          <div>
            <label className="block font-montserrat mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 text-white"
              required
            />
          </div>
          <div>
            <label className="block font-montserrat mb-2">Servicio</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 text-white"
              required
            >
              <option value="">Selecciona un servicio</option>
              <option value="Corte Clásico">Corte Clásico</option>
              <option value="Afeitado Premium">Afeitado Premium</option>
              <option value="Tratamiento Facial">Tratamiento Facial</option>
            </select>
          </div>
          <div>
            <label className="block font-montserrat mb-2">Fecha</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => setSelectedDate(date)}
              minDate={new Date()}
              className="w-full p-3 rounded bg-gray-800 text-white"
              dateFormat="dd/MM/yyyy"
              placeholderText="Selecciona una fecha"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gold text-black p-3 rounded font-montserrat hover:bg-white transition"
          >
            Reservar vía WhatsApp
          </button>
        </form>
      </motion.div>
    </section>
  );
}