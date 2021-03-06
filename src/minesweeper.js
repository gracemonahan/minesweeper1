class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('GAME OVER');
      this._board.print();
    } else if (!this._board.hasSafeTiles()) {
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

flipTile(rowIndex, columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('This tile has already been flipped!');
      return;
    }
    else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._playerBoard[rowIndex][columnIndex] === 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
  }
  this._numberOfTiles--;
}

getNumberOfNeighborBombs(rowIndex, columnIndex) {
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
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows &&
      neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
      if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
        numberOfBombs++;
      }
    }
  });
  return numberOfBombs;
}

hasSafeTiles() {
  return this._numberOfTiles !== this._numberOfBombs;
}

print(board) {
  console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
}

static generatePlayerBoard(numberOfRows, numberOfColumns) {
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

static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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

let playerBoard = Board.generatePlayerBoard(3, 3);
let bombBoard = Board.generateBombBoard(3, 3, 3);

/*console.log('Player Board: ');
print(playerBoard);
console.log('Bomb Board: ');
print(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board:');
prints(playerBoard); */

const g = new Game(3, 3, 3);

g.playMove(1,1);
g.playMove(2,2);
