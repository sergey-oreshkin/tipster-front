import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        {/* <p className="footer__title">Сделано выпускниками Яндекс.Практикума</p> */}
        <div className="footer__line"></div>
        <div className="footer__box">
          <p className="footer__year">© 2023</p>
          <ul className="footer__link-list">
            <li>Tipster Project</li>
          </ul>
        </div>
        {/*<p className="footer__title footer__title_names">Над проектом работали: Сергей Орешкин, Ирина Слипченко, Андрей Бояров, Дарья Миколайчук</p>*/}
      </div>
    </footer>
  )
}

export default Footer;
