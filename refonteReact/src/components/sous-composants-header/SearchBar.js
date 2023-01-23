export default function SearchBar(){
    return (
        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="navbarSearchButton"/>
        <input className="btn btn-outline-success my-2 my-sm-0" type="submit" value="Search"/>
      </form>)
}