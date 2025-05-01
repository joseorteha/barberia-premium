import React, { useState } from 'react';
import { useUser } from '@/context/UserContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUserCircle, FaSignOutAlt, FaSave, FaUser, FaEnvelope, FaImage, FaPhone, FaInfoCircle } from 'react-icons/fa';
import styles from './AuthModal.module.scss';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const { user, logout, updateProfile } = useUser();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [avatar, setAvatar] = useState(user?.avatar || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [success, setSuccess] = useState(false);

  if (!user) return null;

  const handleSave = () => {
    updateProfile({ name, avatar, phone, bio });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 1200);
    setEdit(false);
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
            className={styles.modal + ' ' + styles.profileModal}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ background: '#232323', color: '#fff', minWidth: 340, maxWidth: 400, padding: '2.2rem 1.5rem', borderRadius: 20, boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
          >
            <button className={styles.close} onClick={onClose} aria-label="Cerrar">
              <FaTimes />
            </button>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              {avatar ? (
                <img src={avatar} alt="Avatar" style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', margin: '0 auto', border: '3px solid #d4af37' }} />
              ) : (
                <FaUserCircle style={{ fontSize: 100, color: '#d4af37', margin: '0 auto' }} />
              )}
            </div>
            {edit ? (
              <>
                <div className={styles.formGroup}>
                  <label>
                    <FaUser className={styles.icon} /> Nombre
                  </label>
                  <input value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className={styles.formGroup}>
                  <label>
                    <FaImage className={styles.icon} /> URL de avatar
                  </label>
                  <input value={avatar} onChange={e => setAvatar(e.target.value)} placeholder="https://..." />
                </div>
                <div className={styles.formGroup}>
                  <label>
                    <FaPhone className={styles.icon} /> Teléfono
                  </label>
                  <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Ej: +34 600 000 000" />
                </div>
                <div className={styles.formGroup}>
                  <label>
                    <FaInfoCircle className={styles.icon} /> Bio
                  </label>
                  <textarea value={bio} onChange={e => setBio(e.target.value)} placeholder="Cuéntanos algo sobre ti..." rows={2} />
                </div>
                <button className={styles.submit} onClick={handleSave} style={{ background: '#d4af37', color: '#181818' }}>
                  <FaSave /> Guardar
                </button>
              </>
            ) : (
              <>
                <div className={styles.formGroup}>
                  <FaUser className={styles.icon} /> <b>{user.name}</b>
                </div>
                <div className={styles.formGroup}>
                  <FaEnvelope className={styles.icon} /> {user.email}
                </div>
                {user.phone && (
                  <div className={styles.formGroup}>
                    <FaPhone className={styles.icon} /> {user.phone}
                  </div>
                )}
                {user.bio && (
                  <div className={styles.formGroup}>
                    <FaInfoCircle className={styles.icon} /> {user.bio}
                  </div>
                )}
                <div className={styles.formGroup} style={{ fontSize: '0.95rem', color: '#aaa' }}>
                  Registrado: {user.registeredAt ? new Date(user.registeredAt).toLocaleDateString() : 'N/A'}
                </div>
                <button className={styles.submit} onClick={() => setEdit(true)} style={{ background: '#d4af37', color: '#181818' }}>
                  Editar perfil
                </button>
              </>
            )}
            {success && <div className={styles.success}>¡Perfil actualizado!</div>}
            <button className={styles.submit} style={{ background: '#e53935', color: '#fff', marginTop: 16, width: '100%' }} onClick={logout}>
              <FaSignOutAlt /> Cerrar sesión
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileModal; 