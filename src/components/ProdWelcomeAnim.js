import React from 'react'
import ContactBtn from './ContactBtn'
import ProdImageSwitcher from './ProdImageSwitcher'

export default function ProductWelcomeAnim({ openContactMenu, title, image }) {
  return (
    <div className='welcome_section'>
      <div className='welcome_section_text'>
        <h1>Купить {title}</h1>
        <p>
          Наличный/безналичный расчет, выезд менеджера, Большой ассортимент,
          качество, доступные цены
        </p>
        <ContactBtn
          openContactMenu={openContactMenu}
          content='БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ'
          className='free_dialog'
        />
      </div>
      <ProdImageSwitcher/>
    </div>
  )
}
