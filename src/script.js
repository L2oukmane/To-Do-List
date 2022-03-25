import './style.css';
import TaskList from './interactive.js';

const tasks = new TaskList();

document.querySelector('.list-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const activity = e.target.elements.activity.value;
  tasks.addTask(activity);
  e.target.reset();
});

document.querySelector('.loop').addEventListener('click', () => {
  tasks.refresh();
});

document.querySelector('.clear-btn').addEventListener('click', () => {
  tasks.clearCompleted();
});