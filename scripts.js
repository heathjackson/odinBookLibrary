const bookCards = document.getElementById("book-cards");
const addNewBook = document.getElementById("newBookButton");
const form = document.getElementById("add-form");
const submitButton = document.getElementById("submit-button");
const radioButtons = document.querySelectorAll('input[name="read"]');


let myLibrary = [
  {
  title: "Brave New World",
  author: "Aldous Huxley",
  pages: "300",
  read: "yes",
},
  {
  title: "As I Lay Dying",
  author: "William Faulkner",
  pages: "250",
  read: "no",
},
  {
  title: "The Hunger Games",
  author: "Suzanne Collins",
  pages: "400",
  read: "yes",
},
]



function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  form.style.visibility = "hidden";

  let title = document.getElementById("book-title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;

  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      read = radioButton.value;
    }
  }

  let book = new Book(title, author, pages, read);
  myLibrary.push(book);

  //part of booksInLibrary()
  let myArray = Object.values(book);

  let eachBookCard = document.createElement("div");
  eachBookCard.classList.add("bookCardClass")
  bookCards.appendChild(eachBookCard);
  eachBookCard.innerHTML = myArray;

  let removeButton = document.createElement("button");
  removeButton.classList.add("del");
  eachBookCard.appendChild(removeButton);
  removeButton.innerHTML = "Delete";

  removeButton.addEventListener("click", function() {
    this.closest(".bookCardClass").remove();
  });

  document.forms[0].reset();
});

function booksInLibrary() {
  for (let book of myLibrary) {
    let myArray = Object.values(book);
    let eachBookCard = document.createElement("div");
    bookCards.appendChild(eachBookCard);
    eachBookCard.innerHTML = myArray;
  }
}



booksInLibrary();

addNewBook.addEventListener("click", function() {
  form.style.visibility = "visible";
});