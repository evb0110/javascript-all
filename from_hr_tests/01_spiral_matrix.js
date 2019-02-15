const n = 3; // число n из задачи
// 2 * n - 1 будет 5, т.е. матрица
// в моём примере будет 5 x 5

const items = [
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

outputMatrix(items, 3);

function outputMatrix(matrix, n) {
  // Решаем рекурсией
  // базовый случай при n === 1
  // тогда 2 * 1 - 1 будет 1,
  // т.е. матрица [[1]] 
  // выдаст 1 элемент
  if (n === 1) {
    console.log(matrix[n - 1][n - 1]);
    return;
  }

  const innerMatrix = [];
  // вырезаем внутреннюю матрицу,
  // спиливая внешние ряды и колонки
  for (let i = 1; i < 2 * n - 2; i++) {
    const row = matrix[i];
    const newRow = [];
    row.forEach((el,k,arr) => {
      if (k > 0 && k < arr.length - 1) {
        newRow.push(el)
      }
    });
    innerMatrix.push([...newRow]);
  }

  outputMatrix(innerMatrix, n - 1);
  // запускаем вывод внутренней матрицы

  // отсюда и ниже — вывод остатка от
  // внешней матрицы
  for (let i = 1; i < 2 * n - 1; i++) {
    console.log(matrix[i][0]);
  }
  for (let j = 1; j < 2 * n - 1; j++) {
    console.log(matrix[2 * n - 2][j]);
  }
  for (let i = 2 * n - 3; i >= 0; i--) {
    console.log(matrix[i][2 * n - 2]);
  }
  for (let j = 2 * n - 3; j >= 0; j--) {
    console.log(matrix[0][j]);
  }

}
