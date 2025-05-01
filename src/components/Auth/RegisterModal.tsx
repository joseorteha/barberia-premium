import React, { useState } from 'react';
import { useUser } from '@/context/UserContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import styles from './AuthModal.module.scss';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, onSwitchToLogin }) => {
  const { register } = useUser();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);
    if (!name.trim()) {
      setError('El nombre es obligatorio');
      setLoading(false);
      return;
    }
    const ok = await register(name, email, password);
    setLoading(false);
    if (!ok) {
      setError('El correo ya está registrado');
    } else {
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 1200);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className={styles.modal}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button className={styles.close} onClick={onClose} aria-label="Cerrar">
              <FaTimes />
            </button>
            <h2>Registrarse</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="register-name">
                  <FaUser className={styles.icon} /> Nombre completo
                </label>
                <input
                  id="register-name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  autoFocus
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="register-email">
                  <FaEnvelope className={styles.icon} /> Correo electrónico
                </label>
                <input
                  id="register-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="register-password">
                  <FaLock className={styles.icon} /> Contraseña
                </label>
                <input
                  id="register-password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
              {error && <div className={styles.error}>{error}</div>}
              {success && <div className={styles.success}>¡Registro exitoso!</div>}
              <button type="submit" className={styles.submit} disabled={loading}>
                {loading ? 'Registrando...' : 'Registrarse'}
              </button>
            </form>
            <div className={styles.switch}>
              ¿Ya tienes cuenta?{' '}
              <button type="button" onClick={onSwitchToLogin} className={styles.link}>
                Inicia sesión
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegisterModal; 