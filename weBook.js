import { bookData } from '/bookData.js'

const input = document.querySelector('input[type="file"]');
const actualForm = document.getElementById("myForm");
const bookContainer =document.getElementById("bookContainer")

/* check if upload is an image */
/* input.addEventListener('change', function () {
  const file = input.files[0];
  const fileReader = new FileReader();
  fileReader.onload = function () {
    try {
      
      const img = document.createElement('img');
      img.src = fileReader.result;
      img.className = "imagePetite"
      fileLabel.appendChild(img);
    } catch (e) {
      console.error(e);
    }
  };
  fileReader.readAsDataURL(file);
}); */

/* Genere les livre dynamiquement */
function displayBooks(arr) {
	console.log("displayBooks was called");

	arr.forEach(function (obj) {
		const livreRayon = document.createElement("div");
		livreRayon.className = "card hasOwnModal";
		livreRayon.id = obj.titre;

		const titreLivre = document.createElement("h3");
		titreLivre.className = "titreLivre";
		titreLivre.textContent = obj.titre;

		const auteurLivre = document.createElement("p");
		auteurLivre.className = "auteurLivre";
		auteurLivre.textContent = obj.auteur;

		livreRayon.appendChild(titreLivre);
		livreRayon.appendChild(document.createElement("br"));
		livreRayon.appendChild(auteurLivre);
		bookContainer.appendChild(livreRayon);
	});
} 
displayBooks(bookData);
/* const hasOwnModal=document.getElementsByClassName("hasOwnModal");
hasOwnModal.forEach(Elem=>document.getElementById(Elem.)) */

;
