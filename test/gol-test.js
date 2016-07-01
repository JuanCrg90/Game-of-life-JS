import test from 'tape';
import Gol from '../lib/gol';

test('Should exists', (t) => {
  const gol = new Gol(10, 10);

  t.ok(Gol, 'Gol should exists');
  t.equals(typeof Gol, 'function', 'Gol should be a function');
  t.ok(gol instanceof Gol, 'gol should be an instance of Gol');
  t.end();
});

test('Has Display Function', (t) => {
  const gol = new Gol(10, 10);
  t.ok(gol.display, 'should exists');
  t.end();
});

