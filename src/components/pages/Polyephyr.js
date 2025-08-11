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

export default function Polyephyr({ data }) {
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
					title={'геосетку полиэфирную'}
					openContactMenu={openContactMenu}
				/>
				<Table />
				<div className='welcome_p'>
					<Title bigTitle='Геосетки полиэфирные' />
					<AutoResizeTextArea
						el={`Плотность: 300 г/м²

Разрывные нагрузки: 50/50 кН/м

Размер ячейки: 40х40 мм

Материал: полиэфир

Пропитка битумная   
`}
					/>

					<ProdTable
						headers_prop={[
							'Наименование показателя',
							'Геосетка полиэфирная ПС 50/50-40',
						]}
						rows_prop={[
							[`Разрывная нагрузка, кН/м2 2 направления`, '50 50'],
							['Размер ячейки, мм	', '40×40'],
							['Ширина рулона	м', '5'],
							['Намотка	м', '100'],
							['Удлинение', '13'],
							['Допустимая потеря прочности на растжение', '10'],
							['Поверхностная плотность, г/м.кв”	', '300'],
							['Материал', 'Полиэфир'],
							['Пропитка', 'Битумная'],
						]}
					/>
					<AutoResizeTextArea
						el={`Геосетка для асфальтобетона служит для увеличения срока службы дороги и значительного замедления образования различных дефектов (колейность, трещины, выбоины). Это обусловлено общим повышением эксплуатационных характеристик дорожного полотна.
`}
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
