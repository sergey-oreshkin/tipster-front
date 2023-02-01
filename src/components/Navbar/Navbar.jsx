import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { setUsername } from "../../store/ProfileSlice";

const Navbar = ({isEntrance}) => {

  const state = useSelector(state=>state);

  const location = useLocation();

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
          {location.pathname === '/notes' ? (
            <>
             <li className="navigation__button-item navigation__item"><button to='/notes' className="navigation__button-link link notes-button">Создать тему</button></li>
             <li className="navigation__button-item navigation__item"><button to='/notes' className="navigation__button-link link notes-button">Добавить заметку</button></li>
             <li className="navigation__button-item navigation__item navigation__item-profile"><Link to='/profile' className="navigation__link navigation__link_profile link">Аккаунт</Link></li>
            </>
          ) : (
          <>
            <li className="navigation__button-item navigation__item"><Link to='/notes' className="navigation__button-link link">Конспекты</Link></li>
            <li className="navigation__button-item navigation__item navigation__item-profile"><Link to='/profile' className="navigation__link navigation__link_profile link">{state.username}</Link></li>
          </>)}
          </ul>
          </nav>
        </>
      )}
    </>
  );
}

export default Navbar;
