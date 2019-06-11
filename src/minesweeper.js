class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('GAME OVER');
      this._board.print();
    } else if (this._board.playerBoard.hasSafeTiles() !== true) {
      console.log('CONGRATS YOU WIN');
    } else {
      console.log('Current Board: ');
      this._board.print();
    }
  }
};

class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get playerBoard() {
    return this._playerBoard;
  }

  flipTile = (rowIndex, columnIndex) => {
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('This tile has already been flipped!');
      return;
    } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._playerBoard[rowIndex][columnIndex] === 'B';
    } else {this._playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(rowIndex, columnIndex);
  }
  this._numberOfTiles--;
}

getNumberOfNeighborBombs = function(rowIndex, columnIndex) {
  const neighborOffsets = [
    [1, 0],
    [-1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [0, -1],
    [1, -1],
    [-1, -1]
  ];
  const numberOfRows = this._bombBoard.length;
  const numberOfColumns = this._bombBoard[0].length;

  let numberOfBombs = 0;

  neighborOffsets.forEach(offset => {
    const neighborRowIndex = this._rowIndex + offset[0];
    const neighborColumnIndex = this._columnIndex + offset[1];
    if (this._neighborRowIndex >= 0 && this._neighborRowIndex < this._numberOfRows &&
      this._neighborColumnIndex >= 0 && this._neighborColumnIndex < this._numberOfColumns) {
      if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
        this._numberOfBombs++;
      }
    }
  });
  return this._numberOfBombs;
}

hasSafeTiles() {
  return (this._numberOfTiles !== this._numberOfBombs);
}

print(board) {
  console.log(this._board.map(row => row.join(' | ')).join('\n'));
}

static generatePlayerBoard = function(numberOfRows, numberOfColumns) {
  const board = [];

  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}

static generateBombBoard = function(numberOfRows, numberOfColumns, numberOfBombs) {
  const board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(null);
    } board.push(row);
  }

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
  /*board[randomRowIndex][randomColumnIndex] = 'B';
  numberOfBombsPlaced++; */
  /* An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow. */
}
  return board;
}
};
//end of BOARD class

let playerBoard = generatePlayerBoard(3, 3);
let bombBoard = generateBombBoard(3, 3, 3);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board:');
printBoard(playerBoard);

const g = new Game(3, 3, 3);
