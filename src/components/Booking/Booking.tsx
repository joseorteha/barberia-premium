import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaClock, FaUser, FaCalendarAlt, FaInfoCircle, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Booking.module.scss';

const Booking = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Construir mensaje de WhatsApp
    const message = `
*Nueva Reserva*
Nombre: ${formData.name}
Teléfono: ${formData.phone}
Fecha: ${formData.date}
Hora: ${formData.time}
Servicio: ${formData.service}
Notas: ${formData.notes}
    `.trim();

    // Redirigir a WhatsApp
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <section className={styles.booking} id="booking">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>{t.booking.title}</h2>
          <p>{t.booking.subtitle}</p>
        </motion.div>

        <div className={styles.content}>
          <motion.form 
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">
                <FaUser className={styles.inputIcon} />
                {t.booking.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t.booking.form.name}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">
                <FaPhone className={styles.inputIcon} />
                {t.booking.form.phone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder={t.booking.form.phone}
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="date">
                  <FaCalendarAlt className={styles.inputIcon} />
                  {t.booking.form.date}
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="time">
                  <FaClock className={styles.inputIcon} />
                  {t.booking.form.time}
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="service">
                <FaInfoCircle className={styles.inputIcon} />
                {t.booking.form.service}
              </label>
              <select 
                id="service" 
                name="service" 
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">{t.booking.form.service}</option>
                {Object.entries(t.booking.services).map(([key, value]) => (
                  <option key={key} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="notes">
                <FaEnvelope className={styles.inputIcon} />
                {t.booking.form.notes}
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder={t.booking.form.notesPlaceholder}
              />
            </div>

            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className={styles.loading}>
                  <span className={styles.spinner}></span>
                  {t.booking.form.submitting}
                </span>
              ) : (
                <>
                  <FaWhatsapp className={styles.icon} />
                  <span>{t.booking.form.submit}</span>
                </>
              )}
            </button>
          </motion.form>

          <motion.div 
            className={styles.info}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>{t.booking.info.title}</h3>
            <ul className={styles.infoList}>
              <li>
                <FaClock className={styles.icon} />
                <span>{t.booking.info.advanceBooking}</span>
              </li>
              <li>
                <FaCalendarAlt className={styles.icon} />
                <span>{t.booking.info.schedule}</span>
              </li>
              <li>
                <FaUser className={styles.icon} />
                <span>{t.booking.info.personalized}</span>
              </li>
              <li>
                <FaInfoCircle className={styles.icon} />
                <span>{t.booking.info.certified}</span>
              </li>
              <li>
                <FaInfoCircle className={styles.icon} />
                <span>{t.booking.info.premium}</span>
              </li>
              <li>
                <FaInfoCircle className={styles.icon} />
                <span>{t.booking.info.discount}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking; 