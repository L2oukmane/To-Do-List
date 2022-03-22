import _ from 'lodash';
import './style.css';
const todoList = document.querySelector('.items');
const todos = [
  {
    description: 'Take a walk ',
    completed: false,
    index: 0,
  },
  {
    description: 'Read a book',
    completed: false,
    index: 1,
  },
  {
    description: 'Wash the car',
    completed: false,
    index: 2,
  },
];

function allTasks() {
  todoList.innerHTML = '';
  todos.forEach((todos) => {
    todoList.innerHTML += `<div class="item ${todos.index}">
    <i class="fa-regular fa-square"></i>
    ${todos.description}
    <i class="material-icons threePoints">more_horiz</i>
    </div>
    <div class="breakline"><hr></div>
  `;
  });
}
window.onload = allTasks();