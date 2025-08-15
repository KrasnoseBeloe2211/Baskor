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
import { Helmet } from 'react-helmet'

export default function Glassgrid({ data }) {
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
					title={'стеклосетку дорожную'}
					openContactMenu={openContactMenu}
				/>
				<Table />
				<div className='welcome_p'>
					<Title bigTitle='Стеклосетка дорожная' />
					<AutoResizeTextArea el='Стекловолоконная геосетка представляет собой прочный ячеистый материал, созданный из специально обработанных битумным составом стекловолоконных нитей высокой прочности. Особенностью конструкции является использование ровинговых нитей, соединенных прошивными узлами, что обеспечивает исключительную устойчивость к различным видам нагрузок - как статическим, так и динамическим, действующим в вертикальном и горизонтальном направлениях. Благодаря своим уникальным свойствам, данный материал нашел широкое применение в дорожном строительстве, где выполняет важную функцию распределяющего нагрузку конструкционного слоя. Использование стеклосетки в дорожных конструкциях позволяет существенно повысить качество покрытия и продлить срок его эксплуатации, что делает её незаменимым элементом современных дорожно-строительных проектов.' />
					<Usage
						list={`   • Армирование конструкций автомобильных дорог общего пользования IV-V категорий;
   • Армирование асфальтобетонных покрытий рулежных дорожек, мест стоянок, а также других вспомогательных сооружений инфраструктуры аэропортов;
   • Армирование асфальтобетонных слоев проездов дворовых территорий, мест стоянок автомобильного транспорта.
 

Стекловолоконные геосинтетические материалы стали неотъемлемым компонентом современного дорожного строительства, демонстрируя комплексное положительное воздействие на эксплуатационные характеристики покрытий. Их применение обеспечивает существенное улучшение качества дорожных конструкций и продление срока службы магистралей, одновременно сокращая расходы на строительство, текущий ремонт и обслуживание транспортных артерий. Благодаря этим преимуществам, европейские страны уже несколько десятилетий активно интегрируют геосинтетические материалы, особенно стеклосетки, в стандартные проекты дорожного строительства, что подтверждает их эффективность и экономическую целесообразность.

 

Применение стеклосетки гарантирует эффективную защиту покрытия из асфальтобетона от различных типов трещин:
– температурные – возникающие от напряжений при температурном воздействии.
– отраженные – дублирующие трещины нижележащего слоя дорожной одежды.
– усталостные – возникающие при многократных нагрузках и являющиеся следствием усталостного типа разрушения асфальтобетонного покрытия.`}
					/>

					<ProdTable
						headers_prop={['Наименование', 'Стеклосетка 50/50-40']}
						rows_prop={[
							['Длина рулона, м	', '100'],
							['Ширина рулона, м	', '4'],
							['Размер ячейки, мм	', '40×40'],
							['Прочность на разрыв, кН/м продольная (основа)	', '50'],
							['Прочность на разрыв,  кН/м поперечная (уток)	', '50'],
							['Относительное удлинение при разрыве, %	', '≤3%'],
							['Допустимая потеря прочности на растяжение', ' не более 10 %'],
							['Температурный диапазон применения	', 'от -100° до +280°C'],
							['Содержание связующего вещества	', '≤20%'],
							['Пропитка', 'Битумно-акриловая'],
							['Материал	', 'Стекловолокно'],
						]}
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
