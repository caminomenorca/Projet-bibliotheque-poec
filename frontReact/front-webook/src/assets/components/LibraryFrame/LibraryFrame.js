import "../LibraryFrame/LibraryFrame.css";
import React, { useState, useEffect } from "react";

export default function LibraryFrame() {
   const [books, setBooks] = useState([]);
   useEffect(() => {
      const options = { method: "GET" };
      fetch("http://localhost:2020/WeBook/mainLibrary/allBooks", options)
         .then((response) => response.json())
         .then((response) => setBooks(response.data))
         .catch((err) => console.error(err));
   }, []);
   return (
     
         <div id="library-frame">
            <article className="book add-book" id="add-book">
               <h2 className="book-title">Add book</h2>
            </article>
            {books.map((book) => (
               <article key={book.titre} className="book">
                  <p className="book-title">{book.titre}</p>
                  <h6 className="book-author">{book.auteur}</h6>
               </article>
            ))}
         </div>
   );
}
