const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let r = 0; r < numberOfRows; r++) {
    let row = [];
    for (let c = 0; c < numberOfColumns; c++) {
      row.push(' ');
    } board.push(row);
  } return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let r = 0; r < numberOfRows; r++) {
    let row = [];
    for (let c = 0; c < numberOfColumns; c++) {
      row.push(null);
    } board.push(row);
  }

//this code checks neighboring tiles for bombs without checking non-existant tiles
  const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
    const neighborOffsets = [[1, 0], [-1, 0], [1, 1], [0, 1], [-1, 1], [0, -1], [1, -1], [-1, -1]];
    const numberOfRows = bombBoard.length;
    const numberOfColumns = bombBoard[0].length;
    let numberOfBombs = 0;

    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      if ((neighborRowIndex >= 0) && (neighborRowIndex <= numberOfRows) && (neighborColumnIndex >= 0) && (neighborColumnIndex <= numberOfColumns)) {
        if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
          numberOfBombs++
        }
      }
    });
    return numberOfBombs;
  };

  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs)
  {
  //code to find a random integer
  let randomRowIndex = Math.floor(Math.random() * numberOfRows);
  let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
  if (board[randomRowIndex][randomColumnIndex] !== 'B') {
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }

  board[randomRowIndex][randomColumnIndex] = 'B';
  numberOfBombsPlaced++;
  /* An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow. */
};
  return board;
};

//console.log(generateBombBoard(4, 3, 2));
const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
