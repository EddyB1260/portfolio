import React from 'react'
import "./habilidades.css"
import Frontend from './Frontend'
import Backend from './Backend'


const Habilidades = () => {
  return (
    <section className='skills section' id='habilidades'>
        <h2 className='section__title'>Habilidades</h2>
        <span className='section__subtitle'>Meu nível técnico</span>
   
        <div className='skills__container container grid'>
            <Frontend />

            <Backend />
        </div>
    </section>
  )
}

export default Habilidades