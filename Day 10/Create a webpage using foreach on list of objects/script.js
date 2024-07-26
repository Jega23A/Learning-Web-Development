const books = [
  { title: "Book 1", author: "Author 1" },
  { title: "Book 2", author: "Author 2" },
  { title: "Book 3", author: "Author 3" },
];

const bookList = document.getElementById("book-list");

books.forEach((book) => {
  const bookElement = document.createElement("div");
  bookElement.classList.add("book");
  bookElement.innerHTML = `
    <h2>${book.title}</h2>
    <p>Author: ${book.author}</p>
  `;
  bookList.appendChild(bookElement);
});
