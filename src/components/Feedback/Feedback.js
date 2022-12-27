import React from "react";
import feedbackPic from '../../images/20943543.jpg'

const Feedback = () => {

    return (
    <section className='feedback'>
      <div className='feedback__section'>
        <div className='feedback__box'>
          <h2 className='feedback__title'>Хотите связаться с нами?</h2>
          <p className='feedback__subtitle'>Чтобы сообщить об ошибке или предложить новую функциональность, заполните форму обратной связи.</p>
          <button className='feedback__button navigation__button-link navigation__button-link_color link button'>Написать</button>
        </div>
        <img className='feedback__picture' alt='изображение с громкоговорителем и сообщением об ошибке' src={feedbackPic}></img>
      </div>
    </section>
    )
}

export default Feedback;
