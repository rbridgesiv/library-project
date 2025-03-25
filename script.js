function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
    this.id = crypto.randomUUID();
}

Book.prototype.toggleRead = function() {
    this.read = !this.read; // Flip true <-> false
};

const myLibrary = [];

// function addBookToLibrary(title, author, year) {
//     const newBook = new Book(`${this.title} by ${this.author}, ${this.year}`);
//     myLibrary.push(newBook);
// }

function displayBook() {
    const bookContainer = document.getElementById("book-container");
    bookContainer.innerHTML = "";

    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Year: ${book.year}</p>
        `;

        const readToggle = document.createElement("button");
        readToggle.classList.add("read-toggle");
        readToggle.textContent = "not read";

        readToggle.addEventListener("click", () => {
            if (readToggle.textContent === "not read"){
                readToggle.textContent = "read";
            }
            else {
                readToggle.textContent = "not read";
            }
        })
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.classList.add("remove-button");
        removeButton.setAttribute("data-id", book.id);

        removeButton.addEventListener("click", () => {
            removeBookByID(book.id);
        })

        const containerDiv = document.createElement("div");
        containerDiv.classList.add("add-remove-btn-container");

        containerDiv.appendChild(readToggle);
        containerDiv.appendChild(removeButton);
        bookCard.appendChild(containerDiv);
        bookContainer.appendChild(bookCard);
    })
}

const button = document.getElementById("button");

button.addEventListener('click', () => {
    const formDisplay = document.getElementById("book-form");
    formDisplay.style.display = "grid";
}) 

const bookForm = document.getElementById("book-form");

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = document.getElementById("year").value;
    const book = {
        title: title,
        author: author,
        year: year,
    }
    myLibrary.push(book);
    displayBook();
    bookForm.reset();
    bookForm.style.display = "none";
});

window.onload = function() {
    document.getElementById("book-form").reset();
};

function removeBookByID(id) {
    const bookIndex = myLibrary.findIndex(book => book.id === id);
    if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1);
        displayBook();
    }
}


// document.addEventListener("DOMContentLoaded", displayBook);