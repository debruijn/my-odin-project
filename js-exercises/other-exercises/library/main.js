let myLibrary = [];

class Book {
    title;
    author;
    nrPages = 0;
    haveRead = false;

    constructor(title, author, nrPages, haveRead=false) {
        this.title = title;
        this.author = author;
        this.nrPages = nrPages;
        this.haveRead = haveRead;
    }

    get info() {
        return this.title + " by " + this.author + ", " + this.nrPages + " pages, " + (this.haveRead ? "already read" : "not read yet")
    }
}

function addBookToLibrary(title, author, nrPages, haveRead=false) {
    const book = new Book(title, author, nrPages, haveRead);
    myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295);
addBookToLibrary("The Nobbit", "J.R.R. Fauxkien", 42, true);
addBookToLibrary("More filler stuff", "Nobody", 1234);

let currBook = 0;

document.getElementsByClassName("summary").item(0).textContent = "This is my library containing " + myLibrary.length + " book(s).";

function dispCurrBook() {
    if (myLibrary.length >= 1) {
        document.getElementsByClassName("curr_book").item(0).textContent = "Current book (" + (currBook + 1) + "/" + myLibrary.length + "): " + myLibrary[currBook].info;
    } else {
        document.getElementsByClassName("curr_book").item(0).textContent = "No current book to display."
    }
}

dispCurrBook();

function toggleRead() {
    myLibrary[currBook].haveRead = !myLibrary[currBook].haveRead;
    dispCurrBook();
}

function rmBook() {
    let laterBooks = myLibrary.slice(currBook+1, myLibrary.length);
    myLibrary = myLibrary.slice(0, currBook)
    for (let book of laterBooks) {
        myLibrary.push(book);
    }
    dispCurrBook();
}

function nextBook() {
    currBook = currBook + 1 === myLibrary.length ? currBook : currBook + 1;
    dispCurrBook();
}

function prevBook() {
    currBook = currBook === 0 ? currBook : currBook - 1;
    dispCurrBook();
}

function randomBook() {
    currBook = Math.floor(Math.random() * myLibrary.length);
    dispCurrBook();
}

function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const nrPages = document.getElementById("nrPages").value;
    addBookToLibrary(title, author, nrPages);
    currBook = myLibrary.length - 1;
    dispCurrBook();
}

document.getElementsByClassName("random_book").item(0).addEventListener("click", randomBook, false)
document.getElementsByClassName("toggle_book").item(0).addEventListener("click", toggleRead, false)
document.getElementsByClassName("rm_book").item(0).addEventListener("click", rmBook, false)
document.getElementsByClassName("next_book").item(0).addEventListener("click", nextBook, false)
document.getElementsByClassName("prev_book").item(0).addEventListener("click", prevBook, false)
document.getElementsByClassName("add_book").item(0).addEventListener("click", addBook, false)
