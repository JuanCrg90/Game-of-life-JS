import Cell from './cell';
/**
 * Board Class
 */
class Board {
  /**
   * Create a board with a delimited size
   * @param {int} width - board width
   * @param {int} heigth - board heigth
   * @param {Array} grid - the cells grid
   */
  constructor(width, heigth, grid = []) {
    this.width = width;
    this.heigth = heigth;
    this.grid = grid;

    if (this.grid.length === 0) {
      this.init();
    }
  }

  /**
   * Initialize the grid with a random cell group
   */
  init() {
    for (let i = 0; i < this.heigth; i++) {
      const row = [];
      for (let j = 0; j < this.width; j++) {
        const cell = new Cell(!!Math.round(Math.random()));
        row.push(cell);
      }
      this.grid.push(row);
    }
  }

  /**
   * Set the grid width
   * @param {int} width - grid width
   */
  setWidth(width) {
    this.width = width;
  }

  /**
   * Get the grid width
   * @return {int} width - grid width
   */

  getWidth() {
    return this.width;
  }

  /**
   * Set the grid heigth
   * @param {int} heigth - grid heigth
   */
  setHeigth(heigth) {
    this.heigth = heigth;
  }
  /**
   * Get the grid heigth
   * @return {int} heigth - grid heigth
   */
  getHeigth() {
    return this.heigth;
  }

  /**
   * Set the cell grid
   * @param {Array} grid - cells grid
   */
  setGrid(grid) {
    this.grid = grid;
  }
  /**
   * Get the cell grid
   * @return {Array} grid - cells grid
   */

  getGrid() {
    return this.grid;
  }

  /**
   * Get the cell in a given position
   * @param {int} i - vertical position
   * @param {int} j - horizontal position
   * @return {Object} grid[i][j] - Cell Object
   */
  getCell(i, j) {
    return this.grid[i][j];
  }

  /**
   * Update the cell status in a given position
   * @param {int} i - vertical position
   * @param {int} j - horizontal position
   * @param {boolean} alive - The status of the cell
   */
  updateCell(i, j, alive) {
    this.grid[i][j].setAlive(alive);
  }

}
export default Board;
