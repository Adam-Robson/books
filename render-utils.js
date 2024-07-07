export function renderList(book) {
  const div = document.createElement('div');
  div.classList.add('book');

  const a = document.createElement('a');
  a.href = `./book/?id=${ book.id }`;
  a.classList.add('book-link');

  const title = document.createElement('h5');
  title.classList.add('lato-thin');
  title.classList.add('title');
  title.textContent = book.title;

  const img = document.createElement('img');
  img.classList.add('image');
  img.classList.add('book-image');
  img.src = book.png_image;

  a.append(img, title);
  div.append(a);

  return div;
}

export function renderBookDetail(book) {
  const div = document.createElement('div');
  div.classList.add('book');

  const img = document.createElement('img');
  img.classList.add('image');
  img.src = book.png_image;

  const title = document.createElement('h2');
  title.classList.add('lato-regular');
  title.classList.add('title');
  title.textContent = book.title;

  const author = document.createElement('h4');
  author.classList.add('author');
  author.classList.add('lato-thin');
  author.textContent = `written by ${ book.author }`;

  const year = document.createElement('h4');
  year.classList.add('year');
  year.classList.add('lato-thin');
  year.textContent = `published:  ${ book.year }, by ${ book.publisher }`;

  const pages = document.createElement('h4');
  pages.textContent = `pages:  ${ book.pages }`;
  pages.classList.add('pages');

  div.append(img, title, author, year, pages);

  return div;
}
