# Market App - React Fundamentals Challenge 🚀

## Descripción del Proyecto

Este proyecto amplía y mejora el desafío anterior de **Market App**, migrando todo el código de **HTML, CSS y JavaScript** a **componentes funcionales con React**. Se optimizó la estructura del proyecto, aplicando mejores prácticas en modularización, tipado con TypeScript, y organización de carpetas.

## Objetivos del Proyecto

El desafío implementado se basó en los siguientes requisitos:

1. **Migración a React**: Transformar el proyecto existente en componentes funcionales.
2. **Uso de Hooks**:
   - Implementación de `useEffect` y `useState`.
3. **Consumo de API**:
   - Uso de `fetch API` junto con `async` y `await` para la obtención de datos.
4. **Estructura Escalable**:
   - Separación de la lógica de negocio, hooks, componentes, páginas y utilitarios.
   - Tipado fuerte en TypeScript (evitando `any`).
---

## Funcionalidades del Proyecto

- **Renderizado de Productos**: Todos los productos se muestran dinámicamente en la página de **Products** gracias a la integración con el API.
- **Buscador (Search)**: Un campo de búsqueda permite filtrar productos en tiempo real, mejorando la navegación.
- **Filtrado por Categorías**:
  - Un menú desplegable (**select**) permite filtrar los productos por categorías específicas.
  - La selección está sincronizada con los demás filtros, asegurando una experiencia consistente.

---

## 📂 Estructura de Carpetas

``` ├── src/
│   ├── components/               
│   │   ├── button/              
│   │   ├── footer/              
│   │   ├── input/               
│   │   ├── mainLayout/          
│   │   └── navbar/              
│   ├── context/                 
│   │   ├── appContext.tsx       
│   │   ├── appReducer.ts        
│   │   └── cartReducer.ts       
│   ├── domain/                  
│   │   ├── appState.domain.ts   
│   │   ├── category.domain.ts   
│   │   └── product.domain.ts    
│   ├── pages/                   
│   │   ├── home/                
│   │   └── products/            
│   ├── services/                
│   │   ├── api/                 
│   │   ├── product.service.ts   
│   │   └── mappers/             
│   │       └── product.mappers.ts
│   ├── shared/                  
│   │   ├── hooks/               
│   │   └── utils/               
│   │       └── formatPrice.ts   
│   ├── styles/                  
│   │   └── style.css            
│   ├── types/                   
│   │   ├── appState.type.ts     
│   │   ├── app.types.ts         
│   │   └── cart.type.ts         
│   ├── app.tsx                  
│   ├── main.tsx                 
│   ├── index.css                
│   └── index.html    
```
---

## 🛠️ Tecnologías Utilizadas

- **React**: Librería para construir la interfaz de usuario.
- **TypeScript**: Tipado estático para mayor robustez del código.
- **CSS Vanilla**: Estilización de componentes.
- **Fetch API**: Para consumo de servicios web.
- **React Context API**: Para el manejo de estado global.
- **Vite**: Herramienta de desarrollo rápida para React.

---

## Estado Global

- Uso de **React Context API** para manejar el estado global.
- Implementación de reducers (`appReducer` y `cartReducer`) para gestionar estados específicos de la aplicación, como el carrito de compras.

---

## Instalación y Uso

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