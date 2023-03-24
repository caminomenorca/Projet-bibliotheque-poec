import React, { useState } from "react";
import "../ConnexionForm/ConnexionForm.css";
import closebtn from "../../../img/closeButton.png";

export default function ConnexionForm(props) {
   const logUserIn = (event) => {
      event.preventDefault();
      const form = document.querySelector("#login-form");
      const formData = new FormData(form);

      const options = {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(Object.fromEntries(formData)),
      };

      fetch("http://localhost:2020/WeBook/Users/login", options)
         .then((response) => response.json())
         .then((response) => {
            console.log(response);
            props.toggleVisibility();
            window.alert(response.message);
            localStorage.setItem('token',JSON.stringify(response.token))
         })

         .catch((err) => console.error(err));
   };
  

   return (
      <form
         id="login-form"
         onSubmit={logUserIn}
         style={
            props.isVisible
               ? { visibility: "visible" }
               : { visibility: "collapse" }
         }
      >
         <label htmlFor="userName">userName:</label>
         <input type="text" id="userName" name="userName" />

         <label htmlFor="password">Password:</label>
         <input type="password" id="password" name="password" />

         <button type="submit">Login</button>
      </form>
   );
}
