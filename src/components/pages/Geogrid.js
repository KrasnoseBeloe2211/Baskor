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
					<AutoResizeTextArea el='Геосинтетический материал пространственной сотовой конструкции, образованной из соединённых между собой геополос, выпускаемый в виде складывающегося модуля и поставляемый в виде пакетов в сложенном состоянии. Геосоты выпускаются с перфорированными или неперфорированными ребрами.' />
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
					text={`Мы рады представить вам нашу компанию, специализирующуюся на продаже объёмных георешёток — инновационного продукта, который изменит ваш взгляд на благоустройство и строительство.

Что такое объёмные георешётки?

Объёмные георешётки — это современный и эффективный способ укрепления грунта, предотвращения эрозии и создания надёжного основания для различных объектов. Они представляют собой трёхмерные конструкции из полимерных материалов, которые заполняются грунтом или другим материалом, обеспечивая стабильность и долговечность всей конструкции.

Преимущества объёмных георешёток:

Укрепление грунта: георешётки предотвращают оползни, эрозию и проседание грунта, обеспечивая стабильность и безопасность объектов.

Экологичность: наши георешётки изготовлены из безопасных для окружающей среды материалов, не выделяющих вредных веществ.

Экономичность: использование георешёток позволяет сократить расходы на строительство и обслуживание объектов, увеличивая их срок службы.

Универсальность: объёмные георешётки подходят для различных типов грунта и климатических условий, обеспечивая надёжность и устойчивость конструкций.

Применение объёмных георешёток:

Дорожное строительство: укрепление обочин, откосов, мостов и путепроводов.

Железнодорожное строительство: укрепление насыпей, тоннелей и мостов.

Гидротехническое строительство: укрепление дамб, плотин и каналов.

Ландшафтный дизайн: создание зелёных зон, укрепление склонов и берегов водоёмов.

Обратитесь к нам сегодня, и мы поможем вам выбрать оптимальное решение для вашего проекта, обеспечив надёжность, долговечность и эстетическую привлекательность вашего объекта.`}
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
