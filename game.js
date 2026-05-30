// ============================================================================
// FÚTBOL PRESIDENTE — MOTOR DE SIMULACIÓN ULTRA REALISTA DE LIGA COMPLETA
// ============================================================================

// Base de datos de equipos de LaLiga con perfiles tácticos y fuerzas reales de plantilla
const SEEDS_TEAMS = {
  "Real Madrid":       { badge: "⚪", budget: 140, strength: 91, cultura: { estilo: 75, cantera: 55, defensa: 45 } },
  "FC Barcelona":      { badge: "🔵🔴", budget: 85, strength: 88, cultura: { estilo: 92, cantera: 88, defensa: 35 } },
  "Atlético de Madrid":{ badge: "🔴⚪", budget: 110, strength: 85, cultura: { estilo: 45, cantera: 55, defensa: 85 } },
  "Athletic Club":     { badge: "🦁", budget: 45,  strength: 82, cultura: { estilo: 60, cantera: 95, defensa: 70 } },
  "Real Sociedad":     { badge: "🔵⚪", budget: 40,  strength: 81, cultura: { estilo: 80, cantera: 75, defensa: 65 } },
  "Villarreal CF",     { badge: "💛", budget: 35,  strength: 79, cultura: { estilo: 75, cantera: 70, defensa: 50 } },
  "Real Betis",        { badge: "💚", budget: 30,  strength: 78, cultura: { estilo: 70, cantera: 60, defensa: 55 } },
  "Girona FC",         { badge: "❤️", budget: 28,  strength: 80, cultura: { estilo: 85, cantera: 50, defensa: 45 } },
  "Sevilla FC",        { badge: "⚱️", budget: 25,  strength: 76, cultura: { estilo: 55, cantera: 65, defensa: 60 } },
  "Valencia CF",       { badge: "🦇", budget: 20,  strength: 74, cultura: { estilo: 50, cantera: 80, defensa: 65 } }
};

// Jugadores iniciales exclusivos asignados cuando el jugador selecciona su club preferido
const STARTER_PLAYERS = {
  "Real Madrid": [
    { id:1, name:"Vinicius Jr.", pos:"DEL", rating:92, age:25, salary:18, value:200 },
    { id:2, name:"Jude Bellingham", pos:"MED", rating:91, age:22, salary:16, value:180 },
    { id:3, name:"Kylian Mbappé", pos:"DEL", rating:93, age:27, salary:22, value:210 },
    { id:4, name:"Federico Valverde", pos:"MED", rating:89, age:27, salary:12, value:120 },
    { id:5, name:"Thibaut Courtois", pos:"POR", rating:89, age:34, salary:14, value:35 },
    { id:6, name:"Antonio Rüdiger", pos:"DEF", rating:88, age:33, salary:11, value:45 }
  ],
  "FC Barcelona": [
    { id:11, name:"Lamine Yamal", pos:"DEL", rating:91, age:18, salary:10, value:190 },
    { id:12, name:"Pedri González", pos:"MED", rating:88, age:23, salary:12, value:110 },
    { id:13, name:"Gavi", pos:"MED", rating:86, age:21, salary:9, value:90 },
    { id:14, name:"Ronald Araújo", pos:"DEF", rating:87, age:27, salary:10, value:70 },
    { id:15, name:"M. ter Stegen", pos:"POR", rating:86, age:34, salary:11, value:22 }
  ]
};

const TRANSFERS = [
  { name:"Erling Haaland", pos:"DEL", rating:93, age:25, value:175, salary:22, club:"Man. City" },
  { name:"Florian Wirtz", pos:"MED", rating:89, age:23, value:115, salary:12, club:"B. Leverkusen" },
  { name:"Nico Williams", pos:"DEL", rating:86, age:23, value:85, salary:9, club:"Athletic Club" }
];

let G = {};

function renderTeamList() {
  const container = document.getElementById("team-selector-list");
  if (!container) return; container.innerHTML = "";
  Object.keys(SEEDS_TEAMS).forEach(name => {
    const data = SEEDS_TEAMS[name];
    const card = document.createElement("div");
    card.className = "team-card";
    card.onclick = () => iniciarJuego(name);
    card.innerHTML = `<div><span>${data.badge}</span> <strong>${name}</strong></div><div class="neon-badge">ELEGIR</div>`;
    container.appendChild(card);
  });
}

function iniciarJuego(teamName) {
  const pres = document.getElementById("president-name").value.trim() || "Presidente";
  
  // Construir la estructura de la liga
  const listaLiga = [];
  Object.keys(SEEDS_TEAMS).forEach(name => {
    const seed = SEEDS_TEAMS[name];
    listaLiga.push({
      name: name,
      badge: seed.badge,
      strength: seed.strength,
      points: 0, wins: 0, draws: 0, losses: 0,
      goalsFor: 0, goalsAgainst: 0
    });
  });

  const pStarter = STARTER_PLAYERS[teamName] || [
    { id:99, name:"Canterano Promesa", pos:"MED", rating:75, age:19, salary:1, value:12 }
  ];

  G = {
    team: teamName,
    president: pres,
    players: pStarter.map(p => ({ ...p })),
    budget: SEEDS_TEAMS[teamName].budget,
    week: 1,
    cultura: { ...SEEDS_TEAMS[teamName].cultura },
    news: ["🖋️ Contrato oficial firmado e inicio de la competición."],
    liga: listaLiga,
    historialPartidos: []
  };

  document.getElementById("sb-pres").textContent = G.president;
  document.getElementById("sb-team").textContent = SEEDS_TEAMS[teamName].badge + " " + G.team;
  
  generarCalendarioLiga();
  showScreen("main");
  navigate("corporativo", "resumen");
}

// ── GENERADOR DE CALENDARIO MATEMÁTICO (ROUND ROBIN) ──
function generarCalendarioLiga() {
  const equipos = G.liga.map(e => e.name);
  const numEquipos = equipos.length;
  const jornadas = [];

  // Algoritmo de emparejamiento rotativo para simular un fixture real
  for (let j = 0; j < (numEquipos - 1) * 2; j++) {
    const partidosJornada = [];
    for (let i = 0; i < numEquipos / 2; i++) {
      const local = (j + i) % (numEquipos - 1);
      let visitante = (numEquipos - 1 - i + j) % (numEquipos - 1);
      if (i === 0) visitante = numEquipos - 1;

      // Alternar localía en la segunda vuelta
      if (j >= numEquipos - 1) {
        partidosJornada.push({ local: equipos[visitante], visitante: equipos[local] });
      } else {
        partidosJornada.push({ local: equipos[local], visitante: equipos[visitante] });
      }
    }
    jornadas.push(partidosJornada);
  }
  G.calendario = jornadas;
}

function teamStrength() {
  if (!G.players.length) return 0;
  return Math.round(G.players.reduce((s,p) => s + p.rating, 0) / G.players.length);
}

// ── SIMULADOR INTEGRAL Y SIMULTÁNEO DE JORNADA DE LIGA ──
function simularJornadaCompleta() {
  const totalJornadas = G.calendario.length;
  if (G.week > totalJornadas) {
    alert("Fin de temporada alcanzado. La competición ha concluido.");
    return;
  }

  // Obtener los enfrentamientos programados para esta jornada concreta
  const partidosHoy = G.calendario[G.week - 1];
  let cronicaTuPartido = "";

  partidosHoy.forEach(partido => {
    // Buscar datos estadísticos estructurales de los contrincantes
    const eqLocal = G.liga.find(e => e.name === partido.local);
    const eqVis   = G.liga.find(e => e.name === partido.visitante);

    // Si eres tú, calcular fuerza real de tu plantilla actual
    const strLocal = (eqLocal.name === G.team) ? teamStrength() : eqLocal.strength;
    const strVis   = (eqVis.name === G.team) ? teamStrength() : eqVis.strength;

    // Algoritmo híbrido probabilístico con ventaja de campo (+2 fuerza al local)
    const diff = (strLocal + 2) - strVis;
    const factorAleatorio = (Math.random() - 0.5) * 18;
    const formulaMecanica = diff + factorAleatorio;

    let golesLocal = Math.max(0, Math.round(Math.random() * 2 + (formulaMecanica > 3 ? 1 : 0)));
    let golesVis   = Math.max(0, Math.round(Math.random() * 2 + (formulaMecanica < -3 ? 1 : 0)));

    // Actualizar datos de goles en el histórico de la liga
    eqLocal.goalsFor += golesLocal; eqLocal.goalsAgainst += golesVis;
    eqVis.goalsFor   += golesVis;   eqVis.goalsAgainst   += golesLocal;
    eqLocal.points   += (golesLocal > golesVis) ? 3 : (golesLocal === golesVis) ? 1 : 0;
    eqVis.points     += (golesVis > golesLocal) ? 3 : (golesLocal === golesVis) ? 1 : 0;

    if (golesLocal > golesVis) { eqLocal.wins++; eqVis.losses++; }
    else if (golesLocal === golesVis) { eqLocal.draws++; eqVis.draws++; }
    else { eqVis.wins++; eqLocal.losses++; }

    // Guardar traza si involucra al club del usuario directivo
    if (partido.local === G.team || partido.visitante === G.team) {
      const gTuClub = (partido.local === G.team) ? golesLocal : golesVis;
      const gRival  = (partido.local === G.team) ? golesVis : golesLocal;
      const rivalName = (partido.local === G.team) ? partido.visitante : partido.local;
      
      let resLabel = "empate";
      if(gTuClub > gRival) resLabel = "victoria";
      if(gTuClub < gRival) resLabel = "derrota";

      cronicaTuPartido = `Encuentro disputado frente al ${rivalName}. Resultado final: ${gTuClub} - ${gRival}.`;
      showResultBanner(gTuClub, gRival, rivalName, resLabel);
      G.news.unshift(`J${G.week}: ${G.team} ${gTuClub}-${gRival} ${rivalName}`);
    }
  });

  // Balance económico semanal: Deducir masa salarial prorrateada
  const sueldos = G.players.reduce((sum, p) => sum + (p.salary / 10), 0);
  G.budget = Math.max(0, Math.round((G.budget - sueldos) * 10) / 10);

  G.week++;
  document.getElementById("narrativa-match").textContent = cronicaTuPartido + " El resto de los clubes de la liga han completado sus cruces correspondientes en paralelo.";
  
  // Ordenar la liga automáticamente por puntos y gol average
  G.liga.sort((a,b) => {
    if(b.points !== a.points) return b.points - a.points;
    return (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst);
  });

  renderWorkspace();
}

function showResultBanner(mg, tg, rival, result) {
  const banner = document.getElementById("result-banner");
  if (!banner) return;
  const colors = { victoria:["#064e3b","#10b981"], empate:["#78350f","#f59e0b"], derrota:["#7f1d1d","#ef4444"] };
  const [bg, accent] = colors[result];
  banner.style.background = bg;
  banner.style.border = `1px solid ${accent}`;
  banner.style.display = "flex";
  banner.innerHTML = `
    <div>
      <div style="font-size:10px; color:#94a3b8; letter-spacing:1px; font-weight:bold;">RESULTADO OFICIAL</div>
      <div class="result-score">${G.team} ${mg} - ${tg} ${rival}</div>
    </div>
    <div style="color:${accent}; font-weight:900; font-family:'Orbitron';">${result.toUpperCase()}</div>
  `;
}

function navigate(categoria, subcategoria) {
  document.querySelectorAll(".subpanel").forEach(p => p.style.display = "none");
  const activeSub = document.getElementById(`sub-${subcategoria}`);
  if (activeSub) activeSub.style.display = "block";

  document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
  const clickedLink = Array.from(document.querySelectorAll(".nav-link")).find(l => l.getAttribute("onclick").includes(`'${subcategoria}'`));
  if (clickedLink) clickedLink.classList.add("active");

  if (window.innerWidth <= 768) toggleSidebar();
  renderWorkspace();
}

function toggleSidebar() { document.getElementById("sidebar").classList.toggle("open"); }
function cerrarModal() { document.getElementById("modal-overlay").classList.remove("open"); }

function comprarJugador(idx) {
  const t = TRANSFERS[idx];
  if (G.budget >= t.value) {
    G.budget -= t.value;
    G.players.push({ id: Date.now(), ...t });
    G.news.unshift(`🤝 FICHADO: ${t.name}`);
    renderWorkspace();
  } else { alert("Tesorería insuficiente."); }
}

function ajustarCultura(clave, val) {
  G.cultura[clave] = Math.min(100, Math.max(0, G.cultura[clave] + val));
  renderWorkspace();
}

function preguntaLibre() {
  document.getElementById("narrativa-consejero").textContent = "Análisis: La viabilidad financiera está ligada a mantenerse en los puestos de vanguardia clasificatoria para asegurar ingresos de patrocinio.";
}

// ── COMPONENTE DE RENDERIZACIÓN DINÁMICA DE LA TABLA DE LIGA ──
function renderWorkspace() {
  // Encontrar tu posición en la tabla ordenada
  const miPosicionIdx = G.liga.findIndex(e => e.name === G.team) + 1;
  const misDatos = G.liga.find(e => e.name === G.team);

  document.getElementById("tb-budget").textContent = G.budget + "M€";
  document.getElementById("tb-pos").textContent = miPosicionIdx + "º";
  document.getElementById("tb-week").textContent = G.week;

  // Renderizar información del fixture próximo en el despacho
  const fixBox = document.getElementById("fixture-next-match");
  if (fixBox && G.calendario[G.week - 1]) {
    const miPartido = G.calendario[G.week - 1].find(p => p.local === G.team || p.visitante === G.team);
    if(miPartido) {
      fixBox.innerHTML = ` Próximo encuentro: <span style="color:var(--neon)">${miPartido.local} vs ${miPartido.visitante}</span>`;
    }
  }

  // Gráfico Radial
  const str = teamStrength();
  const graph = document.getElementById("graph-strength");
  if (graph) {
    graph.style.setProperty("--p", str);
    graph.innerHTML = `<span>${str}</span>`;
  }

  // Finanzas
  const finPres = document.getElementById("fin-pres");
  if (finPres) {
    finPres.textContent = G.budget + "M€";
    document.getElementById("fin-salarios").textContent = G.players.reduce((sum, p) => sum + (p.salary / 10), 0).toFixed(1) + "M€ / sem";
  }

  // Historial resumido en cartas
  const db = document.getElementById("stats-dashboard");
  if (db && misDatos) {
    db.innerHTML = `
      <div class="card" style="text-align:center; margin:0; padding:10px;">🟢 <b>${misDatos.wins}</b><br><small>PG</small></div>
      <div class="card" style="text-align:center; margin:0; padding:10px;">🟡 <b>${misDatos.draws}</b><br><small>PE</small></div>
      <div class="card" style="text-align:center; margin:0; padding:10px;">🔴 <b>${misDatos.losses}</b><br><small>PP</small></div>
    `;
  }

  // Inyección de filas en la tabla de clasificación real
  const tbody = document.getElementById("clasificacion-body");
  if (tbody) {
    tbody.innerHTML = G.liga.map((eq, index) => {
      const esMiEquipo = eq.name === G.team;
      return `
        <tr class="${esMiEquipo ? 'my-team-row' : ''}">
          <td><b>${index + 1}</b></td>
          <td style="text-align:left;">${eq.badge} ${eq.name}</td>
          <td style="color:var(--gold)">${eq.points}</td>
          <td>${eq.wins + eq.draws + eq.losses}</td>
          <td>${eq.wins}</td>
          <td>${eq.draws}</td>
          <td>${eq.losses}</td>
          <td>${eq.goalsFor}</td>
          <td>${eq.goalsAgainst}</td>
        </tr>
      `;
    }).join("");
  }

  // Feed de noticias
  const nl = document.getElementById("news-list");
  if (nl) nl.innerHTML = G.news.map(n => `<div class="news-item">${n}</div>`).join("");

  // Sub-Plantilla
  const sq = document.getElementById("squad-list");
  if (sq) {
    sq.innerHTML = `<h3>📋 COMPOSICIÓN DE LA PLANTILLA PROFESIONAL</h3>` + G.players.map(p => `
      <div class="player-card">
        <div><span class="pos-badge" style="background:rgba(0,240,255,0.1); color:var(--neon)">${p.pos}</span> <b>${p.name}</b></div>
        <div style="display:flex; gap:15px; align-items:center;">
          <div><span class="rating">${p.rating}</span></div>
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
        <div style="display:flex; justify-content:space-between; font-weight:bold;"><span>🎯 Enfoque ${k.toUpperCase()}</span> <span>${G.cultura[k]}%</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${G.cultura[k]}%; background:var(--neon2)"></div></div>
        <div style="display:flex; gap:10px; margin-top:8px;">
          <button class="btn btn-gray" onclick="ajustarCultura('${k}', -10)" style="flex:1; padding:4px;">▼ REDUCIR</button>
          <button class="btn btn-gray" onclick="ajustarCultura('${k}', 10)" style="flex:1; padding:4px;">▲ ENFATIZAR</button>
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
