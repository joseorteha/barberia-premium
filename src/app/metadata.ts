import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Barbería Premium | Estilo y Tradición',
  description: 'Descubre la mejor experiencia de barbería premium. Cortes de cabello, barba y tratamientos faciales con los mejores profesionales. Reserva tu cita ahora.',
  keywords: 'barbería, cortes de cabello, barba, tratamientos faciales, barbería premium, reservas online',
  authors: [{ name: 'Barbería Premium' }],
  openGraph: {
    title: 'Barbería Premium | Estilo y Tradición',
    description: 'Descubre la mejor experiencia de barbería premium. Cortes de cabello, barba y tratamientos faciales con los mejores profesionales.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Barbería Premium',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barbería Premium | Estilo y Tradición',
    description: 'Descubre la mejor experiencia de barbería premium. Cortes de cabello, barba y tratamientos faciales con los mejores profesionales.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
} 