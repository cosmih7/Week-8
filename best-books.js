const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const booksContainer = document.getElementById("books-container") 


formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  // Fetch bestselling books for date and add top 5 to page
  const URL = `https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction.json?api-key=${API_KEY}`

  fetch(URL)
   .then((result) => {
    return result.json();
  })
  .then((data) => {
    const books = data.results.books;

    books.forEach((book) => {
     const newBook = document.createElement("div")
     newBook.classList = "book"
     const newBookHtml = `
          <img src="${book.book_image}" />
          <h3>${book.title}</h3>
          <h5>${book.author}</h5>
          <p>${book.description}</p>
        `;

        newBook.innerHTML = newBookHtml;
        booksContainer.appendChild(newBook) 
    });
  });
});
