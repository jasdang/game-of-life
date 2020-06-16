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
  console.log(e.target.innerText);
}

const rule_of_life = () => {
  if (!started)
    return;
  console.log("Run game of life pattern");
  board = document.getElementById("board");
  rows = board.querySelectorAll("tbody > tr");
  let r = 0;
  let c = 0;
  rows.forEach((tr) => {
    let columns = tr.querySelectorAll("td");
    columns.forEach((td) => {
      const adjCellCoors = [[r - 1, c - 1],
                           [r - 1, c],
                           [r - 1, c + 1],
                           [r, c - 1],
                           [r, c + 1],
                           [r + 1, c - 1],
                           [r + 1, c],
                           [r + 1, c + 1]];
      let liveNeighbors = 0;
      adjCellCoors.forEach((adjCellCoor) => {
        if ((adjCellCoor[0] >= 0) && (adjCellCoor[1] >= 0) && (adjCellCoor[0] < rows.length) && (adjCellCoor[1] < columns.length)) {
          const tempTd = rows[adjCellCoor[0]].querySelectorAll("td");
          const cell = tempTd[adjCellCoor[1]].innerText;
          if ( cell === "1")
            liveNeighbors += 1;
        }
      })
      console.log(`Neightbors: ${liveNeighbors}`);
      if ((td.innerText === "1") && ((liveNeighbors < 2) || (liveNeighbors > 3))) {
        td.innerText = "0";
        console.log("hi")
      }
      else if (td.innerText === "0" && (liveNeighbors === 3)) {
        td.innerText = "1";
        console.log("hello")
      }
      console.log(`row ${r}, column ${c}, value ${td.innerText}`);
      c++;
    })
    c = 0;
    r++;
  })
  // setTimeout(() => rule_of_life(), 50);
}
