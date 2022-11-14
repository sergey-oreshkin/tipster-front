import React from 'react';

import cl from './Button.module.css';

const Button = ({children}) => {
  return (
    <div className={cl.button}>{children}</div>
  )
}

export default Button;