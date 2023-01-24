import React from "react";
//import cl from './Logo.module.css';
import { Link} from 'react-router-dom';

const Logo = () => {
    return (
        <div className='logo'>
          <Link to='/' className='logo__link'>
            <div className='logo__picture'/>
          </Link>
        </div>
    )
}

export default Logo;
