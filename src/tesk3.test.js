import calculator from './tesk3';

describe('add', () => {
  it('should return correct answer', () => {
    const result = calculator.add(2, 4);
    expect(result).toBe(6);
  });
  it('should return not number for wrong input', () => {
    const result = calculator.add(2, ' yes');
    expect(result).not.toBe(Number);
  });
  it('should return string for two string  input', () => {
    const result = calculator.add('no', ' yes');
    expect(result).not.toBe(String);
  });
});
describe('subtract', () => {
  it('should return correct answer', () => {
    const result = calculator.subtract(2, 4);
    expect(result).toBe(-2);
  });

  it('should return  NaN  for wrong input', () => {
    const result = calculator.subtract(2, ' yes');
    expect(result).toBeNaN();
  });
  it('should return  falsy value for two string input', () => {
    const result = calculator.subtract('no', ' yes');
    expect(result).toBeFalsy();
  });
});
describe('divide', () => {
  it('should return correct answer', () => {
    const result = calculator.divide(2, 4);
    expect(result).toBe(0.5);
  });
  it('should return  NaN for wrong input', () => {
    const result = calculator.divide(2, ' yes');
    expect(result).toBeNaN();
  });
  it('should return  falsy value for two string input', () => {
    const result = calculator.divide('no', ' yes');
    expect(result).toBeFalsy();
  });
});
describe('multiples', () => {
  it('should return correct answer', () => {
    const result = calculator.multiplies(2, 4);
    expect(result).toBe(8);
  });
  it('should return NaN for wrong input', () => {
    const result = calculator.multiplies(2, ' yes');
    expect(result).toBeNaN();
  });
  it('should return  falsy value for two string input', () => {
    const result = calculator.multiplies('no', ' yes');
    expect(result).toBeFalsy();
  });
});
