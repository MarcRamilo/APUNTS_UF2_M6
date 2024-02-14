let opcions = ["pedra", "paper", "tisores"];
let opcioUsuari;

function getUserChoice() {
    opcioUsuari = prompt("Quina opció escolleixes: ").toLowerCase();
    if (opcions.includes(opcioUsuari)) {
        return opcioUsuari;
    } else {
        alert("Opció no vàlida. Per favor, tria una opció de l'array.");
        return getUserChoice(); 
    }
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * opcions.length);
    const opcioMaquina = opcions[randomIndex];
    return opcioMaquina;
}

function determineWinner(opcioUsuari, opcioMaquina) {
    if (opcioUsuari === opcioMaquina) {
        alert("Empat!");
    } else if (
        (opcioUsuari === "pedra" && opcioMaquina === "tisores") ||
        (opcioUsuari === "paper" && opcioMaquina === "pedra") ||
        (opcioUsuari === "tisores" && opcioMaquina === "paper")
    ) {
        alert("Has guanyat!");
    } else {
        alert("Ohh, guanya la màquina...");
    }
    
    alert("Resultat:\nMaquina: " + opcioMaquina + "\nUser: " + opcioUsuari);
}

function playGame() {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    determineWinner(userChoice, computerChoice);
}

playGame();
