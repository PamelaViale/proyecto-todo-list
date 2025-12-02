# Aplicación Todo List — React

## Descripción de mi proyecto:
Es una aplicación de gestión de tareas desarrollada en **React con Vite**.  
Permite crear, editar, completar, eliminar y filtrar tareas.  
Todas las tareas se guardan automáticamente en **localStorage**, por lo que permanecen incluso si se recarga la página.

El diseño es simple y responsive, con estilos personalizados.
---

## 💡 Funcionalidades principales:
- Agregar nuevas tareas mediante un input con validación.
- Editar tareas en línea.
- Marcar tareas como completadas (las muestro tachadas).
- Eliminar tareas con confirmación.
- Filtrar tareas por:
  - **Todas**
  - **Completadas**
  - **Pendientes**
- Guardado automático en `localStorage` usando `useEffect`.
- Interfaz responsive.

---

## 🛠 Tecnologías utilizadas
- **React (Vite)**
- **JavaScript**
- **CSS** 
- **localStorage**

---

## 📂 Estructura de mi proyecto:

proyecto-todo-list/
├─ public/                # Recursos estáticos
│  ├─ favicon.png
│  └─ moroccan-flower.png
│
├─ src/                   # Código principal de la app
│  ├─ components/         # Componentes clave de la aplicación
│  │  ├─ Todo.jsx         # Lógica de cada tarea individual
│  │  ├─ Todo.css
│  │  ├─ TodoList.jsx     # Renderizado y gestión del listado completo
│  │  ├─ TodoList.css
│  │  ├─ Form.jsx         # Formulario de creación/edición de tareas
│  │  └─ Form.css
│  │
│  ├─ App.jsx             # Componente raíz
│  ├─ main.jsx            # Punto de entrada de React
│  └─ index.css           # Estilos globales
│
├─ package.json           # Dependencias y scripts
└─ vite.config.js         # Configuración de Vite



## ¿ Cómo ejecutar el proyecto localmente?

1. Clonar el repositorio 
git clone https://github.com/PamelaViale/proyecto-todo-list


2. Instalar dependencias
npm install

3. Ejecutar el servidor de desarrollo
npm run dev

4. Crear build de producción
npm run build

5. Previsualizar el build
npm run preview

---------------------------------------------

## Instalar dependencias
1. Desde bash

npm install

2. Ejecutar el servidor de desarrollo
npm run dev

3. Crear build de producción
npm run build

4. Previsualizar el build
npm run preview

---------------------------------------------


## Pantalla inicial
![Captura Desktop](./public/cap1_temp.jpg)

## Pantalla con filtros y editado
![Captura Desktop](./public/cap2_temp.jpg)

## Pantalla con error
![Captura Desktop](./public/cap3_temp.jpg)

## Pantalla eliminar tarea
![Captura Desktop](./public/cap4_temp.jpg)

---------------------------------------------

Podes acceder desde VERCEL : https://proyecto-todo-list-nine.vercel.app/

---------------------------------------------

### Agradecimientos :
A ADA ITW, por la gran oportunidad de capacitarme.
A mi familia, por el apoyo para que yo pueda crecer en esta nueva carrera.
A mis profes y compañeras por el acompañamiento constante.

---------------------------------------------





