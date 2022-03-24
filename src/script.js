import './style.css';

const todoList = document.querySelector('.items');
const listForm = document.querySelector('.list-form');
const input = document.querySelector('.input');
class ToDo {
    constructor(description, completed, index){
        this.description = description;
        this.completed = completed;
        this.index = index;
    }
	}

class ToDoDataBase {
	constructor(){
		this.ToDo = JSON.parse(localStorage.getItem('bookStorage')) || [];
	}
    addNote(){
    listForm.addEventListener('submit', () => {
    const currentNote = new ToDo(input.value);
		this.ToDo.push(currentNote);
		input = '';
    });
		localStorage.setItem('bookStorage', JSON.stringify(this.ToDo));
    this.localstorage();
    }

		showNote(description, completed, index){
			if(description == ''){
				listForm.removeEventListener('submit', false, false);
			}

		}
	}
