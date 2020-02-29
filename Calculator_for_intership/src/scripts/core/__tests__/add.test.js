import add from '../operations/add';
import multiply from '../operations/multiply';
import divide from '../operations/divide';
import minus from '../operations/minus';

describe('Add test', () => {
  it('Adds 2 numbers correctly', () => {
    expect(add(1, 1)).toBe(2)
  });
  it('Adds 2 numbers correctly', () => {
    expect(minus(1, 1)).toBe(0)
  });
  it('Adds 2 numbers correctly', () => {
    expect(divide(1, 1)).toBe(1)
  });
  it('Adds 2 numbers correctly', () => {
    expect(multiply(1, 1)).toBe(1)
  });
});
