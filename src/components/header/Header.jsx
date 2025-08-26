import React from "react";
import "./header.css"

const App = () => {
    return (
  <header className="header">
    <nav className="nav container">
        <a href="index.html" className="nav__logo" aria-label="Home">
            <span className="sr-only">Home</span>
        </a>

        <div className="nav__menu">
            <ul className="nav__list grid">
                <li className="nav__item">
                    <a href="#home" className="nav__link">
                        <i className="uil uil-estate nav__icon"></i>Home
                    </a>
                </li>
                                <li className="nav__item">
                    <a href="#about" className="nav__link">
                        <i className="uil uil-user nav__icon"></i>Sobre
                    </a>
                </li>
                                <li className="nav__item">
                    <a href="#skills" className="nav__link">
                        <i className="uil uil-file-alt nav__icon"></i>Habilidades
                    </a>
                </li>
                                <li className="nav__item">
                    <a href="#services" className="nav__link">
                        <i className="uil uil-briefcase-alt nav__icon"></i>Serviços
                    </a>
                </li>

                                                <li className="nav__item">
                    <a href="#portfolio" className="nav__link">
                        <i className="uil uil-scenery nav__icon"></i>Portfolio
                    </a>
                </li>

                                                <li className="nav__item">
                    <a href="#contato" className="nav__link">
                        <i className="uil uil-message nav__icon"></i> Contato
                    </a>
                </li>
            </ul>
        </div>
    </nav>
  </header>
    )
}

export default App