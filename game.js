// ═══════════════════════════════════════════
//  FÚTBOL PRESIDENTE — game.js (EDICIÓN REAL LALIGA 2026)
// ═══════════════════════════════════════════

// ── DATOS TOTALES DE EQUIPOS REALES Y PLANTILLAS ACTUALIZADAS ──
const TEAMS = {
  "Real Madrid": {
    badge: "⚪", color: "#00529f", budget: 140, prestige: 99,
    cultura: { estilo: 75, cantera: 55, defensa: 45 },
    players: [
      { id:1,  name:"Vinicius Jr.",       pos:"DEL", rating:92, age:25, salary:18, value:200, morale:85, historia:"La estrella brasileña capaz de romper cualquier bloque bajo." },
      { id:2,  name:"Jude Bellingham",    pos:"MED", rating:91, age:22, salary:16, value:180, morale:90, historia:"El todocampista total que maneja el compás de la Castellana." },
      { id:3,  name:"Kylian Mbappé",      pos:"DEL", rating:93, age:27, salary:22, value:210, morale:80, historia:"La fuerza de la naturaleza francesa asentada en la delantera." },
      { id:4,  name:"Federico Valverde",  pos:"MED", rating:89, age:27, salary:12, value:120, morale:88, historia:"El halcón incombustible que equilibra el equipo." },
      { id:5,  name:"A. Tchouaméni",      pos:"MED", rating:86, age:26, salary:10, value:85,  morale:82, historia:"El ancla táctica del centro del campo madridista." },
      { id:6,  name:"Éder Militão",       pos:"DEF", rating:87, age:28, salary:9,  value:75,  morale:80, historia:"Central veloz y contundente al corte." },
      { id:7,  name:"Antonio Rüdiger",    pos:"DEF", rating:88, age:33, salary:11, value:45,  morale:89, historia:"Un líder carismático y un auténtico muro defensivo." },
      { id:8,  name:"Dani Carvajal",      pos:"DEF", rating:84, age:34, salary:7,  value:15,  morale:85, historia:"Veterano con corazón de canterano y alma competitiva." },
      { id:9,  name:"Thibaut Courtois",   pos:"POR", rating:89, age:34, salary:14, value:35,  morale:85, historia:"Un gigante bajo palos que salva partidos clave." },
      { id:10, name:"Rodrygo Goes",       pos:"DEL", rating:86, age:25, salary:11, value:95,  morale:81, historia:"Calidad pura en zona de tres cuartos y noches europeas." }
    ]
  },
  "FC Barcelona": {
    badge: "🔵🔴", color: "#a50021", budget: 85, prestige: 97,
    cultura: { estilo: 92, cantera: 88, defensa: 35 },
    players: [
      { id:11, name:"Lamine Yamal",       pos:"DEL", rating:91, age:18, salary:10, value:190, morale:92, historia:"La gran joya mundial del fútbol nacida en La Masía." },
      { id:12, name:"Pedri González",     pos:"MED", rating:88, age:23, salary:12, value:110, morale:85, historia:"El director de orquesta que ve huecos donde nadie más los ve." },
      { id:13, name:"Gavi",               pos:"MED", rating:86, age:21, salary:9,  value:90,  morale:88, historia:"Corazón, garra y despliegue físico innegociable." },
      { id:14, name:"Raphinha",           pos:"DEL", rating:86, age:29, salary:11, value:75,  morale:85, historia:"Extremo trabajador, explosivo y con gran golpeo lejano." },
      { id:15, name:"Robert Lewandowski", pos:"DEL", rating:85, age:37, salary:15, value:15,  morale:75, historia:"Goleador legendario que aporta la veteranía en el área." },
      { id:16, name:"Frenkie de Jong",    pos:"MED", rating:85, age:29, salary:14, value:55,  morale:70, historia:"Elegancia en la conducción y salida de balón controlada." },
      { id:17, name:"Ronald Araújo",      pos:"DEF", rating:87, age:27, salary:10, value:70,  morale:82, historia:"El baluarte defensivo más contundente del club." },
      { id:18, name:"Jules Koundé",       pos:"DEF", rating:85, age:27, salary:9,  value:60,  morale:80, historia:"Polivalencia absoluta en la línea defensiva de élite." },
      { id:19, name:"Alejandro Balde",    pos:"DEF", rating:83, age:22, salary:6,  value:50,  morale:83, historia:"Puñal de largo recorrido por la banda izquierda." },
      { id:20, name:"M. ter Stegen",      pos:"POR", rating:86, age:34, salary:11, value:22,  morale:78, historia:"Capitán y guardián del arco blaugrana." }
    ]
  },
  "Atlético de Madrid": {
    badge: "🔴⚪", color: "#cb3524", budget: 110, prestige: 91,
    cultura: { estilo: 45, cantera: 55, defensa: 85 },
    players: [
      { id:21, name:"Antoine Griezmann",  pos:"DEL", rating:86, age:35, salary:13, value:30,  morale:88, historia:"El jugador total del Cholo, cerebro y alma rojiblanca." },
      { id:22, name:"Julián Álvarez",     pos:"DEL", rating:86, age:26, salary:12, value:95,  morale:86, historia:"La Araña que muerde la salida rival y define con maestría." },
      { id:23, name:"Rodrigo De Paul",    pos:"MED", rating:84, age:32, salary:8,  value:35,  morale:78, historia:"Motor del mediocampo con carácter de campeón mundial." },
      { id:24, name:"Marcos Llorente",    pos:"MED", rating:83, age:31, salary:8,  value:32,  morale:83, historia:"Físico prodigioso capaz de ocupar todo el carril derecho." },
      { id:25, name:"Conor Gallagher",    pos:"MED", rating:83, age:26, salary:7,  value:48,  morale:85, historia:"Entrega absoluta, presión alta y llegada al área." },
      { id:26, name:"Robin Le Normand",   pos:"DEF", rating:83, age:29, salary:7,  value:40,  morale:82, historia:"Central serio, sobrio y dominante en el juego aéreo." },
      { id:27, name:"José María Giménez", pos:"DEF", rating:84, age:31, salary:7,  value:25,  morale:80, historia:"Líder uruguayo de la zaga en batallas defensivas extremas." },
      { id:28, name:"Samuel Lino",        pos:"DEL", rating:81, age:26, salary:5,  value:38,  morale:84, historia:"Desborde eléctrico e imaginación en banda izquierda." },
      { id:29, name:"Jan Oblak",          pos:"POR", rating:85, age:33, salary:11, value:28,  morale:82, historia:"Muro esloveno histórico bajo los palos del Metropolitano." }
    ]
  }
};

const RIVALES = [
  { name:"Sevilla FC",      strength:76 },
  { name:"Real Sociedad",   strength:81 },
  { name:"Athletic Club",   strength:82 },
  { name:"Villarreal CF",   strength:79 },
  { name:"Valencia CF",     strength:74 },
  { name:"Real Betis",      strength:78 },
  { name:"Girona FC",       strength:80 },
  { name:"Rayo Vallecano",  strength:70 },
  { name:"CA Osasuna",      strength:73 },
  { name:"Celta de Vigo",   strength:72 }
];

const EVENTOS_GLOBALES = [
  { texto:"💹 Crisis económica de derechos televisivos en el fútbol continental.", impacto: -20, tipo:"economico" },
  { texto:"📺 Firma de un macro-patrocinio internacional de publicidad estática.", impacto: +25, tipo:"economico" },
  { texto:"🦠 Infección vírica estomacal severa en el primer equipo.", impacto: -5, tipo:"rendimiento" },
  { texto:"🌟 Un fondo de inversión de capital privado inyecta liquidez en el club.", impacto: +35, tipo:"economico" },
  { texto:"⚡ Filtraciones de contratos confidenciales generan disputas internas.", impacto: -10, tipo:"reputacion" }
];

const TRANSFERS = {
  "Real Madrid": [
    { name:"Erling Haaland",  pos:"DEL", rating:93, age:25, value:175, salary:22, club:"Man. City" },
    { name:"Florian Wirtz",   pos:"MED", rating:89, age:23, value:115, salary:12, club:"B. Leverkusen" },
    { name:"Alphonso Davies",  pos:"DEF", rating:85, age:25, value:50,  salary:8,  club:"Bayern" }
  ],
  "FC Barcelona": [
    { name:"Nico Williams",   pos:"DEL", rating:86, age:23, value:85,  salary:9,  club:"Athletic Club" },
    { name:"Joshua Kimmich",  pos:"MED", rating:87, age:31, value:45,  salary:11, club:"Bayern" },
    { name:"Jonathan Tah",    pos:"DEF", rating:83, age:30, value:30,  salary:6,  club:"B. Leverkusen" }
  ],
  "Atlético de Madrid": [
    { name:"Lautaro Martínez",pos:"DEL", rating:88, age:28, value:90,  salary:12, club:"Inter" },
    { name:"N’Golo Kanté",    pos:"MED", rating:81, age:35, value:12,  salary:5,  club:"Al-Ittihad" },
    { name:"Aymeric Laporte",  pos:"DEF", rating:82, age:32, value:20,  salary:6,  club:"Al-Nassr" }
  ]
};

const EVENTOS_INTERNOS = [
  { titulo: "Descontento en el vestuario", descripcion: "Las rotaciones han dejado a varios suplentes molestos.", efecto: { moral: -8 } },
  { titulo: "Acuerdo comercial de equipación", descripcion: "Renovación anticipada de patrocinio técnico.", efecto: { dinero: 15000000 } },
  { titulo: "Plaga de lesiones musculares", descripcion: "Los preparadores físicos reportan sobrecarga.", efecto: { moral: -12 } }
];

// ── ESTADO GLOBAL DEL MOTOR DEL JUEGO ──
let G = {};

function renderTeamList() {
  const container = document.getElementById("team-selector-list");
  if (!container) return;
  container.innerHTML = "";
  
  Object.keys(TEAMS).forEach(name => {
    const data = TEAMS[name];
    const card = document.createElement("div");
    card.className = "team-card";
    card.setAttribute("data-name", name);
    card.onclick = () => iniciarJuego(name);
    card.innerHTML = `
      <div style="display:flex; align-items:center;">
        <span class="team-badge">${data.badge}</span>
        <div>
          <div class="team-name">${name}</div>
          <div class="team-info">Presupuesto: ${data.budget}M€ · Prestigio: ${data.prestige}/100</div>
        </div>
      </div>
      <div class="neon-badge">TOMAR CONTROL</div>
    `;
    container.appendChild(card);
  });
}

function iniciarJuego(teamName) {
  const presNameInput = document.getElementById("president-name").value.trim();
  const presidentName = presNameInput || "Presidente";
  const td = TEAMS[teamName];
  
  G = {
    team:         teamName,
    president:    presidentName,
    players:      td.players.map(p => ({ ...p })),
    budget:       td.budget,
    prestige:     td.prestige,
    fans:         82000,
    points:       0,
    wins: 0, draws: 0, losses: 0,
    goals: 0, goalsAgainst: 0,
    morale:       85,
    cultura:      { ...td.cultura },
    matchesPlayed:0,
    week:         1,
    season:       1,
    news:         [`🎉 ${presidentName} firma contrato de presidencia con el ${teamName}. ¡Revolución en curso!`],
    eventoActivo: null,
    decisions:    []
  };
  
  document.getElementById('h-badge').textContent = td.badge;
  render();
  showScreen("main");
}

function teamStrength() {
  if (!G.players.length) return 0;
  const base = G.players.reduce((s,p) => s + p.rating, 0) / G.players.length;
  const moraleBonus = (G.morale - 50) / 25;
  return Math.round(base + moraleBonus);
}

function addNews(msg) {
  G.news.unshift(msg);
  if (G.news.length > 12) G.news.pop();
}

// ── MOTOR DE PARTIDO HÍBRIDO PROBABILÍSTICO ──
function simularPartido() {
  const rival = RIVALES[Math.floor(Math.random() * RIVALES.length)];
  const str = teamStrength();
  const diff = str - rival.strength;
  const rand = (Math.random() - 0.5) * 22;
  const score = diff + rand;

  let myGoals    = Math.max(0, Math.round(Math.random() * 3 + (score > 3 ? 1 : 0)));
  let theirGoals = Math.max(0, Math.round(Math.random() * 3 + (score < -3 ? 1 : 0)));

  let result, pts, moraleChange, fanChange;
  if (myGoals > theirGoals)      { result="victoria"; pts=3; moraleChange=6;  fanChange=1200; }
  else if (myGoals===theirGoals) { result="empate";   pts=1; moraleChange=0;  fanChange=100;  }
  else                           { result="derrota";  pts=0; moraleChange=-10; fanChange=-2500; }

  G.points        += pts;
  G.wins          += result==="victoria" ? 1 : 0;
  G.draws         += result==="empate"   ? 1 : 0;
  G.losses        += result==="derrota"  ? 1 : 0;
  G.goals         += myGoals;
  G.goalsAgainst  += theirGoals;
  G.morale         = Math.min(100, Math.max(15, G.morale + moraleChange));
  G.fans           = Math.max(5000, G.fans + fanChange);
  G.matchesPlayed += 1;
  G.week          += 1;

  // Pagar masa salarial (semanal prorrateada en base a los millones anuales del juego original)
  const gastosSalarios = G.players.reduce((sum, p) => sum + (p.salary / 10), 0);
  G.budget = Math.max(0, Math.round((G.budget - gastosSalarios) * 100) / 100);

  const icon = result==="victoria" ? "⚽" : result==="empate" ? "🤝" : "💔";
  addNews(`${icon} J${G.week-1} — ${G.team} ${myGoals}-${theirGoals} ${rival.name} (Salarios: -${gastosSalarios.toFixed(1)}M€)`);

  showResultBanner(myGoals, theirGoals, rival.name, result);
  render();
  generarEventoInternoMecanico();
  generarNarrativaPartido(myGoals, theirGoals, rival.name, result);
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
      <div style="font-size:10px; color:#94a3b8; letter-spacing:1px; font-weight:bold;">CRÓNICA EN DIRECTO</div>
      <div class="result-score">${G.team} ${mg} - ${tg} ${rival}</div>
    </div>
    <div class="result-label" style="color:${accent}">${result.toUpperCase()}</div>
    <button onclick="document.getElementById('result-banner').style.display='none'" style="background:none; border:none; color:#94a3b8; font-size:16px; cursor:pointer; padding-left:10px;">✕</button>
  `;
}

// ── SIMULACIÓN DE TEXTO DE PRENSA / CONSEJERO DE SEGURIDAD ──
function generarNarrativaPartido(mg, tg, rival, result) {
  const box = document.getElementById("narrativa-match");
  if (!box) return;
  const cronicas = {
    victoria: [
      `Festival ofensivo en el estadio. La plantilla ejecutó el plan táctico a la perfección anulando el planteamiento de contención del ${rival}.`,
      `Victoria de prestigio. Tres puntos vitales que calman a los inversores y desatan la euforia entre los aficionados.`
    ],
    empate: [
      `Falta de pegada en los metros finales. El choque ante el ${rival} evidenció desajustes tácticos en la zona de creación.`,
      `Tablas en el marcador. Un punto trabajado que deja sensaciones agridulces en el palco presidencial.`
    ],
    derrota: [
      `Noche negra para la directiva. El planteamiento del ${rival} desarboló la defensa y enciende las alarmas en el club.`,
      `Dolorosa caída. La prensa deportiva cuestiona abiertamente la gestión de fichajes y la implicación de las estrellas.`
    ]
  };
  const list = cronicas[result];
  box.textContent = list[Math.floor(Math.random() * list.length)];
}

function preguntaLibre() {
  const q = document.getElementById('custom-question').value.trim();
  if (!q) return;
  const box = document.getElementById("narrativa-consejero");
  box.className = "narrative-box thinking";
  box.textContent = "Analizando balances y rendimiento...";
  
  setTimeout(() => {
    box.className = "narrative-box";
    if(G.budget < 30) {
      box.textContent = `Consejo sobre "${q}": La prioridad absoluta de la junta es recortar masa salarial vendiendo algún jugador pesado. El presupuesto está en ${G.budget}M€, nivel crítico.`;
    } else {
      box.textContent = `Consejo sobre "${q}": Disponemos de estabilidad económica con ${G.budget}M€. Recomiendo invertir en la ventana de fichajes para subir la media general (${teamStrength()}/100) del equipo.`;
    }
  }, 800);
}

function lanzarEvento() {
  const ev = EVENTOS_GLOBALES[Math.floor(Math.random() * EVENTOS_GLOBALES.length)];
  G.eventoActivo = ev;
  document.getElementById("evento-texto").textContent = ev.texto;
  document.getElementById("evento-impacto").textContent = 
    ev.impacto > 0 ? `+${ev.impacto}M€ para las arcas del club` : `${ev.impacto}M€ de impacto en pérdidas`;
  document.getElementById("evento-acciones").style.display = "flex";
  document.getElementById("btn-nuevo-evento").style.display = "none";
}

function responderEvento(acepto) {
  if (!G.eventoActivo) return;
  const ev = G.eventoActivo;
  const box = document.getElementById("narrativa-evento");
  
  if (acepto) {
    G.budget = Math.max(0, G.budget + ev.impacto);
    addNews(`✅ APROBADO: Decisión directiva sobre evento global.`);
    box.textContent = `Operación corporativa firmada con éxito. Impacto financiero directo aplicado en caja.`;
  } else {
    addNews(`❌ RECHAZADO: Se mantuvieron las directrices previas.`);
    box.textContent = `Decisión archivada. Evitamos el riesgo regulatorio y mantuvimos la estructura deportiva estable.`;
  }
  
  G.eventoActivo = null;
  document.getElementById("evento-acciones").style.display = "none";
  document.getElementById("btn-nuevo-evento").style.display = "block";
  render();
}

function generarEventoInternoMecanico() {
  if (G.matchesPlayed % 3 !== 0) return;
  const ev = EVENTOS_INTERNOS[Math.floor(Math.random() * EVENTOS_INTERNOS.length)];
  addNews(`⚡ NOTIFICACIÓN: ${ev.titulo} — ${ev.descripcion}`);
  if (ev.efecto.moral) G.morale = Math.min(100, Math.max(15, G.morale + ev.efecto.moral));
  if (ev.efecto.dinero) G.budget += ev.efecto.dinero / 1000000;
  render();
}

function comprarJugador(idx) {
  const t = TRANSFERS[G.team][idx];
  if (G.budget < t.value) {
    abrirModal("❌ Gasto rechazado", `La junta de control financiero no aprueba el fichaje. El valor es de ${t.value}M€ y solo tienes ${G.budget}M€.`, null);
    return;
  }
  abrirModal(
    `Cerrar traspaso galáctico`,
    `¿Deseas autorizar la compra de ${t.name} por un valor de mercado de ${t.value}M€ y un salario asignado de ${t.salary}M€ anuales?`,
    () => {
      G.budget -= t.value;
      G.players.push({ id: Date.now(), ...t, morale: 90, historia: "Fichaje estrella aprobado bajo tu mandato presidencial." });
      addNews(`✅ TRASPASO: ${t.name} aterriza como nuevo jugador del club.`);
      render();
      cerrarModal();
    }
  );
}

function venderJugador(id) {
  const p = G.players.find(x => x.id === id);
  if (!p) return;
  abrirModal(
    `Transferir futbolista`,
    `¿Confirmas la venta de ${p.name}? Ingresaremos ${p.value}M€ en tesorería y liberaremos su ficha salarial.`,
    () => {
      G.budget += p.value;
      G.players = G.players.filter(x => x.id !== id);
      addNews(`💸 MERCADO: ${p.name} es vendido por ${p.value}M€.`);
      render();
      cerrarModal();
    }
  );
}

function ajustarCultura(clave, delta) {
  G.cultura[clave] = Math.min(100, Math.max(0, G.cultura[clave] + delta));
  addNews(`🏛️ Filosofía de Club: Enfoque de ${clave} ajustado a ${G.cultura[clave]}/100.`);
  render();
}

// ── CONTROL DE NAVEGACIÓN DE PANTALLAS Y PESTAÑAS ──
function showTab(id) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(t => t.style.display = "none");
  
  const selectedTabBtn = document.querySelector(`.tab[data-tab="${id}"]`);
  if (selectedTabBtn) selectedTabBtn.classList.add("active");
  
  const currentTab = document.getElementById("tab-" + id);
  if (currentTab) currentTab.style.display = "block";
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("screen-" + id).classList.add("active");
}

function abrirModal(titulo, cuerpo, onConfirm) {
  document.getElementById("modal-title").textContent = titulo;
  document.getElementById("modal-body").textContent  = cuerpo;
  const btnOk = document.getElementById("modal-confirm");
  if (onConfirm) {
    btnOk.style.display = "block";
    btnOk.onclick = onConfirm;
  } else {
    btnOk.style.display = "none";
  }
  document.getElementById("modal-overlay").classList.add("open");
}

function cerrarModal() {
  document.getElementById("modal-overlay").classList.remove("open");
}

// ── RENDERIZADO COMPLETO DE COMPONENTES DINÁMICOS ──
function render() {
  if (!G.team) return;

  document.getElementById("h-nombre").textContent   = `${G.president} · ${G.team}`;
  document.getElementById("h-season").textContent   = `TEMPORADA ${G.season} · JORNADA DE LIGA ${G.week - 1}`;
  document.getElementById("h-budget").textContent   = `${G.budget}M€`;
  document.getElementById("h-points").textContent   = `${G.points} PTS`;
  document.getElementById("h-strength").textContent = `${teamStrength()}/100`;
  document.getElementById("h-morale").textContent   = `${G.morale}%`;

  document.getElementById("news-list").innerHTML = G.news.map(n => `<div class="news-item">${n}</div>`).join("");

  document.getElementById("stats-dashboard").innerHTML = [
    ["🏆", "Victorias", G.wins, "#10b981"],
    ["🤝", "Empates", G.draws, "#f59e0b"],
    ["💔", "Derrotas", G.losses, "#ef4444"],
    ["⚽", "Goles F.", G.goals, "#3b82f6"],
    ["🥅", "Goles C.", G.goalsAgainst, "#f97316"],
    ["👥", "Socios", G.fans.toLocaleString(), "#a855f7"]
  ].map(([i, l, v, c]) => `
    <div class="card" style="text-align:center; padding:10px 4px;">
      <div style="font-size:18px;">${i}</div>
      <div style="font-size:18px; font-weight:700; color:${c}; margin:2px 0;">${v}</div>
      <div style="font-size:10px; color:var(--muted); font-family:'Orbitron'; letter-spacing:1px;">${l.toUpperCase()}</div>
    </div>
  `).join("");

  const sq = document.getElementById("squad-list");
  if (sq) {
    const order = ["POR", "DEF", "MED", "DEL"];
    const names = { POR: "PORTEROS", DEF: "LÍNEA DEFENSIVA", MED: "CENTROCAMPISTAS", DEL: "DELANTEROS" };
    const colors = { DEL: "#ff3366", MED: "#3b82f6", DEF: "#10b981", POR: "#f59e0b" };
    
    sq.innerHTML = order.map(pos => {
      const pList = G.players.filter(p => p.pos === pos);
      if (!pList.length) return "";
      return `
        <div style="margin-bottom:15px;">
          <div style="font-size:11px; font-weight:700; font-family:'Orbitron'; letter-spacing:2px; color:${colors[pos]}; margin-bottom:8px; padding:4px 12px; background:${colors[pos]}15; border-radius:20px; display:inline-block;">${names[pos]}</div>
          ${pList.map(p => `
            <div class="player-card">
              <div style="display:flex; align-items:center; gap:10px; overflow:hidden;">
                <div class="pos-badge" style="background:${colors[p.pos]}15; color:${colors[p.pos]}">${p.pos}</div>
                <div style="min-width:0;">
                  <div class="player-name" style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${p.name}</div>
                  <div class="player-info">${p.age} años · Salario: ${p.salary}M€</div>
                </div>
              </div>
              <div style="display:flex; gap:12px; align-items:center; flex-shrink:0;">
                <div style="text-align:center;"><div class="rating">${p.rating}</div><div style="font-size:8px; color:var(--muted)">MEDIA</div></div>
                <div style="text-align:center;"><div style="font-size:13px; color:var(--green); font-weight:bold;">${p.value}M€</div><div style="font-size:8px; color:var(--muted)">VALOR</div></div>
                <button onclick="venderJugador(${p.id})" style="background:#450a0a; color:#f87171; border:1px solid #7f1d1d; border-radius:6px; padding:6px 10px; cursor:pointer; font-family:inherit; font-size:11px; font-weight:bold;">VENDER</button>
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }).join("");
  }

  const tl = document.getElementById("transfer-list");
  if (tl) {
    const list = TRANSFERS[G.team] || [];
    tl.innerHTML = `<div class="section-title" style="margin-bottom:12px; font-size:12px;">OBJETIVOS DISPONIBLES EN EL MERCADO</div>` +
      list.map((t, i) => `
        <div class="card" style="margin-bottom:10px; padding:12px;">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:10px;">
            <div>
              <div style="font-weight:700; font-size:1.1rem; color:#fff;">${t.name}</div>
              <div style="font-size:0.85rem; color:var(--muted);">${t.club} · ${t.age} años · Demarcación: <b style="color:var(--neon)">${t.pos}</b></div>
            </div>
            <div style="display:flex; gap:14px; align-items:center; flex-shrink:0;">
              <div style="text-align:center;"><div class="rating" style="color:var(--neon);">${t.rating}</div><div style="font-size:8px; color:var(--muted)">MEDIA</div></div>
              <div style="text-align:center;"><div style="font-size:14px; color:var(--green); font-weight:bold;">${t.value}M€</div><div style="font-size:8px; color:var(--muted)">COSTE</div></div>
              <button onclick="comprarJugador(${i})" class="btn btn-neon" style="padding:8px 12px; font-size:12px;">FICHAR</button>
            </div>
          </div>
        </div>
      `).join("");
  }

  const cl = document.getElementById("cultura-list");
  if (cl) {
    cl.innerHTML = [
      ["estilo",  "⚽ Modelo de Juego Asociativo",  "var(--neon)"],
      ["cantera", "🌱 Confianza en las Categorías Inferiores", "var(--green)"],
      ["defensa", "🛡️ Rigor y Bloque Defensivo", "var(--neon2)"]
    ].map(([k, label, color]) => `
      <div class="card" style="margin-bottom:10px; padding:12px;">
        <div class="cultura-bar">
          <span style="font-size:14px; font-weight:600; color:#cbd5e1;">${label}</span>
          <span style="font-size:14px; font-weight:700; color:${color}; font-family:'Orbitron';">${G.cultura[k]}</span>
        </div>
        <div class="bar-track" style="margin:5px 0 10px 0;"><div class="bar-fill" style="width:${G.cultura[k]}%; background:${color}"></div></div>
        <div style="display:flex; gap:8px;">
          <button onclick="ajustarCultura('${k}',-10)" class="btn btn-gray" style="flex:1; padding:6px; font-size:12px;">▼ REDUCIR</button>
          <button onclick="ajustarCultura('${k}',+10)" class="btn btn-gray" style="flex:1; padding:6px; font-size:12px; border-color:var(--border);">▲ POTENCIAR</button>
        </div>
      </div>
    `).join("");
  }
}

window.onload = () => showScreen("intro");
