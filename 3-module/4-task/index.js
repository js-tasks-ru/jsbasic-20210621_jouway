function showSalary(users, age) {
  const filteredByAge = users.filter((user) => user.age <= age);
  const mapped = filteredByAge.map((el) => {
    return `${el.name}, ${el.balance}`;
  }).join('\n');
  return mapped;
}


