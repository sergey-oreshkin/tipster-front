import React from 'react';


const Button = ({children, clickHandler, name}) => {
  return (
    <div className='button' onClick={()=>clickHandler(name)}>{children}</div>
  )
}

export default Button;
