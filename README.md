# Knight Moves Algorithm

This project contains a JavaScript function to find the shortest path a knight can take on a chessboard from a given start position to an end position. The solution uses the Breadth-First Search (BFS) algorithm to explore all possible moves and determine the shortest path.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

**1. Clone the repository:**

```
git clone https://github.com/hieuhocit/Knights-Travails.git
```

**2. Install Dependencies:**

```
npm install
```

## Running Tests

**1. Run the tests:**

```
npm test
```

## Usage

To use the knightMoves function, import it into your JavaScript file and call it with the starting and ending positions. The function returns the shortest path as an array of coordinates.

```
const knightMoves = require('./knightMoves');

const start = [0, 0];
const end = [7, 7];

const path = knightMoves(start, end);
console.log(path); // Output: [ [0, 0], [2, 1], [0, 2], [2, 3], [4, 4], [6, 5], [7, 7] ];
```

## Author

This project is developed by [@hieuhocit](https://github.com/hieuhocit).
