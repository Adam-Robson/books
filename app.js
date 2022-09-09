import { getBooks } from './fetch-utils.js';
import { renderList } from './render-utils.js';

const listContainer = document.querySelector('.list-container');

async function loadBooks() {
   
    const books = await getBooks();
    
    for (let book of books) {        
        const div = renderList(book);
        listContainer.append(div);
    }
    return books;
}

loadBooks();

