const form = document.getElementById('create-table');
let started = false;

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
  if (document.getElementById("start-btn"))
    return;

  const btn = document.createElement('button');
  btn.innerText = "Start";
  btn.id = 'start-btn';
  btn.addEventListener("click", (e) => {
    started = !started;
    console.log("Trigger", started)
    e.currentTarget.innerText = !started ? "Start" : "Stop";
    if (started)
      setTimeout(() => rule_of_life(2000), 50);
  });
  return btn;
}

const initialPattern = (e) => {
  if (e.target.tagName !== "TD")
    return;
  console.log(e.target.innerText);
  e.target.innerText = (e.target.innerText === "0") ? "1" : "0";
}

const rule_of_life = (n) => {
  if (!started)
    return;
  console.log("Run game of life pattern", n)
  if (n > 0)
    setTimeout(() => rule_of_life(--n), 50)
}
