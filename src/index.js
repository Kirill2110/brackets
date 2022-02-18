module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.map(el => el.join(''));
  // console.log(brackets);
  for (let i = 0; i < brackets.length;) {
    if (str.includes(brackets[i])) {
      str = str.replace(brackets[i], '')
      i = 0
    } else {
      i++;
    }
  }
  return str.length === 0;
}