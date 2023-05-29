function snakeXenzia(size) {
    const matrix = Array(size)
        .fill(0)
        .map(() => Array(size).fill(0));

    let row = 0;
    let col = 0;
    let minRow = 0;
    let maxRow = size - 1;
    let minCol = 0;
    let maxCol = size - 1;
    let direction = 0;
    let counter = 1;

    while (counter <= size * size) {
        matrix[row][col] = counter;
        if (direction === 0) {
            if (col < maxCol) {
                col++;
            } else {
                direction = 1;
                minRow++;
                row++;
            }
        } else if (direction === 1) {
            if (row < maxRow) {
                row++;
            } else {
                direction = 2;
                maxCol--;
                col--;
            }
        } else if (direction === 2) {
            if (col > minCol) {
                col--;
            } else {
                direction = 3;
                maxRow--;
                row--;
            }
        } else if (direction === 3) {
            if (row > minRow) {
                row--;
            } else {
                direction = 0;
                minCol++;
                col++;
            }
        }

        counter++;
    }

    return matrix;
}

function prettier(matrix) {
    const size = matrix.length;

    for (let i = 0; i < size; i++) {
        let rowStr = '';
        for (let j = 0; j < size; j++) {
            rowStr += matrix[i][j] + '\t';
        }
        console.log(rowStr);
    }
}

const snake = snakeXenzia(20);
// console.log(snake);
prettier(snake);

module.exports = { snakeXenzia, prettier };
