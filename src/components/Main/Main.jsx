import React from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import Modal from '../UI/Modal/Modal';
import NewThemeForm from '../Forms/NewThemeForm';

import cl from './Main.module.css';

const Main = () => {
  return (
    <div className={cl.main}>
      <Sidebar />
      <Content />
      <Modal name='newTheme'>
        <NewThemeForm />
      </Modal>
    </div>
  )
}

export default Main;