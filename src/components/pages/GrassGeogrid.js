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
import prod7 from '../../styles/prods/Frame-8.png'
import ProductWelcomeAnim from '../ProdWelcomeAnim'
import geogason from '../../styles/prods/frame12.png'
import ecoraster from '../../styles/prods/frame11.png'
import ContactBtn from '../ContactBtn'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function GrassGeogrid({ data }) {
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
				<ProductWelcomeAnim
					image={prod7}
					title={'газонные георешетки'}
					openContactMenu={openContactMenu}
				/>
				<Table />

				<div className='choose_section'>
					<Title bigTitle='Выбор' />
					<div className='choose_cards'>
						<Link to='/geogason' id='geogason' className='choose_button'>
							<img src={geogason} alt='' />
							<h1>ГЕО ГАЗОН</h1>
						</Link>
						<Link to='/ecoraster' id='ecoraster' className='choose_button'>
							<img src={ecoraster} alt='' />
							<h1>Газонные решетки ECORASTER</h1>
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
				<ProdCatalogDesc
					title={'Продажа газонных георешеток'}
					text={`Газонные георешетки – современное решение для благоустройства территории

Наши георешетки – это инновационный способ создания прочного и эстетичного газонного покрытия. Изготовленные из высокопрочных полимерных материалов, они устойчивы к влаге, ультрафиолету и механическим нагрузкам, гарантируя долговечность эксплуатации.

Ключевые преимущества:

  • Надежное укрепление грунта – предотвращает эрозию и проседание почвы

  • Идеальный газон – способствует формированию ровного травяного покрова

  • Экономическая выгода – сокращает затраты на материалы и монтаж

  • Экологическая безопасность – не содержит токсичных компонентов

Критерии выбора:

  • Размер ячейки – должен соответствовать типу газонной травы

  • Материал – рекомендуем полипропилен или полиэтилен

  • Цветовая гамма – подбирается под дизайн участка

Использование газонных георешеток – это простое и эффективное решение для создания качественного травяного покрытия с минимальными затратами на обслуживание.`}
				/>
			</div>
			<Footer openContactMenu={openContactMenu} />
			<ContactMenu
				closeContactMenu={closeContactMenu}
				contactMenu={contactMenu}
			/>
		</div>
	)
}
