import React from "react";
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { setShowModal } from "../../store/AppSlice";

import Button from "../UI/Button/Button";

//import cl from './Nav.module.css';

const Navbar = ({isEntrance}) => {
    const { activeTheme, activeTip } = useSelector(state => state);
    const dispatcher = useDispatch();

    const clickHandler = (name) => {
        if (name === 'editTip') {
            if (!activeTheme || !activeTip) {
                return;
            }
        }
        dispatcher(setShowModal(name));
    }

    return (
      <>
      {!isEntrance ? (
        <nav className="navigation__button-container">
          <ul className="navigation__button-list">
            <li className="navigation__button-item"><Link to='/signup' className="navigation__button-link link">Регистрация</Link></li>
            <li className="navigation__button-item"><Link to='/signin' className="navigation__button-link navigation__button-link_black link button">Войти</Link></li>
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

    // eslint-disable-next-line no-lone-blocks
    {/*(
        <div className='navbar'>
            <Button clickHandler={clickHandler} name='editTip'>Редактировать</Button>
            <Button clickHandler={clickHandler} name='newTip'>Новая подсказка</Button>
            <Button clickHandler={clickHandler} name='newTheme'>Новый раздел</Button>
        </div>
    )
}*/}

export default Navbar;
