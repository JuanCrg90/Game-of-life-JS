// Unit Test for Board Class
import test from 'tape';
import Board from '../lib/board';
import Cell from '../lib/cell';

test('Should exists', (t) => {
  const board = new Board(10, 10);

  t.ok(Board, 'Board should exists');
  t.equals(typeof Board, 'function', 'Board should be a function');
  t.ok(board instanceof Board, 'board should be an instance of Board');
  t.end();
});

test('Has width setter', (t) => {
  const board = new Board(10, 10);

  t.ok(board.setWidth, 'Should exists');
  t.end();
});

test('Has width getter', (t) => {
  const board = new Board(10, 10);

  t.ok(board.getWidth, 'Should exists');
  t.end();
});

test('Has heigth setter', (t) => {
  const board = new Board(10, 10);

  t.ok(board.setHeigth, 'Should exists');
  t.end();
});

test('Has heigth getter', (t) => {
  const board = new Board(10, 10);

  t.ok(board.getHeigth, 'Should exists');
  t.end();
});

test('Has grid setter', (t) => {
  const board = new Board(10, 10);

  t.ok(board.setGrid, 'Should exists');
  t.end();
});

test('Has grid getter', (t) => {
  const board = new Board(10, 10);

  t.ok(board.getGrid, 'Should exists');
  t.end();
});

test('Can get a cell in the grid', (t) => {
  const board = new Board(10, 10);

  t.ok(board.getCell, 'Should exists');
  t.ok(board.getCell(0, 0) instanceof Cell, 'Should return a Cell Object');
  t.end();
});

test('Can Update a cell in the grid', (t) => {
  const board = new Board(10, 10);
  const cell = board.getCell(0, 0);

  t.ok(board.updateCell, 'Should exist');
  t.notEqual(cell.isAlive(), board.updateCell(0, 0, !cell.isAlive()), 'Should be nor equal');
  t.end();
});
