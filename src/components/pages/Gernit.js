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
						list={`Назначение:
Используется для герметизации соединений сборных элементов ограждающих конструкций зданий.

Температурные характеристики:

ПРП-40: рабочий диапазон от -40°С до +70°С

ПРП-60: рабочий диапазон от -60°С до +70°С

Маркировка:
Пример: ПРП-40К.40.400

ПРП-40: пористая резиновая прокладка для температур -40°С...+70°С

К40: диаметр сечения 40 мм

400: группа плотности

Описание:
Пористые резиновые профили различных размеров, применяемые в строительстве для уплотнения стыков между элементами ограждающих конструкций.

Ключевые свойства:

Устойчивость к механическим нагрузкам

Водо- и влагостойкость

Стойкость к воздушным потокам

Пористая структура благодаря каучуку и пластификаторам

Технические параметры:

Соответствие ГОСТ 19177-81

Плотность: 400-800 ед.

Отсутствие трещин

Допустимы неровности до 20% сечения

Максимальное отклонение размеров: 6%

Применение:
Широко используется в строительстве для изоляции и герметизации швов, стыков и соединений. Альтернативное название - пористая резиновая прокладка (ПРП).`}
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
