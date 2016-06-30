// Unit Test for Cell Class
import test from 'tape';
import Cell from '../lib/cell';

test('Should exist', (t) => {
  const cell = new Cell(false);

  t.ok(Cell, 'Cell should exists');
  t.equals(typeof Cell, 'function', 'Cell should be a function');
  t.ok(cell instanceof Cell, 'cell should be an instance of Cell');
  t.end();
});

test('Has alive setter', (t) => {
  const cell = new Cell(false);

  t.ok(cell.setAlive, 'Should exists');
  t.end();
});

test('Has alive getter', (t) => {
  const cell = new Cell(false);

  t.ok(cell.isAlive, 'Should exists');
  t.end();
});
