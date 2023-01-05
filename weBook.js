import { bookData } from '/bookData.js'

const bookshelf = document.getElementById("bookshelf");
const input = document.querySelector('input[type="file"]');
const fileLabel = document.getElementById("fileLabel");
const livreForm = document.getElementById("livreForm");
const actualForm = document.getElementById("myForm");


input.addEventListener('change', function () {
  const file = input.files[0];
  const fileReader = new FileReader();
  fileReader.onload = function () {
    try {
      // create an image element with the data URI
      const img = document.createElement('img');
      img.src = fileReader.result;
      img.className = "imagePetite"
      fileLabel.appendChild(img);
    } catch (e) {
      // not an image
      console.error(e);
    }
  };
  fileReader.readAsDataURL(file);
});
console.log(bookData)

livreForm.addEventListener("click", function () {
  console.log("Form was opened");
  actualForm.style.display = "block";
}) 
function displayBooks(arr) {
  console.log("displayBooks was called")
  
  arr.forEach(function (obj) {
    const livreRayon = document.createElement('div');
    livreRayon.className = 'livreRayon';
    
    const titreLivre = document.createElement('h3');
    titreLivre.className = 'titreLivre';
    titreLivre.textContent = obj.titre;
    
    const auteurLivre = document.createElement('p');
    auteurLivre.className = 'auteurLivre';
    auteurLivre.textContent = obj.auteur;
    
    livreRayon.appendChild(titreLivre);
    livreRayon.appendChild(document.createElement('br'));
    livreRayon.appendChild(auteurLivre);
    bookshelf.appendChild(livreRayon)
  }
    )
    
   

} 

displayBooks(bookData);

;

function createBookElement() {
  const book = document.createElement('div');
  book.classList.add('livreRayon');
  book.textContent = 'Book';  // You can set the content of the book element here
  return book;
}
function isBookshelfFull() {
  // Get the width of the bookshelf and the width of a book element
  const bookshelfWidth = bookshelf.offsetWidth;
  const bookWidth = document.querySelector('.livreRayon').offsetWidth;

  // Calculate the maximum number of book elements that can fit in the bookshelf
  const maxNumBooks = Math.floor(bookshelfWidth / bookWidth);

  // Get the current number of book elements in the bookshelf
  const numBooks = bookshelf.querySelectorAll('.livreRayon').length;

  // Return true if the number of book elements is equal to or greater than the maximum
  return numBooks >= maxNumBooks;
}
function fillBookshelf() {
  // Keep creating and appending new book elements until the bookshelf is full
  while (!isBookshelfFull()) {
    bookshelf.appendChild(createBookElement());
  }
}
fillBookshelf()