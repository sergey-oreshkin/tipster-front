import React from 'react';
import { useSelector } from 'react-redux';

import cl from './Tip.module.css';

const Tip = ({ tip, clickHandle }) => {

  const { activeTip } = useSelector(state => state.note);

  const classes = ['pressable']
  if (tip.id === activeTip) classes.push('active');

  return (
    <div className={cl.title}>
      <p className={classes.join(' ')} onClick={() => clickHandle(tip.id, 'tip')}>{tip.title}</p>
    </div>
  )
}

export default Tip;