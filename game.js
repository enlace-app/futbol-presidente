// ═══════════════════════════════════════════
//  FÚTBOL PRESIDENTE — game.js
// ═══════════════════════════════════════════

// ── DATOS ───────────────────────────────────
const TEAMS = {
  "Real Madrid": {
    badge: "⚪", color: "#00529f", budget: 350, prestige: 99,
    cultura: { estilo: 70, cantera: 50, defensa: 40 },
    players: [
      { id:1,  name:"Vinicius Jr.",      pos:"DEL", rating:91, age:23, salary:12, value:180, morale:85, historia:"Llegó siendo un niño y se convirtió en leyenda." },
      { id:2,  name:"Jude Bellingham",   pos:"MED", rating:90, age:21, salary:14, value:200, morale:90, historia:"El joven inglés que conquistó el Bernabéu desde el primer día." },
      { id:3,  name:"Kylian Mbappé",     pos:"DEL", rating:92, age:25, salary:18, value:220, morale:75, historia:"Su llegada fue histórica, pero aún busca su mejor versión aquí." },
      { id:4,  name:"Toni Kroos",        pos:"MED", rating:87, age:34, salary:8,  value:25,  morale:80, historia:"El maestro del mediocampo. Cada pase suyo es una obra de arte." },
      { id:5,  name:"Aurélien Tchouaméni",pos:"MED",rating:85, age:24, salary:7,  value:90,  morale:82, historia:"Silencioso pero imprescindible. El ancla del equipo." },
      { id:6,  name:"Éder Militão",      pos:"DEF", rating:86, age:26, salary:6,  value:80,  morale:78, historia:"Recuperado de una grave lesión, vuelve más fuerte que nunca." },
      { id:7,  name:"Antonio Rüdiger",   pos:"DEF", rating:84, age:31, salary:7,  value:30,  morale:88, historia:"Un guerrero. Los delanteros rivales le temen." },
      { id:8,  name:"Dani Carvajal",     pos:"DEF", rating:83, age:32, salary:5,  value:20,  morale:85, historia:"El capitán silencioso. Toda su vida en blanco." },
      { id:9,  name:"Ferland Mendy",     pos:"DEF", rating:82, age:29, salary:5,  value:45,  morale:72, historia:"Rápido como el viento, pero busca regularidad." },
      { id:10, name:"Andriy Lunin",      pos:"POR", rating:83, age:25, salary:4,  value:40,  morale:80, historia:"Esperó su momento con paciencia. Ahora es titular indiscutible." },
      { id:11, name:"Rodrygo",           pos:"DEL", rating:85, age:23, salary:7,  value:90,  morale:83, historia:"El brasileño que aparece siempre en los momentos clave." },
    ]
  },
  "FC Barcelona": {
    badge: "🔵🔴", color: "#a50021", budget: 80, prestige: 97,
    cultura: { estilo: 90, cantera: 85, defensa: 30 },
    players: [
      { id:12, name:"Robert Lewandowski",pos:"DEL", rating:88, age:36, salary:12, value:20,  morale:70, historia:"Un campeón con hambre de gloria, pero el tiempo no perdona." },
      { id:13, name:"Pedri",             pos:"MED", rating:89, age:22, salary:9,  value:150, morale:88, historia:"El heredero de Iniesta. La joya más pura de La Masía." },
      { id:14, name:"Lamine Yamal",      pos:"DEL", rating:88, age:17, salary:3,  value:120, morale:92, historia:"17 años y ya es el mejor del mundo. Un fenómeno generacional." },
      { id:15, name:"Gavi",              pos:"MED", rating:86, age:20, salary:7,  value:100, morale:85, historia:"Pasión y corazón. Sangre culé en cada tackle." },
      { id:16, name:"Frenkie de Jong",   pos:"MED", rating:85, age:27, salary:8,  value:70,  morale:65, historia:"Talento inmenso, pero las dudas sobre su futuro le pesan." },
      { id:17, name:"Ronald Araújo",     pos:"DEF", rating:86, age:25, salary:6,  value:75,  morale:80, historia:"El muro de la defensa. Cabeza, corazón y contundencia." },
      { id:18, name:"Jules Koundé",      pos:"DEF", rating:85, age:26, salary:6,  value:70,  morale:78, historia:"Elegante y seguro. El defensa moderno que todo club desea." },
      { id:19, name:"Alejandro Balde",   pos:"DEF", rating:83, age:21, salary:3,  value:55,  morale:82, historia:"Producto de La Masía. Veloz y con ganas de comerse el mundo." },
      { id:20, name:"Ter Stegen",        pos:"POR", rating:85, age:32, salary:7,  value:25,  morale:75, historia:"Años siendo el mejor portero del mundo. Recupera su nivel." },
      { id:21, name:"Raphinha",          pos:"DEL", rating:84, age:28, salary:8,  value:60,  morale:83, historia:"Explosivo y generoso. Un jugador que da el máximo siempre." },
      { id:22, name:"Fermín López",      pos:"MED", rating:81, age:21, salary:2,  value:40,  morale:90, historia:"La sorpresa de la temporada. Hambre de triunfar." },
    ]
  },
  "Atlético de Madrid": {
    badge: "🔴⚪", color: "#cb3524", budget: 120, prestige: 90,
    cultura: { estilo: 40, cantera: 55, defensa: 90 },
    players: [
      { id:23, name:"Antoine Griezmann", pos:"DEL", rating:87, age:33, salary:10, value:35,  morale:88, historia:"El eterno retorno. Griezmann y el Atleti, una historia de amor." },
      { id:24, name:"Julián Álvarez",    pos:"DEL", rating:87, age:24, salary:9,  value:100, morale:88, historia:"La araña. Incansable, inteligente y letal." },
      { id:25, name:"Koke",              pos:"MED", rating:82, age:32, salary:6,  value:15,  morale:90, historia:"El capitán de alma. Toda su carrera de rojiblanco." },
      { id:26, name:"Rodrigo De Paul",   pos:"MED", rating:83, age:30, salary:6,  value:40,  morale:72, historia:"Guerrero incansable del mediocampo. Corazón argentino." },
      { id:27, name:"Marcos Llorente",   pos:"MED", rating:82, age:29, salary:6,  value:45,  morale:80, historia:"La transformación perfecta: de pivote a motor del equipo." },
      { id:28, name:"José María Giménez",pos:"DEF", rating:83, age:29, salary:5,  value:35,  morale:85, historia:"El defensa de la sangre y el sudor. Líder en silencio." },
      { id:29, name:"Nahuel Molina",     pos:"DEF", rating:81, age:26, salary:4,  value:40,  morale:82, historia:"Desbordante por la derecha. Un lateral que da mucho más." },
      { id:30, name:"Axel Witsel",       pos:"DEF", rating:79, age:35, salary:4,  value:8,   morale:78, historia:"Veterano experimentado. Sabe exactamente lo que necesita el equipo." },
      { id:31, name:"Jan Oblak",         pos:"POR", rating:89, age:31, salary:10, value:50,  morale:80, historia:"El mejor portero de La Liga durante años. Una fortaleza." },
      { id:32, name:"Samuel Lino",       pos:"DEL", rating:80, age:24, salary:3,  value:30,  morale:85, historia:"Velocidad pura. Cuando arranca, nadie le para." },
      { id:33, name:"César Azpilicueta", pos:"DEF", rating:79, age:34, salary:4,  value:5,   morale:78, historia:"Experiencia y liderazgo. Un profesional de los pies a la cabeza." },
    ]
  }
};

const RIVALES = [
  { name:"Sevilla FC",      strength:75 },
  { name:"Real Sociedad",   strength:78 },
  { name:"Athletic Club",   strength:76 },
  { name:"Villarreal CF",   strength:74 },
  { name:"Valencia CF",     strength:72 },
  { name:"Real Betis",      strength:73 },
  { name:"Girona FC",       strength:77 },
  { name:"Rayo Vallecano",  strength:68 },
  { name:"Osasuna",         strength:69 },
  { name:"Celta de Vigo",   strength:71 },
];

const EVENTOS_GLOBALES = [
  { texto:"💹 Crisis económica mundial. Los clubes recortan gastos.", impacto: -30, tipo:"economico" },
  { texto:"🌍 Nueva ley FIFA sobre fichajes. Límite de gasto reducido.", impacto: -20, tipo:"economico" },
  { texto:"📺 Nuevo contrato televisivo récord en LaLiga.", impacto: +40, tipo:"economico" },
  { texto:"🦠 Brote viral en el vestuario. 3 jugadores baja 2 semanas.", impacto: -10, tipo:"rendimiento" },
  { texto:"🏆 Tu club es invitado a un torneo internacional lucrativo.", impacto: +25, tipo:"economico" },
  { texto:"⚡ Escándalo de corrupción sacude el fútbol europeo.", impacto: -15, tipo:"reputacion" },
  { texto:"🌟 Tu academia juvenil produce un talento mundial.", impacto: +10, tipo:"cantera" },
  { texto:"💰 Fondo de inversión árabe interesado en comprar el club.", impacto: 0, tipo:"venta" },
];

const TRANSFERS = {
  "Real Madrid": [
    { name:"Erling Haaland",  pos:"DEL", rating:94, age:25, value:180, salary:20, club:"Man. City",        historia:"La máquina de hacer goles. Imparable." },
    { name:"Florian Wirtz",   pos:"MED", rating:88, age:22, value:120, salary:9,  club:"Bayer Leverkusen", historia:"El cerebro creativo que todo equipo sueña tener." },
    { name:"Goncalo Ramos",   pos:"DEL", rating:84, age:23, value:65,  salary:7,  club:"PSG",              historia:"Goleador nato. Oportunista en el área." },
  ],
  "FC Barcelona": [
    { name:"Nico Williams",   pos:"DEL", rating:87, age:22, value:90,  salary:8,  club:"Athletic Club",    historia:"El heredero de Yamal en el futuro. Hoy ya es crack." },
    { name:"Jonathan Tah",    pos:"DEF", rating:84, age:28, value:35,  salary:5,  club:"Bayer Leverkusen", historia:"Sólido, aéreo y con salida de balón. El defensa ideal." },
    { name:"Marcus Rashford", pos:"DEL", rating:84, age:27, value:55,  salary:9,  club:"Man. United",      historia:"Necesita renacer. Barça podría ser su salvación." },
  ],
  "Atlético de Madrid": [
    { name:"Lautaro Martínez",pos:"DEL", rating:89, age:26, value:110, salary:11, club:"Inter Milán",      historia:"El toro. Rápido, físico y con olfato de gol." },
    { name:"Nicolás Barrios", pos:"DEL", rating:83, age:22, value:55,  salary:6,  club:"Bayer Leverkusen", historia:"Desequilibrio y verticalidad. El extremo del futuro." },
    { name:"Youssouf Fofana", pos:"MED", rating:83, age:25, value:45,  salary:6,  club:"AC Milan",         historia:"Físico imponente y lectura del juego excepcional." },
  ]
};

// ── ESTADO DEL JUEGO ─────────────────────────────────────────────────────────
let G = {};

function initGame(teamName, presidentName) {
  const td = TEAMS[teamName];
  G = {
    team:         teamName,
    president:    presidentName || "Presidente",
    players:      td.players.map(p => ({ ...p })),
    budget:       td.budget,
    prestige:     td.prestige,
    fans:         75000,
    points:       0,
    wins:0, draws:0, losses:0,
    goals:0, goalsAgainst:0,
    morale:       80,
    cultura:      { ...td.cultura },
    trophies:     [],
    matchesPlayed:0,
    week:         1,
    season:       1,
    news:         [`🎉 ${presidentName || "Nuevo Presidente"} asume el mando del ${teamName}. ¡Empieza una nueva era!`],
    eventoActivo: null,
    decisions:    [],
  };
  render();
  showScreen("main");
}

function teamStrength() {
  if (!G.players.length) return 0;
  const base = G.players.reduce((s,p) => s + p.rating, 0) / G.players.length;
  const moraleBonus = (G.morale - 50) / 20;
  return Math.round(base + moraleBonus);
}

function addNews(msg) {
  G.news.unshift(msg);
  if (G.news.length > 15) G.news.pop();
}// ── SIMULAR PARTIDO ──────────────────────────────────────────────────────────
function simularPartido() {
  const rival = RIVALES[Math.floor(Math.random() * RIVALES.length)];
  const str = teamStrength();
  const diff = str - rival.strength;
  const rand = (Math.random() - 0.5) * 20;
  const score = diff + rand;

  let myGoals    = Math.max(0, Math.round(Math.random() * 3 + (score > 0 ? 1 : 0)));
  let theirGoals = Math.max(0, Math.round(Math.random() * 3 + (score < 0 ? 1 : 0)));

  let result, pts, moraleChange, fanChange;
  if (myGoals > theirGoals)      { result="victoria"; pts=3; moraleChange=5;  fanChange=500;  }
  else if (myGoals===theirGoals) { result="empate";   pts=1; moraleChange=0;  fanChange=0;    }
  else                           { result="derrota";  pts=0; moraleChange=-8; fanChange=-800; }

  G.points        += pts;
  G.wins          += result==="victoria" ? 1 : 0;
  G.draws         += result==="empate"   ? 1 : 0;
  G.losses        += result==="derrota"  ? 1 : 0;
  G.goals         += myGoals;
  G.goalsAgainst  += theirGoals;
  G.morale         = Math.min(100, Math.max(20, G.morale + moraleChange));
  G.fans           = Math.max(10000, G.fans + fanChange);
  G.matchesPlayed += 1;
  G.week          += 1;

  const icon = result==="victoria" ? "⚽" : result==="empate" ? "🤝" : "💔";
  addNews(`${icon} J${G.week-1} — ${G.team} ${myGoals}-${theirGoals} ${rival.name}`);

  showResultBanner(myGoals, theirGoals, rival.name, result);
  render();
  generarNarrativaPartido(myGoals, theirGoals, rival.name, result);
}

function showResultBanner(mg, tg, rival, result) {
  const banner = document.getElementById("result-banner");
  if (!banner) return;
  const colors = { victoria:["#14532d","#22c55e"], empate:["#713f12","#eab308"], derrota:["#7f1d1d","#ef4444"] };
  const [bg, accent] = colors[result];
  banner.style.background = bg;
  banner.style.border = `1px solid ${accent}`;
  banner.style.display = "flex";
  banner.innerHTML = `
    <div>
      <div style="font-size:11px;color:#aaa;letter-spacing:2px">RESULTADO</div>
      <div class="result-score">${G.team} ${mg} - ${tg} ${rival}</div>
    </div>
    <div class="result-label" style="color:${accent}">${result.toUpperCase()}</div>
    <button onclick="document.getElementById('result-banner').style.display='none'"
      style="background:none;border:none;color:#666;font-size:18px;cursor:pointer">✕</button>`;
}

// ── IA NARRATIVA ─────────────────────────────────────────────────────────────
async function generarNarrativaPartido(mg, tg, rival, result) {
  const box = document.getElementById("narrativa-match");
  if (!box) return;
  box.className = "narrative-box thinking";
  box.textContent = "✍️ Redactando crónica del partido...";

  const prompt = `Eres el cronista del ${G.team}. Redacta en 3 frases dramáticas y emotivas la crónica de este partido: ${G.team} ${mg}-${tg} ${rival}. Resultado: ${result}. Moral del equipo: ${G.morale}/100. Temporada ${G.season}, jornada ${G.week-1}. Solo la crónica, sin títulos.`;
  const texto = await llamarIA(prompt);
  box.className = "narrative-box";
  box.textContent = texto;
}

async function generarNarrativaDecision(decision, consecuencia) {
  const box = document.getElementById("narrativa-evento");
  if (!box) return;
  box.className = "narrative-box thinking";
  box.textContent = "✍️ Analizando las consecuencias...";

  const prompt = `Eres el narrador del ${G.team}. En 2 frases describe el impacto de esta decisión presidencial: "${decision}". Consecuencia: ${consecuencia}. Sé dramático y periodístico.`;
  const texto = await llamarIA(prompt);
  box.className = "narrative-box";
  box.textContent = texto;
}

async function consultarConsejero(pregunta) {
  const box = document.getElementById("narrativa-consejero");
  if (!box) return;
  box.className = "narrative-box thinking";
  box.textContent = "⏳ El consejero analiza la situación...";

  const ctx = `Eres el consejero del presidente del ${G.team}. Presupuesto: ${G.budget}M€. Puntos: ${G.points}. Moral: ${G.morale}/100. Aficionados: ${G.fans.toLocaleString()}. Cultura del club — Estilo: ${G.cultura.estilo}/100, Cantera: ${G.cultura.cantera}/100, Defensa: ${G.cultura.defensa}/100. Responde en español, máximo 100 palabras, de forma concisa y útil.`;
  const texto = await llamarIA(pregunta, ctx);
  box.className = "narrative-box";
  box.textContent = texto;
}

async function llamarIA(prompt, system) {
  try {
    const body = {
      model: "claude-sonnet-4-20250514",
      max_tokens: 200,
      messages: [{ role:"user", content: prompt }]
    };
    if (system) body.system = system;
    const res  = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    const data = await res.json();
    return data.content?.[0]?.text || "Sin respuesta.";
  } catch(e) {
    return "Error al conectar con el consejero.";
  }
}

// ── FICHAJES ─────────────────────────────────────────────────────────────────
function comprarJugador(idx) {
  const t = TRANSFERS[G.team][idx];
  if (G.budget < t.value) {
    abrirModal("❌ Sin fondos", `Necesitas ${t.value}M€ pero solo tienes ${G.budget}M€.`, null);
    return;
  }
  abrirModal(
    `Fichar a ${t.name}`,
    `Valor: ${t.value}M€\nSalario: ${t.salary}M€/año\nClub: ${t.club}\n\nPresupuesto actual: ${G.budget}M€`,
    () => {
      G.budget -= t.value;
      G.players.push({ id: Date.now(), ...t, morale:85 });
      addNews(`✅ FICHAJE: ${t.name} llega al ${G.team} por ${t.value}M€`);
      render();
      cerrarModal();
    }
  );
}

function venderJugador(id) {
  const p = G.players.find(x => x.id === id);
  if (!p) return;
  abrirModal(
    `Vender a ${p.name}`,
    `Recibirás ${p.value}M€.\n\n"${p.historia}"`,
    () => {
      G.budget += p.value;
      G.players = G.players.filter(x => x.id !== id);
      addNews(`💸 VENTA: ${p.name} abandona el ${G.team} por ${p.value}M€`);
      G.decisions.push(`Vendiste a ${p.name}`);
      render();
      cerrarModal();
      generarNarrativaDecision(`Venta de ${p.name}`, `El club ingresa ${p.value}M€ pero pierde a un jugador importante`);
    }
  );
}

// ── EVENTOS ──────────────────────────────────────────────────────────────────
function lanzarEvento() {
  const ev = EVENTOS_GLOBALES[Math.floor(Math.random() * EVENTOS_GLOBALES.length)];
  G.eventoActivo = ev;
  document.getElementById("evento-texto").textContent = ev.texto;
  document.getElementById("evento-impacto").textContent =
    ev.impacto > 0 ? `+${ev.impacto}M€ para el club` :
    ev.impacto < 0 ? `${ev.impacto}M€ de impacto` : "Decisión estratégica";
  document.getElementById("evento-acciones").style.display = "flex";
  document.getElementById("btn-nuevo-evento").style.display = "none";
}

function responderEvento(acepto) {
  if (!G.eventoActivo) return;
  const ev = G.eventoActivo;
  let consecuencia = "";

  if (acepto) {
    if (ev.impacto !== 0) {
      G.budget = Math.max(0, G.budget + ev.impacto);
      consecuencia = ev.impacto > 0
        ? `El club recibe ${ev.impacto}M€`
        : `El club pierde ${Math.abs(ev.impacto)}M€`;
    } else {
      consecuencia = "Decisión estratégica aceptada";
    }
    addNews(`✅ EVENTO ACEPTADO: ${ev.texto}`);
  } else {
    consecuencia = "Decisión rechazada. El club mantiene su rumbo";
    addNews(`❌ EVENTO RECHAZADO: ${ev.texto}`);
  }

  G.decisions.push(`${acepto ? "Aceptaste" : "Rechazaste"}: ${ev.texto}`);
  G.eventoActivo = null;
  document.getElementById("evento-acciones").style.display = "none";
  document.getElementById("btn-nuevo-evento").style.display = "block";
  render();
  generarNarrativaDecision(ev.texto, consecuencia);
}

// ── CULTURA ──────────────────────────────────────────────────────────────────
function ajustarCultura(clave, delta) {
  G.cultura[clave] = Math.min(100, Math.max(0, G.cultura[clave] + delta));
  addNews(`🏛️ Cultura del club actualizada: ${clave} → ${G.cultura[clave]}/100`);
  render();
}

// ── MODAL ────────────────────────────────────────────────────────────────────
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

// ── TABS ─────────────────────────────────────────────────────────────────────
function showTab(id) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(t => t.style.display = "none");
  document.querySelector(`[data-tab="${id}"]`).classList.add("active");
  document.getElementById("tab-" + id).style.display = "block";
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("screen-" + id).classList.add("active");
}

// ── RENDER ───────────────────────────────────────────────────────────────────
function render() {
  if (!G.team) return;
  const td = TEAMS[G.team];

  // Header
  document.getElementById("h-nombre").textContent  = `${G.president} · ${G.team.toUpperCase()}`;
  document.getElementById("h-season").textContent  = `TEMPORADA ${G.season} · JORNADA ${G.week - 1}`;
  document.getElementById("h-budget").textContent  = `${G.budget}M€`;
  document.getElementById("h-points").textContent  = G.points;
  document.getElementById("h-strength").textContent= `${teamStrength()}/100`;
  document.getElementById("h-morale").textContent  = `${G.morale}%`;

  // Dashboard noticias
  const nl = document.getElementById("news-list");
  if (nl) nl.innerHTML = G.news.map(n => `<div class="news-item">${n}</div>`).join("");

  // Stats
  const sd = document.getElementById("stats-dashboard");
  if (sd) sd.innerHTML = [
    ["🏆","Victorias", G.wins,       "#22c55e"],
    ["🤝","Empates",   G.draws,      "#eab308"],
    ["💔","Derrotas",  G.losses,     "#ef4444"],
    ["⚽","Goles F.",  G.goals,      "#3b82f6"],
    ["🥅","Goles C.",  G.goalsAgainst,"#f97316"],
    ["👥","Afición",   G.fans.toLocaleString(),"#a855f7"],
  ].map(([i,l,v,c]) => `
    <div class="card" style="text-align:center">
      <div style="font-size:22px">${i}</div>
      <div style="font-size:24px;font-weight:700;color:${c}">${v}</div>
      <div style="font-size:10px;color:#666;letter-spacing:1px">${l.toUpperCase()}</div>
    </div>`).join("");

  // Plantilla
  const sq = document.getElementById("squad-list");
  if (sq) {
    const posOrder = ["POR","DEF","MED","DEL"];
    const posNames = { POR:"PORTEROS", DEF:"DEFENSAS", MED:"CENTROCAMPISTAS", DEL:"DELANTEROS" };
    const posColors= { DEL:"#ef4444", MED:"#3b82f6", DEF:"#22c55e", POR:"#f59e0b" };
    sq.innerHTML = posOrder.map(pos => {
      const pl = G.players.filter(p => p.pos === pos);
      if (!pl.length) return "";
      return `
        <div style="margin-bottom:16px">
          <div style="font-size:11px;font-weight:700;letter-spacing:3px;color:${posColors[pos]};margin-bottom:8px;padding:3px 10px;background:${posColors[pos]}22;border-radius:20px;display:inline-block">${posNames[pos]}</div>
          ${pl.map(p => `
            <div class="player-card">
              <div style="display:flex;align-items:center">
                <div class="pos-badge" style="background:${posColors[p.pos]}22;color:${posColors[p.pos]}">${p.pos}</div>
                <div>
                  <div class="player-name">${p.name}</div>
                  <div class="player-info">${p.age} años · ${p.salary}M€/año</div>
                </div>
              </div>
              <div style="display:flex;gap:12px;align-items:center">
                <div style="text-align:center"><div class="rating">${p.rating}</div><div style="font-size:9px;color:#555">MEDIA</div></div>
                <div style="text-align:center"><div style="font-size:13px;color:#22c55e">${p.value}M€</div><div style="font-size:9px;color:#555">VALOR</div></div>
                <div style="text-align:center"><div style="font-size:12px;color:${p.morale>80?"#22c55e":p.morale>60?"#eab308":"#ef4444"}">${p.morale}%</div><div style="font-size:9px;color:#555">MORAL</div></div>
                <button onclick="venderJugador(${p.id})" style="background:#7f1d1d;color:#fca5a5;border:1px solid #991b1b;border-radius:6px;padding:6px 10px;cursor:pointer;font-family:inherit;font-size:11px">VENDER</button>
              </div>
            </div>`).join("")}
        </div>`;
    }).join("");
  }

  // Fichajes
  const tl = document.getElementById("transfer-list");
  if (tl) {
    const transfers = TRANSFERS[G.team] || [];
    tl.innerHTML = `<div class="card-title">PRESUPUESTO DISPONIBLE: ${G.budget}M€</div>` +
      transfers.map((t,i) => `
        <div class="card" style="margin-bottom:12px">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
            <div>
              <div style="font-weight:700;font-size:15px">${t.name}</div>
              <div style="font-size:11px;color:#777">${t.club} · ${t.age} años · ${t.pos}</div>
              <div style="font-size:11px;color:#aaa;margin-top:4px;font-style:italic">"${t.historia}"</div>
            </div>
            <div style="display:flex;gap:14px;align-items:center">
              <div style="text-align:center"><div style="font-size:20px;font-weight:700;color:#ffd700">${t.rating}</div><div style="font-size:9px;color:#555">MEDIA</div></div>
              <div style="text-align:center"><div style="font-size:14px;color:#22c55e">${t.value}M€</div><div style="font-size:9px;color:#555">VALOR</div></div>
              <button onclick="comprarJugador(${i})" style="background:${G.budget>=t.value?td.color:'#333'};color:#fff;border:none;border-radius:8px;padding:10px 16px;cursor:pointer;font-family:inherit;font-weight:700;font-size:12px">${G.budget>=t.value?"FICHAR":"SIN FONDOS"}</button>
            </div>
          </div>
        </div>`).join("");
  }

  // Cultura
  const cl = document.getElementById("cultura-list");
  if (cl) {
    cl.innerHTML = [
      ["estilo",  "⚽ Estilo de juego",  "#3b82f6"],
      ["cantera", "🌱 Apuesta por cantera","#22c55e"],
      ["defensa", "🛡️ Mentalidad defensiva","#f97316"],
    ].map(([k,label,color]) => `
      <div class="card">
        <div class="cultura-bar">
          <span style="font-size:13px;min-width:160px">${label}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${G.cultura[k]}%;background:${color}"></div></div>
          <span style="font-size:13px;font-weight:700;color:${color};min-width:36px">${G.cultura[k]}</span>
        </div>
        <div style="display:flex;gap:8px;margin-top:8px">
          <button onclick="ajustarCultura('${k}',-10)" class="btn btn-gray" style="flex:1;padding:8px">▼ -10</button>
          <button onclick="ajustarCultura('${k}',+10)" class="btn btn-primary" style="flex:1;padding:8px">▲ +10</button>
        </div>
      </div>`).join("");
  }
}

// ── INICIO ───────────────────────────────────────────────────────────────────
window.onload = () => showScreen("intro");
// ==========================
// SISTEMA DE EVENTOS
// ==========================

const eventos = [
  {
    titulo: "Jugador descontento",
    descripcion: "Tu delantero estrella está enfadado por jugar poco.",
    efecto: {
      moral: -5
    }
  },

  {
    titulo: "Patrocinador nuevo",
    descripcion: "Una empresa local quiere patrocinar al club.",
    efecto: {
      dinero: 500000
    }
  },

  {
    titulo: "Lesión importante",
    descripcion: "Un jugador clave estará lesionado 3 meses.",
    efecto: {
      moral: -10
    }
  }
];

function generarEvento() {
  const evento = eventos[Math.floor(Math.random() * eventos.length)];

  alert(
    evento.titulo + "\n\n" + evento.descripcion
  );

  // Aplicar efectos
  if (evento.efecto.moral) {
    club.moral += evento.efecto.moral;
  }

  if (evento.efecto.dinero) {
    club.presupuesto += evento.efecto.dinero;
  }

  actualizarPantalla();
}
