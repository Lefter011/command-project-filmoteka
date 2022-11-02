// // import { Axios } from "axios"
// // import ApiService from "./ApiService";

// async function getData() {
//     const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=9384544c410021c8ddd99f4e7b3ff84b')
//     const data = await response.json()
//     return data
// }
// async function main() {

//     const movieData = await getData();
//     let currentPage = 1;
//     let movieCards = 9;

//     function onDisplayCard(arrData, cardQuantity, page) {
//         console.log(arrData);
//         const moviesEl = document.querySelector('.pagination-movie');
//         // moviesEl.innerHTML = '';
//         page -= 1;

//         const start = cardQuantity * page;
//         const end = start + cardQuantity;
//         const paginatedData = arrData.results.slice(start,end)

//         paginatedData.forEach(({title}) => {
//             const movieEl = document.createElement('div');
//             movieEl.innerHTML = `${title}`;
//             moviesEl.appendChild(movieEl);
//         })
//     }    
    
//     function onDisplayPagination(arrData,cardQuantity) { 
//         const paginationEl = document.querySelector('.pagination-page');
//         const pagesCount = Math.ceil(arrData.length / cardQuantity);
//         const divEl = document.createElement("div");

//         for (let i = 0; i < pagesCount; i+=1) {
//             const btnEl = onDisplayBtn(i+1);
//             divEl.appendChild(btnEl)
            
//         }
//        paginationEl.appendChild(divEl)
//     }
//     function onDisplayBtn(page) { 
//         const btnEl = document.createElement('button');
//         btnEl.classList.add('pagination-button');
//         btnEl.innerText = page;

//         if(currentPage===page) btnEl.classList.add('pagination-current')

//         btnEl.addEventListener('click', (e) => {
//              e.preventDefault();
//             currentPage = page;
//             onDisplayCard(movieData, movieCards, currentPage);

//             let currentItemBtn = document.querySelector('button.pagination-current');
//             currentItemBtn.classList.remove('pagination-current');

//             btnEl.classList.add('pagination-current')
//         }
//         )
//         return btnEl;
//     }
    
//     onDisplayCard(movieData, movieCards, currentPage);
//     onDisplayPagination(movieData, movieCards);
// }

// main()