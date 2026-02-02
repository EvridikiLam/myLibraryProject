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

function saveBooks() {
  localStorage.setItem("books", JSON.stringify(books));
}

window.addEventListener("DOMContentLoaded", renderBooks);

function renderBooks() {
  const container = document.querySelector("#bookList");
  container.innerHTML = "";

  books.forEach(book => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>Status: ${book.status}</p>
      <p>Rating: ${book.rating}</p>
      <p>${book.notes}</p>
    `;
    container.appendChild(div);
  });
}
