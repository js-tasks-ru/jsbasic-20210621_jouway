function sumSalary(salaries) {
  let sum = 0;

  const valuesToIgnore = new Set([NaN, Infinity, -Infinity]);

  for (let key in salaries) {
    if (typeof salaries[key] === 'number' && !valuesToIgnore.has(salaries[key])) {
      sum += salaries[key];
    }
  }

  return sum;
}
