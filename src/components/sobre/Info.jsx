import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className='about__box'>
         <i className='bx bx-medal-alt about__icon'></i>

            <h3 className='about__title'>Experiência</h3>
            <span className='about__subtitle'>6 meses de estudo</span>
        </div>

            <div className='about__box'>
            <i className='bx bx-briefcase-alt about__icon'></i>
            <h3 className='about__title'>Completos</h3>
            <span className='about__subtitle'>10 + projetos</span>
        </div>

            <div className='about__box'>
            <i className='bx  bx-headphone-mic about__icon'></i> 
            <h3 className='about__title'>Suporte</h3>
            <span className='about__subtitle'>Online 24/7</span>
        </div>
    </div>
  )
}

export default Info