import BlocCitation from "./sous-composants-header/BlocCitation";
import Logo from "./sous-composants-header/Logo";
import LogOption from "./sous-composants-header/LogOption";
import SearchBar from "./sous-composants-header/SearchBar";
export default function HeaderWeBook(){
    return (
<header className="container">
<nav className="navbar navbar-expand-lg   d-flex" id="nav">
    <BlocCitation />
    <Logo />
    <LogOption />
    <SearchBar />
    </nav>
</header>
    )
}