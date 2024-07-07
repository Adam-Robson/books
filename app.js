import { getBooks } from './fetch-utils.js';
import { renderList } from './render-utils.js';

async function loadBooks() {
  const listContainer = document.querySelector('.list-container');
  const books = await getBooks();

  for (let book of books) {
    const div = renderList(book);
    listContainer?.append(div);
  }
  return books;
}

loadBooks();
