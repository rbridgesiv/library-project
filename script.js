function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.id = crypto.randomUUID();
}

const myLibrary = [
    // new Book("The Hobbit", "J.R.R. Tolkein", 1937),
    // new Book("To Kill A Mockingbird", "Harper Lee", 1960),
    // new Book("1984", "George Orwell", 1949)
];

function addBookToLibrary(title, author, year) {
    const newBook = new Book(`${this.title} by ${this.author}, ${this.year}`);
    myLibrary.push(newBook);
}

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
        bookContainer.appendChild(bookCard);
    })
}

const button = document.getElementById("button");

button.addEventListener('click', () => {
    console.log('button clicked!')
}) 



// document.addEventListener("DOMContentLoaded", displayBook);