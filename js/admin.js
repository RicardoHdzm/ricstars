const GITHUB_OWNER = "RicardoHdzm";
const GITHUB_REPO = "ricstars";
const GITHUB_BRANCH = "gh-pages";
const DATA_PATH = "js/data.js";
const TOKEN_STORAGE_KEY = "ricstars_gh_pat";

const form = document.getElementById("addForm");
const tokenInput = document.getElementById("token");
const rememberToken = document.getElementById("rememberToken");
const statusEl = document.getElementById("status");
const submitBtn = document.getElementById("submitBtn");
const puntuacionInput = document.getElementById("puntuacion");
const ratingPreview = document.getElementById("ratingPreview");
const fechaInput = document.getElementById("fecha");
const successBanner = document.getElementById("successBanner");
const successMessage = document.getElementById("successMessage");
const addAnotherBtn = document.getElementById("addAnotherBtn");

addAnotherBtn.addEventListener("click", () => {
  const token = tokenInput.value;
  const remember = rememberToken.checked;
  form.reset();
  form.hidden = false;
  successBanner.hidden = true;
  setStatus("");
  fechaInput.valueAsDate = new Date();
  puntuacionInput.value = 5;
  updateRatingPreview();
  if (remember) {
    tokenInput.value = token;
    rememberToken.checked = true;
  }
});

const savedToken = localStorage.getItem(TOKEN_STORAGE_KEY);
if (savedToken) {
  tokenInput.value = savedToken;
  rememberToken.checked = true;
}

fechaInput.valueAsDate = new Date();

function updateRatingPreview() {
  const value = parseFloat(puntuacionInput.value) || 0;
  ratingPreview.innerHTML = starsMarkup(value);
}
puntuacionInput.addEventListener("input", updateRatingPreview);
updateRatingPreview();

function setStatus(msg, isError = false) {
  statusEl.textContent = msg;
  statusEl.className = isError ? "status error" : "status";
}

function slugify(text) {
  const accented = "áéíóúüñÁÉÍÓÚÜÑ";
  const plain = "aeiouunAEIOUUN";
  let result = text.toLowerCase();
  for (let i = 0; i < accented.length; i++) {
    result = result.split(accented[i]).join(plain[i].toLowerCase());
  }
  return result
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function bufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

function utf8ToBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function base64ToUtf8(str) {
  return decodeURIComponent(escape(atob(str.replace(/\n/g, ""))));
}

async function githubRequest(path, options = {}) {
  const token = tokenInput.value.trim();
  const res = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`, {
    method: options.method || "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/vnd.github+json",
      ...(options.body ? { "Content-Type": "application/json" } : {})
    },
    body: options.body
  });
  const payload = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(payload.message || `Error ${res.status}`);
  }
  return payload;
}

function serializeEntries(entriesArray) {
  const header = `// ============================================================
// Aquí agregas cada videojuego, película, serie o libro que
// termines. Este archivo se actualiza automáticamente desde
// admin.html — también puedes editarlo a mano si prefieres.
//
// categoria: "videojuego" | "pelicula" | "serie" | "libro"
// puntuacion: número del 1 al 5 (acepta medios puntos, ej. 3.5)
// imagen: ruta a la portada/carátula (guárdala en assets/img/)
// fecha: cuándo lo terminaste, formato AAAA-MM-DD
// ============================================================

`;
  const body = entriesArray.map(e => `  {
    id: ${e.id},
    titulo: ${JSON.stringify(e.titulo)},
    categoria: ${JSON.stringify(e.categoria)},
    imagen: ${JSON.stringify(e.imagen)},
    resena: ${JSON.stringify(e.resena)},
    puntuacion: ${e.puntuacion},
    fecha: ${JSON.stringify(e.fecha)}
  }`).join(",\n");

  return `${header}const entries = [\n${body}\n];\n`;
}

function parseEntries(jsSource) {
  const fn = new Function(`${jsSource}\nreturn entries;`);
  return fn();
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  submitBtn.disabled = true;

  const token = tokenInput.value.trim();
  if (rememberToken.checked) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
  } else {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  }

  try {
    const titulo = document.getElementById("titulo").value.trim();
    const categoria = document.getElementById("categoria").value;
    const resena = document.getElementById("resena").value.trim();
    const puntuacion = parseFloat(puntuacionInput.value);
    const fecha = fechaInput.value;
    const file = document.getElementById("imagen").files[0];

    if (!file) throw new Error("Selecciona una imagen.");

    setStatus("Leyendo catálogo actual...");
    const current = await githubRequest(`${DATA_PATH}?ref=${GITHUB_BRANCH}`);
    const currentEntries = parseEntries(base64ToUtf8(current.content));

    const nextId = currentEntries.reduce((max, e) => Math.max(max, e.id), 0) + 1;
    const ext = file.name.split(".").pop().toLowerCase();
    const imagePath = `assets/img/${slugify(titulo)}-${nextId}.${ext}`;

    setStatus("Subiendo imagen...");
    const imageBuffer = await file.arrayBuffer();
    await githubRequest(imagePath, {
      method: "PUT",
      body: JSON.stringify({
        message: `Agregar imagen: ${titulo}`,
        content: bufferToBase64(imageBuffer),
        branch: GITHUB_BRANCH
      })
    });

    const newEntry = { id: nextId, titulo, categoria, imagen: imagePath, resena, puntuacion, fecha };
    const newSource = serializeEntries([...currentEntries, newEntry]);

    setStatus("Guardando entrada...");
    await githubRequest(DATA_PATH, {
      method: "PUT",
      body: JSON.stringify({
        message: `Agregar: ${titulo}`,
        content: utf8ToBase64(newSource),
        sha: current.sha,
        branch: GITHUB_BRANCH
      })
    });

    setStatus("");
    successMessage.textContent = `"${titulo}" se guardó correctamente. GitHub Pages tarda ~30-60s en mostrarlo en el sitio — no vuelvas a enviar este formulario para la misma entrada.`;
    successBanner.hidden = false;
    form.hidden = true;
    successBanner.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (err) {
    setStatus(`Error: ${err.message}`, true);
  } finally {
    submitBtn.disabled = false;
  }
});
