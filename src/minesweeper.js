const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let r = 0; r < numberOfRows; r++) {
    let row = [];
    for (let c = 0; c < numberOfColumns; c++) {
      row.push(' ');
    } board.push(row);
  } return board;
};

console.log(generatePlayerBoard(4, 3));
