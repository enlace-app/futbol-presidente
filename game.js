// ============================================================================
// FÚTBOL PRESIDENTE — MOTOR CON NAVEGACIÓN DE SUB-CATEGORÍAS Y GRÁFICOS DE RENDIMIENTO
// ============================================================================

const TEAMS = {
  "Real Madrid": {
    badge: "⚪", budget: 140, prestige: 99,
    cultura: { estilo: 75, cantera: 55, defensa: 45 },
    players: [
      { id:1, name:"Vinicius Jr.", pos:"DEL", rating:92, age:25, salary:18, value:200 },
      { id:2, name:"Jude Bellingham", pos:"MED", rating:91, age:22, salary:16, value:180 },
      { id:3, name:"Kylian Mbappé", pos:"DEL", rating:93, age:27, salary:22, value:210 },
      { id:4, name:"Federico Valverde", pos:"MED", rating:89, age:27, salary:12, value:120 },
      { id:5, name:"Thibaut Courtois", pos:"POR", rating:89, age:34, salary:14, value:35 },
      { id:6, name:"Antonio Rüdiger", pos:"DEF", rating:88, age:33, salary:11, value:45 }
    ]
  },
  "FC Barcelona": {
    badge: "🔵🔴", budget: 85, prestige: 97,
    cultura: { estilo: 92, cantera: 88, defensa: 35 },
    players: [
      { id:11, name:"Lamine Yamal", pos:"DEL", rating:91, age:18, salary:10, value:190 },
      { id:12, name:"Pedri González", pos:"MED", rating:88, age:23, salary:12, value:110 },
      { id:13, name:"Gavi", pos:"MED", rating:86, age:21, salary:9, value:90 },
      { id:14, name:"Ronald Araújo", pos:"DEF", rating:87, age:27, salary:10, value:70 },
      { id:15, name:"M. ter Stegen", pos:"POR", rating:86, age:34, salary:11, value:22 }
    ]
  }
};

const RIVALES = [
  { name:"Sevilla FC", strength:76 }, { name:"Real Sociedad", strength:81 },
  { name:"Athletic Club", strength:82 }, { name:"Villarreal CF", strength:79 }
];

const TRANSFERS = [
  { name:"Erling Haaland", pos:"DEL", rating:93, age:25, value:175, salary:22, club:"Man. City" },
  { name:"Florian Wirtz", pos:"MED", rating:89, age:23, value:115, salary:12, club:"B. Leverkusen" },
  { name:"Nico Williams", pos:"DEL", rating:86, age:23, value:85, salary:9, club:"Athletic Club" }
];

let G = {};

function renderTeamList() {
  const container = document.getElementById("team-selector-list");
  if (!container) return; container.innerHTML = "";
  Object.keys(TEAMS).forEach(name => {
    const data = TEAMS[name];
    const card = document.createElement("div");
    card.className = "team-card";
    card.onclick = () => iniciarJuego(name);
    card.innerHTML = `<div><span>${data.badge}</span> <strong>${name}</strong></div><div class="neon-badge">ELEGIR</div>`;
    container.appendChild(card);
  });
}

function iniciarJuego(teamName) {
  const pres = document.getElementById("president-name").value.trim() || "Presidente";
  const td = TEAMS[teamName];
  G = {
    team: teamName, president: pres, players: td.players.map(p => ({ ...p })),
    budget: td.budget, points: 0, wins: 0, draws: 0, losses: 0, week: 1,
    cultura: { ...td.cultura }, news: ["🖋️ Contrato oficial firmado."]
  };
  document.getElementById("sb-pres").textContent = G.president;
  document.getElementById("sb-team").textContent = td.badge + " " + G.team;
  showScreen("main");
  navigate("corporativo", "resumen");
}

function teamStrength() {
  if (!G.players.length) return 0;
  return Math.round(G.players.reduce((s,p) => s + p.rating, 0) / G.players.length);
}

// ── NAVEGACIÓN AVANZADA POR SUB-CATEGORÍAS ──
function navigate(categoria, subcategoria) {
  // Ocultar todos los subpaneles
  document.querySelectorAll(".subpanel").forEach(p => p.style.display = "none");
  
  // Mostrar subpanel seleccionado
  const activeSub = document.getElementById(`sub-${subcategoria}`);
  if (activeSub) activeSub.style.display = "block";

  // Cambiar estilo activo en enlaces del menú lateral
  document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
  const clickedLink = Array.from(document.querySelectorAll(".nav-link")).find(l => l.getAttribute("onclick").includes(`'${subcategoria}'`));
  if (clickedLink) clickedLink.classList.add("active");

  if (window.innerWidth <= 768) toggleSidebar(); // Cerrar menú en móviles automáticamente
  renderWorkspace();
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
}

function simularPartido() {
  const rival = RIVALES[Math.floor(Math.random() * RIVALES.length)];
  const str = teamStrength();
  const score = str - rival.strength + (Math.random() - 0.5) * 15;

  let myG = Math.max(0, Math.round(Math.random() * 2 + (score > 2 ? 1 : 0)));
  let thG = Math.max(0, Math.round(Math.random() * 2 + (score < -2 ? 1 : 0)));

  if (myG > thG) { G.points += 3; G.wins++; }
  else if (myG === thG) { G.points += 1; G.draws++; }
  else { G.losses++; }

  // Restar nóminas
  const sueldos = G.players.reduce((sum, p) => sum + (p.salary / 10), 0);
  G.budget = Math.max(0, Math.round((G.budget - sueldos) * 10) / 10);
  G.week++;

  G.news.unshift(`J${G.week-1}: ${G.team} ${myG}-${thG} ${rival.name}`);
  document.getElementById("narrativa-match").textContent = `Crónica: Choque táctico intenso. El equipo finalizó el encuentro contra el ${rival.name} anotando ${myG} goles y encajando ${thG}.`;
  
  renderWorkspace();
}

function preguntaLibre() {
  const ans = document.getElementById("narrativa-consejero");
  ans.textContent = "Calculando ratios financieros... Recomendación: Controlar el gasto de plantilla para evitar bloqueos institucionales.";
}

function ajustarCultura(clave, val) {
  G.cultura[clave] = Math.min(100, Math.max(0, G.cultura[clave] + val));
  renderWorkspace();
}

function comprarJugador(idx) {
  const t = TRANSFERS[idx];
  if (G.budget >= t.value) {
    G.budget -= t.value;
    G.players.push({ id: Date.now(), ...t });
    G.news.unshift(`🤝 FICHADO: ${t.name}`);
    renderWorkspace();
  } else {
    alert("Fondos insuficientes en tesorería.");
  }
}

// ── RENDERIZADO DE WORKSPACE Y GRÁFICOS REALISTAS ──
function renderWorkspace() {
  document.getElementById("tb-budget").textContent = G.budget + "M€";
  document.getElementById("tb-points").textContent = G.points + " PTS";
  document.getElementById("tb-week").textContent = G.week;

  // Actualizar Gráfico Radial Puro CSS (Media de Equipo)
  const str = teamStrength();
  const graph = document.getElementById("graph-strength");
  if (graph) {
    graph.style.setProperty("--p", str);
    graph.innerHTML = `<span>${str}</span>`;
  }

  // Sub-Finanzas
  const finPres = document.getElementById("fin-pres");
  if (finPres) {
    finPres.textContent = G.budget + "M€";
    document.getElementById("fin-salarios").textContent = G.players.reduce((sum, p) => sum + (p.salary / 10), 0).toFixed(1) + "M€ / sem";
  }

  // Dashboard de liga
  const db = document.getElementById("stats-dashboard");
  if (db) {
    db.innerHTML = `
      <div class="card" style="text-align:center; margin:0; padding:10px;">🟢 <b>${G.wins}</b><br><small>VICTORIAS</small></div>
      <div class="card" style="text-align:center; margin:0; padding:10px;">🟡 <b>${G.draws}</b><br><small>EMPATES</small></div>
      <div class="card" style="text-align:center; margin:0; padding:10px;">🔴 <b>${G.losses}</b><br><small>DERROTAS</small></div>
    `;
  }

  // Lista de noticias
  const nl = document.getElementById("news-list");
  if (nl) nl.innerHTML = G.news.map(n => `<div class="news-item">${n}</div>`).join("");

  // Sub-Plantilla
  const sq = document.getElementById("squad-list");
  if (sq) {
    sq.innerHTML = `<h3>📋 PLANTILLA DE PROFESIONALES (${G.players.length})</h3>` + G.players.map(p => `
      <div class="player-card">
        <div><span class="pos-badge" style="background:rgba(0,240,255,0.1); color:var(--neon)">${p.pos}</span> <b>${p.name}</b> <small style="color:var(--muted)">(${p.age} años)</small></div>
        <div style="display:flex; gap:15px; align-items:center;">
          <div><span class="rating">${p.rating}</span><br><small style="font-size:8px; color:var(--muted)">MEDIA</small></div>
          <div style="color:var(--green); font-weight:700;">${p.value}M€</div>
        </div>
      </div>
    `).join("");
  }

  // Sub-Táctica
  const cl = document.getElementById("cultura-list");
  if (cl) {
    cl.innerHTML = Object.keys(G.cultura).map(k => `
      <div class="card">
        <div style="display:flex; justify-content:space-between; font-weight:bold;"><span>🎯 Enfoque en ${k.toUpperCase()}</span> <span>${G.cultura[k]}%</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${G.cultura[k]}%; background:var(--neon2)"></div></div>
        <div style="display:flex; gap:10px; margin-top:8px;">
          <button class="btn btn-gray" onclick="ajustarCultura('${k}', -10)" style="flex:1; padding:4px;">▼ REDUCIR</button>
          <button class="btn btn-gray" onclick="ajustarCultura('${k}', 10)" style="flex:1; padding:4px;">▲ SUBIR</button>
        </div>
      </div>
    `).join("");
  }

  // Sub-Mercado
  const tl = document.getElementById("transfer-list");
  if (tl) {
    tl.innerHTML = `<h3>🌟 TRASPASOS DISPONIBLES</h3>` + TRANSFERS.map((t, i) => `
      <div class="player-card">
        <div><b>${t.name}</b><br><small style="color:var(--muted)">${t.club} · ${t.pos}</small></div>
        <div style="display:flex; gap:15px; align-items:center;">
          <div class="rating">${t.rating}</div>
          <div style="color:var(--green); font-weight:bold;">${t.value}M€</div>
          <button class="btn btn-neon" onclick="comprarJugador(${i})">FICHAR</button>
        </div>
      </div>
    `).join("");
  }
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("screen-" + id).classList.add("active");
}

window.onload = () => showScreen("intro");
