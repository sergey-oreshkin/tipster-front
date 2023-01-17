import React from "react";
import { Link} from 'react-router-dom';

const Navbar = ({isEntrance}) => {

    return (
      <>
      {!isEntrance ? (
        <nav className="navigation__button-container">
          <ul className="navigation__button-list">
            <li className="navigation__button-item"><a href="#about-project" className="navigation__button-link link">О сервисе</a></li>
            <li className="navigation__button-item"><Link to='/signin' className="navigation__button-link navigation__button-link_color link button">Войти</Link></li>
          </ul>
        </nav>
      ) : (
        <>
          <nav className="navigation__button-container">
          <ul className="navigation__button-list">
            <li className="navigation__button-item navigation__item"><Link to='/notes' className="navigation__button-link link">Конспекты</Link></li>
            <li className="navigation__button-item navigation__item navigation__item-profile"><Link to='/profile' className="navigation__link navigation__link_profile link">Аккаунт</Link></li>
          </ul>
          </nav>
        </>
      )}
    </>
  );
}

export default Navbar;
