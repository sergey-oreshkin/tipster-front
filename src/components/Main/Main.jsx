import React from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';

import cl from './Main.module.css';

const Main = () => {
  return (
    <div className={cl.main}>
        <Sidebar />
        <Content />
    </div>
  )
}

export default Main;