import promoPicture from '../../images/promo.jpg';
import { Link} from 'react-router-dom';
import { useRef, useEffect } from "react";
import Typed from "typed.js";

const Promo = () => {

  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);


  useEffect(() => {
    const options = {
      strings: [
        "Готовиться к собеседованиям.",
        "Вести идеальные конспекты.",
        "Систематизировать знания.",
      ],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 900,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    };


   // elRef refers to the <span> rendered below
   typed.current = new Typed(el.current, options);

   return () => {
     // Make sure to destroy Typed instance during cleanup
     // to prevent memory leaks
     typed.current.destroy();
   };
 }, []);

    return (
      <section className='promo'>
        <div className='promo__section'>
          <div className='promo__container'>
            <h1 className='promo__title'>Типстер помогает</h1>
            <div className="promo__subtitle-container">
              <span className="promo__subtitle" ref={el} />
            </div>
            <p className="promo__text">{`Систематизируйте знания в IT, храните все конспекты в одном месте и\u00A0получите работу мечты.`}</p>
            <div className="promo__button button"><Link to="/signin" className="promo__link button link">Попробовать</Link></div>
          </div>
          <img className='promo__picture' alt="иллюстрация c лупой и открытыми вкладками на компьютере." src={promoPicture}/>
        </div>
      </section>
    )
}

export default Promo;
