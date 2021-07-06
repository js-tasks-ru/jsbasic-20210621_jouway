function showSalary(users, age) {
  const filteredByAge = users.filter((user) => user.age <= age);
  const mapped = filteredByAge.map((el, i, arr) => {
    return `${el.name}, ${el.balance}${(i !== arr.length - 1 && arr.length !== 1) ? "\n" : ''}`;
  });
  return mapped.join("");
}


