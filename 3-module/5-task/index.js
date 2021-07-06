function getMinMax(str) {
  let result = {};
  const arrayOfNumberStrings = str.split(/[\s,]+/);
  const convertedToNums = arrayOfNumberStrings.map(el => Number(el)).filter(el => !isNaN(el));
  result.min = Math.min(...convertedToNums);
  result.max = Math.max(...convertedToNums);

  return result;
}
