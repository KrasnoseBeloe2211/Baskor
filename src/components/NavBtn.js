import React from 'react'
import { Link } from 'react-router-dom'
import menu_icon from '../styles/menu.svg'
import { useState } from 'react'

import CatalogBtn from './CatalogBtn'

export default function NavBtn({ data }) {
	const links_data = data
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const WinWidth = window.innerWidth
	if (WinWidth < 1024) {
		return (
			<div className='mobile-menu'>
				<button
					className='header_btn'
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<img src={menu_icon} alt='Меню' />
				</button>

				<div
					className={`mobile-menu__panel ${
						isMenuOpen ? 'mobile-menu__panel--open' : ''
					}`}
				>
					<nav className='mobile-menu__links'>
						<Link to='/' onClick={() => setIsMenuOpen(false)}>
							Главная
						</Link>
						<CatalogBtn name='Каталог' links={links_data} mobile />
						<Link to='/about_us' onClick={() => setIsMenuOpen(false)}>
							О нас
						</Link>
						<Link to='/contact' onClick={() => setIsMenuOpen(false)}>
							Контакты
						</Link>
						<button className='' onClick={() => setIsMenuOpen(false)}>Закрыть</button>
					</nav>
				</div>
			</div>
		)
	} else {
		return (
			<div className='navigation'>
				<div className='nav_links'>
					<Link to='/'>Главная</Link>
					<CatalogBtn
						name='Каталог'

						links={links_data}
					/>
					<Link to='/about_us'>О нас</Link>
					<Link to='/contact'>Контакты</Link>
				</div>
			</div>
		)
	}
}
