export function renderBookList(book) {
    const div = document.createElement('div');
    div.classList.add('books');

    const a = document.createElement('a');
    a.href = `./books/?id=${book.id}`;
    
    const p = document.createElement('p');
    p.textContent = book.title;
    
    const img = document.createElement('img');
    img.src = `./assets/${book.call}.png`;

    div.append(p, img);
    a.append(div);

    return a;
}

export function renderBookListItem(book) {
    const div = document.createElement('div');
    div.classList.add('book');
   
    const img = document.createElement('img');
    img.src = `./assets/${book.call}.png`;

    const titleSpan = document. createElement('span');
    titleSpan.textContent = book.title;
    titleSpan.classList.add('title');

    const authorSpan = document.createElement('span');
    authorSpan.textContent = book.author;
    authorSpan.classList.add('author');

    const pagesSpan = document. createElement('span');
    pagesSpan.textContent = book.pages;
    pagesSpan.classList.add('pages');

    const yearSpan = document. createElement('span');
    yearSpan.textContent = book.year;
    yearSpan.classList.add('year');

    const publishingHouseSpan = document. createElement('span');
    publishingHouseSpan.textContent = book.publishingHouse;
    publishingHouseSpan.classList.add('publishing-house');

    div.append(img, titleSpan, authorSpan, yearSpan, pagesSpan, publishingHouseSpan);
    
    return div;
}