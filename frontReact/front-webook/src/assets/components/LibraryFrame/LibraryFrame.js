import "../LibraryFrame/LibraryFrame.css";
import ModalAjout from "./ModalAjout/ModalAjout";
import React, { useState, useEffect } from "react";

function getRandomColor() {
   let letters = "0123456789ABCDEF";
   let color = "#";
   for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

export default function LibraryFrame(props) {
   const [books, setBooks] = useState([]);
   useEffect(() => {
      const options = { method: "GET" };
      fetch("http://localhost:2020/WeBook/mainLibrary/allBooks", options)
         .then((response) => response.json())
         .then((response) => setBooks(response.data))
         .catch((err) => console.error(err));
   }, []);
   const [isVisible,setIsVisible]=useState(false);
   function toggleVisibility(){
      setIsVisible(!isVisible)
   }
   return (<>
      <div id="library-frame">
         <article className="book add-book" id="add-book">
            <p className="book-title" onClick={toggleVisibility}>Add book</p>
         </article>
         {books.map((book) => (
            <article
               key={book.titre}
               className="book"
               style={{ backgroundColor: getRandomColor() }}
            >
               <p className="book-title">{book.titre}</p>
               <h6 className="book-author">{book.auteur}</h6>
            </article>
         ))}
         
      </div>
      <ModalAjout isVisible={isVisible} toggleVisibility={toggleVisibility}/>
   </>);
}
