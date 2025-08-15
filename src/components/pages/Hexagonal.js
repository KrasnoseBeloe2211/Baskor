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
import prod7 from '../../styles/prods/Frame-9.png'
import { Link } from 'react-router-dom'
import hexagonal from '../../styles/prods/hexgonal.webp'
import polyephyr from '../../styles/prods/Polyephyr.webp'
import polyprop from '../../styles/prods/polyprop.webp'
import glassgrid from '../../styles/prods/glassgrid.webp'
import { Helmet } from 'react-helmet'

export default function Hexagonal({ data }) {
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
					title={'геосетки гексагональные'}
					openContactMenu={openContactMenu}
				/>
				<Table />

				<AutoResizeTextArea
					el={`Характеристики:

Прочность при растяжении при максимальной нагрузке, кН/м, не менее:
– вдоль: 19 кН/м,
– поперек: 18 кН/м,
– по диагонали: 18 кН/м.
Относительное удлинение при максимальной нагрузке, %, не более:
– вдоль: 15%,
– поперек: 15%,
– по диагонали: 15%.

Прочность соединения в узле: 90 %.
Ширина рулона: 4 метра.
Длина рулона: 50 метров.
Размер ячеек: 40х40х40 мм.

Трехосные плоские георешетки ТХ с гексагональной структурой ячеек представляют собой специализированные полипропиленовые конструкции, разработанные для использования на слабых грунтах и в условиях значительных статических/динамических нагрузок. Их применение обеспечивает комплексное решение ключевых задач дорожного строительства:
- Снижение толщины базового несущего слоя при одновременном увеличении его прочностных характеристик и продлении срока службы покрытия
- Формирование стабильного разделительного слоя, предотвращающего взаимопроникновение материалов основания и подстилающих слоев
- Повышение устойчивости конструкции к динамическим воздействиям благодаря эффекту блокировки крупнофракционного заполнителя (40-70 мм) в ячейках решетки
Данные технологические преимущества обеспечивают качественное улучшение параметров дорожной конструкции, поддающееся точному расчетному обоснованию.
Технология укладки
Георешетка ТХ монтируется непосредственно:
1. На подготовленную поверхность песчаного дополнительного слоя
2. На поверхность земляного полотна (при отсутствии песчаной подушки)
с последующей отсыпкой несущего слоя из крупнофракционного материала.`}
				/>
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
