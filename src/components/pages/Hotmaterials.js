import Header from '../Header'
import Table from '../Table'
import OrderGuide from '../OrderGuide'
import AboutSection from '../AboutSection'
import Footer from '../Footer'
import { useState } from 'react'
import ContactMenu from '../ContactMenu'
import AutoResizeTextArea from '../AutoResizeTextArea'
import ProductWelcome from '../prodsComps/ProductWelcome'
import ProdRecomendationSection from '../prodsComps/ProdRecomendationSection'
import ProdCatalogDesc from '../prodsComps/ProdCatalogDesc'
import Title from '../Title'
import dornit from '../../styles/prods/dornit.jpg'
import typar from '../../styles/prods/typar.webp'
import Usage from '../Usage'
import ProdTable from '../ProdTable'
import Advantage from '../Advantage'
import OrderForm from '../OrderForm'
import prod7 from '../../styles/prods/Frame-14.png'
import ProductWelcomeAnim from '../ProdWelcomeAnim'
import geogason from '../../styles/prods/frame12.png'
import ecoraster from '../../styles/prods/frame11.png'
import ContactBtn from '../ContactBtn'
import { Link } from 'react-router-dom'
import prod15 from '../../styles/prods/Frame-15.png'
import prod16 from '../../styles/prods/Frame-16.png'
import { Helmet } from 'react-helmet'

export default function Hotmaterials({ data }) {
	const [contactMenu, setContactMenu] = useState('contact_menu')
	function openContactMenu() {
		console.log('Открываем меню')
		setContactMenu('contact_menu active')
	}
	function closeContactMenu() {
		setContactMenu('contact_menu')
	}

	const [textArea, setTextArea] = useState(``)

	return (
		<div className='App'>
			<div className='background'></div>
			<div className='container'>
				<Header data={data} openContactMenu={openContactMenu} />
				<ProductWelcome
					image={prod7}
					title={'теплоизоляционные материалы (утеплитель)'}
					openContactMenu={openContactMenu}
				/>
				<Table />

				<div className='choose_section'>
					<Title bigTitle='Выбор' />
					<div className='choose_cards'>
						<Link to='/rockwool' className='choose_button hot_cards'>
							<img src={prod7} alt='' />
							<h1>ROCKWOOL</h1>
						</Link>
						<Link to='/rockwool' className='choose_button hot_cards'>
							<img src={prod15} alt='' />
							<h1>PENOPLEX</h1>
						</Link>
						<Link
							to='/geogason'
							id='geogason'
							className='choose_button hot_cards'
						>
							<img src={prod16} alt='' />
							<h1>RAVATEX XPS</h1>
						</Link>
					</div>
				</div>
				<div className='free_contact_section'>
					<div>
						<h1>Получите бесплатную консультацию</h1>
						<p>
							Не знаете какие именно материалы Вам нужны и в каком количестве?
						</p>
						<p>Наш менеджер Вас проконсультирует и поможет выбрать.</p>
					</div>

					<ContactBtn
						openContactMenu={openContactMenu}
						className='free_dialog'
						content='БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ'
					/>
				</div>
				<OrderForm />

				<ProdRecomendationSection image={prod7} data={data} />
				<OrderGuide openContactMenu={openContactMenu} />
				<AboutSection />
			</div>
			<Footer openContactMenu={openContactMenu} />
			<ContactMenu
				closeContactMenu={closeContactMenu}
				contactMenu={contactMenu}
			/>
		</div>
	)
}
