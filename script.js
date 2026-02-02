//If there are saved books in array load them, if not empty array
let books = JSON.parse(localStorage.getItem("books")) || [];

const form = document.querySelector("#bookForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const book = {
    id: Date.now(),
    title: document.querySelector("#btitle").value,
    author: document.querySelector("#bauthor").value,
    status: document.querySelector("#status").value,
    rating: document.querySelector("#rating").value,
    notes: document.querySelector("#notes").value
  };

  books.push(book);
  saveBooks();
});
