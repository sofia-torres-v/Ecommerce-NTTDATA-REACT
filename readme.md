# **Market App - Semana TypeScript Challenge**

## ✨ **Descripción del proyecto**  
Este proyecto amplía y mejora el desarrollo del desafío anterior migrando todo el código de JavaScript a TypeScript. Se optimizó la estrura y mejores prácticas en modularización.

## ✅ **Requisitos cumplidos**  
- [x] Proyecto desarrollado con **Vite** como bundler.  
- [x] Migración completa del proyecto de JavaScript a **TypeScript**.  
- [x] Uso de **interfaces**  para definir estructuras y tipos.  
- [x] Implementación de **mappers** para transformar las respuestas de las APIs y trabajar solo con las propiedades necesarias.  
- [x] Modularización, separando la lógica de negocio, los tipos y las interfaces en carpetas específicas.  
- [x] Filtrado dinámico de productos por categoría y búsqueda en tiempo real.
##  **Funcionalidad adicional**   
- [x] Sincronización de filtros de búsqueda y categorías seleccionadas.  
- [x] Mensajes personalizados para resultados de búsqueda vacíos o categorías sin productos.  

## 📂 **Estructura del proyecto**

``` src/ 
├── index.html
├── app.ts
├── assets/
├── api/
│   └── fetch.ts
|   └── mappers.ts
├── dom/
│   ├── cart.ts
│   ├── categories.ts
│   ├── message.ts
│   └── products.ts
├── types/
│   └── product.js
|   └── category.ts
├── utils/
│   └── filter.js
|   └── format.ts
├── styles/
│   └── style.css
└── tsconfig.js
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
