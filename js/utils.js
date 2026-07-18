const CATEGORY_LABELS = {
  videojuego: "Videojuego",
  pelicula: "Película",
  serie: "Serie",
  libro: "Libro"
};

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
