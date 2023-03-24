import "../ModalAjout/ModalAjout.css";
import closebtn from "../../../img/closeButton.png";
export default function ModalAjout(props) {
   /* penser à uninstall reactScripts */
   function postBook(event) {
      event.preventDefault(); // prevent the default form submission behavior
      const form = document.querySelector("#modal-ajout");
      const formData = new FormData(form);
      const titreLivre = formData.get("titre");
      const auteurLivre = formData.get("auteur");
      const langueLivre = formData.get("langue");
      const couvertureLivre = formData.get("couverture");
      const tagsLivre = formData.get("tags");
      console.log(formData);
      const options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            // convert the form data to a JSON object
            titre: titreLivre,
            auteur: auteurLivre,
            langue: langueLivre,
            couverture: couvertureLivre,
            tags: tagsLivre,
         }),
      };

      fetch("http://localhost:2020/WeBook/mainLibrary/createBook", options)
         .then((response) => response.json())
         .then((response) => {
            console.log(response);
            window.alert(response.message);
            {props.getAllBooks(props.setBooks)}
         })
         .catch((err) => console.error(err));
         
   }
   return (
      <form
         id="modal-ajout"
         style={
            props.isVisible
               ? { visibility: "visible" }
               : { visibility: "collapse" }
         }
      >
         <img
            id="modal-close-btn"
            src={closebtn}
            onClick={props.toggleVisibility}
         />

         {/* {coverImgFile ? (
               <img src={coverImgFile} className="thumbnail" />
            ) : (
               <div className="thumbnail"></div>
            )} */}

         <label className="input-label" htmlFor="coverImg">
            Couverture
         </label>
         <input
            type="file"
            name="coverImg"
            /*  onChange={handleImgChange} */
            accept="image/*"
            pattern="^(.*\.(jpg|jpeg|png|gif|bmp|svg|tif|tiff))$"
         />

         <div className="short-field-group">
            <div className="label-input-group short-input-group">
               <label className="input-label " htmlFor="titre">
                  Titre
               </label>
               <input
                  type="text"
                  maxLength="100"
                  name="titre"
                  // pattern= <- rajouter pattern !!!
                  className="form-input short-input"
               ></input>{" "}
            </div>
            <div className="label-input-group short-input-group">
               <label className="input-label" htmlFor="auteur">
                  Auteur
               </label>
               <input
                  type="text"
                  maxLength="50"
                  name="auteur"
                  // pattern= <- rajouter pattern !!!
                  className="form-input short-input"
               ></input>{" "}
            </div>
            <div className="label-input-group short-input-group">
               <label className="input-label" htmlFor="langue">
                  Langue
               </label>
               <input
                  type="text"
                  maxLength="50"
                  name="langue"
                  // pattern= <- rajouter pattern !!!
                  className="form-input short-input"
               ></input>{" "}
            </div>
         </div>

         <div className="label-input-group">
            <label className="input-label" htmlFor="tag-forest">
               Tags
            </label>
            <input
               type="text"
               name="tag-forest"
               className="tag-forest form-input"
            ></input>
         </div>
         <div className="label-input-group">
            <label className="input-label" htmlFor="abstract">
               Résumé
            </label>
            <input
               type="text"
               name="abstract"
               className="abstract form-input"
            ></input>
         </div>
         <div className="label-input-group">
            <label htmlFor="fichier" className="input-label ">
               Ajoutez un fichier (si vous en avez les droits... 🤡)
            </label>
            <input
               type="file"
               name="fichier"
               accept=".txt,.rtf,.doc,.docx,.odt,.pdf"
               className="form-input add-file-input"
            ></input>
         </div>
         <input type="submit" onClick={postBook} value="Poster"></input>
      </form>
   );
}
