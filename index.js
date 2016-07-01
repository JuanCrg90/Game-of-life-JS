import Gol from './lib/gol';
import Cell from './lib/cell';

const initialConf = [
  [new Cell(false), new Cell(true), new Cell(false)],
  [new Cell(false), new Cell(true), new Cell(false)],
  [new Cell(false), new Cell(true), new Cell(false)]
];

const gol = new Gol(50, 50);

function run() {
  process.stdout.write('\x1B[2J\x1B[0f');
  gol.display();
  gol.execute();
}

setInterval(run, 500);
