// ==========================================
// ESTADO INICIAL DEL JUEGO - LALIGA 2026
// ==========================================
const estadoJuego = {
    semana: 1,
    miClub: {
        nombre: "Real Madrid",
        dinero: 140000000, 
        plantilla: [
            { nombre: "Thibaut Courtois", posicion: "POR", nivel: 89, salario: 290000 },
            { nombre: "Antonio Rüdiger", posicion: "DEF", nivel: 88, salario: 280000 },
            { nombre: "Jude Bellingham", posicion: "MED", nivel: 91, salario: 410000 },
            { nombre: "Federico Valverde", posicion: "MED", nivel: 89, salario: 320000 },
            { nombre: "Vinícius Júnior", posicion: "DEL", nivel: 92, salario: 420000 },
            { nombre: "Kylian Mbappé", posicion: "DEL", nivel: 93, salario: 520000 }
        ]
    },
    
    liga: [
        {
            nombre: "FC Barcelona",
            nivelGeneral: 88,
            plantilla: [
                { nombre: "Marc-André ter Stegen", posicion: "POR", nivel: 86 },
                { nombre: "Ronald Araújo", posicion: "DEF", nivel: 87 },
                { nombre: "Pedri", posicion: "MED", nivel: 88 },
                { nombre: "Gavi", posicion: "MED", nivel: 86 },
                { nombre: "Lamine Yamal", posicion: "DEL", nivel: 91 },
                { nombre: "Robert Lewandowski", posicion: "DEL", nivel: 85 }
            ]
        },
        {
            nombre: "Atlético de Madrid",
            nivelGeneral: 85,
            plantilla: [
                { nombre: "Jan Oblak", posicion: "POR", nivel: 85 },
                { nombre: "José María Giménez", posicion: "DEF", nivel: 84 },
                { nombre: "Koke", posicion: "MED", nivel: 81 },
                { nombre: "Rodrigo De Paul", posicion: "MED", nivel: 84 },
                { nombre: "Antoine Griezmann", posicion: "DEL", nivel: 86 },
                { nombre: "Julián Álvarez", posicion: "DEL", nivel: 86 }
            ]
        },
        {
            nombre: "Athletic Club",
            nivelGeneral: 82,
            plantilla: [
                { nombre: "Unai Simón", posicion: "POR", nivel: 86 },
                { nombre: "Dani Vivian", posicion: "DEF", nivel: 83 },
                { nombre: "Oihan Sancet", posicion: "MED", nivel: 83 },
                { nombre: "Nico Williams", posicion: "DEL", nivel: 87 },
                { nombre: "Iñaki Williams", posicion: "DEL", nivel: 81 }
            ]
        },
        {
            nombre: "Real Sociedad",
            nivelGeneral: 81,
            plantilla: [
                { nombre: "Álex Remiro", posicion: "POR", nivel: 84 },
                { nombre: "Igor Zubeldia", posicion: "DEF", nivel: 80 },
                { nombre: "Martín Zubimendi", posicion: "MED", nivel: 85 },
                { nombre: "Takefusa Kubo", posicion: "DEL", nivel: 84 },
                { nombre: "Mikel Oyarzabal", posicion: "DEL", nivel: 81 }
            ]
        },
        {
            nombre: "Real Betis",
            nivelGeneral: 79,
            plantilla: [
                { nombre: "Rui Silva", posicion: "POR", nivel: 78 },
                { font: "Diego Llorente", posicion: "DEF", nivel: 79 },
                { nombre: "Johnny Cardoso", posicion: "MED", nivel: 80 },
                { nombre: "Isco Alarcón", posicion: "MED", nivel: 81 },
                { nombre: "Vitor Roque", posicion: "DEL", nivel: 79 }
            ]
        }
    ],
    
    // Se inicializa con el primer rival de la lista
    rival: null
};

// ==========================================
// RENDERIZADO / ACTUALIZACIÓN DE LA INTERFAZ
// ==========================================
function actualizarInterfaz() {
    document.getElementById("club-nombre").innerText = estadoJuego.miClub.nombre;
    document.getElementById("club-dinero").innerText = `$${estadoJuego.miClub.dinero.toLocaleString('es-ES')}`;
    document.getElementById("juego-semana").innerText = estadoJuego.semana;
    document.getElementById("rival-nombre").innerText = estadoJuego.rival.nombre;

    const lista = document.getElementById("lista-jugadores");
    lista.innerHTML = ""; 

    estadoJuego.miClub.plantilla.forEach(jugador => {
        const item = document.createElement("li");
        item.innerHTML = `
            <span><strong>[${jugador.posicion}]</strong> ${jugador.nombre}</span>
            <div>
                <span class="badge">${jugador.nivel}</span>
            </div>
        `;
        lista.appendChild(item);
    });
}

// ==========================================
// MOTOR DE SIMULACIÓN Y LÓGICA
// ==========================================
function simularPartido() {
    const totalNivel = estadoJuego.miClub.plantilla.reduce((sum, j) => sum + j.nivel, 0);
    const mediaMiEquipo = totalNivel / estadoJuego.miClub.plantilla.length;
    const mediaRival = estadoJuego.rival.nivelGeneral;

    let golesMiEquipo = 0;
    let golesRival = 0;

    // 4 jugadas clave por partido basadas en probabilidad híbrida
    for (let i = 0; i < 4; i++) {
        if (Math.random() * mediaMiEquipo > Math.random() * mediaRival) {
            golesMiEquipo++;
        }
        if (Math.random() * mediaRival > Math.random() * mediaMiEquipo) {
            golesRival++;
        }
    }

    alert(`📢 FIN DEL PARTIDO\n\n${estadoJuego.miClub.nombre} ${golesMiEquipo} - ${golesRival} ${estadoJuego.rival.nombre}`);
    
    // Balance financiero semanal (pagar nóminas)
    const gastosSalarios = estadoJuego.miClub.plantilla.reduce((sum, j) => sum + j.salario, 0);
    estadoJuego.miClub.dinero -= gastosSalarios;
}

function seleccionarRivalAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * estadoJuego.liga.length);
    estadoJuego.rival = estadoJuego.liga[indiceAleatorio];
}

function avanzarSemana() {
    simularPartido();
    estadoJuego.semana++;
    seleccionarRivalAleatorio();
    actualizarInterfaz();
}

// ==========================================
// ARRANQUE INICIAL DEL ARCHIVO
// ==========================================
window.onload = function() {
    seleccionarRivalAleatorio(); // Definir el primer rival de la Semana 1
    actualizarInterfaz();
};
