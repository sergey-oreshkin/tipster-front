import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { logout } from "../../store/ProfileSlice";
import { setShowModal } from "../../store/NoteSlice";

const Navbar = ({ isEntrance }) => {

  const profile = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const location = useLocation();

  const clickHandler = (name) => {
    dispatch(setShowModal(name));
  }


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
                  <li className="navigation__button-item navigation__item"><button onClick={() => clickHandler('newTheme')} className="navigation__button-link link notes-button">Создать тему</button></li>
                  <li className="navigation__button-item navigation__item"><button onClick={() => clickHandler('newTip')} className="navigation__button-link link notes-button">Добавить заметку</button></li>
                </>
              ) : (
                <>
                  <li className="navigation__button-item navigation__item"><Link to='/notes' className="navigation__button-link link">Конспекты</Link></li>
                  <li className="navigation__button-item navigation__item navigation__item-profile"><Link to='/' className="navigation__link navigation__link_profile link">{profile.username}</Link></li>
                </>)}
              <li className="navigation__button-item" >
                <button onClick={() => dispatch(logout())} className="navigation__button-link navigation__button-link_color link button">Выйти</button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
}

export default Navbar;
