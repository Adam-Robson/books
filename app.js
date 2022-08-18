import { getBooks } from './fetch-utils.js';
import { renderBookListItem } from './render-utils.js';

// let state

const bookList = document.querySelector('.book-list');

async function loadData() {
    const favoriteBooks = await getBooks();
    
    for (let book of favoriteBooks) {
        const bookDiv = renderBookListItem(book);
        bookList.append(bookDiv);
    }
}

loadData();
