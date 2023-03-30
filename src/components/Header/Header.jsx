import React from "react";

import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

const Header = ({ isEntrance }) => {
  return (
    <header className='header'>
      <div className='header__section'>
        <Logo />
        <Navbar isEntrance={isEntrance} />
      </div>
    </header>
  )
}

export default Header;
