function highlight(table) {
  const rowsArray = [...table.rows];

  rowsArray.forEach((el, i) => {
    if (el.cells[3].dataset.available === 'true') {
      el.classList.add('available');
    }
    if (el.cells[3].dataset.available === 'false') {
      el.classList.add('unavailable');
    }
    if (i !== 0 && !el.cells[3].dataset.available) {
      el.hidden = true;
    }

    if (el.cells[2].innerText === 'm') {
      el.classList.add('male');
    }
    if (el.cells[2].innerText === 'f') {
      el.classList.add('female');
    }

    if (Number(el.cells[1].innerText) < 18) {
      el.style = "text-decoration: line-through";
    }
  });
}
