
const biblio=document.getElementById("bookshelf");
biblio.innerHTML=`<p> change you fuck !!!!</p>`



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
