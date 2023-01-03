
const biblio=document.getElementById("bookshelf");
const  switchBtn=document.getElementById("")



const livre={
    titre:"voyage au centre de la terre",
    auteur:"Jule Verne",
    année:1700,
    theme: ["aventure","fantastique","dinosaure"],
    langue: "français"

}

 biblio.innerHTML=`<div class="livreRayon">${livre.titre}</div>`;