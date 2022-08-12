// export function renderListItem(book) {
//     const div = document.createElement('div');
//     div.classList.add('book');
//     div.style.top = `${book.top}px`;
//     div.style.left = `${book.left}%`;

//     const a = document.createElement('a');
//     a.href = `/books/?id=${book.id}`;

//     a.classList.add('book-container');
//     // img.src = `/assets/${book.title}.png`;

//     const titleSpan = document. createElement('span');
//     titleSpan.textContent = book.title;
//     titleSpan.classList.add('title');

//     const authorSpan = document.createElement('span');
//     authorSpan.textContent = book.author;
//     authorSpan.classList.add('author');

//     const pagesSpan = document. createElement('span');
//     pagesSpan.textContent = book.pages;
//     pagesSpan.classList.add('pages');

//     const yearSpan = document. createElement('span');
//     yearSpan.textContent = book.year;
//     yearSpan.classList.add('year');

//     const publishingHouseSpan = document. createElement('span');
//     publishingHouseSpan.textContent = book.publishingHouse;
//     publishingHouseSpan.classList.add('publishing hose');

//     a.append(titleSpan, authorSpan, yearSpan, pagesSpan, publishingHouseSpan);
//     div.append('a');
//     return div;
// }