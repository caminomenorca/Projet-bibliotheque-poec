import React, { useState, useEffect } from "react";
export default function ModalAjout(props) {
 
   return (
      
      <form id="modal-ajout"  style={props.isVisible?"display:block":"display:none"}>
         <section>
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
         </section>
         <label className="input-label" for="titre">
            Titre
         </label>
         <input
            type="text"
            maxLength="100"
            name="titre"
            pattern="/^[\p{L}]+(?:\s[\p{L}]+)*$/gmu"
            className="form-input"
         ></input>
         <label className="input-label" for="auteur">
            Auteur
         </label>
         <input
            type="text"
            maxLength="50"
            name="auteur"
            pattern="/^[\p{L}]+(?:\s[\p{L}]+)*$/gmu"
            className="form-input"
         ></input>
         <label className="input-label" for="langue">
            Langue
         </label>
         <input
            type="text"
            maxLength="50"
            name="langue"
            pattern="/^[\p{L}]+(?:\s[\p{L}]+)*$/gmu"
            className="form-input"
         ></input>

         <label for="tag-forest">Tags</label>
         <input type="text" name="tag-forest" className="tag-forest"></input>

         <label for="abstract">Résumé</label>
         <input type="text" name="abstract" className="abstract"></input>

         <label for="fichier">
            Ajoutez un fichier (si vous en avez les droits... 🤡)
         </label>
         <input
            type="file"
            name="fichier"
            accept=".txt,.rtf,.doc,.docx,.odt,.pdf"
         ></input>
         <input type="submit"></input>
      </form>
   );
}
