import '../../styles/css/App.css';
import { Link } from "react-router-dom";


function NavBar() {

  return (<nav className="main__menu">
             <ul className="main__list">
                <li className="main__menu-item">
                  <a href="/" className="main__menu-link">Персонажи</a>
                </li>
                <li className="main__menu-item">
                   <Link className="main__menu-link" to='/Episodes'>Эпизоды</Link>
                </li>
             </ul>
          </nav>)}

export default NavBar;