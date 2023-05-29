def snake_xenzia(size):
    matrix = [[0] * size for _ in range(size)]
    print(matrix)

    row = 0
    col = 0
    min_row = 0
    max_row = size - 1
    min_col = 0
    max_col = size - 1
    direction = 0
    counter = 1

    while counter <= size * size:
        matrix[row][col] = counter

        if direction == 0:
            if col < max_col:
                col += 1
            else:
                direction = 1
                min_row += 1
                row += 1
        elif direction == 1:
            if row < max_row:
                row += 1
            else:
                direction = 2
                max_col -= 1
                col -= 1
        elif direction == 2:
            if col > min_col:
                col -= 1
            else:
                direction = 3
                max_row -= 1
                row -= 1
        elif direction == 3:
            if row > min_row:
                row -= 1
            else:
                direction = 0
                min_col += 1
                col += 1

        counter += 1

    return matrix

def prettier(matrix):
    for row in matrix:
        rowStr = '\t'.join(str(num) for num in row)
        print(rowStr)


snake = snake_xenzia(4)
prettier(snake)