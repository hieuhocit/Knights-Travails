const knightMoves = require('../KnightMoves'); // Update the path as needed

describe('knightMoves', () => {
  test('should find the shortest path from [0, 0] to [7, 7]', () => {
    const start = [0, 0];
    const end = [7, 7];
    const expectedPath = [
      [0, 0],
      [2, 1],
      [0, 2],
      [2, 3],
      [4, 4],
      [6, 5],
      [7, 7],
    ];
    expect(knightMoves(start, end)).toEqual(expectedPath);
  });

  test('should find the shortest path from [0, 0] to [1, 2]', () => {
    const start = [0, 0];
    const end = [1, 2];
    const expectedPath = [
      [0, 0],
      [1, 2],
    ];
    expect(knightMoves(start, end)).toEqual(expectedPath);
  });

  test('should find the shortest path from [0, 0] to [3, 3]', () => {
    const start = [0, 0];
    const end = [3, 3];
    const expectedPath = [
      [0, 0],
      [2, 1],
      [3, 3],
    ];
    expect(knightMoves(start, end)).toEqual(expectedPath);
  });

  test('should find the shortest path from [7, 7] to [0, 0]', () => {
    const start = [7, 7];
    const end = [0, 0];
    const expectedPath = [
      [7, 7],
      [5, 6],
      [3, 5],
      [1, 4],
      [3, 3],
      [1, 2],
      [0, 0],
    ];
    expect(knightMoves(start, end)).toEqual(expectedPath);
  });

  test('should handle the case when start and end are the same', () => {
    const start = [4, 4];
    const end = [4, 4];
    const expectedPath = [[4, 4]];
    expect(knightMoves(start, end)).toEqual(expectedPath);
  });

  test('should find the shortest path from [3, 3] to [5, 5]', () => {
    const start = [3, 3];
    const end = [5, 5];
    const expectedPath = [
      [3, 3],
      [1, 2],
      [3, 1],
      [4, 3],
      [5, 5],
    ];
    expect(knightMoves(start, end)).toEqual(expectedPath);
  });
});
