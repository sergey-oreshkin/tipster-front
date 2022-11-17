import React from "react";
import { useDispatch } from "react-redux";

import { setShowModal } from "../../store/AppSlice";

import Button from "../UI/Button/Button";

import cl from './Nav.module.css';

const Nav = () => {
    const dispatcher = useDispatch();

    const clickHandler = (name) => {
        dispatcher(setShowModal(name));
    }

    return (
        <div className={cl.nav}>
            <Button clickHandler={clickHandler} name='edit'>Редактировать</Button>
            <Button clickHandler={clickHandler} name='newTip'>Новая подсказка</Button>
            <Button clickHandler={clickHandler} name='newTheme'>Новый раздел</Button>
        </div>
    )
}

export default Nav;