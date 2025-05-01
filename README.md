# Barbería Premium

Proyecto web moderno para una barbería premium, desarrollado con Next.js 14, React, TypeScript y SCSS Modules.

## Estructura del Proyecto

- **src/app/**  
  - `layout.tsx`, `page.tsx`, `globals.scss`: Configuración global, layout y página principal.
- **src/components/**  
  - **Header/**: Menú de navegación superior fijo, responsivo, con logo y enlaces.
  - **Hero/**: Sección principal con imagen de fondo, título, subtítulo y botón de llamada a la acción.
  - **Services/**: Cards de servicios con imágenes, iconos y precios.
  - **Gallery/**: Carrusel de imágenes de cortes y estilos.
  - **Team/**: Presentación del equipo de barberos con fotos y redes sociales.
  - **Testimonials/**: Testimonios de clientes con foto y calificación.
  - **FAQ/**: Preguntas frecuentes.
  - **BookingForm/**: Formulario de reserva.
  - **Contact/**: Información de contacto y mapa.
  - **Footer/**: Pie de página con enlaces y redes sociales.
- **public/**  
  - Imágenes y recursos estáticos.

## Instalación y uso

```bash
npm install
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) para ver la web.

## Características principales

- **Diseño moderno y responsivo**: Adaptado a desktop, tablet y móvil.
- **Animaciones suaves**: Uso de Framer Motion para transiciones y efectos.
- **Optimización de imágenes**: Next.js Image para carga eficiente.
- **Accesibilidad**: Etiquetas ARIA, contraste y navegación por teclado.
- **Componentes reutilizables**: Estructura modular y escalable.
- **Formulario de reservas**: Integrado y funcional.
- **Carrusel de galería**: Swiper.js para mostrar trabajos destacados.
- **Soporte multilenguaje**: Preparado para internacionalización.

## Estructura de la página principal

- **Header**: Menú fijo superior con logo y navegación.
- **Hero**: Imagen de fondo, título, subtítulo y botón de reserva.
- **Servicios**: Cards con imágenes, iconos y precios.
- **Galería**: Carrusel de fotos de cortes y estilos.
- **Equipo**: Fotos y perfiles de los barberos.
- **Testimonios**: Opiniones de clientes.
- **FAQ**: Preguntas frecuentes.
- **Formulario de reserva**: Reserva tu cita fácilmente.
- **Contacto**: Dirección, teléfono, email y mapa.
- **Footer**: Enlaces legales y redes sociales.

## Personalización

- Cambia imágenes en `/public` o en los arrays de cada componente.
- Modifica colores y fuentes en `src/app/globals.scss`.
- Edita textos y secciones en los componentes correspondientes.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
