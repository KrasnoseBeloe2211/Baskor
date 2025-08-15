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
import prod7 from '../../styles/prods/frame11.png'
import { Helmet } from 'react-helmet'

export default function Ecoraster({ data }) {
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
		<>
			<Helmet></Helmet>
			<div className='App'>
				<div className='background'></div>
				<div className='container'>
					<Header data={data} openContactMenu={openContactMenu} />
					<ProductWelcome
						image={prod7}
						title={'георешетки ECORASTER'}
						openContactMenu={openContactMenu}
						nameclass={'gason'}
					/>
					<Table />
					<div className='welcome_p'>
						<Title bigTitle='ECORASTER' />
						<AutoResizeTextArea
							el={`Газонные решётки ECORASTER представляют собой современное решение для эффективного укрепления грунта, соответствующее самым строгим требованиям качества.`}
						/>
					</div>

					<div className='chars_section'>
						<AutoResizeTextArea
							el={`ECORASTER Е50 – используются для зон с повышенной рабочей нагрузкой: проезды спецтехники, автостоянки, складские площадки;`}
						/>
						<div className='prod_table'>
							<ProdTable
								headers_prop={['Характеристика', 'Значение']}
								rows_prop={[
									['Размеры', '33 х 33 х 5 см'],
									['Толщина стенки', 'до 7 мм'],
									['Вес ячейки', '1,05 кг'],
									['Материал', 'полиэтилен'],
									['Вес на кв.м', '9,45 кг'],
									['Площадь укладки', '57,19 м²'],
								]}
							/>
						</div>
						<AutoResizeTextArea
							el={`Газонная решетка ECORASTER Е40 — недорогое и функциональное решение для укрепления грунта. Она обладает оптимальными эксплуатационными характеристиками и предназначена для обустройства пешеходных зон, парковочных карманов и подъездных дорог.`}
						/>
						<div className='prod_table'>
							<ProdTable
								headers_prop={['Характеристика', 'Значение']}
								rows_prop={[
									['Размеры', '33 х 33 х 4 см'],
									['Толщина стенки', 'до 5 мм'],
									['Вес ячейки', '0,72 кг'],
									['Материал', 'полиэтилен'],
									['Вес на кв.м', '6,48 кг'],
									['Площадь укладки', '73,15 м²'],
								]}
							/>
						</div>
						<AutoResizeTextArea
							el={`ECOGRID 33 — легкая георешетка с усиленными стенками. Ее гарпунная система фиксации надежно соединяет модули, предотвращая их расхождение. Модель сочетает доступную цену с повышенной устойчивостью к нагрузкам.`}
						/>
						<div className='prod_table'>
							<ProdTable
								headers_prop={['Характеристика', 'Значение']}
								rows_prop={[
									['Размеры', '40 х 40 х 3,3 см'],
									['Толщина стенки', 'от 2 до 5 мм'],
									['Вес ячейки', '0,5 кг'],
									['Материал', 'полиэтилен'],
								]}
							/>
						</div>
					</div>
					<OrderForm />

					<ProdRecomendationSection
						nameclass={'gason'}
						image={prod7}
						data={data}
					/>
					<OrderGuide openContactMenu={openContactMenu} />
					<AboutSection />
					<ProdCatalogDesc
						title={'Продажа газонных георешеток'}
						text={`Газонные георешётки — современное решение для укрепления грунта и создания эстетичного травяного покрытия. Эта продукция изготавливается из прочных материалов, устойчивых к влаге, солнечному излучению и механическим воздействиям.

Основные плюсы использования: укрепление почвы и защита от эрозии, формирование ровного зелёного покрова, сокращение времени и затрат на обустройство территории, а также экологическая безопасность.

При подборе георешётки учитывайте: размер ячеек (должен соответствовать типу газонной травы), материал (лучше полипропилен или полиэтилен) и цветовое исполнение.

Закажите георешётку и получите долговечное газонное покрытие с минимальными затратами на обслуживание.`}
					/>
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
