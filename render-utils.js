export function renderList(book) {
    const div = document.createElement('div');
    div.classList.add('books');

    const a = document.createElement('a');
    a.href = `./bookdetail/?id=${book.id}`;
    a.classList.add('book-box')

    const p = document.createElement('p');
    p.textContent = `title: ${book.title}`;
    
    const img = document.createElement('img');
    img.src = `./assets/${book.img}.png`;

    a.append(p, img);
    div.append(a);

    return div;
}

export function renderBookDetail(book) {
    const div = document.createElement('div');
    div.classList.add('book');

    const img = document.createElement('img');
    img.src = `../assets/${book.img}.png`;

    const titleSpan = document.createElement('p');
    titleSpan.textContent = `title: ${book.title}`;
    titleSpan.classList.add('title');

    const authorSpan = document.createElement('p');
    authorSpan.textContent = `author: ${book.author}`;
    authorSpan.classList.add('author');

    const pagesSpan = document.createElement('p');
    pagesSpan.textContent = `${book.pages} pages`;
    pagesSpan.classList.add('pages');

    const yearSpan = document.createElement('p');
    yearSpan.textContent = `published: ${book.year}`;
    yearSpan.classList.add('year');

    const publisherSpan = document.createElement('p');
    publisherSpan.textContent = `publisher: ${book.publisher}`;
    publisherSpan.classList.add('publisher');

    div.append(img, titleSpan, authorSpan, pagesSpan, yearSpan, publisherSpan);
    
    return div;
}