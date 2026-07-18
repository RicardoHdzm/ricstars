// ============================================================
// Aquí agregas cada videojuego, película, serie o libro que
// termines. Este archivo se actualiza automáticamente desde
// admin.html — también puedes editarlo a mano si prefieres.
//
// categoria: "videojuego" | "pelicula" | "serie" | "libro"
// puntuacion: número del 1 al 5 (acepta medios puntos, ej. 3.5)
// imagen: ruta a la portada/carátula (guárdala en assets/img/)
// fecha: cuándo lo terminaste, formato AAAA-MM-DD
// ============================================================

const entries = [
  {
    id: 1,
    titulo: "The Legend of Zelda: Tears of the Kingdom",
    categoria: "videojuego",
    imagen: "assets/img/zelda-totk.jpg",
    resena: "Mundo enorme, mecánicas de construcción que cambian todo. Se siente fresco pese a reusar el mapa de BOTW.",
    puntuacion: 5,
    fecha: "2026-02-10"
  },
  {
    id: 2,
    titulo: "Dune: Parte Dos",
    categoria: "pelicula",
    imagen: "assets/img/placeholder-pelicula.svg",
    resena: "Fotografía impresionante y ritmo épico. Villeneuve entendió el material fuente mejor que nadie.",
    puntuacion: 4.5,
    fecha: "2026-03-01"
  },
  {
    id: 3,
    titulo: "Arcane",
    categoria: "serie",
    imagen: "assets/img/placeholder-serie.svg",
    resena: "Animación sobresaliente y una historia con más peso emocional del que esperaba de un videojuego.",
    puntuacion: 5,
    fecha: "2026-01-20"
  },
  {
    id: 4,
    titulo: "Sapiens: De animales a dioses",
    categoria: "libro",
    imagen: "assets/img/placeholder-libro.svg",
    resena: "Panorama ambicioso de la historia humana. Algunas ideas son discutibles pero siempre invita a pensar.",
    puntuacion: 4,
    fecha: "2026-04-05"
  },
  {
    id: 5,
    titulo: "Pikmin 4",
    categoria: "videojuego",
    imagen: "assets/img/pikmin-4-5.jpg",
    resena: "La verdad nunca habia jugado un juego de Pikminm, sin embargo este matuvo entretenido hasta el final. Las areas y las cavernas estan muy bien hechas. Se puede a llegar a sentir un poco lento, pero creo que es parte de.",
    puntuacion: 3.5,
    fecha: "2026-07-13"
  },
  {
    id: 6,
    titulo: "Pikmin 4",
    categoria: "videojuego",
    imagen: "assets/img/pikmin-4-6.jpg",
    resena: "Siempre quise probar Pikmin, pero me daba flojera al empezar. Al final Pikmin 4 me sorprendió. Le metí 40 horas para sacar el 100% y nunca se me hizo aburrido (tal vez un poco lento). \n\nLa exploración, las cuevas, las misiones de noche y las batallas Dandori lo hacen muy entretenido.",
    puntuacion: 3.5,
    fecha: "2026-07-13"
  },
  {
    id: 7,
    titulo: "Pokémon Champions",
    categoria: "videojuego",
    imagen: "assets/img/pokemon-champions-7.jpg",
    resena: "Champions facilita demasiado entrar al competitivo. La jugabilidad está muy bien porque al final siguen siendo las batallas clásicas de Pokémon, un sistema que para mí ya está casi perfecto.\n\nEso sí, por momentos se siente como un juego hecho solo para cumplir, y en lo técnico y gráfico queda bastante corto.\n\nIntentaré llegar a Master todas las seasons... hasta que me aburra lol.",
    puntuacion: 5,
    fecha: "2026-04-08"
  },
  {
    id: 8,
    titulo: "Pokémon Champions",
    categoria: "videojuego",
    imagen: "assets/img/pokemon-champions-8.png",
    resena: "Champions facilita demasiado entrar al competitivo. La jugabilidad está muy bien porque al final siguen siendo las batallas clásicas de Pokémon, un sistema que para mí ya está casi perfecto. Eso sí, por momentos se siente como un juego hecho solo para cumplir, y en lo técnico y gráfico queda bastante corto. Intentaré llegar a Master todas las seasons... hasta que me aburra lol.",
    puntuacion: 3,
    fecha: "2026-04-08"
  }
];
