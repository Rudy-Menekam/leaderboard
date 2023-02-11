import getData from './getData.js';

const container = document.querySelector('.section-side2');
const displayData = async () => {
  const data = await getData();
  let item = '';
  for (let i = 0; i < data.length; i += 1) {
    item += `<li class="list">${data[i].user} : ${data[i].score}</li> `;
    container.innerHTML = item;
  }
};

export default displayData;