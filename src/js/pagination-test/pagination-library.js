// import ApiService from '../ApiService';
// import { createMarkup } from '../utils/createMarkup';
// import { clearMarkup } from '../header-search';
// import { clearPage, createLibraryMarkup } from '../my-library-create-murkup';
// import { localStore } from '../utils/loc-storage';

// import { queueBTN } from '../my-library-create-murkup';
// import { LINE_KEY } from '../modal-card-film/add-to-queue';
// import { WATCHED_KEY } from '../modal-card-film/add-to-watched';

// const api = new ApiService();
// const galleryContainer = document.querySelector('ul.mylibrary__list');
// const queueMovies = localStore.load(LINE_KEY);
// const watchedMovies = localStore.load(WATCHED_KEY);

// const btn1Ref = document.querySelector('[data-index="1"]');
// const btn2Ref = document.querySelector('[data-index="2"]');
// const btn3Ref = document.querySelector('[data-index="3"]');
// const btn4Ref = document.querySelector('[data-index="4"]');
// const btn5Ref = document.querySelector('[data-index="5"]');
// const firstPageRef = document.querySelector('.first-button');
// const lastPageRef = document.querySelector('.last-button');
// const paginationRef = document.querySelector('.pagination-container');
// const rightArrowRef = document.querySelector('.arrow-right');
// const leftArrowRef = document.querySelector('.arrow-left');
// const prevDotsRef = document.querySelector('#previous');
// const afterDotsRef = document.querySelector('#after');

// const queuePage = queueBTN.classList.contains('active-btn');
// console.log('queuePage', queuePage);
// const watchedPage = !queuePage;
// console.log('watchedPage', watchedPage);
// let currentPage = 1;
// let numbersPerPage = 9;

// const totalPagesLine = Math.floor(queueMovies.length / 9);
// if (totalPagesLine === 0) {
//   return;
// }

// const totalPagesWatched = Math.floor(watchedMovies.length / 9);
// if (totalPagesWatched === 0) {
//   return;
// }

// if (queuePage && currentPage > totalPagesLine) {
//   console.log('Current page is bigger than current page');
//   return;
// }

// if (watchedPage && currentPage > totalPagesWatched) {
//   console.log('Current page is bigger than current page');
//   return;
// }

// checkIfCurrentPageIsLast(totalPagesWatched);

// function checkIfCurrentPageIsLast(totalPages) {
//   const isLast = (currentPage = totalPages);
//   if (isLast) {
//     const lastBtn = document.querySelector('.pagination--current');
//     console.log(lastBtn);
//   }
// }

// prevDotsRef.hidden = true;

// paginationRef.addEventListener('click', onPaginationClick);

// console.log(currentPage, 'currentPage at start');

// function cutMovies(arr) {
//   const start = numbersPerPage * (currentPage - 1);
//   console.log('cutMovies   start', start);
//   const end = start + 9;
//   console.log('cutMovies   end', end);
//   return arr.slice(start, end);
// }

// let btns = document.querySelectorAll('.pagination-button');

// prevDotsRef.hidden = true;
// leftArrowRef.hidden = true;
// firstPageRef.hidden = true;

// function onPaginationClick(event) {
//   if (event.target.tagName === 'BUTTON') {
//     if (Number(event.target.textContent)) {
//       currentPage = Number(event.target.textContent);
//     }

//     prevDotsRef.hidden = true;
//     afterDotsRef.hidden = true;

//     if (event.target.classList.contains('pagination-button')) {
//       btns.forEach(el => el.classList.remove('pagination--current'));
//       event.target.classList.add('pagination--current');
//     }

//     if (event.target.classList.contains('arrow-right') && currentPage < 1000) {
//       btns.forEach(el => el.classList.remove('pagination--current'));
//       btn1Ref.classList.add('pagination--current');
//       btn1Ref.textContent = Number(btn1Ref.textContent) + 5;
//       btn2Ref.textContent = Number(btn2Ref.textContent) + 5;
//       btn3Ref.textContent = Number(btn3Ref.textContent) + 5;
//       btn4Ref.textContent = Number(btn4Ref.textContent) + 5;
//       btn5Ref.textContent = Number(btn5Ref.textContent) + 5;
//       currentPage = btn1Ref.textContent;
//     }

//     if (event.target.classList.contains('arrow-left') && currentPage >= 5) {
//       btns.forEach(el => el.classList.remove('pagination--current'));
//       btn1Ref.textContent = Number(btn1Ref.textContent) - 5;
//       btn2Ref.textContent = Number(btn2Ref.textContent) - 5;
//       btn3Ref.textContent = Number(btn3Ref.textContent) - 5;
//       btn4Ref.textContent = Number(btn4Ref.textContent) - 5;
//       btn5Ref.textContent = Number(btn5Ref.textContent) - 5;
//       btn5Ref.classList.add('pagination--current');
//       currentPage = btn5Ref.textContent;
//     }

//     if (event.target.classList.contains('first-button')) {
//       btns.forEach(el => el.classList.remove('pagination--current'));
//       btn1Ref.textContent = 1;
//       btn2Ref.textContent = 2;
//       btn3Ref.textContent = 3;
//       btn4Ref.textContent = 4;
//       btn5Ref.textContent = 5;
//       btn1Ref.classList.add('pagination--current');
//       currentPage = btn1Ref.textContent;
//       leftArrowRef.hidden = true;
//       prevDotsRef.hidden = true;
//       firstPageRef.hidden = true;
//     }

//     if (event.target.classList.contains('last-button')) {
//       btns.forEach(el => el.classList.remove('pagination--current'));
//       btn1Ref.textContent = Number(lastPageRef.textContent) - 4;
//       btn2Ref.textContent = Number(lastPageRef.textContent) - 3;
//       btn3Ref.textContent = Number(lastPageRef.textContent) - 2;
//       btn4Ref.textContent = Number(lastPageRef.textContent) - 1;
//       btn5Ref.textContent = lastPageRef.textContent;
//       btn5Ref.classList.add('pagination--current');
//       currentPage = btn5Ref.textContent;
//       rightArrowRef.hidden = true;
//       afterDotsRef.hidden = true;
//       lastPageRef.hidden = true;
//     }

//     if (Number(currentPage) > 5) {
//       leftArrowRef.hidden = false;
//       prevDotsRef.hidden = false;
//       firstPageRef.hidden = false;
//     } else {
//       leftArrowRef.hidden = true;
//       prevDotsRef.hidden = true;
//       firstPageRef.hidden = true;
//     }

//     if (Number(currentPage) < 996) {
//       rightArrowRef.hidden = false;
//       afterDotsRef.hidden = false;
//       lastPageRef.hidden = false;
//     }

//     window.scrollTo({ top: 0, behavior: 'smooth' });

//     if (queuePage) {
//       console.log(currentPage, 'currentPage on click');
//       const moviesStack = cutMovies(queueMovies);
//       createLibraryMarkup(moviesStack);
//     } else {
//       console.log('onPaginationClick   totalPagesWatched', totalPagesWatched);
//       console.log(currentPage, 'currentPage on click');
//       const moviesStack = cutMovies(watchedMovies);
//       createLibraryMarkup(moviesStack);
//     }
//   }
// }

// export { currentPage };
