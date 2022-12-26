import React from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import Modal from '../UI/Modal/Modal';
import ThemeForm from '../Forms/ThemeForm';
import Notification from '../Notification/Notification';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Footer from '../Footer/Footer';
import AboutProject from '../AboutProject/AboutProject'

//import cl from './Main.module.css';
import TipForm from '../Forms/TipForm';

const Main = ({isEntrance}) => {

  return (
    <div className='main'>
      <Header isEntrance={isEntrance}/>
      <main>
        <Promo />
        <AboutProject />
        {/*//как это работает
        <AboutUs /> //команда проекта */}
      </main>
      <Footer />
      {/*<Notification />
      <Header />
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
      </Modal>*/}
    </div>
  )
}

export default Main;
