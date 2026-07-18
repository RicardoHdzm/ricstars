const grid = document.getElementById("grid");
const emptyState = document.getElementById("emptyState");
const filterButtons = document.querySelectorAll(".filter-btn");
const yearSelect = document.getElementById("year");
const searchInput = document.getElementById("searchInput");

let activeFilter = "todos";
let activeYear = "todos";
let activeSearch = "";

function metaTagsMarkup(entry) {
  if (entry.categoria === "videojuego" && entry.plataformas && entry.plataformas.length) {
    const tags = entry.plataformas.map(key => {
      const label = PLATFORM_LABELS[key] || key;
      const color = PLATFORM_COLORS[key] || "#9aa1ac";
      const text = PLATFORM_TEXT_COLORS[key] || "#ffffff";
      return `<span class="platform-tag" style="--platform-color:${color};--platform-text:${text}">${label}</span>`;
    }).join("");
    return `<div class="platform-tags">${tags}</div>`;
  }
  if (entry.generos && entry.generos.length) {
    const color = `var(--cat-${entry.categoria})`;
    const tags = entry.generos.map(g =>
      `<span class="platform-tag" style="--platform-color:${color};--platform-text:#1f1f1e">${g}</span>`
    ).join("");
    return `<div class="platform-tags">${tags}</div>`;
  }
  return "";
}

function cardMarkup(entry) {
  const year = entry.fecha ? entry.fecha.slice(0, 4) : "";
  const fechaLegible = entry.fecha
    ? new Date(entry.fecha + "T00:00:00").toLocaleDateString("es-MX", { day: "numeric", month: "short", year: "numeric" })
    : "";

  return `
    <article class="card" data-categoria="${entry.categoria}" data-year="${year}" tabindex="0">
      <span class="badge ${entry.categoria}"><i class="${CATEGORY_ICONS[entry.categoria] || 'fa-solid fa-tag'}"></i> ${CATEGORY_LABELS[entry.categoria] || entry.categoria}</span>
      <img src="${entry.imagen}" alt="${entry.titulo}" loading="lazy">
      ${metaTagsMarkup(entry)}
      <div class="title-bar">${entry.titulo}</div>
      <div class="overlay">
        <div class="overlay-title">${entry.titulo}</div>
        <div class="stars" aria-label="Puntuación ${entry.puntuacion} de 5">${starsMarkup(entry.puntuacion)}</div>
        ${entry.resena ? `<div class="resena">${entry.resena}</div>` : ""}
        ${fechaLegible ? `<div class="fecha">Publicado el ${fechaLegible}</div>` : ""}
      </div>
    </article>
  `;
}

function populateYears() {
  const years = [...new Set(entries.map(e => e.fecha ? e.fecha.slice(0, 4) : null).filter(Boolean))].sort((a, b) => b - a);
  yearSelect.innerHTML = `<option value="todos">Todos</option>` + years.map(y => `<option value="${y}">${y}</option>`).join("");
}

function render() {
  const filtered = entries.filter(e => {
    const matchCat = activeFilter === "todos" || e.categoria === activeFilter;
    const matchYear = activeYear === "todos" || (e.fecha && e.fecha.slice(0, 4) === activeYear);
    const matchSearch = !activeSearch || e.titulo.toLowerCase().includes(activeSearch);
    return matchCat && matchYear && matchSearch;
  });

  filtered.sort((a, b) => (b.fecha || "").localeCompare(a.fecha || ""));

  grid.innerHTML = filtered.map(cardMarkup).join("");
  emptyState.hidden = filtered.length !== 0;
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    render();
  });
});

yearSelect.addEventListener("change", () => {
  activeYear = yearSelect.value;
  render();
});

searchInput.addEventListener("input", () => {
  activeSearch = searchInput.value.trim().toLowerCase();
  render();
});

populateYears();
render();

document.getElementById("copyrightYear").textContent = new Date().getFullYear();
