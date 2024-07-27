const moves = [
  [-2, -1],
  [-2, 1],
  [2, -1],
  [2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
];

/**
 * @param {number[]} start
 * @param {number[]} end
 */
function knightMoves(start, end, board = {}, parents = [...Array(8)].map(() => Array(8).fill(0))) {
  const queue = [];
  queue.push(start);
  board[JSON.stringify(start)] = 1;

  while (queue.length > 0) {
    const location = queue.shift();
    if (location[0] === end[0] && location[1] === end[1]) break;

    for (let i = 0; i < moves.length; i++) {
      const row = location[0] + moves[i][0];
      const column = location[1] + moves[i][1];

      if (row < 0 || row >= 8 || column < 0 || column >= 8 || board[JSON.stringify([row, column])] === 1) continue;

      queue.push([row, column]);
      board[JSON.stringify([row, column])] = 1;
      parents[row][column] = [location[0], location[1]];
    }
  }
  
  const path = [];
  let currentLocation = end;
  while (currentLocation[0] !== start[0] || currentLocation[1] !== start[1]) {
    path.unshift(currentLocation);
    currentLocation = parents[currentLocation[0]][currentLocation[1]];
  }
  path.unshift(start);

  return path;
}

module.exports = knightMoves;