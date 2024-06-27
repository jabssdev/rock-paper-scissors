const options = ["piedra", "papel", "tijera"];

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

function playRound(computerChoice, humanChoice) {
  if (humanChoice === null) {
    return;
  }

  if (computerChoice === humanChoice) {
    return 0; // Empate
  }

  const conditions = {
    piedra: "tijera",
    tijera: "papel",
    papel: "piedra",
  };

  if (conditions[computerChoice] === humanChoice) {
    return 1; // Gana la máquina
  } else {
    return 2; // Gana el humano
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    if (humanChoice === null) {
      alert("Vuelva pronto ♥");
      return; // Termina el juego si el usuario cancela el prompt
    }

    let ronda = playRound(computerChoice, humanChoice);

    if (ronda === 0) {
      computerScore++;
      humanScore++;
      announceRoundResult("empate D:", humanScore, computerScore, computerChoice, humanChoice);
    } else if (ronda === 1) {
      computerScore++;
      announceRoundResult("la máquina. Perdedor -.-", humanScore, computerScore, computerChoice, humanChoice);
    } else if (ronda === 2) {
      humanScore++;
      announceRoundResult("el usuario. Let's go!", humanScore, computerScore, computerChoice, humanChoice);
    }
  }
  announceFinalResult(humanScore, computerScore);
}

function announceRoundResult(result, humanScore, computerScore, computerChoice, humanChoice) {
  alert(`Tú elegiste ${humanChoice}. \nLa máquina eligió ${computerChoice}`);
  alert(
    `Esta ronda ha sido ${
      result === "empate D:" ? result : "victoria de " + result
    } \n\nTu puntuación es ${humanScore} \nLa puntuación de la máquina es ${computerScore}`
  );
}

function announceFinalResult(humanScore, computerScore) {
  if (humanScore > computerScore) {
    alert("¡Felicidades! Has ganado el juego!");
  } else if (humanScore < computerScore) {
    alert("Lo siento, ha ganado la máquina :(");
  } else {
    alert("El juego ha terminado en empate D:");
  }
}

document.getElementById("startGame").addEventListener("click", playGame);
