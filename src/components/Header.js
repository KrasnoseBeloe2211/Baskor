import React from 'react'
import ContactBtn from './ContactBtn'
import NavBtn from './NavBtn'

export default function Header({ openContactMenu, data, handleChangeData }) {
	return (
		<div className='header'>
			<div className='link'>
				<a href='tel:+79862958289'>+7 (986) 295 82 89</a>
				<div className='link_text'>
					<div className='green_circle'></div>
					<h2 className='link_header'>Сейчас работаем – Звоните</h2>
				</div>
			</div>
			<div className='link'>
				<a href='mailto:zakaz@ptk-baskor.ru'>zakaz@ptk-baskor.ru</a>
				<div className='link_text'>
					<div className='green_circle'></div>
					<h2 className='link_header'>Сейчас работаем – Звоните</h2>
				</div>
			</div>
			<ContactBtn
				openContactMenu={openContactMenu}
				content='ПОЗВОНИТЕ МНЕ'
				className='contact_btn'
			/>
			<NavBtn handleChangeData={handleChangeData} data={data} />
		</div>
	)
}
