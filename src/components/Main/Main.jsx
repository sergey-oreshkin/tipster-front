import React from 'react';

import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Footer from '../Footer/Footer';
import AboutProject from '../AboutProject/AboutProject';
import Feedback from '../Feedback/Feedback';


const Main = ({ isEntrance }) => {

  return (
    <div className='main'>
      <Header isEntrance={isEntrance} />
      <main>
        <Promo />
        <AboutProject />
        <Feedback />
        {/*//как это работает
        <AboutUs /> //команда проекта */}
      </main>
      <Footer />
    </div>
  )
}

export default Main;
