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
import { Helmet } from 'react-helmet'

export default function Geogrid({ data }) {
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
					title={'Объемные георешетки'}
					openContactMenu={openContactMenu}
				/>
				<Table />
				<div className='welcome_p'>
					<Title bigTitle='Объемные георешетки' />
					<AutoResizeTextArea el='Геосинтетический материал представляет собой пространственную сотовую конструкцию, образованную соединёнными между собой геополосами. Производится в виде складных модулей, которые поставляются в сложенном состоянии упакованными в пакеты. Геосоты могут иметь как перфорированные, так и сплошные (неперфорированные) рёбра жёсткости, что определяет их дренажные характеристики и область применения. Данная конструкция обеспечивает эффективное армирование грунта и применяется для укрепления откосов, создания противоэрозионных покрытий и других задач ландшафтного строительства.' />
				</div>
				<Usage
					list={`   • Армирование слоев основания дорожной одежды
   • Укрепление и противоэрозионная защита откосов и насыпей
   • Возведение подпорных стенок в дорожном, гидротехническом и других областях строительства
   • предотвращение загрязнения традиционных дренажей
   • Укрепление грунта при ландшафтных работах и озеленении

  Функции
   • Армирование
   • Защита от эрозии `}
				/>
				<div className='chars_section'>
					<ProdTable
						headers_prop={['Страна производитель', 'Россия']}
						rows_prop={[
							['Страна производитель', 'Россия'],
							['Высота ребра, мм', 'от 50 до 200'],
							['Диагональ ячейки, мм', '20/30/40'],
							['Поверхностная плотность', 'от 100 до 1000'],
							['Материал', 'Полиэтилен (ПНД)'],
						]}
					/>
					<Advantage
						advantages={`• Отсутствие механической повреждаемости при укладке

• Создание однородной структуры основания или откоса насыпи по принципу модульной опалубки различной высоты`}
					/>
				</div>
				<OrderForm />

				<ProdRecomendationSection image={prod7} data={data} />
				<OrderGuide openContactMenu={openContactMenu} />
				<AboutSection />
				<ProdCatalogDesc
					title={'Продажа объемных георешеток'}
					text={`Компания ПТК БАСКОР предлагает современные решения в области укрепления грунтов с помощью объемных георешеток - инновационного материала, открывающего новые возможности в строительстве и благоустройстве территорий.

Объемные георешетки представляют собой трехмерные полимерные конструкции, которые после заполнения грунтом или другими материалами создают прочное и устойчивое основание. Этот материал эффективно решает проблемы эрозии почвы, оползней и проседания грунта, обеспечивая долговечность создаваемых конструкций.

Ключевые преимущества наших георешеток включают экологическую безопасность (изготовлены из нетоксичных материалов), экономическую эффективность (снижают затраты на строительство и обслуживание) и универсальность применения (работают в различных грунтовых и климатических условиях).

Области применения охватывают все основные направления строительства: от укрепления дорожных обочин и железнодорожных насыпей до гидротехнических сооружений и ландшафтного дизайна. Наши специалисты готовы подобрать оптимальное решение для вашего проекта, гарантируя надежность, долговечность и эстетичность результата.

Свяжитесь с нами, и мы поможем реализовать ваш проект с использованием передовых геосинтетических технологий.`}
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
