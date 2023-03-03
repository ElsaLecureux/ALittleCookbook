import './header.scss';
import {Link} from 'react-router-dom';

function header() {
  return (
    <div className="header_container">
        <Link to="/"><h1>A Little CookBook</h1></Link>
        <ul className="navbar_header">
            <li>
                <Link to="/connection">Se connecter</Link>
            </li>
            <li>
                <Link to="/inscription">S'inscrire</Link>
            </li>
        </ul>     
    </div>
  );
}

export default header;