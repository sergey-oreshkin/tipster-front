import React from 'react';

//import cl from './Button.module.css';

const Button = ({children, clickHandler, name}) => {
  return (
    <div className='button' onClick={()=>clickHandler(name)}>{children}</div>
  )
}

export default Button;
