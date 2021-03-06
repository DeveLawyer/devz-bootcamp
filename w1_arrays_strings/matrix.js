// Dada una matriz NxN, escribe un programa que rote la matriz 90o en sentido horario.
// ¿Puedes hacerlo sin utilizar otra matriz o vector?

function rotateMatrix(matrix) {
  const rotatedMatrix = [];

  for (let column = 0; column < matrix.length; column++) {
    const newRow = [];
    for (let row = 0; row < matrix[column].length; row++) {
      newRow.unshift(matrix[row][column]);
    }
    rotatedMatrix.push(newRow);
  }

  return rotatedMatrix;
}

console.log(
  "3x3:",
  rotateMatrix([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ])
);

console.log(
  "4x4:",
  rotateMatrix([
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
  ])
);
