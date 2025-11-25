// Array für alle 49 Zahlen
const numbers = [];

// Zahlen von 1 bis 49 zum Array hinzufügen
for (let i = 1; i <= 49; i++) {
  numbers.push(i);
}

// Funktion für die Lottoziehung
function runLottery() {
  // Array für die 6 Gewinnzahlen
  const winningNumbers = [];

  // Zufällige Zahlen generieren und dem Array hinzufügen
  while (winningNumbers.length < 6) {
    // Zufälliger Index innerhalb des numbers-Arrays
    const randomIndex = Math.floor(Math.random() * numbers.length);

    // Zufällige Zahl anhand des Index aus numbers-Array auswählen
    const randomNumber = numbers[randomIndex];

    // Prüfen, ob Zufallszahl bereits im winningNumbers-Array enthalten
    if (!winningNumbers.includes(randomNumber)) {
      // Zufällige Zahl dem winningNumbers-Array hinzufügen
      winningNumbers.push(randomNumber);
    }
  }

  // Gewinnzahlen sortieren
  winningNumbers.sort((a, b) => a - b);

  // Gewinnzahlen in HTML-Kacheln anzeigen
  // Lotto-Kacheln auswählen
  const tiles = document.querySelectorAll(".lotto-tile");

  // Gewinnzahlen in die Kacheln einfügen
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].textContent = winningNumbers[i];
  }
  // Zusatzzahl zwischen 1 und 9 ziehen
const randomzahl = Math.floor(Math.random() * 10);

// Zusatzzahl in HTML einfügen
const zusatz = document.getElementById("zusatzzahl");
zusatz.textContent = randomzahl;
}



// Start-Button auswählen und Click-Listener hinzufügen
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", runLottery);
