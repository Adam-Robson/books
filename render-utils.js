export function renderBookList(book) {
    const div = document.createElement('div');
    div.classList.add('books');

    const a = document.createElement('a');
    a.href = `./books/?id=${book.id}`;
    
    const p = document.createElement('p');
    p.textContent = book.title;
    
    const img = document.createElement('img');
    img.src = `./assets/${book.img}.png`;

    a.append(p, img);
    div.append(a);

    return div;
}

export function renderBookListItem(book) {
    const div = document.createElement('div');
    div.classList.add('book');
   
    const img = document.createElement('img');
    img.src = `./assets/${book.img}.png`;

    const titleSpan = document.createElement('p');
    titleSpan.textContent = `Title: ${book.title}`;
    titleSpan.classList.add('title');

    const authorSpan = document.createElement('p');
    authorSpan.textContent = `author: ${book.author}`;
    authorSpan.classList.add('author');

    const pagesSpan = document.createElement('p');
    pagesSpan.textContent = `${book.pages} pages`;
    pagesSpan.classList.add('pages');

    const yearSpan = document.createElement('p');
    yearSpan.textContent = `Published in: ${book.year}`;
    yearSpan.classList.add('year');

    const publishingHouseSpan = document.createElement('p');
    publishingHouseSpan.textContent = `Publisher: ${book.publisher}`;
    publishingHouseSpan.classList.add('publisher');

    div.append(img, titleSpan, authorSpan, yearSpan, pagesSpan, publishingHouseSpan);
    
    return div;
}