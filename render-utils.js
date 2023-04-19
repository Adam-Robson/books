export function renderList(book) {
    const div = document.createElement('div');
    div.classList.add('books');

    const a = document.createElement('a');
    a.href = `./bookdetail/?id=${book.id}`;
    a.classList.add('book-box');

    const p = document.createElement('p');
    p.classList.add('link', 'is-size-4', 'is-size-5-mobile');
    p.textContent = `${book.title}`;
    
    const img = document.createElement('img');
    img.src = `./assets/${book.image_name}`;

    a.append(img, p);
    div.append(a);

    return div;
}

export function renderBookDetail(book) {
    const div = document.createElement('div');
    div.classList.add('book');

    const img = document.createElement('img');
    img.classList.add('bookimage');
    img.src = `../assets/${book.image_name}`;

    const titleSpan = document.createElement('h1');
    titleSpan.textContent = `title:  ${book.title}`;
    titleSpan.classList.add('title');

    const authorSpan = document.createElement('p');
    authorSpan.textContent = `author:  ${book.author}`;
    authorSpan.classList.add('subtitle');

    const pagesSpan = document.createElement('p');
    pagesSpan.textContent = `pages:  ${book.pages}`;
    pagesSpan.classList.add('subtitle');

    const yearSpan = document.createElement('p');
    yearSpan.textContent = `published:  ${book.year}`;
    yearSpan.classList.add('subtitle');

    const publisherSpan = document.createElement('p');
    publisherSpan.textContent = `publisher:  ${book.publisher}`;
    publisherSpan.classList.add('subtitle');

    div.append(img, titleSpan, authorSpan, pagesSpan, yearSpan, publisherSpan);
    
    return div;
}