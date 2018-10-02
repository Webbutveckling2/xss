/* eslint-disable no-unused-vars */
import style from '../css/style.css';
/* eslint-enable no-unused-vars */
const btnEl = document.getElementById('btn');
const textEl = document.getElementById('text');
const inputEl = document.getElementById('input');

btnEl.addEventListener('click', () => {
  const text = inputEl.value;
  textEl.innerHTML = text;
});
