import { bookData } from '/bookData.js'

const biblio = document.getElementById("bookshelf");
const input = document.querySelector('input[type="file"]');
const fileLabel = document.getElementById("fileLabel");
const livreForm = document.getElementById("livreForm");
const switchBtn=document.getElementById("switchBtn")

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

function displayBooks(arr) {
  console.log("displayBooks was called")
  arr.forEach(function (obj) {
    biblio.innerHTML += `
    <div class="livreRayon">
    <h3 class="titreLivre">${obj.titre}</h3>
    <p class="auteurLivre">${obj.auteur} </p>
    </div>`;})
} 
displayBooks(bookData)

switchBtn.addEventListener("click",displayBooks(bookData))

const actualForm = document.getElementById("myForm");
livreForm.addEventListener("click", function () {
  console.log("Form was opened");
  actualForm.style.display = "block";
});




