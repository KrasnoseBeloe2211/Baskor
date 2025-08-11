import React from 'react'
import ContactBtn from './ContactBtn'
import map_icon from '../styles/map.svg'
import email_icon from '../styles/email.svg'
import { Link } from 'react-router-dom'

export default function Footer({ openContactMenu }) {
	return (
		<div className='footer'>
			<div className='bg'></div>
			<div className='columns'>
				<div className='docs_column'>
					<h4>ООО ПТК БАСКОР </h4>
					<h4>ИНН: 9726078148</h4>
					<h4>КПП: 772601001</h4>
					<h4>ОГРН: 1247700435278</h4>
				</div>
				<div className='contact_column'>
					<div className='link'>
						<a href='tel:+79862958289'>+7 (986) 295 82 89</a>
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
				</div>
				<div className='placement_column'>
					<div className='adress_card'>
						<img src={map_icon} alt='' />
						<p>
							Юридический адрес: 117648, г. Москва, вн. тер. г. муниципальный
							округ Чертаново Северное, мкр. Северное Чертаново, д. 5, к. Г,
							помещ. 6Ц
						</p>
					</div>
					<div className='adress_card email'>
						<img src={email_icon} alt='' />
						<p>zakaz@ptk-baskor.ru</p>
					</div>
				</div>
				<div className='links_column'>
					<h4>Разделы сайта</h4>
					<Link to='/'>Главная</Link>
					<Link to='/#catalog'>Каталог</Link>
					<Link to='/about_us'>О нас</Link>
					<Link to='/contact'>Контакты</Link>
				</div>
			</div>
		</div>
	)
}
