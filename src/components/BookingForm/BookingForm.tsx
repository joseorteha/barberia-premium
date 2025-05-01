'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaUser, 
  FaPhone, 
  FaCut, 
  FaWhatsapp,
  FaCheckCircle,
  FaClock as FaTime,
  FaUserTie,
  FaStar,
  FaGift,
  FaInfoCircle
} from 'react-icons/fa';
import styles from './BookingForm.module.scss';
import { es, en } from '@/i18n/locales';

interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
}

interface FormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  notes: string;
}

interface BookingFormProps {
  language: string;
}

const services: Service[] = [
  { id: 'corte', name: 'corte', duration: 30, price: 15 },
  { id: 'barba', name: 'barba', duration: 20, price: 10 },
  { id: 'combo', name: 'combo', duration: 45, price: 20 },
  { id: 'tinte', name: 'tinte', duration: 60, price: 35 },
  { id: 'peinado', name: 'peinado', duration: 30, price: 25 },
  { id: 'facial', name: 'facial', duration: 45, price: 40 },
];

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30', '20:00'
];

const BookingForm = ({ language }: BookingFormProps) => {
  const t = language === 'es' ? es : en;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  });

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'service') {
      const service = services.find(s => s.id === value);
      setSelectedService(service || null);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construir mensaje de WhatsApp
    const message = `¡Hola! Me gustaría reservar una cita:\n\n` +
      `📋 *Detalles de la Reserva:*\n` +
      `👤 Nombre: ${formData.name}\n` +
      `📱 Teléfono: ${formData.phone}\n` +
      `📅 Fecha: ${formData.date}\n` +
      `⏰ Hora: ${formData.time}\n` +
      `✂️ Servicio: ${t.booking.services[selectedService?.name as keyof typeof t.booking.services]}\n` +
      `💰 Precio: ${selectedService?.price}€\n` +
      `⏱️ Duración: ${selectedService?.duration} min\n` +
      (formData.notes ? `📝 Notas: ${formData.notes}\n` : '');

    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/522722968204?text=${encodedMessage}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');

    // Mostrar mensaje de éxito
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        notes: ''
      });
      setSelectedService(null);
    }, 3000);
  };

  return (
    <section id="reservas" className={styles.bookingSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <h2>{t.booking.title}</h2>
            <p>{t.booking.subtitle}</p>
          </div>

          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">
                  <FaUser />
                  <span>{t.booking.form.name}</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t.booking.form.name}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">
                  <FaPhone />
                  <span>{t.booking.form.phone}</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+34 XXX XXX XXX"
                  required
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="date">
                    <FaCalendarAlt />
                    <span>{t.booking.form.date}</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="time">
                    <FaClock />
                    <span>{t.booking.form.time}</span>
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">{t.booking.form.time}</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="service">
                  <FaCut />
                  <span>{t.booking.form.service}</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">{t.booking.form.service}</option>
                  {services.map(service => (
                    <option key={service.id} value={service.id}>
                      {t.booking.services[service.name as keyof typeof t.booking.services]} - {service.price}€ ({service.duration} min)
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="notes">
                  <span>{t.booking.form.notes}</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder={t.booking.form.notesPlaceholder}
                  rows={3}
                />
              </div>

              {selectedService && (
                <div className={styles.serviceSummary}>
                  <h3>{t.booking.form.service}</h3>
                  <div className={styles.summaryDetails}>
                    <p><strong>{t.booking.form.service}:</strong> {t.booking.services[selectedService.name as keyof typeof t.booking.services]}</p>
                    <p><strong>{t.booking.form.time}:</strong> {selectedService.duration} min</p>
                    <p><strong>{t.booking.form.price}:</strong> {selectedService.price}€</p>
                  </div>
                </div>
              )}

              <motion.button
                type="submit"
                className={styles.submitButton}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                <FaWhatsapp />
                <span>{isSubmitting ? t.booking.form.submitting : t.booking.form.submit}</span>
              </motion.button>
            </form>

            <div className={styles.infoCard}>
              <h3>{t.booking.info.title}</h3>
              <ul>
                <li>
                  <FaCheckCircle />
                  <span>{t.booking.info.advanceBooking}</span>
                </li>
                <li>
                  <FaTime />
                  <span>{t.booking.info.schedule}</span>
                </li>
                <li>
                  <FaUserTie />
                  <span>{t.booking.info.personalized}</span>
                </li>
                <li>
                  <FaStar />
                  <span>{t.booking.info.certified}</span>
                </li>
                <li>
                  <FaCut />
                  <span>{t.booking.info.premium}</span>
                </li>
                <li>
                  <FaGift />
                  <span>{t.booking.info.discount}</span>
                </li>
              </ul>
            </div>
          </div>

          {showSuccess && (
            <motion.div
              className={styles.successMessage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <FaInfoCircle />
              <p>{t.booking.success}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm; 