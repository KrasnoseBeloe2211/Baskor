import React from 'react'
import ContactBtn from '../ContactBtn'

export default function ProductWelcome({ openContactMenu, title, image, nameclass }) {
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
			<div className='switcher'>
				<img className={`image ${nameclass}`} src={image} alt='' />
			</div>
		</div>
	)
}
