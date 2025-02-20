const boardSize = 10;
const letters = [
  "A",
  "Á",
  "Â",
  "Ã",
  "A",
  "B",
  "C",
  "D",
  "E",
  "É",
  "Ê",
  "F",
  "G",
  "H",
  "I",
  "Í",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "Ó",
  "Ô",
  "Õ",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const board = document.getElementById("board");
const words = document.getElementById("words");

const boardStructure = Array(boardSize * boardSize).fill("");

for (let index = 0; index < boardSize * boardSize; index += 1) {
  const cell = document.createElement("div");
  // cell.classList.add(`.cell${index}`);
  board.appendChild(cell);
}

const renderBoard = () => {
  const cells = document.querySelectorAll("#board > div");
  // console.log(cells);
  // cells.forEach((cell) => (cell.className = "cell"));

  cells.forEach((cell, index) => {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    cell.textContent = boardStructure[index];
  });
};

const createBoardStructure = () => {
  boardStructure.forEach((item, index) => {
    if (item === "") {
      const randomLetter = letters[Math.floor(Math.random() * letters.length)];

      boardStructure[index] = randomLetter;
    }
  });
};

const createWordsToSearch = () => {
  const words = [
    "casa",
    "cachorro",
    "gato",
    "elefante",
    "macaco",
    "girafa",
    "leão",
    "tigre",
    "urso",
    "panda",
    "pinguim",
    "raposa",
    "coelho",
    "cavalo",
    "vaca",
    "ovelha",
    "cabra",
    "galinha",
    "pato",
    "peru",
    "ganso",
    "pavão",
    "papagaio",
    "arara",
    "tucano",
    "falcão",
    "águia",
    "coruja",
    "pardal",
    "bem-te-vi",
    "beija-flor",
    "mariposa",
    "borboleta",
    "besouro",
    "formiga",
    "barata",
    "cupim",
  ];

  const wordsToSearch = [];
  while (wordsToSearch.length < 2) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    if (!wordsToSearch.includes(randomWord)) {
      wordsToSearch.push(randomWord);
    }
  }
  return wordsToSearch;
};

const fillWordsToSearch = () => {
  const wordsToSearch = createWordsToSearch();
  console.log(wordsToSearch);

  wordsToSearch.forEach((word) => {
    const wordElement = document.createElement("p");
    wordElement.textContent = word;
    words.appendChild(wordElement);
  });
};

const placeWordsInBoard = () => {
  const wordsToSearch = createWordsToSearch();

  const directions = [
    "horizontal",
    "horizontal-reverse",
    "vertical",
    "vertical-reverse",
    "diagonal-up",
    "diagonal-down",
    "diagonal-reverse-up",
    "diagonal-reverse-down",
  ];

  for (let index = 0; index < boardStructure.length; index++) {
    let wordSplitted = "";
    wordsToSearch.forEach((word) => {
      // const direction = directions[Math.floor(Math.random() * directions.length)];
      // console.log(direction);

      wordSplitted = word.split("");

      wordSplitted.forEach((letter) => {
        boardStructure[index] = letter;
        index++;
      });
    });
  }
};

const gameLoop = (state) => {
  if (state.gameOver) {
    alert("Game over!");
    return;
  }

  // if (checkCollison(newSnake)) {
  //   state.gameOver = true
  // }

  const newState = {
    ...state,
  };

  renderBoard(newState);
};

createBoardStructure();

placeWordsInBoard();

fillWordsToSearch();

renderBoard();
