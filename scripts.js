const bookCards = document.getElementById('book-cards');
const addNewBook = document.getElementById('newBookButton');
const form = document.getElementById('add-form');
const submitButton = document.getElementById('submit-button');
const radioButtons = document.querySelectorAll('input[name="read"]');
let read = '';

const myLibrary = [
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    pages: '300',
    read: 'yes',
  },
  {
    title: 'As I Lay Dying',
    author: 'William Faulkner',
    pages: '250',
    read: 'no',
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    pages: '400',
    read: 'yes',
  },
];

// eslint-disable-next-line no-shadow
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  form.style.visibility = 'hidden';

  const title = document.getElementById('book-title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;

  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      if (radioButton.value === 'yes') {
        read = 'yes read';
      } else {
        read = 'not read yet';
      }
    }
  }

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);

  // part of booksInLibrary()
  const myArray = Object.values(book);

  const eachBookCard = document.createElement('div');
  eachBookCard.classList.add('bookCardClass');
  bookCards.appendChild(eachBookCard);
  eachBookCard.innerHTML = myArray;

  const removeButton = document.createElement('button');
  removeButton.classList.add('del');
  eachBookCard.appendChild(removeButton);
  removeButton.innerHTML = 'Delete';

  removeButton.addEventListener('click', function () {
    this.closest('.bookCardClass').remove();
  });

  document.forms[0].reset();
});

function booksInLibrary() {
  for (const book of myLibrary) {
    const myArray = Object.values(book);
    const eachBookCard = document.createElement('div');
    bookCards.appendChild(eachBookCard);
    eachBookCard.innerHTML = myArray;
  }
}

booksInLibrary();

addNewBook.addEventListener('click', () => {
  form.style.visibility = 'visible';
});
