const form = document.getElementById('create-table');

form.addEventListener('submit', (e) => {
  event.preventDefault();
  const row = e.currentTarget.querySelector('#row').value;
  const column = e.currentTarget.querySelector('#column').value;
  const board = document.getElementById('board');
  board.innerHTML = createNewBoard(row, column);
  board.addEventListener("click", initialPattern);
  if (addStartBtn()) {
    board.insertAdjacentElement('afterend', addStartBtn());
  }
});

const createNewBoard = (r, c) => {
  const board = document.createElement('table');
  for (let i = 0; i < r; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < c; j++) {
      const cell = document.createElement('td');
      // TODO: change display value of live and dead
      cell.innerText = '0';
      row.append(cell);
    }
    board.append(row);
  }
  return board.innerHTML;
}

const addStartBtn = () => {
  if (document.getElementById("start-btn")) return;

  const btn = document.createElement('button');
  btn.innerText = "Start";
  btn.id = 'start-btn';
  btn.addEventListener("click", (e) => {
    e.currentTarget.innerText = started ? "Start" : "Stop";
    started = !started;
  });
  return btn;
}

const board = document.getElementById("board");
const startBtn = document.getElementById("start-btn");
let started = false;

const initialPattern = (e) => {
  if (e.target.tagName !== "TD") return;
  console.log(e.target.innerText);
  e.target.innerText = (e.target.innerText === "0") ? "1" : "0";
}

