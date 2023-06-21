import stringLength from './tesk1';

it('should return correct number of character in string', () => {
  const char = 'yonas';
  const result = stringLength(char);
  expect(result).toBe(5);
});

it('should throw error if it is less than 1 or greater than 10', () => {
  function testThrowError() {
    stringLength('octopus yonas henok');
  }

  expect(testThrowError).toThrow();
});
