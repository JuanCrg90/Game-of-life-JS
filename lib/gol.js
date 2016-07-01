import Board from './board';

/**
 *Game of Life rules Class
 */
class Gol {
  /**
   * Initialize the board
   * @param {int} width - board width
   * @param {int} heigth - board heigth
   */
  constructor(width, heigth, grid = []) {
    this.board = new Board(width, heigth, grid);
    this.statusList = [];
  }

  /**
   * Display the board status in the CLI
   */
  display() {
    const width = this.board.getWidth();
    const heigth = this.board.getHeigth();
    const Console = console;

    for (let i = 0; i < heigth; i++) {
      let rowContent = '';
      for (let j = 0; j < width; j++) {
        if (this.board.getCell(i, j).isAlive()) {
          rowContent += '@';
        } else {
          rowContent += '-';
        }
      }
      Console.log(rowContent);
    }
  }

  /**
   * Execute the game of life rules
   */
  execute() {
    const width = this.board.getWidth();
    const heigth = this.board.getHeigth();

    for (let i = 0; i < heigth; i++) {
      for (let j = 0; j < width; j++) {
        this.rule1(i, j);
        this.rule2(i, j);
      }
    }

    this.applyChanges();
  }

  /**
   * Any dead cell with exactly three live neighbors becomes a live cell.
   * @param {int} i - Vertical position
   * @param {int} j - Horizontal position
   */
  rule1(i, j) {
    const neighbors = this.checkNeighbors(i, j);

    if (neighbors === 3) {
      this.statusList.unshift([i, j, true]);
    }
  }

  /**
   * Any live cell with two or three live neighbours lives on to the next generation
   * in other case dies.
   * @param {int} i - Vertical position
   * @param {int} j - Horizontal position
   */
  rule2(i, j) {
    if (this.board.getCell(i, j).isAlive()) {
      const neighbors = this.checkNeighbors(i, j);

      if (neighbors === 3 || neighbors === 2) {
        this.statusList.unshift([i, j, true]);
      } else {
        this.statusList.unshift([i, j, false]);
      }
    }
  }

  /**
   * Check how many neighbors has a cell
   * @param {int} i - Vertical position
   * @param {int} j - horizontal position
   * @return {int} neighbors - number of neighbors
   */
  checkNeighbors(i, j) {
    let neighbors = 0;
    const width = this.board.getWidth();
    const heigth = this.board.getHeigth();

    // Up
    if (i - 1 >= 0) {
      neighbors += this.board.getCell(i - 1, j).isAlive() ? 1 : 0;
    }

    // Up-left
    if ((i - 1) >= 0 && (j - 1) >= 0) {
      neighbors += this.board.getCell(i - 1, j - 1).isAlive() ? 1 : 0;
    }

    // Left
    if (j - 1 >= 0) {
      neighbors += this.board.getCell(i, j - 1).isAlive() ? 1 : 0;
    }

    // Down-left
    if ((i + 1) < heigth && (j - 1 >= 0)) {
      neighbors += this.board.getCell(i + 1, j - 1).isAlive() ? 1 : 0;
    }

    // Down
    if ((i + 1) < heigth) {
      neighbors += this.board.getCell(i + 1, j).isAlive() ? 1 : 0;
    }

    // Down-rigth
    if ((i + 1) < heigth && (j + 1) < width) {
      neighbors += this.board.getCell(i + 1, j + 1).isAlive() ? 1 : 0;
    }

    // Rigth
    if (j + 1 < width) {
      neighbors += this.board.getCell(i, j + 1).isAlive() ? 1 : 0;
    }

    // Up-rigth
    if ((i - 1) >= 0 && (j + 1) < width) {
      neighbors += this.board.getCell(i - 1, j + 1).isAlive() ? 1 : 0;
    }

    return neighbors;
  }

  /**
   * Apply the changes detected for the next generation
   */

  applyChanges() {
    for (let i = 0; i < this.statusList.length; i++) {
      this.board.updateCell(...this.statusList[i]);
    }

    this.statusList = [];
  }
}
export default Gol;
