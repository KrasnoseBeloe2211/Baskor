import Header from '../Header'
import Table from '../Table'
import OrderGuide from '../OrderGuide'
import AboutSection from '../AboutSection'
import Footer from '../Footer'
import { useEffect, useState } from 'react'
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
import prod7 from '../../styles/prods/Frame-13.png'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function Gernit({ data }) {

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
					title={'гернитовый шнур'}
					openContactMenu={openContactMenu}
				/>
				<Table />
				<div className='welcome_p'>
					<Title bigTitle='Гернитовый шнур' />

					<Usage
						list={`   Назначение:
Предназначены для уплотнения стыков сборных элементов ограждающих конструкции зданий.

ПРП-40 -Температурный интервал эксплуатации от – 40ºС до +70ºС.

ПРП-60 -Температурный интервал эксплуатации от – 60ºС до +70ºС.

Условное обозначение:

ПРП-40К.40.400

ПРП-40-Прокладка резиновая пористая для условий с температурным диапазоном -40°С +70°С

К40-диаметр сечения – 40мм 400-группа плотности

Пористые профили различных размеров и сечений для строительной сферы. Основная область применения подобных изделий – уплотнение стыков между отдельными элементами в оградительных конструкциях зданий.

Обладают высокой устойчивостью к механическим воздействиям, влиянию воды, влажности, воздушных потоков.

Содержат в своем составе каучук и пластификаторы, использование которых обеспечивает пористость изделий.

Шнур гернитовый ПРП-40, ПРП-60: 

Соответствие производства ГОСТу 19177-81.

Плотность – от 400 до 800 единиц.

ПРП-40 предназначен для работы в режиме температур от -40°С до +70°С.

ПРП-60 – исправно функционирует при температуре от -60°С до +70°С.   

Пористые резиновые профили не имеют трещин. На изделиях допускаются углубления и выпуклости размером не более 20% от величины сечения. Корректировка и изменения линейных размеров запрещено превышало 6% от номинала.

Гернит, или гернитовый шнур, широко используется в строительстве: для изолирования и герметизации различных швов, различных стыков и соединений и для многого другого. ещё его называют ПРП (пористая резиновая прокладка)`}
					/>

					<ProdTable
						headers_prop={['Марка', 'Размер (диаметр), мм']}
						rows_prop={[
							['Гернитовый шнур ПРП-40К.8.400', '8'],
							['Гернитовый шнур ПРП-40К.10.400	', '10'],
							['Гернитовый шнур ПРП-40К.15.400	', '15'],
							['Гернитовый шнур ПРП-40К.20.400	', '20'],
							['Гернитовый шнур ПРП-40К.25.400	', '25'],
							['Гернитовый шнур ПРП-40К.30.400	', '30'],
							['Гернитовый шнур ПРП-40К.35.400	', '35'],
							['Гернитовый шнур ПРП-40К.40.400	', '40'],
							['Гернитовый шнур ПРП-40К.50.400	', '50'],
							['Гернитовый шнур ПРП-40К.60.400	', '60'],
							['Гернитовый шнур ПРП-40К.70.400	', '70'],
							['Гернитовый шнур ПРП-40К.80.400	', '80'],
							['Гернитовый шнур ПРП-40К.90.400	', '90'],
							['Гернитовый шнур ПРП-40К.100.400	', '100'],
							,
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
