import { getBookByID } from '../fetch-utils';
import { renderBookListItem } from '../render-utils.js';

const bookDetailPage = document.getElementById('book-detail-page'); 

const params = new URLSearchParams(window.location.search);


async function loadBook() {
    const book = await getBookByID(params.get('id'));
    const bookDiv = renderBookListItem(book);
    bookDetailPage.append(bookDiv);
}
loadBook();
