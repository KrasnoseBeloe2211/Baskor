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

export default function RoadGeogrid({ data }) {
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
					title={'Геосетки дорожные'}
					openContactMenu={openContactMenu}
				/>
				<Table />
				<div className='welcome_p'>
					<Title bigTitle='Геосетки дорожные' />
					<AutoResizeTextArea el='Георешетка армирующая из стеклоровинга с полимерно-битумной пропиткой. Метод производства: основовязальный.' />
				</div>

				<Usage
					list={`   • Армирование асфальтобетонных покрытий автомобильных дорог
   • Армирование асфальтобетонных покрытий рулёжных дорожек аэропортов
   • Армирование асфальтобетонных покрытий взлетно-посадочных полос аэропортов, аэродромов и вертолетных площадок

  Функции
   • Армирование `}
				/>
				<div className='chars_section'>
					<ProdTable
						headers_prop={['Страна производитель', 'Россия']}
						rows_prop={[
							['Страна производитель', 'Россия'],
							['Длина рулона, м	', '	до 200'],
							['Материал', 'Стеклоровинг'],
							['Пропитка', 'Полимерно-битумная'],
							['Прочность при растяжении вдоль, кН/м	', 'от 40 до 200'],
							['Прочность при растяжении поперек, кН/м	', 'от 40 до 200'],
							['Ширина рулона, м	', 'до 5,3'],
						]}
					/>
					<Advantage
						advantages={`• Предотвращение или уменьшение образования трещин различного типа (температурных, отраженных и т.д.)
• Увеличение прочностных характеристик асфальтобетонного покрытия
• Повышение эксплуатационной надёжности, межремонтного периода и срока службы покрытий`}
					/>
				</div>
				<div className='choose_section'>
					<Title bigTitle='Геосетки дорожные' />
					<div className='choose_cards geogrids'>
						<Link to='/hexagonal_roadgrid' className='choose_button geogrids'>
							<h1>Геосетка гексагональная</h1>
							<img src={hexagonal} alt='' />
						</Link>
						<Link to='/polyephyr_geogrid' className='choose_button geogrids'>
							<h1>Геосетка полиэфирная</h1>
							<img src={polyephyr} alt='' />
						</Link>
						<Link to='/polyproproadgrid' className='choose_button geogrids'>
							<h1>Геосетка полипропиленовая</h1>
							<img src={polyprop} alt='' />
						</Link>
						<Link to='/road_glassgrid' className='choose_button geogrids'>
							<h1>Стеклосетка дорожная</h1>
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
					text={`еосетка для дорожного строительства — это современный геосинтетический материал в виде рулонного полотна с ячеистой структурой, созданной из прочных полимерных нитей. Она служит для укрепления дорожных оснований, значительно улучшая их эксплуатационные характеристики и срок службы.

Разновидности геосеток

Геосетки классифицируются по нескольким параметрам:

• По назначению: для укрепления грунтов и асфальтобетонных покрытий
• По сырью: из полиэфира, полиэтилена, полиамида, полипропилена, стекловолокна, полиэстера, базальтовых волокон
• По структуре: двуосноориентированные, одноосные, трехосные

Технология изготовления

• Производство осуществляется различными методами: методом литья, переплетения волокон, узлового соединения.

Сферы использования

Дорожные геосетки применяют для:

• Армирования верхних слоев дорожного полотна

• Укрепления различных типов асфальтобетонных смесей и грунтовых оснований

• Повышения механических показателей покрытия

• Увеличения межремонтного периода эксплуатации

• Ключевые достоинства

Основные плюсы дорожных геосеток:

• Высокие прочностные характеристики

• Стойкость к химическим воздействиям и перепадам температур

• Длительный срок службы

• Экологическая чистота

• Удобство в работе и обслуживании

Итог

Дорожная геосетка — это проверенное решение для создания прочных и долговечных дорожных конструкций. Её применение обеспечивает:

• Повышение качества покрытия

• Увеличение срока эксплуатации

• Снижение расходов на содержание

Для получения подробной информации о нашем ассортименте и услугах обращайтесь к нашим специалистам. Укрепите ваши дороги с помощью качественных геосеток!`}
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
