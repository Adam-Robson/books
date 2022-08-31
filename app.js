import { getBooks } from './fetch-utils.js';
import { renderBookList } from './render-utils.js';

const bookList = document.querySelector('.book-list');

async function loadBooks() {
   
    const favoriteBooks = await getBooks();
    
    for (let book of favoriteBooks) {
        
        const bookDiv = renderBookList(book);
        bookList.append(bookDiv);
    }
}
loadBooks();

