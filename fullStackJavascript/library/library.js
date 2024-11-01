const box = document.querySelector('.box')

class Book {
    constructor(author, title, pages, read){
        this.author = author
        this.title = title
        this.pages = pages
        this.read = read
    }
            
}

class Library{
    constructor() {
        this.myLibrary = []
    }

    addBook(book) {
        this.myLibrary.push(book)
    }

}

const createBookCard = function(book) {
    const bookCard = document.createElement('div')
    bookCard.classList.add('bookCard')
    const authorDiv = document.createElement('div')
    authorDiv.textContent = book.author
    authorDiv.classList.add('authorDiv')

    const titleDiv = document.createElement('div')
    titleDiv.textContent = book.title
    titleDiv.classList.add('titleDiv')

    const pagesDiv = document.createElement('div')
    pagesDiv.textContent = book.pages
    pagesDiv.classList.add('pagesDiv')

    const readDiv = document.createElement('div')
    //readDiv.textContent = book.read
    readDiv.classList.add('readDiv')
    const readDiv1 = document.createElement('button')



    const readDiv2 = document.createElement('button')

    if (book.read == false) {
        readDiv2.textContent = "Not read"
    } else {
        readDiv1.textContent = "Read" 
    }

    readDiv.classList.add('readDiv')

    const removeButton = document.createElement('button')
    removeButton.classList.add('removeButton')
    removeButton.textContent = 'remove'
/*
    const editButton = document.createElement('button')
    editButton.classList.add('editButton')
    editButton.textContent = 'edit'
*/

    box.appendChild(bookCard)
    bookCard.append(authorDiv, titleDiv, pagesDiv, readDiv, removeButton)
    readDiv.append(readDiv1, readDiv2)

    removeButton.addEventListener('click', function() {
        box.removeChild(bookCard)
    })

    /*
    let editable = false;

    editButton.addEventListener('click', function() {

        editable = !editable;

        titleDiv.contentEditable = editable
        authorDiv.contentEditable = editable
        pagesDiv.contentEditable = editable
        readDiv.contentEditable = editable

    }) */
}


const bookForm = document.getElementById('book-input')

bookForm.addEventListener('submit', function(event)
{ event.preventDefault();
    const author = document.getElementById('authorInput').value
    const title = document.getElementById('titleInput').value
    const pages = document.getElementById('pagesInput').value
    const read = document.getElementById('readInput').checked


    let newBook = new Book(author, title, pages, read)

    console.log(newBook.author)
    createBookCard(newBook)
})

const addForm = document.getElementById('addForm')

addForm.addEventListener('click', function() {

    box.style.display = 'block';
})

const exitForm = document.getElementById('exitForm')

exitForm.addEventListener('click', function() {
    box.style.display = 'none';
})