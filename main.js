const options = ["piedra", "papel", "tijera"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function getHumanChoice() {
  let opcionHuman = prompt("Elige una opción: \n\n-. Piedra \n-. Papel \n-. Tijera\n", "");

  if (opcionHuman === null) {
    return null;
  }

  opcionHuman = opcionHuman.toLowerCase().trim();

  if (options.includes(opcionHuman)) {
    return opcionHuman;
  } else {
    alert("No es una opción válida :( \n\nOpciones válidas => piedra - papel - tijera");
    return getHumanChoice(); // Volver a preguntar al usuario en caso de entrada no válida
  }
}

function checkRoundWinner(humanChoice, computerChoice) {
  const conditions = {
    piedra: "tijera",
    tijera: "papel",
    papel: "piedra",
  };

  if (computerChoice === humanChoice) {
    return "empate";
  } else if (conditions[computerChoice] === humanChoice) {
    return "computadora";
  } else {
    return "humano";
  }
}

function announceRoundResult(result, humanChoice, computerChoice) {
  let resultMessage = `Tú elegiste ${humanChoice}. \nLa máquina eligió ${computerChoice}.\n\n`;

  if (result === "empate") {
    resultMessage += "Esta ronda ha sido un empate D:";
  } else if (result === "computadora") {
    resultMessage += "La máquina ganó esta ronda. Perdedor -.-";
  } else {
    resultMessage += "Ganaste esta ronda. Let's go!";
  }

  alert(`${resultMessage}\n\nTu puntuación: ${humanScore}\nPuntuación de la máquina: ${computerScore}`);
}

function playRound() {
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();

  if (humanChoice === null) {
    alert("Vuelva pronto ♥");
    return; // Termina el juego si el usuario cancela el prompt
  }

  const result = checkRoundWinner(humanChoice, computerChoice);

  if (result === "empate") {
    announceRoundResult(result, humanChoice, computerChoice);
  } else if (result === "computadora") {
    computerScore++;
    announceRoundResult(result, humanChoice, computerChoice);
  } else {
    humanScore++;
    announceRoundResult(result, humanChoice, computerChoice);
  }
  announceFinalResult();
}

function announceFinalResult() {
  if (humanScore === 5 && computerScore === 5) {
    alert("El juego ha terminado en empate D:");
  } else if (computerScore === 5) {
    alert("Lo siento, ha ganado la máquina :(");
  } else if (humanScore === 5) {
    alert("¡Felicidades! Has ganado el juego!");
  }

  // Reiniciar los puntajes
  if (humanScore === 5 || computerScore === 5) {
    humanScore = 0;
    computerScore = 0;
  }
}

document.getElementById("startGame").addEventListener("click", playRound);
