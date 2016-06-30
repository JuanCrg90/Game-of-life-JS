/**
 * Cell class
 */
class Cell {
  /**
   * Create a Cell
   * @param {boolean} alive - The status of the cell
   */
  constructor(alive) {
    this.alive = alive;
  }

   /**
   * Set the status of the cell.
   * @param {boolean} alive - The status of the cell
   */
  setAlive(alive) {
    this.alive = alive;
  }

  /**
   * Get the status of the cell.
   * @return {boolean} alive - The status of the cell
   */
  isAlive() {
    return this.alive;
  }
}

export default Cell;
