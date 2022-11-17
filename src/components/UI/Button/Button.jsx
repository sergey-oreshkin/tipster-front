import React from 'react';

import cl from './Button.module.css';

const Button = ({children, clickHandler, name}) => {
  return (
    <div className={`${cl.button} pressable`} onClick={()=>clickHandler(name)}>{children}</div>
  )
}

export default Button;