
const biblio=document.getElementById("bookshelf");
const  switchBtn=document.getElementById("");
const livreForm=document.getElementById("livreForm");
const formToAppear=document.getElementById("myForm");
console.log("bonjour")


const livre={
    titre:"voyage au centre de la terre",
    auteur:"Jule Verne",
    année:1700,
    theme: ["aventure","fantastique","dinosaure"],
    langue: "français"

}

 biblio.innerHTML+=`<div class="livreRayon"><h3 class="titreLivre">${livre.titre}</h3><p class="auteurLivre">${livre.auteur}</p></div>`;
 
 document.getElementById("livreForm").addEventListener("click", function() {
    console.log("I was called");
    formToAppear.style.display = "block";
  });