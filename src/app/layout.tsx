import './globals.scss';
import { Inter, Lora } from 'next/font/google';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ClientLayout from '@/components/ClientLayout/ClientLayout';
import { UserProvider } from '@/context/UserContext';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });

export const metadata: Metadata = {
  title: 'Barbería Premium - Estilo y Elegancia en Cada Corte',
  description: 'Reserva tu cita en Barbería Premium y disfruta de un servicio exclusivo con cortes de alta calidad en un ambiente sofisticado.',
  keywords: ['barbería', 'corte de cabello', 'barbería premium', 'estilo masculino', 'reservas barbería'],
  openGraph: {
    title: 'Barbería Premium - Estilo y Elegancia',
    description: 'Experimenta un servicio de barbería de lujo con cortes precisos y un ambiente único.',
    url: 'https://barberia-premium.com',
    images: ['/images/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barbería Premium',
    description: 'Cortes de cabello premium en un ambiente exclusivo.',
    images: ['/images/og-image.jpg'],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${lora.variable}`}>
        <UserProvider>
          <LanguageProvider>
            <ClientLayout>
              <Header />
              <main>{children}</main>
              <Footer />
            </ClientLayout>
          </LanguageProvider>
        </UserProvider>
      </body>
    </html>
  );
}
