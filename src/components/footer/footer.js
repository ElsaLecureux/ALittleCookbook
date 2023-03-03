import './footer.scss';
import {Link} from 'react-router-dom';

function footer() {
  return (
    <div className="footer_container">
        <h1>A Little CookBook - 2023</h1>
        <ul className="navbar_footer">
            <li>
                <Link>Mentions Légales</Link>
            </li>
            <li>
                <Link>Autre</Link>
            </li>
        </ul>     
    </div>
  );
}

export default footer;