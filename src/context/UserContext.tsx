"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  avatar: string;
  phone?: string;
  bio?: string;
  registeredAt?: string;
}

interface UserContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

const USER_KEY = 'barberia_user';
const USERS_KEY = 'barberia_users';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(USER_KEY);
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = async (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const found = users.find((u: any) => u.email === email && u.password === password);
    if (found) {
      const { name, email, avatar, phone, bio, registeredAt } = found;
      setUser({ name, email, avatar, phone, bio, registeredAt });
      localStorage.setItem(USER_KEY, JSON.stringify({ name, email, avatar, phone, bio, registeredAt }));
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string) => {
    let users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    if (users.find((u: any) => u.email === email)) return false;
    const registeredAt = new Date().toISOString();
    const newUser = { name, email, password, avatar: '', phone: '', bio: '', registeredAt };
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    setUser({ name, email, avatar: '', phone: '', bio: '', registeredAt });
    localStorage.setItem(USER_KEY, JSON.stringify({ name, email, avatar: '', phone: '', bio: '', registeredAt }));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_KEY);
  };

  const updateProfile = (data: Partial<User>) => {
    if (!user) return;
    const updated = { ...user, ...data };
    setUser(updated);
    localStorage.setItem(USER_KEY, JSON.stringify(updated));
    // Actualizar en la lista de usuarios
    let users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    users = users.map((u: any) => u.email === user.email ? { ...u, ...data } : u);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  };

  return (
    <UserContext.Provider value={{ user, login, register, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser debe usarse dentro de UserProvider');
  return ctx;
}; 