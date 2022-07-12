/* eslint-disable max-classes-per-file */
/* eslint-disable import/extensions */

import Books from './modules/books.js';

const formTitle = document.querySelector('#title');
const formAuthor = document.querySelector('#author');
const library = new Books(formTitle, formAuthor);
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  library.addbook();
  Books.reset();
  Books.retrieve();
});

Books.retrieve();
document.querySelectorAll('#delete').forEach((button, id) => {
  button.addEventListener('click', () => {
    Books.dellbooks(id);
    Books.retrieve();
  });
});

const app = {
  pages: [],
  show: new Event('show'),
  init() {
    app.pages = document.querySelectorAll('.page');
    app.pages.forEach((pg) => {
      pg.addEventListener('show', app.pageShown);
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', app.nav);
    });
  },
  nav(ev) {
    ev.preventDefault();
    const currentPage = ev.target.getAttribute('data-target');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(currentPage).classList.add('active');
  },
};

document.addEventListener('DOMContentLoaded', app.init);
function startDate() {
  const d = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  document.getElementById('date').innerHTML = `${months[d.getMonth()]} ${d.getDay()} ${d.getFullYear()}, ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}
startDate();
