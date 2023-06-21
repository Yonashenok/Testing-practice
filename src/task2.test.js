import reverseString from './tesk2';

it('should give me the reverse of the input string', () => {
  const string = 'yonas';
  const result = reverseString(string);
  expect(result).toBe('sanoy');
});
