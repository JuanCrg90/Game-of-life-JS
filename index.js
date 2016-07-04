import Gol from './lib/gol';

const gol = new Gol(100, 40);

/**
 * Display the board status in the CLI
 */
function display(status) {
  const width = status[0].length;
  const heigth = status.length;
  const Console = console;

  Console.log('\n\n\n')

  for (let i = 0; i < heigth; i++) {
    let rowContent = '';
    for (let j = 0; j < width; j++) {
      if (!!status[i][j]) {
        rowContent += '@';
      } else {
        rowContent += '-';
      }
    }
    Console.log(rowContent);
  }
}

/**
 * Execute the gol rules and call the display
 */
function run() {
  display(gol.getLogicStatus());
  gol.execute();
}

/**
 * Call run every 500 ms
 */
setInterval(run, 500);
