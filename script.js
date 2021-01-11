let myLibrary = [];

class Book {
    constructor(author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }
}


function addBook() {
    const newAuthor = document.querySelector("#author-input").value;
    const newTitle = document.getElementById("title-input").value;
    const newPages = document.getElementById("pages-input").value;
    const newRead = document.getElementById("read-input").checked;
    
    if(newAuthor !== "" && newTitle !== "" && newPages !== "") {
        const newBook = new Book(newAuthor, newTitle, newPages, newRead);
        myLibrary.push(newBook);
        displayBooks();
    }
}

function displayBooks() {
    let div = document.createElement("div");
    div.className = "book";
    let authorHeader = document.createElement("h3");
    authorHeader.className = "book-info-header";
    authorHeader.innerHTML = "Author: ";
    let authorValue = document.createElement("p");
    authorValue.className = "book-info";
    authorValue.innerHTML = myLibrary[myLibrary.length - 1].author;
    let titleHeader = document.createElement("h3");
    titleHeader.className = "book-info-header";
    titleHeader.innerHTML = "Title: ";
    let titleValue = document.createElement("p");
    titleValue.className = "book-info";
    titleValue.innerHTML = myLibrary[myLibrary.length - 1].title;
    let pagesHeader = document.createElement("h3");
    pagesHeader.className = "book-info-header";
    pagesHeader.innerHTML = "Pages: ";
    let pagesValue = document.createElement("p");
    pagesValue.className = "book-info";
    pagesValue.innerHTML = myLibrary[myLibrary.length - 1].pages;
    let readHeader = document.createElement("h3");
    readHeader.className = "book-info-header";
    readHeader.innerHTML = "Read: ";
    let readValue = document.createElement("INPUT");
    readValue.setAttribute("type", "checkbox");
    readValue.className = "read-checkbox";
    readValue.checked = myLibrary[myLibrary.length - 1].read;
    let br = document.createElement("br");
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.innerHTML = "Delete Book";
    deleteButton.addEventListener('click', () => {
        deleteButton.parentElement.remove();
    })

    div.appendChild(authorHeader);
    div.appendChild(authorValue);
    div.appendChild(titleHeader);
    div.appendChild(titleValue);
    div.appendChild(pagesHeader);
    div.appendChild(pagesValue);
    div.appendChild(readHeader);
    div.appendChild(readValue);
    div.appendChild(br);
    div.appendChild(deleteButton);

    bookshelf.appendChild(div);
}


const newBookBtn = document.getElementById("new-book-btn");
const popup = document.getElementById("new-book-popup");
const close = document.getElementById("close");
const submit = document.getElementById("submit");
const bookshelf = document.getElementById("bookshelf");
let deleteBtns = Array.from(document.querySelectorAll('.delete-btn'));

deleteBtns.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.remove();
    })
})

newBookBtn.onclick = function() {
    popup.style.display = "block";
}

close.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == popup) {
        popup.style.display = "none";
    }
}

submit.onclick = function() {
    deleteBtns = document.querySelectorAll('.delete-btn');
    addBook();
}