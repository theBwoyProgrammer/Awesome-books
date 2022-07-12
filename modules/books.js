export default class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static reset() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

  addbook() {
    const book = {
      title: this.title.value,
      author: this.author.value,
    };

    const books = [];
    if (JSON.parse(localStorage.getItem('allBooks')) === null) {
      books.push(book);
      localStorage.setItem('allBooks', JSON.stringify(books));
    } else {
      const newbooks = JSON.parse(localStorage.getItem('allBooks'));
      newbooks.push(book);
      localStorage.setItem('allBooks', JSON.stringify(newbooks));
    }
  }

  static retrieve() {
    const booklist = document.querySelector('.lists');
    const data = JSON.parse(localStorage.getItem('allBooks'));

    let str = '';
    if (data === null || data.length === 0) {
      str = '<div class="list-item">No book</div>';
    } else {
      data.forEach((book) => {
        str += `<table class="list-item">
            <tr><td>"${book.title}"</td><td>by</td><td>${book.author}</td>
           <td class='td-btn'><a href="" class="remove-button" id="delete"><button type="button" class="button">Remove</button></a></td></tr>
          </table>`;
      });
    }
    booklist.innerHTML = str;
  }

  static dellbooks(id) {
    let data = JSON.parse(localStorage.getItem('allBooks'));
    const selectedbook = data[id];
    const filteredBooks = data.filter((item) => item !== selectedbook);
    localStorage.setItem('allBooks', JSON.stringify(filteredBooks));
    const newData = JSON.parse(localStorage.getItem('allBooks'));
    data = newData;
  }
}