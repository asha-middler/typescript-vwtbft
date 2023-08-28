// Import stylesheets
import './style.css';
//import axios from 'axios';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
var value: String = 'HAHAHA';
console.log(`${value}s`);
appDiv.innerHTML = `<h1>TypeScript Starter ${value}</h1>`;

// axios.get("127.0.0.1").then( (response) => {
//     appDiv.innerHTML= `DATA = ${response.data}`;
// });
