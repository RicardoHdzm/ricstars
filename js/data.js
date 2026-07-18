// ============================================================
// Aquí agregas cada videojuego, película, serie o libro que
// termines. Este archivo se actualiza automáticamente desde
// admin.html — también puedes editarlo a mano si prefieres.
//
// categoria: "videojuego" | "app" | "libro" | "pelicula" | "serie" |
//            "trash-tv" | "anime" | "comida" | "otro"
// plataformas: solo para videojuego, lista de claves (ver js/utils.js)
// puntuacion: número del 1 al 5 (acepta medios puntos, ej. 3.5)
// imagen: ruta a la portada/carátula (guárdala en assets/img/)
// fecha: cuándo lo terminaste, formato AAAA-MM-DD
// ============================================================

const entries = [
  {
    id: 9,
    titulo: "Star Fox",
    categoria: "videojuego",
    imagen: "assets/img/star-fox-9.png",
    plataformas: ["switch2"],
    resena: "Definitivamente es un juegazo. Y para los que dicen que es muy corto tengo algo que decirles: tienen razón lol. La campaña principal dura muy poco, pero recordemos que justamente es un juego arcade. El chiste es sacar todas las medallas, descubrir las rutas alternas, completar todos los desafíos y luego repetir todo en modo Experto. Eso le da muchísima rejugabilidad.",
    puntuacion: 4.5,
    fecha: "2026-07-04"
  }
];
