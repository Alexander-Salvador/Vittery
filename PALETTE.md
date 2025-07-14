# 🛒 Vitterys - E-commerce Moderno

**Tu supermercado digital de confianza** - Una experiencia de compra online completa y moderna construida con React, TypeScript y Tailwind CSS.

![Vitterys Logo](https://img.shields.io/badge/Vitterys-E--commerce-0ea5e9?style=for-the-badge&logo=shopping-bag)

## 🎨 Paleta de Colores

### Colores Principales

#### **Primary (Azul Cielo)**
```css
--primary-50: #f0f9ff   /* Azul muy claro */
--primary-100: #e0f2fe  /* Azul claro */
--primary-200: #bae6fd  /* Azul suave */
--primary-300: #7dd3fc  /* Azul medio claro */
--primary-400: #38bdf8  /* Azul medio */
--primary-500: #0ea5e9  /* Azul principal */
--primary-600: #0284c7  /* Azul oscuro */
--primary-700: #0369a1  /* Azul más oscuro */
--primary-800: #075985  /* Azul muy oscuro */
--primary-900: #0c4a6e  /* Azul profundo */
```

#### **Accent (Rosa Vibrante)**
```css
--accent-50: #fef3f2    /* Rosa muy claro */
--accent-100: #fee4e2   /* Rosa claro */
--accent-200: #fecdd3   /* Rosa suave */
--accent-300: #fda4af   /* Rosa medio claro */
--accent-400: #fb7185   /* Rosa medio */
--accent-500: #f43f5e   /* Rosa principal */
--accent-600: #e11d48   /* Rosa oscuro */
--accent-700: #be123c   /* Rosa más oscuro */
--accent-800: #9f1239   /* Rosa muy oscuro */
--accent-900: #881337   /* Rosa profundo */
```

#### **Secondary (Verde Agua)**
```css
--secondary-50: #f0fdfa  /* Verde agua muy claro */
--secondary-100: #ccfbf1 /* Verde agua claro */
--secondary-200: #99f6e4 /* Verde agua suave */
--secondary-300: #5eead4 /* Verde agua medio claro */
--secondary-400: #2dd4bf /* Verde agua medio */
--secondary-500: #14b8a6 /* Verde agua principal */
--secondary-600: #0d9488 /* Verde agua oscuro */
--secondary-700: #0f766e /* Verde agua más oscuro */
--secondary-800: #115e59 /* Verde agua muy oscuro */
--secondary-900: #134e4a /* Verde agua profundo */
```

### Colores de Estado

#### **Success (Verde)**
```css
--success-500: #22c55e  /* Verde éxito */
--success-600: #16a34a  /* Verde éxito oscuro */
```

#### **Warning (Amarillo)**
```css
--warning-500: #f59e0b  /* Amarillo advertencia */
--warning-600: #d97706  /* Amarillo advertencia oscuro */
```

#### **Error (Rojo)**
```css
--error-500: #ef4444    /* Rojo error */
--error-600: #dc2626    /* Rojo error oscuro */
```

#### **Neutral (Grises)**
```css
--neutral-50: #fafafa   /* Gris muy claro */
--neutral-100: #f5f5f5  /* Gris claro */
--neutral-200: #e5e5e5  /* Gris suave */
--neutral-300: #d4d4d4  /* Gris medio claro */
--neutral-400: #a3a3a3  /* Gris medio */
--neutral-500: #737373  /* Gris principal */
--neutral-600: #525252  /* Gris oscuro */
--neutral-700: #404040  /* Gris más oscuro */
--neutral-800: #262626  /* Gris muy oscuro */
--neutral-900: #171717  /* Gris profundo */
```

## 🎭 Tipografías

### Fuentes Principales
```css
/* Fuente principal para texto */
font-family: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;

/* Fuente para títulos y encabezados */
font-family: 'Cabinet Grotesk', 'Inter', system-ui, sans-serif;

/* Fuente monoespaciada para código */
font-family: 'JetBrains Mono', 'Fira Code', monospace;
```

### Jerarquía Tipográfica
```css
/* Títulos principales */
h1: text-4xl md:text-5xl lg:text-6xl (36px-60px)
h2: text-3xl md:text-4xl lg:text-5xl (30px-48px)
h3: text-2xl md:text-3xl (24px-30px)
h4: text-xl md:text-2xl (20px-24px)
h5: text-lg md:text-xl (18px-20px)
h6: text-base md:text-lg (16px-18px)

/* Texto del cuerpo */
body: text-base (16px)
small: text-sm (14px)
caption: text-xs (12px)
```

### Pesos de Fuente
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## 🎨 Sistema de Diseño

### Espaciado (Sistema 8px)
```css
/* Espacios base */
space-1: 4px
space-2: 8px
space-3: 12px
space-4: 16px
space-6: 24px
space-8: 32px
space-12: 48px
space-16: 64px
space-20: 80px
space-24: 96px
```

### Bordes Redondeados
```css
rounded-sm: 2px
rounded: 4px
rounded-md: 6px
rounded-lg: 8px
rounded-xl: 12px
rounded-2xl: 16px
rounded-3xl: 24px
rounded-4xl: 32px
```

### Sombras
```css
/* Sombra suave */
shadow-soft: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)

/* Sombra media */
shadow-medium: 0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)

/* Sombra grande */
shadow-large: 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)
```

## 🧩 Componentes del Sistema

### Botones
```css
/* Botón primario */
.btn-primary {
  background: linear-gradient(to right, #0284c7, #0369a1);
  color: white;
  padding: 12px 24px;
  border-radius: 16px;
  font-weight: 600;
}

/* Botón secundario */
.btn-secondary {
  background: white;
  color: #171717;
  border: 2px solid #e5e5e5;
  padding: 12px 24px;
  border-radius: 16px;
  font-weight: 600;
}

/* Botón de acento */
.btn-accent {
  background: linear-gradient(to right, #f43f5e, #e11d48);
  color: white;
  padding: 12px 24px;
  border-radius: 16px;
  font-weight: 600;
}
```

### Cards
```css
.card {
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(8px);
  border-radius: 24px;
  border: 1px solid rgba(229,229,229,0.6);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
```

### Inputs
```css
.input {
  height: 48px;
  width: 100%;
  border-radius: 16px;
  border: 2px solid #e5e5e5;
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(8px);
  padding: 12px 16px;
  font-size: 14px;
}
```

## 🎯 Logotipo

### Concepto
- **Icono**: ShoppingBag (bolsa de compras)
- **Gradiente**: Primary → Accent (azul a rosa)
- **Forma**: Redondeada moderna (rounded-xl)
- **Sombra**: Elevada para profundidad

### Variaciones
```jsx
/* Versión completa */
<div className="w-10 h-10 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 rounded-xl">
  <ShoppingBag className="h-6 w-6 text-white" />
</div>

/* Versión móvil */
<div className="w-8 h-8 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 rounded-lg">
  <ShoppingBag className="h-5 w-5 text-white" />
</div>
```

## 🚀 Tecnologías Utilizadas

### Frontend Core
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos

### Estado y Routing
- **Redux Toolkit** - Gestión de estado
- **React Router DOM** - Navegación
- **React Redux** - Integración React-Redux

### Animaciones y UI
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconografía moderna
- **Clsx + Tailwind Merge** - Utilidades de clases

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **TypeScript ESLint** - Reglas específicas de TS
- **PostCSS + Autoprefixer** - Procesamiento CSS

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── ui/              # Componentes base (Modal, Tabs, etc.)
│   ├── layout/          # Layout y navegación
│   ├── home/            # Secciones del home
│   ├── products/        # Componentes de productos
│   └── cart/            # Carrito de compras
├── pages/               # Páginas principales
├── store/               # Redux store y slices
├── data/                # Datos mock y constantes
├── types/               # Definiciones TypeScript
├── utils/               # Utilidades y helpers
└── hooks/               # Custom hooks
```

## 🎨 Guía de Estilo

### Nomenclatura
- **Componentes**: PascalCase (`ProductCard.tsx`)
- **Archivos**: camelCase (`useAppSelector.ts`)
- **Clases CSS**: kebab-case (`btn-primary`)
- **Variables**: camelCase (`isLoading`)

### Convenciones de Código
- Usar TypeScript para todo
- Props interfaces con sufijo `Props`
- Componentes funcionales con React.FC
- Hooks personalizados con prefijo `use`

### Responsive Design
```css
/* Mobile first approach */
sm: 640px   /* Tablet pequeña */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop pequeño */
xl: 1280px  /* Desktop */
2xl: 1536px /* Desktop grande */
```

## 🌟 Características Destacadas

### Experiencia de Usuario
- ✅ Diseño responsive y mobile-first
- ✅ Animaciones fluidas con Framer Motion
- ✅ Micro-interacciones en todos los elementos
- ✅ Loading states y feedback visual
- ✅ Navegación intuitiva y accesible

### Funcionalidades
- ✅ Carrito de compras persistente
- ✅ Filtros y búsqueda avanzada
- ✅ Sistema de categorías completo
- ✅ Productos con descuentos y badges
- ✅ Testimonios y reseñas
- ✅ Newsletter y blog integrado
- ✅ FAQ con acordeón interactivo

### Performance
- ✅ Lazy loading de imágenes
- ✅ Optimización de bundle con Vite
- ✅ Componentes memoizados
- ✅ CSS optimizado con Tailwind

## 📱 Componentes Principales

### Layout
- **Header** - Navegación principal con búsqueda
- **Navigation** - Menú de categorías y páginas especiales
- **Footer** - Enlaces, contacto y newsletter
- **CartSidebar** - Carrito lateral deslizante

### Home Sections
- **HeroSection** - Presentación principal
- **BrandsSection** - Carrusel de marcas
- **CategorySection** - Grid de categorías
- **FeaturedProducts** - Productos destacados
- **StatsSection** - Estadísticas con contadores animados
- **PromoSection** - Promociones y ofertas
- **FeaturesSection** - Características del servicio
- **TestimonialsSection** - Testimonios de clientes
- **BlogSection** - Artículos del blog
- **FAQSection** - Preguntas frecuentes
- **NewsletterSection** - Suscripción al newsletter
- **CTASection** - Call to action final

### Product Components
- **ProductCard** - Tarjeta de producto con animaciones
- **ProductGrid** - Grid responsive de productos
- **ProductFilters** - Filtros y ordenamiento

### UI Components
- **Modal** - Modales con overlay
- **Tabs** - Pestañas con indicador animado
- **Accordion** - Acordeón expandible
- **AnimatedCounter** - Contador con animación

## 🎯 Próximas Mejoras

- [ ] Sistema de autenticación
- [ ] Checkout y pagos
- [ ] Wishlist persistente
- [ ] Comparador de productos
- [ ] Reviews y ratings
- [ ] Chat en vivo
- [ ] PWA capabilities
- [ ] Dark mode
- [ ] Internacionalización (i18n)
- [ ] Analytics y tracking

---

**Desarrollado con ❤️ para crear la mejor experiencia de e-commerce en 2025**

*Vitterys - Tu supermercado digital de confianza*