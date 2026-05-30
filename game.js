// ============================================================================
// FÚTBOL PRESIDENTE — MOTOR CON RUEDAS DE PRENSA, MORAL Y AFICIÓN
// ============================================================================

const SEEDS_TEAMS = {
  "Real Madrid":       { badge: "⚪", budget: 140, strength: 91, cultura: { estilo: 75, cantera: 55, defensa: 45 } },
  "FC Barcelona":      { badge: "🔵🔴", budget: 85, strength: 88, cultura: { estilo: 92, cantera: 88, defensa: 35 } },
  "Atlético de Madrid":{ badge: "🔴⚪", budget: 110, strength: 85, cultura: { estilo: 45, cantera: 55, defensa: 85 } },
  "Athletic Club":     { badge: "🦁", budget: 45,  strength: 82, cultura: { estilo: 60, cantera: 95, defensa: 70 } },
  "Real Sociedad":     { badge: "🔵⚪", budget: 40,  strength: 81, cultura: { estilo: 80, cantera: 75, defensa: 65 } },
  "Villarreal CF":     { badge: "💛", budget: 35,  strength: 79, cultura: { estilo: 75, cantera: 70, defensa: 50 } },
  "Real Betis":        { badge: "💚", budget: 30,  strength: 78, cultura: { estilo: 70, cantera: 60, defensa: 55 } },
  "Girona FC":         { badge: "❤️", budget: 28,  strength: 80, cultura: { estilo: 85, cantera: 50, defensa: 45 } },
  "Sevilla FC":        { badge: "⚱️", budget: 25,  strength: 76, cultura: { estilo: 55, cantera: 65, defensa: 60 } },
  "Valencia CF":       { badge: "🦇", budget: 20,  strength: 74, cultura: { estilo: 50, cantera: 80, defensa: 65 } }
};

const STARTER_PLAYERS = {
  "Real Madrid": [
    { id:1, name:"Vinicius Jr.", pos:"DEL", rating:92, age:25, salary:18, value:200, fatigue:0, injuryWeeks:0 },
    { id:2, name:"Jude Bellingham", pos:"MED", rating:91, age:22, salary:16, value:180, fatigue:0, injuryWeeks:0 },
    { id:3, name:"Kylian Mbappé", pos:"DEL", rating:93, age:27, salary:22, value:210, fatigue:0, injuryWeeks:0 },
    { id:4, name:"Federico Valverde", pos:"MED", rating:89, age:27, salary:12, value:120, fatigue:0, injuryWeeks:0 },
    { id:5, name:"Thibaut Courtois", pos:"POR", rating:89, age:34, salary:14, value:35, fatigue:0, injuryWeeks:0 },
    { id:6, name:"Antonio Rüdiger", pos:"DEF", rating:88, age:33, salary:11, value:45, fatigue:0, injuryWeeks:0 }
  ],
  "FC Barcelona": [
    { id:11, name:"Lamine Yamal", pos:"DEL", rating:91, age:18, salary:10, value:190, fatigue:0, injuryWeeks:0 },
    { id:12, name:"Pedri González", pos:"MED", rating:88, age:23, salary:12, value:110, fatigue:0, injuryWeeks:0 },
    { id:13, name:"Gavi", pos:"MED", rating:86, age:21, salary:9, value:90, fatigue:0, injuryWeeks:0 },
    { id:14, name:"Ronald Araújo", pos:"DEF", rating:87, age:27, salary:10, value:70, fatigue:0, injuryWeeks:0 },
    { id:15, name:"M. ter Stegen", pos:"POR", rating:86, age:34, salary:11, value:22, fatigue:0, injuryWeeks:0 }
  ]
};

const TRANSFERS = [
  { name:"Erling Haaland", pos:"DEL", rating:93, age:25, value:175, salary:22, club:"Man. City", fatigue:0, injuryWeeks:0 },
  { name:"Florian Wirtz", pos:"MED", rating:89, age:23, value:115, salary:12, club:"B. Leverkusen", fatigue:0, injuryWeeks:0 },
  { name:"Nico Williams", pos:"DEL", rating:86, age:23, value:85, salary:9, club:"Athletic Club", fatigue:0, injuryWeeks:0 }
];

const APELLIDOS_CANTERA = ["Mendoza", "García", "Rodríguez", "Navarro", "Torres", "Prieto", "Soler", "Vidal", "Ruiz", "Marín"];
const DEMARCACIONES = ["POR", "DEF", "MED", "DEL"];

// Banco de datos de Ruedas de prensa situacionales
const BANCO_PREGUNTAS = {
  victoria: [
    {
      q: "El equipo ha ganado con solvencia hoy. ¿Considera que esta plantilla está lista para ganar el título sin fichajes?",
      options: [
        { text: "Sí, confío ciegamente en este vestuario. Son los mejores.", morale: 15, fans: 5, budget: 0 },
        { text: "Hemos ganado, pero hacen falta refuerzos galácticos si queremos competir.", morale: -10, fans: 10, budget: 0 },
        { text: "Paso a paso, la euforia es peligrosa. Mantengamos la calma.", morale: 0, fans: 0, budget: 0 }
      ]
    }
  ],
  derrota: [
    {
      q: "Derrota dolorosa hoy. La afición empieza a impacientarse con el rendimiento del equipo táctico. ¿Quién es el responsable?",
      options: [
        { text: "Los jugadores no han estado a la altura del escudo. Exijo más.", morale: -20, fans: 15, budget: 0 },
        { text: "El planteamiento ha sido mío. Asumo toda la culpa de la caída.", morale: 15, fans: -10, budget: 0 },
        { text: "El arbitraje nos ha perjudicado claramente. Ha sido un robo.", morale: 5, fans: 10, budget: -2 } // Multa económica de la federación
      ]
    }
  ],
  neutral: [
    {
      q: "Los auditores sugieren que el club necesita reducir gastos salariales. ¿Contempla vender estrellas?",
      options: [
        { text: "Nadie es intransferible si llega una oferta millonaria.", morale: -15, fans: -5, budget: 10 }, // Te da un bonus financiero inmediato
        { text: "Este club es rico y mantendremos a nuestros galácticos intactos.", morale: 10, fans: 15, budget: -5 }
      ]
    }
  ]
};

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
  const listaLiga = [];
  Object.keys(SEEDS_TEAMS).forEach(name => {
    const seed = SEEDS_TEAMS[name];
    listaLiga.push({
      name: name, badge: seed.badge, strength: seed.strength,
      points: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0
    });
  });

  const pStarter = STARTER_PLAYERS[teamName] || [
    { id:99, name:"Canterano Promesa", pos:"MED", rating:75, age:19, salary:1, value:12, fatigue:0, injuryWeeks:0 }
  ];

  G = {
    team: teamName, president: pres,
    players: pStarter.map(p => ({ ...p })),
    budget: SEEDS_TEAMS[teamName].budget, week: 1,
    morale: 100, fans: 100, // Inicialización de variables de ambiente
    cultura: { ...SEEDS_TEAMS[teamName].cultura },
    news: ["🖋️ Dirección deportiva asumida. Comienzan las ruedas de prensa."],
    liga: listaLiga, calendario: [], ultimaSituacion: "neutral"
  };

  document.getElementById("sb-pres").textContent = G.president;
  document.getElementById("sb-team").textContent = SEEDS_TEAMS[teamName].badge + " " + G.team;
  
  generarCalendarioLiga();
  showScreen("main");
  navigate("corporativo", "resumen");
}

function generarCalendarioLiga() {
  const equipos = G.liga.map(e => e.name);
  const numEquipos = equipos.length;
  const jornadas = [];
  for (let j = 0; j < (numEquipos - 1) * 2; j++) {
    const partidosJornada = [];
    for (let i = 0; i < numEquipos / 2; i++) {
      const local = (j + i) % (numEquipos - 1);
      let visitante = (numEquipos - 1 - i + j) % (numEquipos - 1);
      if (i === 0) visitante = numEquipos - 1;
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

// INVERSIÓN ADICTIVA: La moral del vestuario afecta directamente la fuerza real en el campo
function teamStrength() {
  const disponibles = G.players.filter(p => p.injuryWeeks <= 0);
  if (!disponibles.length) return 40;
  const mediaBase = Math.round(disponibles.reduce((s,p) => s + p.rating, 0) / disponibles.length);
  
  // Modificador por moral alta/baja: puede sumar hasta +3 o restar hasta -6 de fuerza colectiva
  const modificadorMoral = Math.floor((G.morale - 80) / 10);
  return Math.max(50, mediaBase + modificadorMoral);
}

function rotarJugador(id) {
  const p = G.players.find(x => x.id === id);
  if (!p || p.injuryWeeks > 0) return;
  p.fatigue = Math.max(0, p.fatigue - 35);
  G.news.unshift(`💤 ROTACIÓN: Descanso otorgado a ${p.name}.`);
  renderWorkspace();
}

function promocionarCanterano() {
  const costeScouting = 2; 
  if (G.budget < costeScouting) {
    abrirModal("SIN FONDOS", "Se requieren 2M€ para mandar ojeadores.");
    return;
  }
  G.budget -= costeScouting;
  const ratingBase = 62 + Math.floor(Math.random() * 12) + Math.floor(G.cultura.cantera / 20);
  const nuevoCanterano = {
    id: Date.now(), name: "C. " + APELLIDOS_CANTERA[Math.floor(Math.random() * APELLIDOS_CANTERA.length)],
    pos: DEMARCACIONES[Math.floor(Math.random() * DEMARCACIONES.length)], rating: ratingBase, age: 17, salary: 0.5, value: Math.round((ratingBase - 50) * 1.5), fatigue: 0, injuryWeeks: 0
  };
  G.players.push(nuevoCanterano);
  G.news.unshift(`🌳 ACADEMIA: ${nuevoCanterano.name} sube al primer equipo.`);
  renderWorkspace();
}

function simularJornadaCompleta() {
  const totalJornadas = G.calendario.length;
  if (G.week > totalJornadas) return;

  // Desgaste y enfermería
  G.players.forEach(p => {
    if (p.injuryWeeks > 0) {
      p.injuryWeeks--;
    } else {
      p.fatigue += 12 + Math.floor(Math.random() * 15);
      if (Math.random() < (p.fatigue / 120) && G.week > 1) {
        p.injuryWeeks = 2 + Math.floor(Math.random() * 3);
        p.fatigue = 10;
        G.news.unshift(`🚨 ENFERMERÍA: ${p.name} lesionado.`);
      }
    }
  });

  const partidosHoy = G.calendario[G.week - 1];
  let cronicaTuPartido = "";

  partidosHoy.forEach(partido => {
    const eqLocal = G.liga.find(e => e.name === partido.local);
    const eqVis   = G.liga.find(e => e.name === partido.visitante);

    const strLocal = (eqLocal.name === G.team) ? teamStrength() : eqLocal.strength;
    const strVis   = (eqVis.name === G.team) ? teamStrength() : eqVis.strength;

    const diff = (strLocal + 2) - strVis;
    const formulaMecanica = diff + ((Math.random() - 0.5) * 18);

    let golesLocal = Math.max(0, Math.round(Math.random() * 2 + (formulaMecanica > 3 ? 1 : 0)));
    let golesVis   = Math.max(0, Math.round(Math.random() * 2 + (formulaMecanica < -3 ? 1 : 0)));

    eqLocal.goalsFor += golesLocal; eqLocal.goalsAgainst += golesVis;
    eqVis.goalsFor   += golesVis;   eqVis.goalsAgainst   += golesLocal;
    eqLocal.points   += (golesLocal > golesVis) ? 3 : (golesLocal === golesVis) ? 1 : 0;
    eqVis.points     += (golesVis > golesLocal) ? 3 : (golesLocal === golesVis) ? 1 : 0;

    if (golesLocal > golesVis) { eqLocal.wins++; eqVis.losses++; }
    else if (golesLocal === golesVis) { eqLocal.draws++; eqVis.draws++; }
    else { eqVis.wins++; eqLocal.losses++; }

    if (partido.local === G.team || partido.visitante === G.team) {
      const gTuClub = (partido.local === G.team) ? golesLocal : golesVis;
      const gRival  = (partido.local === G.team) ? golesVis : golesLocal;
      const rivalName = (partido.local === G.team) ? partido.visitante : partido.local;
      
      G.ultimaSituacion = (gTuClub > gRival) ? "victoria" : (gTuClub === gRival) ? "neutral" : "derrota";
      cronicaTuPartido = `Resultado final: ${G.team} ${gTuClub} - ${gRival} ${rivalName}.`;
      showResultBanner(gTuClub, gRival, rivalName, G.ultimaSituacion);
      G.news.unshift(`J${G.week}: ${G.team} ${gTuClub}-${gRival} ${rivalName}`);
    }
  });

  // SISTEMA ADICTIVO DE INGRESOS POR TAQUILLA: Afectado radicalmente por el porcentaje de afición activa
  const ingresosTaquilla = Math.round((4 + (G.fans / 25)) * 10) / 10;
  const sueldos = G.players.reduce((sum, p) => sum + (p.salary / 10), 0);
  G.budget = Math.max(0, Math.round((G.budget + ingresosTaquilla - sueldos) * 10) / 10);

  G.week++;
  document.getElementById("narrativa-match").textContent = cronicaTuPartido + " Los periodistas te esperan en la sala de prensa de forma obligatoria.";
  
  G.liga.sort((a,b) => {
    if(b.points !== a.points) return b.points - a.points;
    return (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst);
  });

  // Activar y forzar la aparición de la rueda de prensa interactiva en la pestaña correspondiente
  cargarRuedaPrensa();
  renderWorkspace();
}

// ── PROGRAMACIÓN LOGICA DE LA RUEDA DE PRENSA ──
function cargarRuedaPrensa() {
  const pool = BANCO_PREGUNTAS[G.ultimaSituacion] || BANCO_PREGUNTAS["neutral"];
  const preguntaAleatoria = pool[Math.floor(Math.random() * pool.length)];
  
  const card = document.getElementById("press-conference-card");
  const qBox = document.getElementById("press-question");
  const oBox = document.getElementById("press-options");

  if (!card || !qBox || !oBox) return;

  qBox.textContent = `"${preguntaAleatoria.q}"`;
  oBox.innerHTML = "";

  preguntaAleatoria.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "press-btn";
    btn.textContent = opt.text;
    btn.onclick = () => procesarRespuestaPrensa(opt);
    oBox.appendChild(btn);
  });

  card.style.display = "block";
}

function procesarRespuestaPrensa(opcion) {
  // Aplicar consecuencias al estado global del club
  G.morale = Math.min(100, Math.max(0, G.morale + opcion.morale));
  G.fans   = Math.min(100, Math.max(0, G.fans + opcion.fans));
  G.budget = Math.max(0, Math.round((G.budget + opcion.budget) * 10) / 10);

  G.news.unshift(`📰 PRENSA: Declaraciones del presidente realizadas.`);
  
  // Ocultar la rueda de prensa tras responder
  document.getElementById("press-conference-card").style.display = "none";
  
  abrirModal("📊 REPERCUSIONES DE PRENSA", `Efectos en el club:\nMoral: ${opcion.morale >= 0 ? '+' : ''}${opcion.morale}%\nAfición: ${opcion.fans >= 0 ? '+' : ''}${opcion.fans}%\nFinanzas: ${opcion.budget}M€`);
  renderWorkspace();
}

function showResultBanner(mg, tg, rival, result) {
  const banner = document.getElementById("result-banner");
  if (!banner) return;
  const colors = { victoria:["#064e3b","#10b981"], neutral:["#78350f","#f59e0b"], derrota:["#7f1d1d","#ef4444"] };
  const [bg, accent] = colors[result];
  banner.style.background = bg; banner.style.border = `1px solid ${accent}`; banner.style.display = "flex";
  banner.innerHTML = `<div><div style="font-size:10px; color:#94a3b8; font-weight:bold;">COMPETICIÓN LIGA</div><div class="result-score">${G.team} ${mg} - ${tg} ${rival}</div></div><div style="color:${accent}; font-weight:900; font-family:'Orbitron';">${result.toUpperCase()}</div>`;
}

function abrirModal(titulo, cuerpo) {
  document.getElementById("modal-title").textContent = titulo;
  document.getElementById("modal-body").textContent = cuerpo;
  document.getElementById("modal-overlay").classList.add("open");
}

function cerrarModal() { document.getElementById("modal-overlay").classList.remove("open"); }

function navigate(categoria, subcategoria) {
  document.querySelectorAll(".subpanel").forEach(p => p.style.display = "none");
  const activeSub = document.getElementById(`sub-${subcategoria}`);
  if (activeSub) activeSub.style.display = "block";
  renderWorkspace();
}

function comprarJugador(idx) {
  const t = TRANSFERS[idx];
  if (G.budget >= t.value) {
    G.budget -= t.value;
    G.players.push({ id: Date.now(), ...t });
    G.news.unshift(`🤝 FICHADO: ${t.name}`);
    renderWorkspace();
  } else { alert("Fondos de club insuficientes."); }
}

function ajustarCultura(clave, val) {
  G.cultura[clave] = Math.min(100, Math.max(0, G.cultura[clave] + val));
  renderWorkspace();
}

function renderWorkspace() {
  const miPosicionIdx = G.liga.findIndex(e => e.name === G.team) + 1;
  const misDatos = G.liga.find(e => e.name === G.team);

  document.getElementById("tb-budget").textContent = G.budget + "M€";
  document.getElementById("tb-pos").textContent = miPosicionIdx + "º";
  document.getElementById("tb-week").textContent = G.week;
  
  // Imprimir contadores dinámicos en la barra global
  document.getElementById("tb-morale").textContent = G.morale + "%";
  document.getElementById("tb-fans").textContent = G.fans + "%";
  
  const dashPos = document.getElementById("dash-pos-text");
  if(dashPos) dashPos.textContent = miPosicionIdx + "º clasificado";

  const fixBox = document.getElementById("fixture-next-match");
  if (fixBox && G.calendario[G.week - 1]) {
    const miPartido = G.calendario[G.week - 1].find(p => p.local === G.team || p.visitante === G.team);
    if(miPartido) {
      fixBox.innerHTML = `Siguiente cruce: <span style="color:var(--neon)">${miPartido.local === G.team ? miPartido.visitante : miPartido.local}</span>`;
    }
  }

  // Fuerza real afectada por la moral
  const str = teamStrength();
  const graph = document.getElementById("graph-strength");
  if (graph) {
    graph.style.setProperty("--p", str);
    graph.innerHTML = `<span>${str}</span>`;
  }
  const lblMod = document.getElementById("label-strength-mod");
  if (lblMod) {
    lblMod.innerHTML = `POTENCIA REAL CON AFECTACIÓN DE MORAL: <span style="color:var(--neon2)">${G.morale}%</span>`;
  }

  const finPres = document.getElementById("fin-pres");
  if (finPres) {
    finPres.textContent = G.budget + "M€";
    document.getElementById("fin-salarios").textContent = G.players.reduce((sum, p) => sum + (p.salary / 10), 0).toFixed(1) + "M€ / sem";
    // Renderizado del cálculo dinámico por venta de entradas
    document.getElementById("fin-taquilla").textContent = "+" + (Math.round((4 + (G.fans / 25)) * 10) / 10) + "M€ por abonos";
  }

  const db = document.getElementById("stats-dashboard");
  if (db && misDatos) {
    db.innerHTML = `
      <div class="card" style="text-align:center; margin:0; padding:10px;">🟢 <b>${misDatos.wins}</b><br><small>PG</small></div>
      <div class="card" style="text-align:center; margin:0; padding:10px;">🟡 <b>${misDatos.draws}</b><br><small>PE</small></div>
      <div class="card" style="text-align:center; margin:0; padding:10px;">🔴 <b>${misDatos.losses}</b><br><small>PP</small></div>
    `;
  }

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

  const nl = document.getElementById("news-list");
  if (nl) nl.innerHTML = G.news.map(n => `<div class="news-item">${n}</div>`).join("");

  const sq = document.getElementById("squad-list");
  if (sq) {
    sq.innerHTML = `<h3 style="margin: 15px 0 10px 0;">📋 ESTADO DE FORMA</h3>` + G.players.map(p => {
      const estaLesionado = p.injuryWeeks > 0;
      const statusClass = estaLesionado ? 'status-injured' : 'status-fit';
      const statusText = estaLesionado ? `Baja` : 'Sano';
      const fatigaColor = p.fatigue > 70 ? 'var(--red)' : p.fatigue > 40 ? 'var(--gold)' : 'var(--green)';

      return `
        <div class="player-card" style="${estaLesionado ? 'opacity: 0.6; border-left: 3px solid var(--red);' : ''}">
          <div class="player-row-main">
            <div><span class="pos-badge" style="background:rgba(0,240,255,0.1); color:var(--neon)">${p.pos}</span> <b>${p.name}</b></div>
            <div style="display:flex; gap:20px; align-items:center;">
              <span class="${statusClass} status-badge">${statusText}</span>
              <span class="rating">${estaLesionado ? '--' : p.rating}</span>
            </div>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px; font-size:0.85rem;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span>Cansancio: ${p.fatigue}%</span>
              <div class="bar-track"><div class="bar-fill" style="width:${Math.min(100, p.fatigue)}%; background:${fatigaColor}"></div></div>
            </div>
            <div>${!estaLesionado && p.fatigue > 0 ? `<button class="btn btn-gray" onclick="rotarJugador(${p.id})" style="padding:2px 8px; font-size:11px;">💤 ROTAR</button>` : ''}</div>
          </div>
        </div>
      `;
    }).join("");
  }

  // Sub-Táctica
  const cl = document.getElementById("cultura-list");
  if (cl) {
    cl.innerHTML = Object.keys(G.cultura).map(k => `
      <div class="card">
        <div style="display:flex; justify-content:space-between; font-weight:bold;"><span>🎯 Enfoque ${k.toUpperCase()}</span> <span>${G.cultura[k]}%</span></div>
        <div class="bar-track" style="width:100%;"><div class="bar-fill" style="width:${G.cultura[k]}%; background:var(--neon2)"></div></div>
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
        <div class="player-row-main">
          <div><b>${t.name}</b><br><small style="color:var(--muted)">${t.club} · ${t.pos}</small></div>
          <div style="display:flex; gap:15px; align-items:center;">
            <div class="rating">${t.rating}</div>
            <div style="color:var(--green); font-weight:bold;">${t.value}M€</div>
            <button class="btn btn-neon" onclick="comprarJugador(${i})">FICHAR</button>
          </div>
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
