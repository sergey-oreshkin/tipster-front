import React from "react";

import Button from "../UI/Button/Button";

import cl from './Nav.module.css';

const Nav = () => {
    return (
        <div className={cl.nav}>
            <Button>Редактировать</Button>
            <Button>Новая подсказка</Button>
            <Button>Новый раздел</Button>
        </div>
    )
}

export default Nav;