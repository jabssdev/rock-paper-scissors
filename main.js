function getComputerChoice() {
  let numberRandom = Math.random().toFixed(3) * 1000;
  if (numberRandom >= 0 && numberRandom <= 300) {
    return "piedra";
  } else if (numberRandom >= 400 && numberRandom <= 600) {
    return "papel";
  } else {
    return "tijera";
  }
}

function getHumanChoice() {
  let opcionHuman = prompt("Elige una opción: \n-> Piedra \n-> Papel \n-> Tijera", "");
  if (opcionHuman === null) {
    return alert("Vuelva pronto");
  }
  opcionHuman = opcionHuman.toLowerCase().trim();
  if (opcionHuman === "piedra" || opcionHuman === "papel" || opcionHuman === "tijera") {
    if (opcionHuman === "piedra") {
      return "piedra";
    } else if (opcionHuman === "papel") {
      return "papel";
    } else {
      return "tijera";
    }
  } else {
    return alert("No es una opción válida :( \nOpciones válidas: \n-> piedra, \n-> papel \n-> tijera");
  }
}

// let humanScore = 0;
// let computerScore = 0;

function playRound(computerChoice, humanChoice) {
  if (humanChoice === null || humanChoice === undefined) {
    return;
  } else {
    console.log(`Tú elegiste ${humanChoice}`);
    console.log(`La máquina eligió ${computerChoice}`);
    if (computerChoice === humanChoice) {
      return 0;
    } else if (
      (computerChoice === "piedra" && humanChoice === "tijera") ||
      (computerChoice === "papel" && humanChoice === "piedra") ||
      (computerChoice === "tijera" && humanChoice === "papel")
    ) {
      return 1;
    } else {
      return 2;
    }
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    let ronda = playRound(computerChoice, humanChoice);

    if (ronda === 0) {
      computerScore++;
      humanScore++;

      console.log("Esta ronda ha sido un empate");
      console.log(`Tú puntuación es ${humanScore}`);
      console.log(`La puntuación de la máquina es ${computerScore}`);
      console.log(" ");
    } else if (ronda === 1) {
      computerScore++;

      console.log("Esta ronda ha ganado la máquina");
      console.log(`Tú puntuación es ${humanScore}`);
      console.log(`La puntuación de la máquina es ${computerScore}`);
      console.log(" ");
    } else if (ronda === 2) {
      humanScore++;

      console.log("Esta ronda la has ganado tú");
      console.log(`Tú puntuación es ${humanScore}`);
      console.log(`La puntuación de la máquina es ${computerScore}`);
      console.log(" ");
    } else {
      continue;
    }
  }
  return [humanScore, computerScore];
}

const [humanScore, computerScore] = playGame();

console.log(`Tú puntuación final es ${humanScore}`);
console.log(`La puntuación final de la máquina es ${computerScore}`);
