/**
 * @jest-environment jsdom
 */
import TaskList from '../interactive.js';

document.body.innerHTML = `<div class="toDo">
    <div class="heading">
    <h1>Today's To Do</h1>
    <i class="material-icons loop">loop</i>
    </div>
    <hr class="breakline">
    <div class="second-part">
    <ul class="listForm">
        <li class="input-container">
        <form class="list-form">
            <input class="input" type ="text" name="activity" placeholder="Add to your list...">
            <i class="material-icons Enter">keyboard_return</i>
        </form>
        <div class="breakline"><hr></div>
        </li>
        <li class="items"> 
    
        </li>
    </ul>
    <div class="clear-btn">Clear all completed</div>
    </div>
</div>`;

describe('add and remove', () => {
  window.localStorage = Storage.prototype;
  test('Add task', () => {
    const todoList = new TaskList();
    todoList.addTask('Test');
    expect(todoList.list).toHaveLength(1);

    const storage = JSON.parse(localStorage.getItem('todo-list'));
    expect(storage).not.toBe(null);
    expect(localStorage).toHaveLength(1);
  });

  test('remove', () => {
    const removeTask = new TaskList();

    removeTask.addTask('test');
    removeTask.addTask('test');
    removeTask.deleteTask(1);
    expect(removeTask.list).toHaveLength(2);
    removeTask.refresh();
    expect(removeTask.list).toHaveLength(0);
  });
});

describe('update status', () => {
  test('update task', () => {
    const updateList = new TaskList();
    updateList.addTask('Test');
    updateList.updateStatus(0);
    expect(updateList.list[0].completed).toBe(true);
  });
  test('clear all completed', () => {
    const updateList = new TaskList();
    updateList.clearCompleted();
    expect(updateList.list).toHaveLength(0);
  });
  test('edit task', () => {
    const updateList = new TaskList();
    updateList.addTask('Test');
    updateList.editTask(0, 'Testing');
    expect(updateList.list[0].description).toMatch(/Testing/);
  });
});