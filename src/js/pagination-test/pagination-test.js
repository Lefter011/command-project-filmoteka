import ApiService from '../ApiService';
import { containerGallery } from '../utils/refs';
import { createMarkup } from '../utils/createMarkup';
import { clearMarkup } from '../header-search';

const api = new ApiService();

const butPlus = document.querySelector('.button2');
const butMinus = document.querySelector('.button1');

butPlus.addEventListener('click', onButtonClickPlus);
butMinus.addEventListener('click', onButtonClickMinus);

const btn1Ref = document.querySelector('[data-index="1"]');
const btn2Ref = document.querySelector('[data-index="2"]');
const btn3Ref = document.querySelector('[data-index="3"]');
const btn4Ref = document.querySelector('[data-index="4"]');
const btn5Ref = document.querySelector('[data-index="5"]');
const btn6Ref = document.querySelector('[data-index="6"]');

btn1Ref.addEventListener('click', clickToPage1);
btn2Ref.addEventListener('click', clickToPage2);
btn3Ref.addEventListener('click', clickToPage3);
btn4Ref.addEventListener('click', clickToPage4);
btn5Ref.addEventListener('click', clickToPage5);
btn6Ref.addEventListener('click', clickToPage6);

// const res = localStorage.getItem('query');
// const arrayEl = JSON.parse(res);
// const totalPage = arrayEl.total_pages;
// console.log(totalPage);

btn1Ref.hidden = true;
btn2Ref.hidden = true;
btn3Ref.textContent = 2;
btn4Ref.textContent = 3;
btn5Ref.textContent = 1;
btn6Ref.textContent = 1000;

let currentPage = 1;

async function onButtonClickPlus() {
  currentPage += 1;
  renderPage();
  checkPageNumber();
}

async function onButtonClickMinus() {
  if (currentPage != 1) {
    currentPage -= 1;
    renderPage();
    checkPageNumber();
  } else {
    return console.log('error');
  }
}

async function clickToPage1() {
  currentPage = Number(document.querySelector('[data-index="1"]').textContent);
  checkPageNumber();
  return renderPage();
}

async function clickToPage2() {
  currentPage = Number(document.querySelector('[data-index="2"]').textContent);
  checkPageNumber();
  return renderPage();
}

async function clickToPage3() {
  currentPage = Number(document.querySelector('[data-index="3"]').textContent);
  checkPageNumber();
  return renderPage();
}

async function clickToPage4() {
  currentPage = Number(document.querySelector('[data-index="4"]').textContent);
  checkPageNumber();
  return renderPage();
}

async function clickToPage5() {
  currentPage = 1;
  checkPageNumber();
  return renderPage();
}

async function clickToPage6() {
  currentPage = 1;
  checkPageNumber();
  return renderPage();
}

async function renderPage() {
  try {
    const res = await api.fetchTrendingMovies(currentPage);
    const data = res.data.results;
    const markup = createMarkup(data);
    clearMarkup();
    containerGallery.innerHTML = markup;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('currentPage').textContent = currentPage;
  } catch (error) {
    console.error('Error with search fetch' + error);
  }
}

async function checkPageNumber() {
  btn3Ref.textContent = currentPage + 1;
  btn4Ref.textContent = currentPage + 2;
  if (currentPage >= 3) {
    btn1Ref.hidden = false;
    btn2Ref.hidden = false;
    btn1Ref.textContent = currentPage - 2;
    btn2Ref.textContent = currentPage - 1;
  } else {
    btn1Ref.hidden = true;
    btn2Ref.hidden = true;
  }
}

export { currentPage };
