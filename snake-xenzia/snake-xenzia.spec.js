const { snakeXenzia, prettier } = require('./snake-xenzia');

describe('snakeXenzia', () => {
  it('returns a matrix of the correct size', () => {
    const size = 4;
    const snake = snakeXenzia(size);
    expect(snake.length).toBe(size);

    for (let i = 0; i < size; i++) {
      expect(snake[i].length).toBe(size);
    }
  });

  it('generates the snake pattern correctly', () => {
    const size = 4;
    const snake = snakeXenzia(size);

    const expectedSnake = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ];

    expect(snake).toEqual(expectedSnake);
  });
});

describe('prettier', () => {
  let log= console.log;
  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = log;
  });


  it('logs the matrix in a prettier format', () => {
    const matrix = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ];

    prettier(matrix);

    expect(console.log.mock.calls.length).toBe(matrix.length);

    expect(console.log.mock.calls[0][0]).toBe('1\t2\t3\t4\t');
    expect(console.log.mock.calls[1][0]).toBe('12\t13\t14\t5\t');
    expect(console.log.mock.calls[2][0]).toBe('11\t16\t15\t6\t');
    expect(console.log.mock.calls[3][0]).toBe('10\t9\t8\t7\t');
  });
});
