
const biblio=document.getElementById("bookshelf");
const  switchBtn=document.getElementById("")



const livre={
    titre:"voyage au centre de la terre",
    auteur:"Jule Verne",
    année:1700,
    theme: ["aventure","fantastique","dinosaure"],
    langue: "français"

}
function setBook(obj){
    let concatlivre=""
    obj.keys.map(propertie,value=>concatlivre+= propertie+":"+value)
    return concatlivre
}

const juleVerne=setBook(livre)
 biblio.innerHTML=`<p> ${juleVerne}}</p>`;