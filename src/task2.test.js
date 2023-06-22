import reverseString from './tesk2.js';

it('should give me the reverse of the input string', () => {
  const string = 'yonas';
  const result = reverseString(string);
  expect(result).toBe('sanoy');
});
