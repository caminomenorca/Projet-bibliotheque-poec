import "../Header/Header.css";
const Logo = require("../../img/CleanLogoTexte2.png");
export default function Header(props) {
   const isLoggedIn = props.isLoggedIn;
   return (
      <nav id="webook-navbar">
         {/* bloccitation */}
         <figure id="bloc-citation">
            <blockquote>
               <p id="text-citation">
                  lLorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ullamcorper neque vel risus maximus, sit.{" "}
               </p>
            </blockquote>
            <figcaption id="reference-citation">
               —Some Greek, <cite>Some Book</cite>
            </figcaption>
         </figure>
         {/* Logo */}
         <img src={Logo} alt="logo" id="logo-webook"></img>
         {/* Interractive part */}
         <div id="interactive-part">
            <form className="search-form">
               <input type="text" placeholder="Search a book"  id="search-bar"></input>
               <input type="submit" className="btn" id="send-search" value="Chercher"></input>
            </form>
            {isLoggedIn ? (
               <dropDown></dropDown>
            ) : (
               <div id="log-options">
                  <button className="btn" id="log-in">Log In</button>
                  <button  className="btn"id="sign-in"> Sign In</button>
               </div>
            )}
         </div>
      </nav>
   );
}
