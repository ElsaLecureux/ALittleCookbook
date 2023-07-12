import './header.scss';
import {Link} from 'react-router-dom';
import book from './book.jpg';

function header() {
  return (
    <div className="header_container">
    <div className="header-title_container">
        <img className="logo-image" src={book} alt="" />
        <Link className="header-title" to="/"><h1>A Little CookBook</h1></Link>
    </div>
        <ul className="navbar_header">
            <li>
                <Link className="link_header" to="/categories">Categories</Link>
            </li>
            <li>
                <Link className="link_header" to="/signIn">Sign In</Link>
            </li>
            <li>
                <Link className="link_header" to="/signUp">Sign Up</Link>
            </li>
            <li>
                <Link className="link_header" to="/contact">Contact Us</Link>
            </li>
        </ul>     
    </div>
  );
}

export default header;