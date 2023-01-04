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



