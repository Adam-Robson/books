import { getBookById } from '../fetch-utils.js';
import { renderBookDetail } from '../render-utils.js';

const detailContainer = document.getElementById('detail-container'); 

const params = new URLSearchParams(window.location.search);

async function loadBook() {
    const book = await getBookById(params.get('id'));
    const div = renderBookDetail(book);
    detailContainer.append(div);
    return detailContainer;
}

loadBook();
