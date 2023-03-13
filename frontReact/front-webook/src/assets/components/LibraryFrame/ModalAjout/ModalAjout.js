import "../ModalAjout/ModalAjout.css"
import closebtn from "../../../img/closeButton.png"
export default function ModalAjout(props) {
   /* penser à uninstall reactScripts */
   function postBook(event){
      event.preventDefault(); // prevent the default form submission behavior
      const form = document.querySelector('#modal-ajout');
      const formData = new FormData(form);
   
      const options = {
         method: 'POST',
         body: formData
      };
      console.log(formData.auteur)
      fetch('/WeBook/mainLibrary/createBook', options)
         .then(response => response.json())
         .then(response => console.log(response))
         .catch(err => console.error(err));
   }
   return (
      

      <form id="modal-ajout" style={props.isVisible ? { visibility: "visible" } : { visibility: "collapse" }}>
         <img id="modal-close-btn" src={closebtn} onClick={props.toggleVisibility} />

         {/* {coverImgFile ? (
               <img src={coverImgFile} className="thumbnail" />
            ) : (
               <div className="thumbnail"></div>
            )} */}

         <label className="input-label" for="coverImg">
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

            <div className="label-input-group"><label className="input-label" for="titre">
               Titre
            </label>
               <input
                  type="text"
                  maxLength="100"
                  name="titre"
                  // pattern= <- rajouter pattern !!!
                  className="form-input"
               ></input> </div>
            <div className="label-input-group"><label className="input-label" for="auteur">
               Auteur
            </label>
               <input
                  type="text"
                  maxLength="50"
                  name="auteur"
                  // pattern= <- rajouter pattern !!!
                  className="form-input"
               ></input> </div>
            <div className="label-input-group"><label className="input-label" for="langue">
               Langue
            </label>
               <input
                  type="text"
                  maxLength="50"
                  name="langue"
                  // pattern= <- rajouter pattern !!!
                  className="form-input"
               ></input> </div>
         </div >
         <div className="label-input-group">

            <label className="input-label" for="tag-forest">Tags</label>
            <input type="text" name="tag-forest" className="tag-forest form-input"></input>


         </div>
         <div className="label-input-group">

            <label className="input-label" for="abstract">Résumé</label>
            <input type="text" name="abstract" className="abstract form-input"></input>


         </div>
         <div className="label-input-group">

            <label for="fichier" className="input-label ">
               Ajoutez un fichier (si vous en avez les droits... 🤡)
            </label>
            <input 
               type="file"
               name="fichier"
               accept=".txt,.rtf,.doc,.docx,.odt,.pdf"
               className="form-input add-file-input"
            ></input>
         </div>
         <input type="submit" onClick={postBook}></input>

      </form>
   );
}
