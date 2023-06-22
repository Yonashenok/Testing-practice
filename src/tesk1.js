const stringLength = (string) => {
  if (string.length <= 1 || string.length >= 10) {
    throw new Error('Whoops!');
  } else {
    return string.length;
  }
};
export default stringLength;
