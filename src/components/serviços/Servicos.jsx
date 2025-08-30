import React, { useState } from 'react'
import "./servicos.css"


const Servicos = () => {
  const [toggleState, setToggleState] = useState(0);
  
  const toggleTab = (index) => {
    setToggleState(index)
  }

  const handleOutsideClick = (e) => {
  if (e.target.classList.contains('services__modal')) {
    toggleTab(0);
  }
};


  return (
    <section className='services section' id="services">
      <h2 className='section__title'>Serviços</h2>
      <span className='section__subtitle'>O que ofereço</span>
    
      <div className='services__container container grid'>
        <div className='services__content'>
          <div>
            <i className='uil uil-web-grid services__icon'></i>
            <h3 className='services__title'>Desenvolvedor<br /> Web</h3>

            <span className='services__button' onClick={() => toggleTab(1)}>Ver Mais <i className='uil uil-arrow-right services__button-icon'></i></span>
            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}
  onClick={handleOutsideClick}
>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
              <div className='services__modal-content'>
                <i className='uil uil-times services__modal-close' onClick={() => toggleTab(0)}></i>

                <p className='services__modal-description'>Serviços com anos de estudo. Provendo serviços de qualidade para clientes e empresas.</p>
                <ul className='services__modal-services grid'>
                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>Desenvolvo interfaces de usuário.</p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>Webpages com React, Next.Js e Vite.</p>
                  </li>

                   <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>Full-stack apps com Python e Django.</p>
                  </li>


                </ul>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>


    </section>
  )
}

export default Servicos