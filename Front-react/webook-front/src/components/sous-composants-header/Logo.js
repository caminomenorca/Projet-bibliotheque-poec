import imgWebook from '../img/imgWebook.png';

export default function Logo(){
    return (<a className="navbar-brand" href="#">
        <img src={imgWebook} height="100%" className="d-inline-block align-top" alt=""/>
        <div>
          <h1>Webook</h1>
          <p className="blockquote-footer">Flip le monde the bird </p>
        </div>
      </a>)
}