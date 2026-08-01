# Character Counter Final

Una aplicación desarrollada con **React** que permite analizar un texto en tiempo real, mostrando diferentes estadísticas como cantidad de caracteres, palabras, oraciones, tiempo estimado de lectura y frecuencia de aparición de cada letra.

Además, incorpora un **modo oscuro/claro** y **cambio de idioma de ingles a español**.

---

## 🚀 Características

- Contador de caracteres.
- Opción para excluir espacios del conteo.
- Contador de palabras.
- Contador de oraciones.
- Tiempo aproximado de lectura.
- Análisis de frecuencia de letras.
- Barras de porcentaje para cada letra.
- Mostrar todas las letras mediante "Ver mas".
- 🌙 Modo Oscuro / ☀️ Modo Claro.
- Cambio de idioma (Inglés/Español).
- Diseño Responsive.

---

## 🛠️ Tecnologías utilizadas

- React
- JavaScript (ES6+)
- CSS3
- HTML5

---

## 📂 Estructura del proyecto

```
src/
│
├── components/
│   └── Header.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## Instalación

Clonar el repositorio

```bash
git clone https://github.com/tuusuario/character-counter.git
```

Ingresar a la carpeta

```bash
cd character-counter-final
```

Instalar las dependencias

```bash
npm install
```

Ejecutar el proyecto

```bash
npm run dev
```

---

## Funcionalidades

### Contador de caracteres

Calcula automáticamente la cantidad de caracteres escritos.

### Excluir espacios

Permite contar únicamente los caracteres visibles.

### Límite de caracteres

Restringe la cantidad máxima de texto que puede ingresar el usuario.

### Contador de palabras

Cuenta las palabras utilizando expresiones regulares.

### Contador de oraciones

Detecta oraciones finalizadas con:

- .
- !
- ?

### Tiempo de lectura

Calcula el tiempo estimado considerando una velocidad promedio de **100 palabras por minuto**.

### Frecuencia de letras

Analiza el texto y muestra:

- Cantidad de veces que aparece cada letra.
- Porcentaje respecto al total.
- Barra visual de progreso.

### Tema Claro / Oscuro

El usuario puede cambiar entre ambos temas.

### Cambio de idioma de Ingles / Español

El usuario puede cambiar de idioma la pagina de ingles a español.

---

## Conceptos de React utilizados

- Componentes
- Props
- useState
- useEffect
- Renderizado condicional
- map()
- Eventos
- Manejo de estado
- Cambio dinámico de idioma
- Tema oscuro / claro

---

## Responsive

La aplicación está adaptada para:

- 💻 Computadoras
- 📱 Teléfonos
- 📟 Tablets

---

## Autor

Desarrollado por **Marcelo Sosa**

Proyecto realizado como práctica de **React**, aplicando conceptos de estado, componentes, manipulación de texto.

---

## ⭐ Agradecimientos

Este proyecto fue una excelente oportunidad para seguir aprendiendo React y profundizar conceptos como **useState**, **useEffect**, renderizado dinámico y almacenamiento local.
