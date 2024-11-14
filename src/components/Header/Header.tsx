import '../../styles/css/App.css'
import logo from '../../images/header/name.png'

function Header() {

  return (
    <header className="header">
           <div className="header__inner">
            <a href="" className="header__logo logo">
                <img src={logo} alt="Rick&Morty" className="logo__image" />
            </a>
            <nav className="header__menu">
              <ul className="header__list">
                <li className="header__menu-item">
                  <a href="/" className="header__menu-link">Персонажи</a>
                </li>
                <li className="header__menu-item">
                  <a href="/" className="header__menu-link">Эпизоды</a>
                </li>
              </ul>
            </nav>
           </div>
        </header>
  )
}

export default Header;