# RicStuff

Diario personal de videojuegos, películas, series y libros que voy terminando en el año.

## Cómo agregar una entrada

1. Guarda la imagen de portada en `assets/img/` (jpg o png, cualquier tamaño vertical funciona bien).
2. Abre `js/data.js` y copia uno de los bloques dentro del arreglo `entries`:

```js
{
  id: 5,
  titulo: "Nombre del juego/película/serie/libro",
  categoria: "videojuego", // videojuego | pelicula | serie | libro
  imagen: "assets/img/mi-imagen.jpg",
  resena: "Reseña corta, un par de líneas.",
  puntuacion: 4.5, // de 1 a 5, acepta medios puntos
  fecha: "2026-07-17" // fecha en que lo terminaste
}
```

3. Guarda el archivo y refresca `index.html` en el navegador.

No necesitas servidor ni build: es HTML/CSS/JS puro, se puede abrir el `index.html` directamente o publicar en GitHub Pages.
