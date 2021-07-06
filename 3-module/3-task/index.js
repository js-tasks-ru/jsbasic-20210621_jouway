function camelize(str) {
  const splitStr = str.split('-');
  const capitalized = splitStr.map((el, i) => i === 0 ? el : (el.charAt(0).toUpperCase() + el.slice(1)));
  const res = capitalized.join('');

  return res;
}
