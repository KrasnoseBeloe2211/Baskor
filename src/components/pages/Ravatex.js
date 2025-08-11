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
import prod7 from '../../styles/prods/Frame-16.png'
import ProductWelcomeAnim from '../ProdWelcomeAnim'
import geogason from '../../styles/prods/frame12.png'
import ecoraster from '../../styles/prods/frame11.png'
import ContactBtn from '../ContactBtn'
import { Link } from 'react-router-dom'
import prod15 from '../../styles/prods/Frame-15.png'
import prod16 from '../../styles/prods/Frame-16.png'
import ut1 from '../../styles/prods/rav1.webp'
import ut2 from '../../styles/prods/rav2.webp'
import ut3 from '../../styles/prods/rav3.jpg'
import ut4 from '../../styles/prods/rav4.jpg'
import { Helmet } from 'react-helmet'

export default function Ravatex({ data }) {
  const [contactMenu, setContactMenu] = useState('contact_menu')
  function openContactMenu() {
    console.log('Открываем меню')
    setContactMenu('contact_menu active')
  }
  function closeContactMenu() {
    setContactMenu('contact_menu')
  }

  const data1 = [
		{
			image: ut1,
			title: 'RAVATEX XPS Agro L-25 (25 тип)',
			desc: `Прочность на сжатие 220-250 кПа (25-30 тонн/м2).
Доступен в толщинах 30, 40, 50, 60, 100 мм.

Размеры плиты:
1200 х 600 х 30
1200 х 600 х 40
1200 х 600 х 50
1200 х 600 х 60
1500 х 600 х 100

Основные области применения – кровля, полы, фундамент, стены.`,
		},
		{
			image: ut2,
			title: 'RAVATEX XPS Standart L-35 (35 тип)',
			desc: ``,
		},
		{
			image: ut3,
			title: 'RAVATEX XPS Standart L-45 (45 тип)',
			desc: `Прочность на сжатие 500 кПа (42-45 тонн/м2).
Доступен в толщинах 50, 60 мм.

Размеры плиты:
1200 х 600 х 50
1200 х 600 х 60

Основные области применения – утепление дорожного полотна при строительстве авто- и железных дорог, а также нагружаемых кровель, на которых могут быть расположены зеленые площадки, автостоянки и пешеходные зоны.`,
		},
		{
			image: ut4,
			title: 'RAVATEX XPS Industrial L-70 (70 тип)',
			desc: `Прочность на сжатие 700 кПа (65-70 тонн/м2).
Доступен в толщинах 50, 60 мм.

Размеры плиты:
1200 х 600 х 50
1200 х 600 х 60

Основные области применения – полы холодильных складов, взлётно-посадочные полосы, стилобаты, нагружаемые конструкции.`,
		},
	]

  return (
		<div className='App'>
			<div className='background'></div>
			<div className='container'>
				<Header data={data} openContactMenu={openContactMenu} />
				<ProductWelcome
					image={prod7}
					title={'утеплитель RAVATEX XPS'}
					openContactMenu={openContactMenu}
				/>
				<Table />
				<div className='hot_sec'>
					<Title bigTitle='Применение теплоизоляции RAVATEX ХPS приносит пользу всем потребителям!' />
					<AutoResizeTextArea
						el={`С точки зрения экологической защиты RAVATEX ХPS способствует сокращению выбросов CO2 как из-за снижения потребления объектами энергоресурсов, так и из-за отсутствия вредных выбросов при производстве теплоизоляционного материала.`}
					/>
				</div>
				<div className='hotsec_cards'>
					{data1.map((card, index) => (
						<div key={index} className='card_hot penoplex'>
							<img src={card.image} alt='' />
							<h2>{card.title}</h2>
							<AutoResizeTextArea el={card.desc} />
						</div>
					))}
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
