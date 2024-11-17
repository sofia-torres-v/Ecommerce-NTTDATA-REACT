# **Market App - Semana 2 JavaScript Challenge**

## ✨ **Descripción del proyecto**

Este proyecto expande un sitio previamente creado con HTML y CSS, añadiendo funcionalidades dinámicas mediante JavaScript Vanilla, como la carga de productos y categorías desde APIs públicas, junto con mejoras para optimizar la experiencia del usuario.

---

## ✅ **Requisitos mínimos cumplidos**

- [x] Cargar dinámicamente todos los productos desde [DummyJSON Products](https://dummyjson.com/docs/products#products-all).
- [x] Consumir servicios con `fetch`, `async` y `await` (sin librerías externas).
- [x] Insertar contenido dinámico sin usar `innerHTML`.
- [x] Filtrar productos en tiempo real al escribir en la caja de búsqueda.
- [x] Cargar categorías dinámicamente desde [DummyJSON Categories](https://dummyjson.com/docs/products#products-categories).
- [x] Filtrar productos por categorías seleccionadas.
- [x] Incrementar un contador en el menú superior al agregar productos al carrito.

---

## 🌟 **Funcionalidades adicionales**

1. **Mensajes personalizados**: 
   - Se muestran mensajes cuando no hay productos disponibles en la categoría seleccionada o si no se encuentran resultados en la búsqueda.

2. **Sincronización entre filtros**:
   - Las búsquedas funcionan en conjunto con la categoría seleccionada, mostrando solo los productos que coincidan con ambos filtros.

3.  **Uso de mappers**:
   - Para estructurar los datos de productos y categorías, garantizando que solo se manejen las propiedades necesarias, lo que mejora la eficiencia del código.


---

## 📂 **Estructura del proyecto**

``` src/ 
├── index.html
├── app.js
├── assets/
├── api/
│   └── fetch.js
├── dom/
│   ├── cart.js
│   ├── categories.js
│   ├── message.js
│   └── product.js
├── utils/
│   └── filter.js
├── styles/
│   └── style.css
└── vite.config.js
```

---

## 🚀 **Cómo correr el proyecto**

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/sofia-torres-v/BOOTCAMP-FRONTEND-REACT-NTT.git
   cd BOOTCAMP-FRONTEND-REACT-NTT

2. **Instala las dependencias: Asegúrate de tener Node.js instalado, luego ejecuta**: 
   ```bash
    npm install
3. **Inicia el servidor de desarrollo**:
     ```bash
     npm run dev
4. **Abre la aplicación en tu navegador**
