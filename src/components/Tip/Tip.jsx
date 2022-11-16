import React from 'react';

import cl from './Title.module.css';

const Tip = ({tip, clickHandle}) => {
    
  return (
    <div className={cl.title}>
        <p onClick={()=>clickHandle(tip.id, 'tip')}>{tip.title}</p>
    </div>
  )
}

export default Tip;