// Import stylesheets
import './style.css';
import axios from 'axios';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
var value: String = 'HAHAHA';
console.log(`${value}s`);
appDiv.innerHTML = `<h1>TypeScript Starter ${value} -- hele 2</h1>`;

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

interface Todos {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}

axios.get('https://dummyjson.com/todos').then((response) => {
  const todos: Todos = response.data as Todos;

  var out = '<ul>';

  for (let todo of todos.todos) {
    out += `<li>${todo.id} - ${todo.todo}</li>`;
  }

  out += '</ul>';
  appDiv.innerHTML = `${out}`;
});
