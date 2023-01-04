
const biblio=document.getElementById("bookshelf");
const actualForm=document.getElementById("myForm");
const input = document.querySelector('input[type="file"]');
const fileLabel=document.getElementById("fileLabel")
const bookData=[]

input.addEventListener('change', function() {
  const file = input.files[0];
  const fileReader = new FileReader();

  fileReader.onload = function() {
    try {
      // create an image element with the data URI
      const img = document.createElement('img');
      img.src = fileReader.result;
      img.className="imagePetite"
      fileLabel.appendChild(img);
    } catch (e) {
      // not an image
      console.error(e);
    }
  };

  fileReader.readAsDataURL(file);
});




 function displayBooks(arr){
  console.log("displayBooks was called")
  arr.forEach(function(obj){
    biblio.innerHTML+=`
    <div class="livreRayon">
    <h3 class="titreLivre">${obj.titre}</h3>
    <p class="auteurLivre">${obj.auteur} </p>
    </div>`;

  })
 
 }
 
 
 const livreForm=document.getElementById("livreForm");
 
 livreForm.addEventListener("click", function() {
    console.log("Form was opened");
    actualForm.style.display = "block";
  });

 actualForm.addEventListener('submit', function(event) {
  let auteur = document.getElementById('auteur').value
  let titre = document.getElementById('titre').value
  let theme = document.getElementById('theme').value
  let writingDate = document.getElementById('writingDate').value
console.log("we were written")
  let formData = {
    auteur: auteur,
    titre: titre,
    theme: theme,
    writingDate: writingDate
  }
  console.log("object was set")
  bookData.push(formData)
  console.log("object was pushed")
  
  displayBooks(bookData)

  });

  