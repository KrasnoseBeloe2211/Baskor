import React from 'react'
import ContactBtn from './ContactBtn'
import ImageSwitcher from './ImageSwitcher'

export default function WelcomeSection({ openContactMenu, data }) {
	return (
		<div className='welcome_section'>
			<div className='welcome_section_text'>
				<h1>Купить геоматериалы, геосетку, геотекстиль и геосинтетику</h1>
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
			<ImageSwitcher data={data} />
		</div>
	)
}
