import Catalog from '../Catalog'
import Header from '../Header'
import Table from '../Table'
import WelcomeSection from '../WelcomeSection'
import ContactBtn from '../ContactBtn'
import RecomendationSection from '../RecomendationSection'
import OrderGuide from '../OrderGuide'
import AboutSection from '../AboutSection'
import CatalogDescription from '../CatalogDescription'
import Footer from '../Footer'
import { useState } from 'react'
import ContactMenu from '../ContactMenu'
import { Helmet } from 'react-helmet'

function MainPage({ data }) {
	const [contactMenu, setContactMenu] = useState('contact_menu')
	function openContactMenu() {
		console.log('Открываем меню')
		setContactMenu('contact_menu active')
	}
	function closeContactMenu() {
		setContactMenu('contact_menu')
	}

	return (
		<>
			<Helmet>

			</Helmet>
			<div className='App'>
				<div className='background'></div>
				<div className='container'>
					<Header data={data} openContactMenu={openContactMenu} />
					<WelcomeSection openContactMenu={openContactMenu} />
					<Table />
					<Catalog />
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
					<RecomendationSection />
					<OrderGuide openContactMenu={openContactMenu} />
					<AboutSection />
					<CatalogDescription />
				</div>
				<Footer openContactMenu={openContactMenu} />
				<ContactMenu
					closeContactMenu={closeContactMenu}
					contactMenu={contactMenu}
				/>
			</div>
		</>
	)
}

export default MainPage
