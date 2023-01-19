import React from "react";

const HeadlineNavbar = () => {
  return (
    <nav className='headline-navbar'>
      <ul className='headline-navbar__list'>
        <li className='headline-navbar__item link'>
          <h3 className='headline-navbar__title'>DOM</h3>
        </li>
        <li className='headline-navbar__item link'>
          <h3 className='headline-navbar__title'>Render Tree</h3>
        </li>
        <li className='headline-navbar__item link'>
          <h3 className='headline-navbar__title'>CSSOM</h3>
        </li>
      </ul>
    </nav>

  )
}

export default HeadlineNavbar;
