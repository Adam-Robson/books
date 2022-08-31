import { getBookByID } from '../fetch-utils.js';
import { renderBookListItem } from '../render-utils.js';

const bookDetailSection = document.getElementById('book-detail-section'); 

const params = new URLSearchParams(window.location.search);


async function loadBook() {
    const book = await getBookByID(params.get('id'));
    const bookDiv = renderBookListItem(book);
    bookDetailSection.append(bookDiv);
}

loadBook();
