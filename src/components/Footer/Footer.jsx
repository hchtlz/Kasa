import './Footer.css'
import React from "react";
import logoFooter from '../../assets/images/logo-footer.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__logo">
          <img src={logoFooter} alt="logo" className="footer__container__logo__img" />
        </div>
        <div className="footer__container__text">
          <span>© 2020 Kasa. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
