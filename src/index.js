// import _ from 'lodash';

// function component() {
//   const element = document.createElement('div');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());

console.log("Hello from src/index.js!");

const btnCreateTable = document.getElementById('create-table');
btnCreateTable.addEventListener('submit', (e) => {
  event.preventDefault();
  const row = e.currentTarget.querySelector('#row').value;
  const column = e.currentTarget.querySelector('#column').value;
  console.log(row);
  console.log(column);
});
