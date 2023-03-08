import "../Footer/Footer.css";
import React, { useState, useEffect } from "react";
const chevron = require("../../img/chevron.png");

export default function Footer() {
   const [isFolded, setFolded] = useState("true");
   const [isUp, setUp] = useState("true");
   const ToggleFolded = () => {
      setFolded(!isFolded);
      setUp(!isUp);
   };
   return (
      <div
         className={
            isFolded ? "footer-container folded" : "footer-container unfolded"
         }
      >
         <img
            src={chevron}
            className={isUp ? "footer-stem" : "footer-stem down"}
            onClick={ToggleFolded}
         />
         <ul><li>item1</li><li>item2</li><li>item3</li></ul>
         <ul><li>item1</li><li>item2</li><li>item3</li></ul>
         <ul><li>item1</li><li>item2</li><li>item3</li></ul>
      </div>
   );
}
