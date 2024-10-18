const bookInput = document.getElementById('book-input')
const div1 = document.querySelector('.div1')
function Book(author, title, pages, status) {
    this.author = author
    this.title = title
    this.pages = pages
    this.status = status
}

function addBookToLibrary(book) {

    const newDiv = document.createElement('div');

    const authorDiv = document.createElement('div');
    authorDiv.textContent = book.author


    const titleDiv = document.createElement('div');
    titleDiv.textContent = book.title

    const pagesInput = document.createElement('div');
    pagesInput.textContent = book.pages

    const readInput = document.createElement('div');
    readInput.textContent = book.status

    newDiv.appendChild(authorDiv)
    newDiv.appendChild(titleDiv)
    newDiv.appendChild(pagesInput)
    newDiv.appendChild(readInput)

    div1.appendChild(newDiv);


} 

bookInput.addEventListener('submit',function(event) {
    event.preventDefault();
    const authorInput = document.getElementById('authorInput').value
    const titleInput = document.getElementById('titleInput').value
    const pagesInput = document.getElementById('pagesInput').value
    const readInput = document.getElementById('readInput').value

    let newBook = new Book(authorInput, titleInput, pagesInput, readInput)

    addBookToLibrary(newBook)

    bookInput.reset();



})