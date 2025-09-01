import React from 'react';
import "./footer.css";

const Footer = () => {
    const ano = new Date().getFullYear();
  return (
    <footer className='footer'>
     <div className="footer__container container">
        <h1 className='footer__title'>Edson</h1>

        <ul className='footer__list'>
            <li>
                <a href="#sobre" className='footer__link'>Sobre</a>
            </li>
            <li>
                <a href="#habilidades" className='footer__link'>Habilidades</a>
            </li>
            <li>
                <a href="#servicos" className='footer__link'>Serviços</a>
            </li>
        </ul>

        <div className="footer__social">
        <a href='https://www.instagram.com/eddyb1260' className='footer__social-link' rel='noopener noreferrer' target='_blank'>
          <i className='uil uil-instagram'></i>
        </a>

<a href='https://linkedin.com/' className='footer__social-link' rel='noopener noreferrer' target='_blank'>
  <i className= "uil uil-linkedin"></i>
</a>

<a href='https://github.com/EddyB1260' className='footer__social-link' rel='noopener noreferrer' target='_blank'>
  <i className="uil uil-github-alt"></i>
</a>
     </div>
     <span className="footer__copy">
       &#169; {ano} Edson Basilio. Todos os direitos reservados.
     </span>
     </div>
    </footer>
  )
}

export default Footer