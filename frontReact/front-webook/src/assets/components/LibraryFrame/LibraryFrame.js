import "../LibraryFrame/LibraryFrame.css";
import React, { useState, useEffect } from "react";

export default function LibraryFrame() {
   const [books, setBooks] = useState([]);
   useEffect(
      () => {
         const options = { method: "GET" };
         fetch("http://localhost:2020/WeBook/mainLibrary/allBooks", options)
            .then((response) => response.json())
            .then((response) => setBooks(response.data))
            .catch((err) => console.error(err));
      },
      []
   );
   return (
      <div id="library-frame">
         <article className="book-card add-book" id="add-book">
            <h2 className="book-title">Add book</h2>
         </article>
         {books.map((book) => (
            <article key={book.titre} className="book-card">
               <h2 className="book-title">{book.titre}</h2>
               <h3 className="book-author">{book.auteur}</h3>
            </article>
         ))}
         <button id="load-more-button">Load more ?</button>
      </div>
   );
}
