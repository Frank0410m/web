var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");


// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Parece que llegaste al final", time: 1.5 },
  { text: "Espero que te halla gustado", time: 3.5 },
  { text: "Pero bueno jsjs", time: 5.5 },
  { text: "Lo comun de mi es ", time: 7.5 },
  { text: "Hacer poemas y eso ", time: 9.5},
  { text: "Por eso...", time: 11.5 },
  { text: "Para acabar con este detalle, ", time: 13.5 },
  { text: "Te dire un poema vale jsjs", time: 15.5 },
  { text: "Hoy es un día especial,", time: 18.5 },
  { text: "porque naciste para brillar,", time: 21.5 },
  { text: "tu luz ilumina mi vida,", time: 24.5 },
  { text: "y me hace sentir cerca de ti.", time: 27.5 },
  { text: "Eres una persona única,", time: 30.5 },
  { text: "con un corazón lleno de amor,", time: 33.5 },
  { text: "tu sonrisa es contagiosa,", time: 36.5 },
  { text: "y tu presencia es un regalo.", time: 39.5 },
  { text: "Deseo que este día sea,", time: 42.5 },
  { text: "el inicio de un año lleno,", time: 45.5 },
  { text: "de momentos felices,", time: 48.5 },
  { text: "y sueños realizados.", time: 51.5 },
  { text: "Que tu vida esté llena,", time: 54.5 },
  { text: "de amor, paz y alegría,", time: 57.5 },
  { text: "y que siempre recuerdes,", time: 60.5 },
  { text: "que eres especial para mí.", time: 63.5 },
  { text: "Feliz cumpleaños, Josselyn,", time: 66.5 },
  { text: "que este año nuevo te traiga,", time: 69.5 },
  { text: "momentos felices y tranquilos,", time: 72.5 },
  { text: "y que siempre recuerdes,", time: 75.5 },
  { text: "que eres querida.", time: 78.6 },
  { text: "賭けは万歳", time: 89.5 },
  { text: "お誕生日おめでとう", time: 92.5 },
  { text: "幸せになる", time: 95.5 },
  { text: "Eso es todo, es poquito jsjs.", time: 97.5 },
  { text: "Este detalle fue hecho de ♥.", time: 100.5 },
  { text: "Disfruta de la musica jsjs ♥.", time: 105.5 },
  { text: "Cuidate adiu.", time: 107.5},
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);