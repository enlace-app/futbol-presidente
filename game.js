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

generarEvento();

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
  if (G.matchesPlayed % 3 !== 0) return; // solo cada 3 partidos
  const evento = eventos[Math.floor(Math.random() * eventos.length)];

  addNews(`⚡ EVENTO: ${evento.titulo} — ${evento.descripcion}`);

  if (evento.efecto.moral) {
    G.morale = Math.min(100, Math.max(20, G.morale + evento.efecto.moral));
  }
  if (evento.efecto.dinero) {
    G.budget += evento.efecto.dinero / 1000000; // convertir a millones
  }

  render();
}
// ── TRANSFERS MERCADO ────────────────────────────────────────────────────────
const TRANSFERS = {
  "Athletic Club":       [
    {name:"Mikel Merino",    pos:"MED",rating:84,age:27,value:40,salary:4,club:"Arsenal"},
    {name:"Oihan Sancet",    pos:"MED",rating:82,age:23,value:30,salary:3,club:"Athletic Club"},
  ],
  "Atlético de Madrid":  [
    {name:"Lautaro Martínez",pos:"DEL",rating:89,age:26,value:110,salary:11,club:"Inter Milán"},
    {name:"Youssouf Fofana", pos:"MED",rating:83,age:25,value:45,salary:6,club:"AC Milan"},
  ],
  "FC Barcelona":        [
    {name:"Nico Williams",   pos:"DEL",rating:87,age:22,value:90,salary:8,club:"Athletic Club"},
    {name:"Jonathan Tah",    pos:"DEF",rating:84,age:28,value:35,salary:5,club:"Bayer Leverkusen"},
  ],
  "Real Madrid":         [
    {name:"Erling Haaland",  pos:"DEL",rating:94,age:25,value:180,salary:20,club:"Man. City"},
    {name:"Florian Wirtz",   pos:"MED",rating:88,age:22,value:120,salary:9,club:"Bayer Leverkusen"},
  ],
  "Real Betis":          [
    {name:"Giovani Lo Celso",pos:"MED",rating:80,age:28,value:20,salary:3,club:"Tottenham"},
    {name:"Ez Abde",         pos:"DEL",rating:79,age:22,value:18,salary:2,club:"Osasuna"},
  ],
  "Villarreal CF":       [
    {name:"Sergi Canós",     pos:"DEL",rating:77,age:27,value:10,salary:2,club:"Brentford"},
    {name:"Étienne Capoue",  pos:"MED",rating:76,age:35,value:3,salary:2,club:"Libre"},
  ],
  "Real Sociedad":       [
    {name:"Beñat Turrientes",pos:"MED",rating:76,age:22,value:8,salary:1,club:"Real Sociedad B"},
    {name:"Aritz Elustondo", pos:"DEF",rating:77,age:31,value:5,salary:2,club:"Real Sociedad"},
  ],
  "Sevilla FC":          [
    {name:"Marcos Acuña",    pos:"DEF",rating:79,age:32,value:6,salary:2,club:"Sevilla FC"},
    {name:"Nemanja Gudelj",  pos:"MED",rating:76,age:32,value:4,salary:2,club:"Sevilla FC"},
  ],
  "Valencia CF":         [
    {name:"Yunus Musah",     pos:"MED",rating:78,age:22,value:20,salary:2,club:"AC Milan"},
    {name:"Edinson Cavani",  pos:"DEL",rating:73,age:37,value:2,salary:2,club:"Libre"},
  ],
  "Rayo Vallecano":      [
    {name:"Randy Nteka",     pos:"DEL",rating:75,age:26,value:5,salary:1,club:"Reims"},
    {name:"Unai López",      pos:"MED",rating:75,age:28,value:5,salary:1,club:"Racing Club"},
  ],
  "RC Celta de Vigo":    [
    {name:"Gonçalo Paciência",pos:"DEL",rating:76,age:29,value:6,salary:2,club:"Eintracht"},
    {name:"Kevin Vázquez",   pos:"DEF",rating:73,age:28,value:3,salary:1,club:"Celta B"},
  ],
  "Girona FC":           [
    {name:"Bryan Gil",       pos:"DEL",rating:78,age:23,value:15,salary:2,club:"Tottenham"},
    {name:"Oriol Romeu",     pos:"MED",rating:76,age:32,value:4,salary:2,club:"Girona"},
  ],
  "Getafe CF":           [
    {name:"Mauro Arambarri", pos:"MED",rating:77,age:28,value:8,salary:2,club:"Getafe"},
    {name:"Vitolo",          pos:"DEL",rating:73,age:34,value:2,salary:1,club:"Libre"},
  ],
  "RCD Mallorca":        [
    {name:"Antonio Sánchez", pos:"MED",rating:74,age:25,value:5,salary:1,club:"Mallorca"},
    {name:"Larin",           pos:"DEL",rating:76,age:29,value:4,salary:1,club:"Mallorca"},
  ],
  "CA Osasuna":          [
    {name:"Chimy Ávila",     pos:"DEL",rating:77,age:29,value:8,salary:2,club:"Osasuna"},
    {name:"Torró",           pos:"MED",rating:75,age:28,value:4,salary:1,club:"Osasuna"},
  ],
  "Deportivo Alavés":    [
    {name:"Mamadou Sylla",   pos:"DEL",rating:73,age:27,value:3,salary:1,club:"Cádiz"},
    {name:"Tomás Pina",      pos:"MED",rating:72,age:34,value:1,salary:1,club:"Libre"},
  ],
  "RCD Espanyol":        [
    {name:"Dani Pérez",      pos:"MED",rating:73,age:25,value:4,salary:1,club:"Espanyol B"},
    {name:"Loren Morón",     pos:"DEL",rating:74,age:30,value:3,salary:1,club:"Betis"},
  ],
  "Elche CF":            [
    {name:"Pere Milla",      pos:"DEL",rating:74,age:28,value:4,salary:1,club:"Elche"},
    {name:"John Heymans",    pos:"MED",rating:72,age:26,value:2,salary:1,club:"Elche"},
  ],
  "Levante UD":          [
    {name:"Campaña",         pos:"MED",rating:74,age:29,value:4,salary:1,club:"Levante"},
    {name:"Morales",         pos:"DEL",rating:73,age:35,value:1,salary:1,club:"Levante"},
  ],
  "Real Oviedo":         [
    {name:"Cervero",         pos:"MED",rating:72,age:26,value:2,salary:1,club:"Oviedo B"},
    {name:"Joselu",          pos:"DEL",rating:73,age:33,value:1,salary:1,club:"Libre"},
  ],
};

// ── RIVALES CHAMPIONS ────────────────────────────────────────────────────────
const RIVALES_CHAMPIONS = [
  {name:"Manchester City",  strength:90},
  {name:"Bayern München",   strength:88},
  {name:"PSG",              strength:87},
  {name:"Inter de Milán",   strength:85},
  {name:"Arsenal",          strength:84},
  {name:"Borussia Dortmund",strength:82},
  {name:"Juventus",         strength:81},
  {name:"Porto",            strength:78},
];

// ── PREGUNTAS PRENSA ─────────────────────────────────────────────────────────
const PREGUNTAS_PRENSA = [
  "¿Cómo ve la situación del equipo tras los últimos resultados?",
  "¿Qué opina de las críticas de la afición hacia el rendimiento?",
  "¿Cuáles son los objetivos de la temporada?",
  "¿Está satisfecho con el mercado de fichajes realizado?",
  "¿Cómo valora el trabajo del cuerpo técnico?",
  "¿Qué mensaje le daría a los jugadores en este momento?",
  "¿Cuál es la situación económica real del club?",
  "¿Hay algún jugador que pueda salir en el próximo mercado?",
  "¿Qué opina de los árbitros esta temporada?",
  "¿Cree que el equipo tiene nivel para ganar LaLiga?",
];

// ── LESIONES POSIBLES ────────────────────────────────────────────────────────
const TIPOS_LESION = [
  {tipo:"Esguince de tobillo",  semanas:2},
  {tipo:"Rotura muscular",      semanas:6},
  {tipo:"Fractura de costilla", semanas:4},
  {tipo:"Lesión de rodilla",    semanas:12},
  {tipo:"Contusión",            semanas:1},
  {tipo:"Fatiga muscular",      semanas:1},
];

// ── CANTERA ──────────────────────────────────────────────────────────────────
const NOMBRES_CANTERA = [
  "Alejandro","Carlos","Miguel","Pablo","Sergio","Álvaro","Diego","Adrián",
  "Marcos","Daniel","Iván","Roberto","Javier","Manuel","Luis","Víctor",
];
const APELLIDOS_CANTERA = [
  "García","Martínez","López","Sánchez","González","Fernández","Rodríguez",
  "Pérez","Álvarez","Torres","Ramírez","Flores","Cruz","Jiménez","Moreno",
];

function generarJugadorCantera() {
  const nombre = NOMBRES_CANTERA[Math.floor(Math.random()*NOMBRES_CANTERA.length)];
  const apellido = APELLIDOS_CANTERA[Math.floor(Math.random()*APELLIDOS_CANTERA.length)];
  const pos = ["POR","DEF","MED","DEL"][Math.floor(Math.random()*4)];
  const rating = Math.floor(Math.random()*15)+60;
  const potencial = Math.min(99, rating + Math.floor(Math.random()*20)+5);
  const age = Math.floor(Math.random()*4)+16;
  return {
    id: Date.now() + Math.random(),
    name: `${nombre} ${apellido}`,
    pos, rating, potencial, age,
    salary:1, value: Math.floor(rating/10),
    morale:85, contrato:3, lesion:0,
    esCantera: true
  };
}

// ── PATROCINADORES ───────────────────────────────────────────────────────────
const PATROCINADORES_DISPONIBLES = [
  {nombre:"Nike",        ingreso:15, duracion:3, tipo:"Equipación"},
  {nombre:"Adidas",      ingreso:12, duracion:3, tipo:"Equipación"},
  {nombre:"Rakuten",     ingreso:10, duracion:2, tipo:"Camiseta"},
  {nombre:"Emirates",    ingreso:20, duracion:4, tipo:"Estadio"},
  {nombre:"Santander",   ingreso:8,  duracion:2, tipo:"Patrocinador"},
  {nombre:"Telefónica",  ingreso:7,  duracion:2, tipo:"Patrocinador"},
  {nombre:"Iberdrola",   ingreso:6,  duracion:1, tipo:"Patrocinador"},
  {nombre:"Amazon",      ingreso:18, duracion:3, tipo:"Digital"},
];

// ── LOGROS ───────────────────────────────────────────────────────────────────
const LOGROS_POSIBLES = [
  {id:"liga1",    nombre:"Campeón de LaLiga",         icono:"🏆", condicion: g => g.trophies.includes("Liga")},
  {id:"champions",nombre:"Campeón de Champions",      icono:"⭐", condicion: g => g.trophies.includes("Champions")},
  {id:"win10",    nombre:"10 victorias seguidas",     icono:"🔥", condicion: g => g.wins >= 10},
  {id:"budget",   nombre:"Gestor brillante (500M€)",  icono:"💰", condicion: g => g.budget >= 500},
  {id:"moral100", nombre:"Equipo motivado al máximo", icono:"💪", condicion: g => g.morale >= 95},
  {id:"fans100k", nombre:"100.000 seguidores",        icono:"👥", condicion: g => g.fans >= 100000},
  {id:"nolesion", nombre:"Temporada sin lesiones",    icono:"🏥", condicion: g => g.players.every(p=>p.lesion===0)},
  {id:"cantera",  nombre:"Apuesta por la cantera",    icono:"🌱", condicion: g => g.cultura.cantera >= 80},
];

// ── ESTADO DEL JUEGO ─────────────────────────────────────────────────────────
let G = {};

function initGame(teamName, presidentName) {
  const td = TEAMS[teamName];
  G = {
    team:        teamName,
    president:   presidentName || "Presidente",
    players:     td.players.map(p=>({...p})),
    budget:      td.budget,
    prestige:    td.prestige,
    fans:        td.capacidad * 0.8 | 0,
    points:      0,
    wins:0, draws:0, losses:0,
    goals:0, goalsAgainst:0,
    morale:      80,
    cultura:     {...td.cultura},
    trophies:    [],
    matchesPlayed: 0,
    week:        1,
    season:      1,
    news:        [`🎉 ${presidentName||"Nuevo Presidente"} asume el mando del ${teamName}. ¡Empieza una nueva era!`],
    cantera:     [generarJugadorCantera(), generarJugadorCantera(), generarJugadorCantera()],
    patrocinadores: [],
    finanzas:    { ingresos:0, gastos:0, historial:[] },
    logrosConseguidos: [],
    clasificacion: generarClasificacion(teamName),
    championsGrupo: null,
    championsClasificado: false,
  };
  renderAll();
  showScreen("main");
}

function generarClasificacion(miEquipo) {
  const equipos = Object.keys(TEAMS).filter(e => e !== miEquipo);
  const clas = [{name:miEquipo, pts:0, pg:0, pe:0, pp:0, gf:0, gc:0}];
  equipos.slice(0,19).forEach(e => {
    clas.push({
      name:e,
      pts:  Math.floor(Math.random()*10),
      pg:   Math.floor(Math.random()*3),
      pe:   Math.floor(Math.random()*2),
      pp:   Math.floor(Math.random()*2),
      gf:   Math.floor(Math.random()*8),
      gc:   Math.floor(Math.random()*8),
    });
  });
  return clas.sort((a,b)=>b.pts-a.pts);
}

function teamStrength() {
  if (!G.players.length) return 0;
  const disponibles = G.players.filter(p => p.lesion === 0);
  if (!disponibles.length) return 50;
  const base = disponibles.reduce((s,p)=>s+p.rating,0)/disponibles.length;
  return Math.round(base + (G.morale-50)/20);
}

function addNews(msg) {
  G.news.unshift(msg);
  if (G.news.length > 20) G.news.pop();
}

function renderAll() {
  renderHeader();
  renderDashboard();
  renderSquad();
  renderTransfers();
  renderMatch();
  renderFinanzas();
  renderCantera();
  renderContratos();
  renderLesiones();
  renderLogros();
  renderChampions();
      }
// ── RENDER FUNCIONES ─────────────────────────────────────────────────────────
function renderHeader() {
  if (!G.team) return;
  const td = TEAMS[G.team];
  document.getElementById("h-nombre").textContent  = `${G.president} · ${G.team.toUpperCase()}`;
  document.getElementById("h-season").textContent  = `TEMPORADA ${G.season} · JORNADA ${G.week-1}`;
  document.getElementById("h-budget").textContent  = `${G.budget}M€`;
  document.getElementById("h-points").textContent  = G.points;
  document.getElementById("h-strength").textContent= `${teamStrength()}/100`;
  document.getElementById("h-morale").textContent  = `${G.morale}%`;
}

function renderDashboard() {
  const sd = document.getElementById("stats-dashboard");
  if (!sd) return;
  sd.innerHTML = [
    ["🏆","Victorias", G.wins,    "var(--green)"],
    ["🤝","Empates",   G.draws,   "var(--gold)"],
    ["💔","Derrotas",  G.losses,  "var(--red)"],
    ["⚽","Goles F.",  G.goals,   "var(--neon)"],
    ["🥅","Goles C.",  G.goalsAgainst,"var(--red)"],
    ["👥","Afición",   G.fans.toLocaleString(),"var(--neon2)"],
  ].map(([i,l,v,c])=>`
    <div class="card" style="text-align:center;padding:12px 8px">
      <div style="font-size:20px">${i}</div>
      <div style="font-size:20px;font-weight:700;color:${c};margin:4px 0">${v}</div>
      <div style="font-size:9px;color:var(--muted);letter-spacing:1px">${l.toUpperCase()}</div>
    </div>`).join("");

  const nl = document.getElementById("news-list");
  if (nl) nl.innerHTML = G.news.map(n=>`<div class="news-item">${n}</div>`).join("");

  const pp = document.getElementById("proximo-partido");
  if (pp) {
    const rivales = Object.keys(TEAMS).filter(t=>t!==G.team);
    const rival = rivales[G.week % rivales.length];
    const str = TEAMS[rival] ? Math.round(TEAMS[rival].players.reduce((s,p)=>s+p.rating,0)/TEAMS[rival].players.length) : 75;
    pp.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:13px;font-weight:700;color:var(--text)">${G.team} vs ${rival}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:4px">Jornada ${G.week} · LaLiga EA Sports</div>
        </div>
        <div style="text-align:center">
          <div style="font-size:11px;color:var(--muted)">RIVAL</div>
          <div style="font-size:16px;font-weight:700;color:var(--gold)">${str}/100</div>
        </div>
      </div>`;
  }
}

function renderSquad() {
  const sq = document.getElementById("squad-list");
  if (!sq) return;
  const posOrder  = ["POR","DEF","MED","DEL"];
  const posNames  = {POR:"PORTEROS",DEF:"DEFENSAS",MED:"CENTROCAMPISTAS",DEL:"DELANTEROS"};
  const posColors = {DEL:"var(--red)",MED:"var(--neon)",DEF:"var(--green)",POR:"var(--gold)"};

  const cnt = document.getElementById("squad-count");
  if (cnt) cnt.textContent = `${G.players.length} jugadores`;

  sq.innerHTML = posOrder.map(pos=>{
    const pl = G.players.filter(p=>p.pos===pos);
    if (!pl.length) return "";
    return `
      <div style="margin-bottom:16px">
        <div style="font-size:9px;font-weight:700;letter-spacing:3px;color:${posColors[pos]};
             margin-bottom:8px;padding:4px 10px;background:${posColors[pos]}11;
             border-left:3px solid ${posColors[pos]};display:inline-block">${posNames[pos]}</div>
        ${pl.map(p=>`
          <div class="player-card ${p.lesion>0?'lesionado':''} ${p.esCantera?'cantera':''}">
            <div style="display:flex;align-items:center;flex:1">
              <div class="pos-badge" style="border-color:${posColors[p.pos]};color:${posColors[p.pos]}">${p.pos}</div>
              <div>
                <div class="player-name">${p.name} ${p.lesion>0?'🏥':''} ${p.esCantera?'🌱':''}</div>
                <div class="player-info">${p.age} años · ${p.salary}M€/año · Contrato: ${p.contrato}a</div>
              </div>
            </div>
            <div style="display:flex;gap:10px;align-items:center">
              <div style="text-align:center">
                <div class="rating">${p.rating}</div>
                <div style="font-size:8px;color:var(--muted)">MEDIA</div>
              </div>
              <div style="text-align:center">
                <div style="font-size:12px;font-weight:700;color:var(--green)">${p.value}M€</div>
                <div style="font-size:8px;color:var(--muted)">VALOR</div>
              </div>
              <div style="text-align:center">
                <div style="font-size:12px;color:${p.morale>80?'var(--green)':p.morale>60?'var(--gold)':'var(--red)'}">${p.morale}%</div>
                <div style="font-size:8px;color:var(--muted)">MORAL</div>
              </div>
              <button onclick="venderJugador(${p.id})"
                style="background:var(--red)22;color:var(--red);border:1px solid var(--red);
                       padding:5px 8px;cursor:pointer;font-family:inherit;font-size:10px;
                       letter-spacing:1px">VENDER</button>
            </div>
          </div>`).join("")}
      </div>`;
  }).join("");
}

function renderTransfers() {
  const tl = document.getElementById("transfer-list");
  if (!tl) return;
  const transfers = TRANSFERS[G.team] || [];
  tl.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
      <span style="font-size:11px;color:var(--muted)">OBJETIVOS DISPONIBLES</span>
      <span class="neon-badge gold">PRESUPUESTO: ${G.budget}M€</span>
    </div>` +
    transfers.map((t,i)=>`
      <div class="card" style="margin-bottom:10px">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
          <div style="flex:1">
            <div style="font-weight:700;font-size:14px;color:var(--text)">${t.name}</div>
            <div style="font-size:11px;color:var(--muted);margin-top:2px">${t.club} · ${t.age} años · ${t.pos}</div>
          </div>
          <div style="display:flex;gap:14px;align-items:center">
            <div style="text-align:center">
              <div class="rating">${t.rating}</div>
              <div style="font-size:8px;color:var(--muted)">MEDIA</div>
            </div>
            <div style="text-align:center">
              <div style="font-size:13px;font-weight:700;color:var(--green)">${t.value}M€</div>
              <div style="font-size:8px;color:var(--muted)">VALOR</div>
            </div>
            <div style="text-align:center">
              <div style="font-size:12px;color:var(--red)">${t.salary}M€/a</div>
              <div style="font-size:8px;color:var(--muted)">SALARIO</div>
            </div>
            <button onclick="comprarJugador(${i})"
              style="background:${G.budget>=t.value?'var(--neon)22':'#33333322'};
                     color:${G.budget>=t.value?'var(--neon)':'var(--muted)'};
                     border:1px solid ${G.budget>=t.value?'var(--neon)':'#333'};
                     padding:8px 12px;cursor:pointer;font-family:inherit;
                     font-weight:700;font-size:11px;letter-spacing:1px">
              ${G.budget>=t.value?"FICHAR":"SIN FONDOS"}
            </button>
          </div>
        </div>
      </div>`).join("");
}

function renderMatch() {
  const mj = document.getElementById("match-jornada");
  const mi = document.getElementById("match-info");
  if (mj) mj.textContent = `JORNADA ${G.week} · LALIGA EA SPORTS`;
  if (mi) mi.textContent = `Potencial: ${teamStrength()}/100 · Moral: ${G.morale}% · Lesionados: ${G.players.filter(p=>p.lesion>0).length}`;

  const cl = document.getElementById("clasificacion");
  if (!cl || !G.clasificacion) return;
  const sorted = [...G.clasificacion].sort((a,b)=>b.pts-a.pts);
  cl.innerHTML = `
    <table class="retro-table">
      <thead><tr>
        <th>#</th><th>EQUIPO</th><th>PJ</th><th>PTS</th><th>GF</th><th>GC</th>
      </tr></thead>
      <tbody>
        ${sorted.slice(0,10).map((e,i)=>`
          <tr class="${e.name===G.team?'highlight':''}">
            <td>${i+1}</td>
            <td>${e.name===G.team?'⭐ ':''}<b>${e.name}</b></td>
            <td>${e.pg+e.pe+e.pp}</td>
            <td><b>${e.pts}</b></td>
            <td>${e.gf}</td>
            <td>${e.gc}</td>
          </tr>`).join("")}
      </tbody>
    </table>`;
}

function renderFinanzas() {
  const fb = document.getElementById("finance-balance");
  if (!fb) return;
  const salarios = G.players.reduce((s,p)=>s+p.salary,0);
  const ingresosFans = Math.round(G.fans * 0.001);
  const ingresosPatroc = G.patrocinadores.reduce((s,p)=>s+p.ingreso,0);
  fb.innerHTML = `
    <div class="finance-row"><span class="label">💰 Presupuesto actual</span><span class="val-pos">${G.budget}M€</span></div>
    <div class="finance-row"><span class="label">👥 Ingresos taquilla</span><span class="val-pos">+${ingresosFans}M€/j</span></div>
    <div class="finance-row"><span class="label">🤝 Patrocinadores</span><span class="val-pos">+${ingresosPatroc}M€/año</span></div>
    <div class="finance-row"><span class="label">💸 Masa salarial</span><span class="val-neg">-${salarios}M€/año</span></div>
    <div class="finance-row"><span class="label">📊 Balance neto</span>
      <span class="${ingresosPatroc+ingresosFans-salarios>=0?'val-pos':'val-neg'}">
        ${ingresosPatroc+ingresosFans-salarios>=0?'+':''}${ingresosPatroc+ingresosFans-salarios}M€
      </span>
    </div>`;

  const pl = document.getElementById("patrocinadores-list");
  if (!pl) return;
  if (!G.patrocinadores.length) {
    pl.innerHTML = `<div style="color:var(--muted);font-size:12px">No tienes patrocinadores activos. ¡Busca uno!</div>`;
  } else {
    pl.innerHTML = G.patrocinadores.map(p=>`
      <div class="finance-row">
        <span class="label">🤝 ${p.nombre} (${p.tipo})</span>
        <span class="val-pos">+${p.ingreso}M€/año · ${p.duracion}a restantes</span>
      </div>`).join("");
  }
}

function renderCantera() {
  const cl = document.getElementById("cantera-list");
  if (!cl) return;
  if (!G.cantera.length) {
    cl.innerHTML = `<div style="color:var(--muted);font-size:12px">No hay jugadores en cantera. Pulsa OJEAR.</div>`;
    return;
  }
  cl.innerHTML = G.cantera.map(p=>`
    <div class="player-card cantera" style="flex-wrap:wrap;gap:8px">
      <div style="display:flex;align-items:center;flex:1">
        <div class="pos-badge" style="border-color:var(--green);color:var(--green)">${p.pos}</div>
        <div>
          <div class="player-name">🌱 ${p.name}</div>
          <div class="player-info">${p.age} años · Potencial: ${p.potencial}/100</div>
        </div>
      </div>
      <div style="display:flex;gap:10px;align-items:center">
        <div style="text-align:center">
          <div class="rating">${p.rating}</div>
          <div style="font-size:8px;color:var(--muted)">ACTUAL</div>
        </div>
        <div style="text-align:center">
          <div style="font-size:14px;font-weight:700;color:var(--neon2)">${p.potencial}</div>
          <div style="font-size:8px;color:var(--muted)">POTENCIAL</div>
        </div>
        <button onclick="subirCantera(${p.id})"
          style="background:var(--green)22;color:var(--green);border:1px solid var(--green);
                 padding:6px 10px;cursor:pointer;font-family:inherit;font-size:10px">SUBIR</button>
      </div>
    </div>`).join("");
}

function renderContratos() {
  const cl = document.getElementById("contratos-list");
  if (!cl) return;
  const proximos = G.players.filter(p=>p.contrato<=1).sort((a,b)=>a.contrato-b.contrato);
  if (!proximos.length) {
    cl.innerHTML = `<div style="color:var(--green);font-size:12px">✅ Todos los contratos están en orden.</div>`;
    return;
  }
  cl.innerHTML = proximos.map(p=>`
    <div class="player-card" style="flex-wrap:wrap;gap:8px">
      <div style="display:flex;align-items:center;flex:1">
        <div class="pos-badge" style="border-color:var(--gold);color:var(--gold)">${p.pos}</div>
        <div>
          <div class="player-name">${p.name}</div>
          <div class="player-info">${p.contrato===0?'⚠️ CONTRATO VENCIDO':'⚠️ Vence en 1 año'} · ${p.salary}M€/año</div>
        </div>
      </div>
      <button onclick="renovarContrato(${p.id})"
        style="background:var(--gold)22;color:var(--gold);border:1px solid var(--gold);
               padding:8px 12px;cursor:pointer;font-family:inherit;font-size:11px">RENOVAR</button>
    </div>`).join("");
}

function renderLesiones() {
  const ll = document.getElementById("lesiones-list");
  if (!ll) return;
  const lesionados = G.players.filter(p=>p.lesion>0);
  if (!lesionados.length) {
    ll.innerHTML = `<div style="color:var(--green);font-size:12px">✅ Enfermería vacía. Toda la plantilla disponible.</div>`;
    return;
  }
  ll.innerHTML = lesionados.map(p=>`
    <div class="player-card lesionado">
      <div style="display:flex;align-items:center;flex:1">
        <div class="pos-badge" style="border-color:var(--red);color:var(--red)">${p.pos}</div>
        <div>
          <div class="player-name">🏥 ${p.name}</div>
          <div class="player-info">${p.tipoLesion||'Lesión'} · ${p.lesion} semanas restantes</div>
        </div>
      </div>
      <div class="neon-badge red">${p.lesion} sem.</div>
    </div>`).join("");
}

function renderLogros() {
  const ll = document.getElementById("logros-list");
  if (!ll) return;
  ll.innerHTML = LOGROS_POSIBLES.map(l=>{
    const conseguido = l.condicion(G);
    if (conseguido && !G.logrosConseguidos.includes(l.id)) {
      G.logrosConseguidos.push(l.id);
      addNews(`🥇 LOGRO DESBLOQUEADO: ${l.nombre}`);
    }
    return `
      <div class="logro-card ${conseguido?'conseguido':''}">
        <div class="logro-icon">${l.icono}</div>
        <div>
          <div class="logro-name" style="color:${conseguido?'var(--gold)':'var(--muted)'}">${l.nombre}</div>
          <div class="logro-desc">${conseguido?'✅ CONSEGUIDO':'🔒 Pendiente'}</div>
        </div>
      </div>`; }).join("");

  const st = document.getElementById("stats-temporada");
  if (!st) return;
  st.innerHTML = `
    <table class="retro-table">
      <thead><tr><th>ESTADÍSTICA</th><th>VALOR</th></tr></thead>
      <tbody>
        <tr><td>Partidos jugados</td><td><b>${G.matchesPlayed}</b></td></tr>
        <tr><td>Victorias / Empates / Derrotas</td><td><b>${G.wins}/${G.draws}/${G.losses}</b></td></tr>
        <tr><td>Goles a favor / en contra</td><td><b>${G.goals}/${G.goalsAgainst}</b></td></tr>
        <tr><td>Racha actual</td><td><b>${G.wins>0?'🔥 '+G.wins+' victorias':'—'}</b></td></tr>
        <tr><td>Trofeos esta temporada</td><td><b>${G.trophies.length?G.trophies.join(", "):"Ninguno aún"}</b></td></tr>
        <tr><td>Presupuesto actual</td><td><b style="color:var(--green)">${G.budget}M€</b></td></tr>
        <tr><td>Masa salarial</td><td><b style="color:var(--red)">${G.players.reduce((s,p)=>s+p.salary,0)}M€/año</b></td></tr>
      </tbody>
    </table>`;
}

function renderChampions() {
  const ce = document.getElementById("champions-estado");
  if (!ce) return;
  if (G.points >= 45) {
    G.championsClasificado = true;
    ce.textContent = "✅ CLASIFICADO";
    ce.className = "neon-badge green";
    if (!G.championsGrupo) generarGrupoChampions();
  } else {
    ce.textContent = `${G.points}/45 PTS PARA CLASIFICARSE`;
    ce.className = "neon-badge";
  }

  const cg = document.getElementById("champions-grupo");
  if (!cg || !G.championsGrupo) return;
  cg.innerHTML = `
    <div class="section-title" style="margin-top:12px">FASE DE GRUPOS</div>
    <table class="retro-table">
      <thead><tr><th>EQUIPO</th><th>PJ</th><th>PTS</th></tr></thead>
      <tbody>
        ${G.championsGrupo.map(e=>`
          <tr class="${e.name===G.team?'highlight':''}">
            <td>${e.name===G.team?'⭐ ':''}<b>${e.name}</b></td>
            <td>${e.pj}</td>
            <td><b>${e.pts}</b></td>
          </tr>`).join("")}
      </tbody>
    </table>
    <button class="btn btn-neon" style="margin-top:10px" onclick="jugarChampions()">
      ⭐ JUGAR PARTIDO CHAMPIONS
    </button>`;
}

function generarGrupoChampions() {
  const rivales = RIVALES_CHAMPIONS.slice(0,3);
  G.championsGrupo = [
    {name:G.team, pj:0, pts:0},
    ...rivales.map(r=>({name:r.name, pj:0, pts:Math.floor(Math.random()*6)}))
  ];
}
// ── SIMULAR PARTIDO ──────────────────────────────────────────────────────────
function simularPartido() {
  const equipos = Object.keys(TEAMS).filter(t=>t!==G.team);
  const rival = equipos[G.week % equipos.length];
  const strRival = TEAMS[rival]
    ? Math.round(TEAMS[rival].players.reduce((s,p)=>s+p.rating,0)/TEAMS[rival].players.length)
    : 72;

  const str  = teamStrength();
  const diff = str - strRival;
  const rand = (Math.random()-0.5)*20;
  const score= diff + rand;

  let myGoals    = Math.max(0, Math.round(Math.random()*3+(score>0?1:0)));
  let theirGoals = Math.max(0, Math.round(Math.random()*3+(score<0?1:0)));

  let result, pts, moraleChange, fanChange;
  if (myGoals>theirGoals)      {result="VICTORIA";pts=3; moraleChange=5;  fanChange=800;}
  else if (myGoals===theirGoals){result="EMPATE";  pts=1; moraleChange=0;  fanChange=0;}
  else                          {result="DERROTA"; pts=0; moraleChange=-8; fanChange=-600;}

  // Actualizar clasificacion
  const miEntry = G.clasificacion.find(e=>e.name===G.team);
  if (miEntry) {
    miEntry.pts += pts;
    miEntry.gf  += myGoals;
    miEntry.gc  += theirGoals;
    miEntry.pg  += result==="VICTORIA"?1:0;
    miEntry.pe  += result==="EMPATE"?1:0;
    miEntry.pp  += result==="DERROTA"?1:0;
  }

  // Rivales también suman puntos aleatoriamente
  G.clasificacion.filter(e=>e.name!==G.team).forEach(e=>{
    e.pts += Math.random()>0.5?3:Math.random()>0.5?1:0;
    e.gf  += Math.floor(Math.random()*3);
    e.gc  += Math.floor(Math.random()*3);
  });
  G.clasificacion.sort((a,b)=>b.pts-a.pts);

  G.points        += pts;
  G.wins          += result==="VICTORIA"?1:0;
  G.draws         += result==="EMPATE"?1:0;
  G.losses        += result==="DERROTA"?1:0;
  G.goals         += myGoals;
  G.goalsAgainst  += theirGoals;
  G.morale         = Math.min(100,Math.max(20,G.morale+moraleChange));
  G.fans           = Math.max(10000,G.fans+fanChange);
  G.matchesPlayed += 1;
  G.week          += 1;

  // Ingresos de taquilla
  const taquilla = Math.round(G.fans*0.001);
  G.budget += taquilla;
  G.finanzas.ingresos += taquilla;

  // Posible lesion aleatoria
  if (Math.random()<0.15) generarLesion();

  // Reducir semanas lesion
  G.players.forEach(p=>{if(p.lesion>0)p.lesion--;});

  // Reducir contrato
  if (G.week % 38 === 0) {
    G.players.forEach(p=>{if(p.contrato>0)p.contrato--;});
    G.season++;
    addNews(`📅 Nueva temporada ${G.season} comenzada.`);
  }

  const icon = result==="VICTORIA"?"⚽":result==="EMPATE"?"🤝":"💔";
  addNews(`${icon} J${G.week-1} — ${G.team} ${myGoals}-${theirGoals} ${rival} · ${result}`);

  showResultBanner(myGoals,theirGoals,rival,result);
  renderAll();
  generarNarrativaPartido(myGoals,theirGoals,rival,result);
  comprobarLogros();
}

function jugarChampions() {
  if (!G.championsGrupo) return;
  const rival = RIVALES_CHAMPIONS[Math.floor(Math.random()*RIVALES_CHAMPIONS.length)];
  const str   = teamStrength();
  const diff  = str - rival.strength;
  const rand  = (Math.random()-0.5)*25;
  const score = diff + rand;

  let mg = Math.max(0,Math.round(Math.random()*3+(score>0?1:0)));
  let tg = Math.max(0,Math.round(Math.random()*3+(score<0?1:0)));
  let result,pts;
  if(mg>tg){result="VICTORIA";pts=3;}
  else if(mg===tg){result="EMPATE";pts=1;}
  else{result="DERROTA";pts=0;}

  const miEntry = G.championsGrupo.find(e=>e.name===G.team);
  if (miEntry){miEntry.pts+=pts;miEntry.pj++;}

  if (pts===3 && !G.trophies.includes("Champions") && G.championsGrupo.find(e=>e.name===G.team)?.pts>=9) {
    G.trophies.push("Champions");
    addNews("🏆 ¡CAMPEONES DE EUROPA! ¡Historia para el club!");
  }

  addNews(`⭐ CHAMPIONS — ${G.team} ${mg}-${tg} ${rival.name} · ${result}`);
  renderChampions();
  renderDashboard();
}

function showResultBanner(mg,tg,rival,result) {
  const banner = document.getElementById("result-banner");
  if (!banner) return;
  const colors = {
    VICTORIA:["#14532d","var(--green)"],
    EMPATE:  ["#713f12","var(--gold)"],
    DERROTA: ["#7f1d1d","var(--red)"]
  };
  const [bg,accent] = colors[result];
  banner.style.background  = bg;
  banner.style.borderLeft  = `4px solid ${accent}`;
  banner.style.display     = "flex";
  banner.innerHTML = `
    <div style="flex:1">
      <div style="font-size:10px;color:#aaa;letter-spacing:2px">RESULTADO FINAL</div>
      <div class="result-score">${G.team} ${mg} - ${tg} ${rival}</div>
    </div>
    <div class="result-label" style="color:${accent}">${result}</div>
    <button onclick="document.getElementById('result-banner').style.display='none'"
      style="background:none;border:none;color:#666;font-size:18px;cursor:pointer;margin-left:8px">✕</button>`;
}

// ── LESIONES ─────────────────────────────────────────────────────────────────
function generarLesion() {
  const disponibles = G.players.filter(p=>p.lesion===0);
  if (!disponibles.length) return;
  const jugador = disponibles[Math.floor(Math.random()*disponibles.length)];
  const lesion  = TIPOS_LESION[Math.floor(Math.random()*TIPOS_LESION.length)];
  jugador.lesion     = lesion.semanas;
  jugador.tipoLesion = lesion.tipo;
  addNews(`🏥 LESIÓN: ${jugador.name} — ${lesion.tipo} (${lesion.semanas} semanas)`);
  const box = document.getElementById("narrativa-lesion");
  if (box) {
    box.className = "narrative-box thinking";
    box.textContent = "⏳ Redactando parte médico...";
    llamarIA(`Redacta en 2 frases el parte médico oficial del club sobre la lesión de ${jugador.name}: ${lesion.tipo}, baja ${lesion.semanas} semanas. Tono formal y deportivo.`)
      .then(t=>{box.className="narrative-box";box.textContent=t;});
  }
}

// ── FICHAJES ─────────────────────────────────────────────────────────────────
function comprarJugador(idx) {
  const t = (TRANSFERS[G.team]||[])[idx];
  if (!t) return;
  if (G.budget<t.value) {
    abrirModal("❌ Sin presupuesto",`Necesitas ${t.value}M€ pero tienes ${G.budget}M€.`,null);
    return;
  }
  abrirModal(`Fichar a ${t.name}`,
    `Club: ${t.club}\nValoración: ${t.rating}/100\nValor: ${t.value}M€\nSalario: ${t.salary}M€/año\n\nPresupuesto actual: ${G.budget}M€`,
    ()=>{
      G.budget -= t.value;
      G.players.push({id:Date.now(),...t,morale:82,contrato:3,lesion:0});
      addNews(`✅ FICHAJE: ${t.name} llega al ${G.team} por ${t.value}M€`);
      G.finanzas.gastos += t.value;
      renderAll();
      cerrarModal();
    });
}

function venderJugador(id) {
  const p = G.players.find(x=>x.id===id);
  if (!p) return;
  abrirModal(`Vender a ${p.name}`,
    `Recibirás ${p.value}M€ por este jugador.\nRating: ${p.rating}/100\nSalario liberado: ${p.salary}M€/año`,
    ()=>{
      G.budget += p.value;
      G.finanzas.ingresos += p.value;
      G.players = G.players.filter(x=>x.id!==id);
      addNews(`💸 VENTA: ${p.name} sale por ${p.value}M€`);
      renderAll();
      cerrarModal();
    });
}

// ── CONTRATOS ────────────────────────────────────────────────────────────────
function renovarContrato(id) {
  const p = G.players.find(x=>x.id===id);
  if (!p) return;
  const coste = Math.round(p.salary*0.2);
  abrirModal(`Renovar a ${p.name}`,
    `Subida salarial: +${coste}M€/año\nNuevo salario: ${p.salary+coste}M€/año\nNuevo contrato: 3 años`,
    ()=>{
      p.contrato = 3;
      p.salary  += coste;
      p.morale   = Math.min(100,p.morale+10);
      addNews(`📝 RENOVACIÓN: ${p.name} firma 3 años más (${p.salary}M€/año)`);
      renderAll();
      cerrarModal();
    });
}

// ── CANTERA ──────────────────────────────────────────────────────────────────
function ojeadoCantera() {
  const nuevo = generarJugadorCantera();
  G.cantera.push(nuevo);
  addNews(`🌱 CANTERA: Se incorpora ${nuevo.name} (${nuevo.age} años, potencial ${nuevo.potencial})`);
  renderCantera();
}

function subirCantera(id) {
  const idx = G.cantera.findIndex(p=>p.id===id);
  if (idx===-1) return;
  const p = G.cantera[idx];
  abrirModal(`Subir a ${p.name}`,
    `Rating actual: ${p.rating}/100\nPotencial: ${p.potencial}/100\nEdad: ${p.age} años\n\nSe incorporará al primer equipo.`,
    ()=>{
      G.players.push({...p,esCantera:true});
      G.cantera.splice(idx,1);
      addNews(`🌱 DEBUT: ${p.name} sube de la cantera al primer equipo`);
      renderAll();
      cerrarModal();
    });
}

// ── PATROCINADORES ───────────────────────────────────────────────────────────
function buscarPatrocinador() {
  const disponibles = PATROCINADORES_DISPONIBLES.filter(
    p=>!G.patrocinadores.find(a=>a.nombre===p.nombre)
  );
  if (!disponibles.length) {
    abrirModal("Sin ofertas","No hay patrocinadores disponibles ahora mismo.",null);
    return;
  }
  const pat = disponibles[Math.floor(Math.random()*disponibles.length)];
  abrirModal(`Acuerdo con ${pat.nombre}`,
    `Tipo: ${pat.tipo}\nIngresos: ${pat.ingreso}M€/año\nDuración: ${pat.duracion} años\n\n¿Aceptas el acuerdo?`,
    ()=>{
      G.patrocinadores.push({...pat});
      G.budget += pat.ingreso;
      addNews(`🤝 PATROCINADOR: Acuerdo con ${pat.nombre} por ${pat.ingreso}M€/año`);
      renderFinanzas();
      cerrarModal();
    });
}

// ── PRENSA ───────────────────────────────────────────────────────────────────
function nuevaRuedaPrensa() {
  const container = document.getElementById("preguntas-prensa");
  if (!container) return;
  const preguntas = [...PREGUNTAS_PRENSA]
    .sort(()=>Math.random()-0.5)
    .slice(0,4);
  container.innerHTML = preguntas.map(q=>`
    <button class="btn btn-gray" style="text-align:left;font-size:12px;padding:10px;
            margin-bottom:6px;line-height:1.5" onclick="responderPrensa('${q.replace(/'/g,"\\'")}')">
      🎙️ ${q}
    </button>`).join("");
}

async function responderPrensa(pregunta) {
  const box = document.getElementById("narrativa-prensa");
  if (!box) return;
  box.className = "narrative-box thinking";
  box.textContent = "⏳ El presidente toma la palabra...";
  const ctx = `Eres el presidente del ${G.team}. El equipo lleva ${G.points} puntos, ${G.wins} victorias y ${G.losses} derrotas. Moral: ${G.morale}/100. Responde en primera persona a esta pregunta de prensa en 3 frases. Tono presidencial, serio pero cercano.`;
  const texto = await llamarIA(pregunta, ctx);
  box.className = "narrative-box";
  box.textContent = `"${texto}"`;
  const impactoMoral = Math.random()>0.5?2:-1;
  G.morale = Math.min(100,Math.max(20,G.morale+impactoMoral));
  addNews(`🎙️ PRENSA: El presidente compareció ante los medios`);
  renderHeader();
}

// ── CONSEJERO IA ─────────────────────────────────────────────────────────────
async function consultarConsejero(pregunta) {
  const box = document.getElementById("narrativa-consejero");
  if (!box) return;
  box.className = "narrative-box thinking";
  box.textContent = "⏳ El consejero analiza la situación...";
  const ctx = `Eres el consejero del presidente del ${G.team}. Datos actuales — Presupuesto: ${G.budget}M€. Puntos: ${G.points}. Moral: ${G.morale}/100. Aficionados: ${G.fans.toLocaleString()}. Jugadores: ${G.players.length}. Lesionados: ${G.players.filter(p=>p.lesion>0).length}. Cultura — Estilo: ${G.cultura.estilo}/100, Cantera: ${G.cultura.cantera}/100, Defensa: ${G.cultura.defensa}/100. Responde en español, máximo 100 palabras, de forma útil y directa.`;
  const texto = await llamarIA(pregunta, ctx);
  box.className = "narrative-box";
  box.textContent = texto;
}

// ── NARRATIVA IA ─────────────────────────────────────────────────────────────
async function generarNarrativaPartido(mg,tg,rival,result) {
  const box = document.getElementById("narrativa-match");
  if (!box) return;
  box.className = "narrative-box thinking";
  box.textContent = "✍️ Redactando crónica...";
  const prompt = `Eres el cronista del ${G.team}. Redacta en 3 frases dramáticas la crónica de: ${G.team} ${mg}-${tg} ${rival}. Resultado: ${result}. Temporada ${G.season}, jornada ${G.week-1}. Solo la crónica, sin títulos ni encabezados.`;
  const texto = await llamarIA(prompt);
  box.className = "narrative-box";
  box.textContent = texto;
}

async function llamarIA(prompt, system) {
  try {
    const body = {
      model:"claude-sonnet-4-20250514",
      max_tokens:200,
      messages:[{role:"user",content:prompt}]
    };
    if (system) body.system = system;
    const res  = await fetch("https://api.anthropic.com/v1/messages",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(body)
    });
    const data = await res.json();
    return data.content?.[0]?.text || "Sin respuesta.";
  } catch(e) {
    return "Error al conectar con el consejero.";
  }
}

// ── LOGROS ───────────────────────────────────────────────────────────────────
function comprobarLogros() {
  LOGROS_POSIBLES.forEach(l=>{
    if (!G.logrosConseguidos.includes(l.id) && l.condicion(G)) {
      G.logrosConseguidos.push(l.id);
      G.trophies.push(l.nombre);
      addNews(`🥇 LOGRO: ${l.nombre} desbloqueado`);
    }
  });
}

// ── MODAL ────────────────────────────────────────────────────────────────────
function abrirModal(titulo,cuerpo,onConfirm) {
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

// ── SCREENS ──────────────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  const s = document.getElementById("screen-"+id);
  if (s) s.classList.add("active");
}

// ── INICIO ───────────────────────────────────────────────────────────────────
window.onload = () => showScreen("intro");
