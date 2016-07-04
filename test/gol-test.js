import test from 'tape';
import Gol from '../lib/gol';
import Cell from '../lib/cell';

test('Should exists', (t) => {
  const gol = new Gol();

  t.ok(Gol, 'Gol should exists');
  t.equals(typeof Gol, 'function', 'Gol should be a function');
  t.ok(gol instanceof Gol, 'gol should be an instance of Gol');
  t.end();
});

test('Has getLogicStatus Function', (t) => {
  const gol = new Gol();
  t.ok(gol.getLogicStatus, 'should exists');
  t.end();
});

test('Execute Blinker Oscilator', (t) => {
  const initialConf = [
    [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
    [new Cell(false), new Cell(false), new Cell(true), new Cell(false), new Cell(false)],
    [new Cell(false), new Cell(false), new Cell(true), new Cell(false), new Cell(false)],
    [new Cell(false), new Cell(false), new Cell(true), new Cell(false), new Cell(false)],
    [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
  ];

  const gol = new Gol(initialConf[0].length, initialConf.length, initialConf);

  t.ok(gol.getLogicStatus, 'should exists');
  t.deepEqual(gol.getLogicStatus(), [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]]);
  gol.execute();
  t.deepEqual(gol.getLogicStatus(), [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]]);

  t.end();
});
