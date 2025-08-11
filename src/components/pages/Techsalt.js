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
import prod7 from '../../styles/prods/Frame17.png'
import { Link } from 'react-router-dom'
import hexagonal from '../../styles/prods/Frame17.png'
import polyephyr from '../../styles/prods/Frame18.png'
import polyprop from '../../styles/prods/Frame19.jpg'
import glassgrid from '../../styles/prods/Frame20.jpg'
import { Helmet } from 'react-helmet'

export default function Techsalt({ data }) {
	const [contactMenu, setContactMenu] = useState('contact_menu')
	function openContactMenu() {
		console.log('Открываем меню')
		setContactMenu('contact_menu active')
	}
	function closeContactMenu() {
		setContactMenu('contact_menu')
	}

	return (
		<div className='App'>
			<div className='background'></div>
			<div className='container'>
				<Header data={data} openContactMenu={openContactMenu} />
				<ProductWelcome
					image={prod7}
					title={'техническую соль'}
					openContactMenu={openContactMenu}
				/>
				<Table />
				<div className='welcome_p'>
					<Title bigTitle='Концентрат минеральный – галит, тип С, сорт высший, сеяный' />
					<AutoResizeTextArea el='Изготовлено по  ТУ 2111-004-00352851-05' />
				</div>

				<ProdTable
					headers_prop={['Сорт:	', 'Высший']}
					rows_prop={[
						['Производство:', 'Илецксоль'],
						['Состав:	', '	хлористый натрий'],
						['Условия хранения:', 'Хранить в сухом месте'],
						['Срок годности:', '5 лет'],
						['Масса нетто:', '1000 кг'],
					]}
				/>
				<div>
					<h3>Дополнительно</h3>
					<AutoResizeTextArea
						el={`Твердый реагент производится из соли Илецкого месторождения с добавлением кальция хлористого/формиата натрия.

Применяется для обледенелых дорог, пешеходных зон и тротуаров, внутридворовых территорий, лестниц, пандусов. Обеспечивает безопасность пешеходов и автотранспорта в условиях гололеда. Не вызывает коррозии и не портит обувь, безопасна для людей и животных.

Реализуется в удобных для перевозки и хранения мягких одностропных контейнерах по 1 тонне.

Поставляется железнодорожным транспортом из Соль-Илецка Оренбургской области.`}
					/>
				</div>
				<div>
					<h3>Упаковка</h3>
					<AutoResizeTextArea
						el={`Мягкий контейнер 1000кг
Групповая упаковка
мягкие разовые контейнеры (МКР) массой 1000 кг.`}
					/>
				</div>
				<div className='choose_section'>
					<Title bigTitle='Все виды технической соли ПТК БАСКОР' />
					<div className='choose_cards geogrids'>
						<Link className='choose_button geogrids'>
							<h1>
								Концентрат минеральный – галит, тип С, сорт высший, сеяный
							</h1>
							<img src={hexagonal} alt='' />
						</Link>
						<Link className='choose_button geogrids'>
							<h1>Соль техническая Галит, помол 3, высший сорт МКР 1 тн</h1>
							<img src={polyephyr} alt='' />
						</Link>
						<Link className='choose_button geogrids'>
							<h1>Rockmelt Пескосоль мешок 20кг</h1>
							<img src={polyprop} alt='' />
						</Link>
						<Link className='choose_button geogrids'>
							<h1>Rockmelt Соль техническая №3, мешок 20кг</h1>
							<img src={glassgrid} alt='' />{' '}
						</Link>
					</div>
				</div>
				<OrderForm />

				<ProdRecomendationSection image={prod7} data={data} />
				<OrderGuide openContactMenu={openContactMenu} />
				<AboutSection />
				<ProdCatalogDesc
					title={
						'Геосетка дорожная: прочность, стабильность и долговечность вашего дорожного покрытия'
					}
					text={`Геосетка дорожная — это геосинтетический плоский полимерный рулонный материал с сетчатой структурой, образованной эластичными рёбрами из высокопрочных пучков нитей. Она предназначена для усиления и стабилизации дорожных конструкций, повышения их прочности и долговечности.

Классификация геосеток

Геосетки делятся на следующие категории:

  •  По применению: для грунта и асфальтобетона.
  • По материалу: полиэфирные, полиэтиленовые, полиамидные, полипропиленовые, из стекловолокна, из полиэстера, из базальтового    ровинга.
  • По способу формирования: двуосные, одноосные, трёхосные.

Производство геосеток

Геосетка производится различными способами: литьём, переплетением нитей, соединением узлами.

Применение геосеток

Геосетки используются для армирования верхних слоёв дорожных одежд из разных видов асфальтобетонов и грунтов. Они обеспечивают высокие механические характеристики, повышают транспортно-эксплуатационные показатели дороги и продлевают межремонтные сроки.

Преимущества геосеток

Геосетка дорожная обладает рядом преимуществ:

  • высокая механическая прочность;
  • устойчивость к агрессивным средам и температурным колебаниям;
  • долговечность и стабильность;
  • экологическая безопасность;
  • простота монтажа и эксплуатации.
Заключение

Геосетка дорожная — это надёжный и эффективный материал для усиления и стабилизации дорожных конструкций. Её применение позволяет повысить качество и долговечность дорожного покрытия, снизить затраты на ремонт и обслуживание. Обратитесь к нам, чтобы узнать больше о нашей продукции и услугах, и сделайте вашу дорогу прочной и долговечной с помощью геосетки!`}
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
