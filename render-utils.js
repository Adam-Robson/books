export function renderList(book) {
    const div = document.createElement('div');
    div.classList.add('books');

    const a = document.createElement('a');
    a.href = `./bookdetail/?id=${book.id}`;
    a.classList.add('book-box');

    const p = document.createElement('p');
    p.classList.add('link');
    p.textContent = `${book.title}`;
    
    const img = document.createElement('img');
    img.src = `./assets/${book.img}.png`;

    a.append(img, p);
    div.append(a);

    return div;
}

export function renderBookDetail(book) {
    const div = document.createElement('div');
    div.classList.add('book');

    const img = document.createElement('img');
    img.src = `../assets/${book.img}.png`;

    const title = document.getElementById('detail-title');
    title.textContent = `${book.title}`;

    const titleSpan = document.createElement('p');
    titleSpan.textContent = `TITLE: ${book.title}`;
    titleSpan.classList.add('title');

    const authorSpan = document.createElement('p');
    authorSpan.textContent = `AUTHOR: ${book.author}`;
    authorSpan.classList.add('author');

    const pagesSpan = document.createElement('p');
    pagesSpan.textContent = `PAGES: ${book.pages}`;
    pagesSpan.classList.add('pages');

    const yearSpan = document.createElement('p');
    yearSpan.textContent = `PUBLISHED: ${book.year}`;
    yearSpan.classList.add('year');

    const publisherSpan = document.createElement('p');
    publisherSpan.textContent = `PUBLISHER: ${book.publisher}`;
    publisherSpan.classList.add('publisher');

    div.append(img, titleSpan, authorSpan, pagesSpan, yearSpan, publisherSpan);
    
    return div;
}