// ============================================================
// Aquí agregas cada videojuego, película, serie o libro que
// termines. Este archivo se actualiza automáticamente desde
// admin.html — también puedes editarlo a mano si prefieres.
//
// categoria: "videojuego" | "app" | "libro" | "pelicula" | "serie" |
//            "trash-tv" | "anime" | "comida" | "otro"
// plataformas: solo para videojuego, lista de claves (ver js/utils.js)
// generos: solo para libro/pelicula/serie/anime, lista de strings
// puntuacion: número del 1 al 5 (acepta medios puntos, ej. 3.5)
// imagen: ruta a la portada/carátula (guárdala en assets/img/)
// fecha: cuándo lo terminaste, formato AAAA-MM-DD
// ============================================================

const entries = [
  {
    id: 1,
    titulo: "Yours Truly",
    categoria: "libro",
    imagen: "assets/img/yours-truly-1.jpg",
    generos: ["Romance"],
    resena: "Es un libro muy lindo. Me encantaron los protagonistas, la ambientacion y las frases.\n\n\"No recuerdo ninguna frase\"",
    puntuacion: 5,
    fecha: "2024-07-01"
  },
  {
    id: 2,
    titulo: "The O.C. (Temporada 1)",
    categoria: "serie",
    imagen: "assets/img/the-o-c-temporada-1-2.jpg",
    generos: ["Drama"],
    resena: "Es como la cuarta vez que la veo y apenas noto que Seth es una basura.",
    puntuacion: 5,
    fecha: "2026-04-01"
  }
];
