import React from "react";

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__section">
          <p className="footer__title">Проект выпускников Яндекс.Практикума.</p>
          <div className="footer__line"></div>
          <div className="footer__box">
            <p className="footer__year">© 2023</p>
            <ul className="footer__link-list">
              <li><a className="footer__link link" target="_blank" rel="noreferrer" href="https://github.com">Github</a></li>
            </ul>
          </div>
          </div>
      </footer>
    )
}

export default Footer;
