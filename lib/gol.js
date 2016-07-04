import Board from './board';

/**
 *Game of Life rules Class
 */
class Gol {
  /**
   * Initialize the board
   * @param {int} width - board width
   * @param {int} heigth - board heigth
   * @param {Array} grid - the cells grid
   */
  constructor(width, heigth, grid = []) {
    this.board = new Board(width, heigth, grid);
    this.statusList = [];
  }

  /**
   * Return the board status in a binary representation
   * @return {Array} logicBoard - Bidimensional binary Array
   */
  getLogicStatus() {
    const width = this.board.getWidth();
    const heigth = this.board.getHeigth();
    const logicBoard = [];

    for (let i = 0; i < heigth; i++) {
      const row = [];
      for (let j = 0; j < width; j++) {
        if (this.board.getCell(i, j).isAlive()) {
          row.push(1);
        } else {
          row.push(0);
        }
      }
      logicBoard.push(row);
    }
    return logicBoard;
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
   * @param {int} yPos - Vertical position
   * @param {int} xPos - Horizontal position
   */
  rule1(yPos, xPos) {
    const neighbors = this.checkNeighbors(yPos, xPos);

    if (neighbors === 3) {
      this.statusList.unshift([yPos, xPos, true]);
    }
  }

  /**
   * Any live cell with two or three live neighbors lives on to the next generation
   * in other case dies.
   * @param {int} yPos - Vertical position
   * @param {int} xPos - Horizontal position
   */
  rule2(yPos, xPos) {
    if (this.board.getCell(yPos, xPos).isAlive()) {
      const neighbors = this.checkNeighbors(yPos, xPos);

      if (neighbors === 3 || neighbors === 2) {
        this.statusList.unshift([yPos, xPos, true]);
      } else {
        this.statusList.unshift([yPos, xPos, false]);
      }
    }
  }

  /**
   * Check how many neighbors has a cell
   * @param {int} yPos - Vertical position
   * @param {int} xPos - Horizontal position
   * @return {int} neighbors - Number of neighbors
   */
  checkNeighbors(yPos, xPos) {
    let neighbors = 0;
    const width = this.board.getWidth();
    const heigth = this.board.getHeigth();

    neighbors += this.up(yPos, xPos, heigth);

    neighbors += this.upLeft(yPos, xPos, heigth, width);

    neighbors += this.left(yPos, xPos, width);

    neighbors += this.downLeft(yPos, xPos, heigth, width);

    neighbors += this.down(yPos, xPos, heigth);

    neighbors += this.downRigth(yPos, xPos, heigth, width);

    neighbors += this.rigth(yPos, xPos, width);

    neighbors += this.upRigth(yPos, xPos, heigth, width);

    return neighbors;
  }

  /**
   * Check if the up neighbor is alive
   * @param {int} yPos - Vertical position
   * @param {int} xPos - Horizontal position
   * @param {int} heigth - The board heigth
   * @return {int} neighbor
   */
  up(yPos, xPos, heigth) {
    let neighbor = 0;
    if (yPos - 1 >= 0) {
      neighbor = this.board.getCell(yPos - 1, xPos).isAlive() ? 1 : 0;
    } else {
      neighbor = this.board.getCell(heigth - 1, xPos).isAlive() ? 1 : 0;
    }

    return neighbor;
  }

  /**
   * Check if the up-left neighbor is alive
   * @param {int} yPos - Vertical position
   * @param {int} xPos - Horizontal position
   * @param {int} heigth - The board heigth
   * @param {int} width - The board width
   * @return {int} neighbor - return 1 if the neighbor is alive or 0 in another case
   */
  upLeft(yPos, xPos, heigth, width) {
    let neighbor = 0;

    if ((yPos - 1) >= 0 && (xPos - 1) >= 0) {
      neighbor = this.board.getCell(yPos - 1, xPos - 1).isAlive() ? 1 : 0;
    } else {
      neighbor = this.board.getCell(heigth - 1, width - 1).isAlive() ? 1 : 0;
    }

    return neighbor;
  }

  /**
   * Check if the left neighbor is alive
   * @param {int} yPos - Vertical position
   * @param {int} xPos - Horizontal position
   * @param {int} width - The board width
   * @return {int} neighbor - Return 1 if the neighbor is alive or 0 in another case
   */
  left(yPos, xPos, width) {
    let neighbor = 0;

    if (xPos - 1 >= 0) {
      neighbor = this.board.getCell(yPos, xPos - 1).isAlive() ? 1 : 0;
    } else {
      neighbor = this.board.getCell(yPos, width - 1).isAlive() ? 1 : 0;
    }

    return neighbor;
  }

/**
   * Check if the down-left neighbor is alive
   * @param {int} yPos - Vertical position
   * @param {int} xPos - Horizontal position
   * @param {int} heigth - The board heigth
   * @param {int} width - The board width
   * @return {int} neighbor - Return 1 if the neighbor is alive or 0 in another case
   */
  downLeft(yPos, xPos, heigth, width) {
    let neighbor = 0;

    if ((yPos + 1) < heigth && (xPos - 1 >= 0)) {
      neighbor = this.board.getCell(yPos + 1, xPos - 1).isAlive() ? 1 : 0;
    } else {
      neighbor = this.board.getCell(0, width - 1).isAlive() ? 1 : 0;
    }

    return neighbor;
  }

/**
   * Check if the down neighbor is alive
   * @param {int} yPos - Vertical position
   * @param {int} xPos - Horizontal position
   * @param {int} heigth - The board heigth
   * @return {int} neighbor - Return 1 if the neighbor is alive or 0 in another case
   */
  down(yPos, xPos, heigth) {
    let neighbor = 0;

    if ((yPos + 1) < heigth) {
      neighbor = this.board.getCell(yPos + 1, xPos).isAlive() ? 1 : 0;
    } else {
      neighbor = this.board.getCell(0, xPos).isAlive() ? 1 : 0;
    }

    return neighbor;
  }

/**
   * Check if the down-rigth neighbor is alive
   * @param {int} yPos - Vertical position
   * @param {int} xPos - horizontal position
   * @param {int} Heigth - the board heigth
   * @param {int} Width - the board width
   * @return {int} Neighbor - return 1 if the neighbor is alive or 0 in another case
   */
  downRigth(yPos, xPos, heigth, width) {
    let neighbor = 0;

    if ((yPos + 1) < heigth && (xPos + 1) < width) {
      neighbor = this.board.getCell(yPos + 1, xPos + 1).isAlive() ? 1 : 0;
    } else {
      neighbor = this.board.getCell(0, 0).isAlive() ? 1 : 0;
    }

    return neighbor;
  }

  /**
   * Check if the rigth neighbor is alive
   * @param {int} yPos - Vertical position
   * @param {int} xPos - horizontal position
   * @param {int} Width - the board width
   * @return {int} Neighbor - return 1 if the neighbor is alive or 0 in another case
   */

  rigth(yPos, xPos, width) {
    let neighbor = 0;

    if (xPos + 1 < width) {
      neighbor = this.board.getCell(yPos, xPos + 1).isAlive() ? 1 : 0;
    } else {
      neighbor = this.board.getCell(yPos, 0).isAlive() ? 1 : 0;
    }

    return neighbor;
  }


  /**
   * Check if the up-rigth neighbor is alive
   * @param {int} yPos - Vertical position
   * @param {int} xPos - horizontal position
   * @param {int} Heigth - the board heigth
   * @param {int} Width - the board width
   * @return {int} Neighbor - return 1 if the neighbor is alive or 0 in another case
   */

  upRigth(yPos, xPos, heigth, width) {
    let neighbor = 0;

    if ((yPos - 1) >= 0 && (xPos + 1) < width) {
      neighbor = this.board.getCell(yPos - 1, xPos + 1).isAlive() ? 1 : 0;
    } else {
      neighbor = this.board.getCell(heigth - 1, 0).isAlive() ? 1 : 0;
    }

    return neighbor;
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
