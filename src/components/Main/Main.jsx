import React from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import Modal from '../UI/Modal/Modal';
import ThemeForm from '../Forms/ThemeForm';

import cl from './Main.module.css';
import TipForm from '../Forms/TipForm';

const Main = () => {
  return (
    <div className={cl.main}>
      <Sidebar />
      <Content />
      <Modal name='newTheme'>
        <ThemeForm />
      </Modal>
      <Modal name='newTip'>
        <TipForm type='new' />
      </Modal>
      <Modal name='editTip'>
        <TipForm type='edit' />
      </Modal>
    </div>
  )
}

export default Main;