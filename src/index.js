const btnCreateTable = document.getElementById('create-table');

btnCreateTable.addEventListener('submit', (e) => {
  event.preventDefault();
  const row = e.currentTarget.querySelector('#row').value;
  const column = e.currentTarget.querySelector('#column').value;
  document.getElementById('board').innerHTML = createNewBoard(row, column);
});

const createNewBoard = (r, c) => {
  const board = document.createElement('table');
  for (let i = 0; i < r; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < c; j++) {
      const cell = document.createElement('td');
      cell.innerText = '0';
      row.append(cell);
    }
    board.append(row);
  }
  return board.innerHTML;
}
