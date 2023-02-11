import './style.css';
import addScores from './modules/addScores.js';
import getData from './modules/getData';
import displayData from './modules/displayData';

const nameField = document.querySelector('#name');
const scoreField = document.querySelector('#score');
const refreshBtn = document.querySelector('#btn-ref');
const form = document.querySelector('.form');

window.addEventListener('load', () => {
  displayData();
});
// Added Eventlistner to the submit button
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameField.value;
  const score = scoreField.value;
  addScores(name, score);
  form.reset();
});
// Added Eventlistner to the refresh Button
refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getData();
  displayData();
});