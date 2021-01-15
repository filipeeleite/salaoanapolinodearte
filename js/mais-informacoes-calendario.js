console.log("mais-informacoes-calendario.js OK");

//document.write('<p>Olá</p>');

// CSS
var corTextoOculto = 'var(--color-texto-oculto)';
var corIndicadorOculto = 'var(--border-indicador) solid var(--color-bright)';
var corIndicadorAtivo = 'var(--border-indicador) solid var(--color-main-primary)';

// Selecionando cada tag
// HTML Collection { 0:div, 1:div..., lenght: 9 }
var divsCalendario = document.getElementsByClassName("calendario-estagio");
// Para colocar border-left

var h3sCalendario = document.getElementsByClassName("calendario-evento");
var h4sCalendario = document.getElementsByClassName("calendario-data");
// Para colocar a letra esmaecida

var qtdeEventos = 9;

var eventosCalendario = {};
// Etiquetar cada evento
eventosCalendario.inicio = new Array(qtdeEventos); // Datas de inicio destes eventos
eventosCalendario.fim = new Array(qtdeEventos); // Datas de fim destes eventos
eventosCalendario.isLate = new Array(qtdeEventos); // Se evento passou ou não
eventosCalendario.isFuture = new Array(qtdeEventos); // Se evento ainda vai chegar

// Definindo títulos de cada evento  e strings das datas
h3sCalendario[0].innerHTML = "Data 1";
h4sCalendario[0].innerHTML = "2020 09 01";
eventosCalendario.inicio[0]  = new Date(2020, 09, 01);
eventosCalendario.fim[0] = new Date(2020, 09, 30);
//console.log(eventosCalendario.inicio[0]);
//console.log(eventosCalendario.fim[0]);

h3sCalendario[1].innerHTML = "Data 2";
h4sCalendario[1].innerHTML = "2020 10 01";
eventosCalendario.inicio[1] = new Date(2020, 10, 01);
eventosCalendario.fim[1]    = new Date(2020, 10, 30);

h3sCalendario[2].innerHTML = "Data 3";
h4sCalendario[2].innerHTML = "2020 11 01";
eventosCalendario.inicio[2] = new Date(2020, 11, 01);
eventosCalendario.fim[2]    = new Date(2020, 11, 30);

h3sCalendario[3].innerHTML = "Data 4";
h4sCalendario[3].innerHTML = "2021 00 01";
eventosCalendario.inicio[3] = new Date(2021, 00, 01);
eventosCalendario.fim[3]    = new Date(2021, 00, 30);

h3sCalendario[4].innerHTML = "Data 5";
h4sCalendario[4].innerHTML = "2021 01 01";
eventosCalendario.inicio[4] = new Date(2021, 01, 01);
eventosCalendario.fim[4]    = new Date(2021, 01, 30);

h3sCalendario[5].innerHTML = "Data 6";
h4sCalendario[5].innerHTML = "2021 02 01";
eventosCalendario.inicio[5] = new Date(2021, 02, 01);
eventosCalendario.fim[5]    = new Date(2021, 02, 30);

h3sCalendario[6].innerHTML = "Data 7";
h4sCalendario[6].innerHTML = "2021 03 01";
eventosCalendario.inicio[6] = new Date(2021, 03, 01);
eventosCalendario.fim[6]    = new Date(2021, 03, 30);

h3sCalendario[7].innerHTML = "Data 8";
h4sCalendario[7].innerHTML = "2021 04 01";
eventosCalendario.inicio[7] = new Date(2021, 04, 01);
eventosCalendario.fim[7]    = new Date(2021, 04, 30);

h3sCalendario[8].innerHTML = "Data 9";
h4sCalendario[8].innerHTML = "2021 05 01";
eventosCalendario.inicio[8] = new Date(2021, 05, 01);
eventosCalendario.fim[8]    = new Date(2021, 05, 30);

// Data atual
var dataAtual = new Date();

// Etiquetando cada Evento, situar cada data
//       i[0 a ...] qtdeEventos[1 a ...]
for (let i = 0; i < qtdeEventos; i++) {
    
    // Se evento está no passado 
    if (dataAtual > eventosCalendario.inicio[i]) {

        eventosCalendario.isFuture[i] = false; // Passado

    } else {

        eventosCalendario.isFuture[i] = true; // Futuro

    }

    // Se evento acabou ou não
    if (dataAtual < eventosCalendario.fim[i]) {

        eventosCalendario.isLate[i] = false; // Não, ainda não

    } else {

        eventosCalendario.isLate[i] = true; // Sim
    }

    console.log("Evento " + i + " -> isLate: " + eventosCalendario.isLate[i] + " | isFuture: " + eventosCalendario.isFuture[i]);
    
}

// Estilizar cada div e h3 e h4
for (let i = 0; i < qtdeEventos; i++) {

    if (eventosCalendario.isLate[i] === true && eventosCalendario.isFuture[i] === false) {

        // Antigo - > Sem borda e texto oculto
        divsCalendario[i].style.borderLeft = corIndicadorOculto;
        
        h3sCalendario[i].style.color = corTextoOculto;
        h4sCalendario[i].style.color = corTextoOculto;

    } else if (eventosCalendario.isLate[i] === false && eventosCalendario.isFuture[i] === false) {

        // Atual - > Com border
        divsCalendario[i].style.borderLeft = corIndicadorAtivo;
        
    } else {
        // Futuro - > Sem borda
        divsCalendario[i].style.borderLeft = corIndicadorOculto;

    }


}

console.log("All Fine here");