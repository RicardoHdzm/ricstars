const CATEGORY_LABELS = {
  videojuego: "Videojuego",
  app: "App",
  libro: "Libro",
  pelicula: "Película",
  serie: "Serie",
  "trash-tv": "Trash TV",
  anime: "Anime",
  musica: "Música",
  comida: "Comida",
  otro: "Otro"
};

const CATEGORY_ICONS = {
  videojuego: "fa-solid fa-gamepad",
  app: "fa-solid fa-mobile-screen-button",
  libro: "fa-solid fa-book",
  pelicula: "fa-solid fa-clapperboard",
  serie: "fa-solid fa-tv",
  "trash-tv": "fa-solid fa-trash",
  anime: "fa-solid fa-dragon",
  musica: "fa-solid fa-music",
  comida: "fa-solid fa-utensils",
  otro: "fa-solid fa-ellipsis"
};

const PLATFORM_GROUPS = {
  nintendo: {
    label: "Nintendo",
    color: "#e60012",
    text: "#ffffff",
    items: {
      nes: "NES",
      snes: "SNES",
      n64: "Nintendo 64",
      gamecube: "GameCube",
      wii: "Wii",
      wiiu: "Wii U",
      switch: "Switch",
      switch2: "Switch 2",
      gameboy: "Game Boy",
      gba: "Game Boy Advance",
      nds: "Nintendo DS",
      n3ds: "Nintendo 3DS"
    }
  },
  playstation: {
    label: "PlayStation",
    color: "#0070d1",
    text: "#ffffff",
    items: {
      ps1: "PS1",
      ps2: "PS2",
      ps3: "PS3",
      ps4: "PS4",
      ps5: "PS5",
      psp: "PSP",
      psvita: "PS Vita"
    }
  },
  xbox: {
    label: "Xbox",
    color: "#107c10",
    text: "#ffffff",
    items: {
      xbox: "Xbox",
      xbox360: "Xbox 360",
      xboxone: "Xbox One",
      xboxseries: "Xbox Series X|S"
    }
  },
  pc: {
    label: "PC",
    color: "#e6c229",
    text: "#1f1f1e",
    items: {
      pc: "PC"
    }
  },
  mobile: {
    label: "Móvil",
    color: "#00b8a9",
    text: "#ffffff",
    items: {
      movil: "Móvil"
    }
  }
};

const GENRE_OPTIONS = {
  libro: ["Ficción", "No ficción", "Fantasía", "Ciencia ficción", "Misterio", "Terror", "Romance", "Biografía", "Autoayuda", "Historia", "Ensayo", "Poesía", "Clásico"],
  pelicula: ["Acción", "Aventura", "Comedia", "Drama", "Terror", "Ciencia ficción", "Fantasía", "Romance", "Suspenso", "Animación", "Documental", "Crimen", "Bélica", "Musical"],
  serie: ["Acción", "Aventura", "Comedia", "Drama", "Terror", "Ciencia ficción", "Fantasía", "Romance", "Suspenso", "Documental", "Crimen", "Sitcom"],
  anime: ["Shonen", "Shojo", "Seinen", "Josei", "Isekai", "Mecha", "Slice of Life", "Deporte", "Romance", "Comedia", "Terror", "Psicológico", "Fantasía", "Acción", "Drama", "Sobrenatural"],
  musica: ["Pop", "Rock", "Hip-Hop", "R&B", "Reggaetón", "Electrónica", "Jazz", "Clásica", "Indie", "Metal", "Punk", "Folk", "Country", "K-Pop", "Latina", "Soul"]
};

const PLATFORM_LABELS = {};
const PLATFORM_COLORS = {};
const PLATFORM_TEXT_COLORS = {};
Object.values(PLATFORM_GROUPS).forEach(group => {
  Object.entries(group.items).forEach(([key, label]) => {
    PLATFORM_LABELS[key] = label;
    PLATFORM_COLORS[key] = group.color;
    PLATFORM_TEXT_COLORS[key] = group.text;
  });
});

function starsMarkup(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = "";
  for (let i = 0; i < 5; i++) {
    if (i < full) html += '<span class="filled">★</span>';
    else if (i === full && half) html += '<span class="filled">⯨</span>';
    else html += '<span class="empty">★</span>';
  }
  return html;
}
