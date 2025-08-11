import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import down_tick from '../styles/arrow-down.svg'

const Submenu = ({ sublinks }) => {
	const WinWidth = window.innerWidth
	const [isSubOpen, setIsSubOpen] = useState(false)
	 if (WinWidth < 1024) {
			return (
				<div className='submenu-mobile'>
					<button
						className='submenu-mobile__toggle'
						onClick={() => setIsSubOpen(!isSubOpen)}
					>
						<img
							className={`submenu-mobile__arrow ${
								isSubOpen ? 'submenu-mobile__arrow--rotated' : ''
							}`}
							src={down_tick}
							alt='▼'
						/>
					</button>
					<ul
						className={`submenu-mobile__list ${
							isSubOpen ? 'submenu-mobile__list--open' : ''
						}`}
					>
						{sublinks.map((sub, i) => (
							<li key={i} className='submenu-mobile__item'>
								<Link to={sub.route}>{sub.route_name}</Link>
							</li>
						))}
					</ul>
				</div>
			)
		}

	return (
		<ul className='submenu'>
			{sublinks.map((sub, i) => (
				<li key={i} className='catalog_list_item'>
					<Link to={sub.route}>{sub.route_name}</Link>
				</li>
			))}
		</ul>
	)
}

export default function CatalogBtn({ name, links }) {
	const [isHovered, setIsHovered] = useState(false)
	const WinWidth = window.innerWidth
	const [isOpen, setIsOpen] = useState(false)
	if (WinWidth < 1024) {
		return (
			<div className='mobile-catalog'>
				<button
					className='mobile-catalog__toggle'
					onClick={() => setIsOpen(!isOpen)}
				>
					{name}
					<img
						className={`mobile-catalog__arrow ${
							isOpen ? 'mobile-catalog__arrow--rotated' : ''
						}`}
						src={down_tick}
						alt='▼'
					/>
				</button>

				<ul
					className={`mobile-catalog__list ${
						isOpen ? 'mobile-catalog__list--open' : ''
					}`}
				>
					{Array.isArray(links) &&
						links.map((link, index) => (
							<li
								key={index}
								className={`mobile-catalog__item ${
									link.link_type === 'multi_link'
										? 'mobile-catalog__item--has-submenu'
										: ''
								}`}
							>
								<Link to={link.route || '#!'} className='mobile-catalog__link'>
									{link.route_name}
								</Link>

								{link.link_type === 'multi_link' &&
									Array.isArray(link.sublinks) && (
										<Submenu sublinks={link.sublinks} mobile />
									)}
							</li>
						))}
				</ul>
			</div>
		)
	}
	return (
		<div
			className='catalog_btn'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Link className='catalog_link'>
				{name} <img className='tick_down' src={down_tick} alt='▼' />
			</Link>
			<ul className={`catalog_list ${isHovered ? 'show' : ''}`}>
				{Array.isArray(links) &&
					links.map((link, index) => (
						<li
							key={index}
							className={`catalog_list_item ${
								link.link_type === 'multi_link' ? 'has-submenu' : ''
							}`}
						>
							<Link to={link.route || '#!'}>
								{link.route_name}
								{link.link_type === 'multi_link' && (
									<img
										className='tick_down submenu_arrow'
										src={down_tick}
										alt='▶'
									/>
								)}
							</Link>
							{link.link_type === 'multi_link' &&
								Array.isArray(link.sublinks) && (
									<Submenu sublinks={link.sublinks} />
								)}
						</li>
					))}
			</ul>
		</div>
	)
}
