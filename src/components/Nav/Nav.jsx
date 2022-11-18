import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setShowModal } from "../../store/AppSlice";

import Button from "../UI/Button/Button";

import cl from './Nav.module.css';

const Nav = () => {
    const { activeTheme, activeTip } = useSelector(state => state);
    const dispatcher = useDispatch();

    const clickHandler = (name) => {
        if (name === 'editTip') {
            if (!activeTheme && !activeTip) {
                return;
            }
        }
        dispatcher(setShowModal(name));
    }

    return (
        <div className={cl.nav}>
            <Button clickHandler={clickHandler} name='editTip'>Редактировать</Button>
            <Button clickHandler={clickHandler} name='newTip'>Новая подсказка</Button>
            <Button clickHandler={clickHandler} name='newTheme'>Новый раздел</Button>
        </div>
    )
}

export default Nav;