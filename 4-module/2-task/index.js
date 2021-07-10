function makeDiagonalRed(table) {
  const rowsArray = Array.from(table.rows);

  rowsArray.forEach((element, i) => {
    element.cells[i].style = 'background: red';
  });
}
