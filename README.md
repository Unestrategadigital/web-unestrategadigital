# web-unestrategadigital

Sitio de unestrategadigital: servicios, academia, herramientas, área de estudiantes, analizador de Meta Ads y pagos.

## Estructura

```
index.html        Estructura de la página (cabecera, menú, pie)
css/styles.css    Estilos (marca ajedrez: negro, blanco y rojo)
js/app.js         Contenido, rutas (#inicio, #servicios, #academia, #p-c5…) y animaciones
assets/           Imágenes y videos
```

El contenido editable está al inicio de `js/app.js`:

- `CONFIG`: WhatsApp, pagos (Binance Pay, enlace de tarjeta), enlaces de plataformas y skills, descuentos de combos (`combos`), calificaciones reales de cada producto (`calificaciones`) y productos de la demostración del área de estudiantes (`estudiantes`).
- `SERVICES`: servicios y paquetes.
- `PRODUCTS`: cursos, programas, ebooks y kits.
- `PAG`: textos de la página de cada producto.
- `RAREZA`: rareza de productos y skills.

## Verlo en local

Abre `index.html` con un servidor local, por ejemplo:

```
npx serve .
```

Librerías externas por CDN: GSAP 3.12.5, ScrollTrigger y Lenis 1.1.13. Fuentes: Anton y Schibsted Grotesk (Google Fonts).
