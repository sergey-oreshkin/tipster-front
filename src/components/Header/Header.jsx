import React from "react";

import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

import cl from './Header.module.css';

const Header = () => {
    return (
        <header className={cl.header}>
            <Logo />
            <Nav />
        </header>
    )
}

export default Header;