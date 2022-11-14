import React from 'react';

import Chapter from '../Chapter/Chapter';

import cl from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={cl.sidebar}>
        <Chapter title='Chapter 1'/>
        <Chapter title='Chapter 2'/>
        <Chapter title='Chapter 3'/>
    </div>
  )
}

export default Sidebar;