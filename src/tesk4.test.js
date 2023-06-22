import { capitalize } from './task4.js';

describe('tesk4', () => {
  it('should take string as argument', () => {
    const char = 'string';
    const capString = jest.fn();
    capitalize(capString, char);
    expect(capString).toHaveBeenCalledWith(char);
  });
  it('should return string as first letter capitalized', () => {
    const char = 'string';
    const capString = jest.fn(
      (char) => char.charAt(0).toUpperCase() + char.slice(1),
    );
    capitalize(capString, char);
    expect(capString).toHaveReturnedWith('String');
  });
});
