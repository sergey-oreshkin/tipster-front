import React from 'react';

import cl from './Title.module.css';

const Tip = ({ tip, clickHandle }) => {

  return (
    <div className={cl.title}>
      <p className='pressable' onClick={() => clickHandle(tip.id, 'tip')}>{tip.title}</p>
    </div>
  )
}

export default Tip;