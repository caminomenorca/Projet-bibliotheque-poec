import Header from "./assets/components/Header/Header.js";
import LibraryFrame from "./assets/components/LibraryFrame/LibraryFrame.js";
import Footer from "./assets/components/Footer/Footer.js";
function App() {
   return (
      <div>
         <Header />
         <LibraryFrame />
         <button id="load-more-button">Load more ?</button>
         <Footer />
      </div>
   );
}

export default App;
