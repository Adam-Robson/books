import { getBookById } from '../fetch-utils.js';
import { renderBookDetail } from '../render-utils.js';

async function loadBook() {
  const detailContainer = document.getElementById('detail-container');
  const params = new URLSearchParams(window.location.search);
  const book = await getBookById(params.get('id'));
  const div = renderBookDetail(book);
  detailContainer?.append(div);
  return detailContainer;
}

loadBook();
