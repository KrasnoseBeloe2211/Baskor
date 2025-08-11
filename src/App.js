// import Catalog from './components/Catalog'
// import Header from './components/Header'
// import Table from './components/Table'
// import WelcomeSection from './components/WelcomeSection'
// import ContactBtn from './components/ContactBtn'
// import RecomendationSection from './components/RecomendationSection'
// import OrderGuide from './components/OrderGuide'
// import AboutSection from './components/AboutSection'
// import CatalogDescription from './components/CatalogDescription'
// import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './components/pages/MainPage'
import ProductPage from './components/pages/ProductPage'
import prod1 from './styles/prods/Frame-1.png'
import prod2 from './styles/prods/Frame-2.png'
import prod3 from './styles/prods/Frame-3.png'
import prod4 from './styles/prods/Frame-4.png'
import prod5 from './styles/prods/Frame-5.png'
import prod6 from './styles/prods/Frame-6.png'
import prod7 from './styles/prods/Frame-7.png'
import prod8 from './styles/prods/Frame-8.png'
import prod9 from './styles/prods/Frame-9.png'
import { useState } from 'react'
import Geogrid from './components/pages/Geogrid'
import Vilaterm from './components/pages/Vilaterm'
import GrassGeogrid from './components/pages/GrassGeogrid'
import Geogason from './components/pages/Geogason'
import Ecoraster from './components/pages/Ecoraster'
import Geomembrana from './components/pages/Geomembrana'
import Profmembrana from './components/pages/Profmembrana'
import Basaltgrid from './components/pages/Basaltgrid'
import RoadGeogrid from './components/pages/RoadGeogrid'
import Hexagonal from './components/pages/Hexagonal'
import Polyprop from './components/pages/Polyprop'
import Glassgrid from './components/pages/Glassgrid'
import Polyephyr from './components/pages/Polyephyr'
import Gernit from './components/pages/Gernit'
import Hydroshponki from './components/pages/Hydroshponki'
import DefProfile from './components/pages/DefProfile'
import Hotmaterials from './components/pages/Hotmaterials'
import Rockwool from './components/pages/Rockwool'
import Penoplex from './components/pages/Penoplex'
import Ravatex from './components/pages/Ravatex'
import Techsalt from './components/pages/Techsalt'
import AboutUs from './components/pages/AboutUs'
import ContactPage from './components/pages/ContactPage'

function App() {
	const prods_data = [
		{
			link_type: 'single_link',
			route_name: 'Гидрошпонки',
			route: '/hydroshponki',
		},
		{
			link_type: 'single_link',
			route_name: 'Гернитовый шнур',
			route: '/gernit',
		},
		{
			link_type: 'single_link',
			route_name: 'Вилатерм - уплотнитель и изолятор',
			route: '/vilaterm',
		},
		{
			link_type: 'single_link',
			route_name: 'Геотекстиль',
			route: '/geotextile',
		},
		{
			link_type: 'single_link',
			route_name: 'Объемные георешетки',
			route: '/geogrid',
		},

		{
			link_type: 'multi_link',
			route_name: 'Газон. георешетки',
			sublinks: [
				{ route_name: 'Георешетки ECORASTER', route: '/ecoraster' },
				{ route_name: 'Георешетки ГЕО ГАЗОН', route: '/geogason' },
			],
			route: '/grassgeogrid',
		},
		{
			link_type: 'single_link',
			route_name: 'Геомембрана',
			route: '/geomembrana',
		},
		{
			link_type: 'single_link',
			route_name: 'Профилированные мембраны',
			route: '/profmembrana',
		},
		{
			link_type: 'single_link',
			route_name: 'Базальтовые сетки',
			route: '/basaltgrid',
		},
		{
			link_type: 'multi_link',
			route_name: 'Геосетки дорожные',
			sublinks: [
				{ route_name: 'Геосетки гексагональные', route: '/hexagonal_roadgrid' },
				{
					route_name: 'Геосетка полипропиленовая СД',
					route: '/polyproproadgrid',
				},
				{ route_name: 'Стеклосетка дорожная', route: '/road_glassgrid' },
				{ route_name: 'Геосетки полиэфирные', route: '/polyephyr_geogrid' },
			],
			route: '/roadgeogrid',
		},

		{
			link_type: 'single_link',
			route_name: 'Деформационные профили',
			route: '/defprofile',
		},
		{
			link_type: 'multi_link',
			route_name: 'Теплоизоляционные материалы (утеплители)',
			sublinks: [
				{ route_name: 'Утеплитель ROCKWOOL', route: '/rockwool' },
				{ route_name: 'ПЭНОПЛЕКС', route: '/penoplex' },
				{ route_name: 'RAVATEX XPS', route: '/ravatex' },
			],
			route: '/hotmaterials',
		},
		{
			link_type: 'single_link',
			route_name: 'Техническая соль',
			route: '/techsalt',
		},
	]

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainPage data={prods_data} />} />
				<Route path='/geotextile' element={<ProductPage data={prods_data} />} />
				<Route path='geogrid' element={<Geogrid data={prods_data} />} />
				<Route path='vilaterm' element={<Vilaterm data={prods_data} />} />
				<Route
					path='/grassgeogrid'
					element={<GrassGeogrid data={prods_data} />}
				/>
				<Route path='/geogason' element={<Geogason data={prods_data} />} />
				<Route path='/ecoraster' element={<Ecoraster data={prods_data} />} />
				<Route
					path='/geomembrana'
					element={<Geomembrana data={prods_data} />}
				/>
				<Route
					path='/profmembrana'
					element={<Profmembrana data={prods_data} />}
				/>
				<Route path='/basaltgrid' element={<Basaltgrid data={prods_data} />} />
				<Route
					path='/roadgeogrid'
					element={<RoadGeogrid data={prods_data} />}
				/>
				<Route
					path='/hexagonal_roadgrid'
					element={<Hexagonal data={prods_data} />}
				/>
				<Route
					path='/polyproproadgrid'
					element={<Polyprop data={prods_data} />}
				/>
				<Route
					path='/road_glassgrid'
					element={<Glassgrid data={prods_data} />}
				/>
				<Route
					path='/polyephyr_geogrid'
					element={<Polyephyr data={prods_data} />}
				/>
				<Route path='/gernit' element={<Gernit data={prods_data} />} />
				<Route
					path='/hydroshponki'
					element={<Hydroshponki data={prods_data} />}
				/>
				<Route path='/defprofile' element={<DefProfile data={prods_data} />} />
				<Route
					path='/hotmaterials'
					element={<Hotmaterials data={prods_data} />}
				/>
				<Route path='/rockwool' element={<Rockwool data={prods_data} />} />
				<Route path='/penoplex' element={<Penoplex data={prods_data} />} />
				<Route path='/ravatex' element={<Ravatex data={prods_data} />} />
				<Route path='/techsalt' element={<Techsalt data={prods_data} />} />
				<Route path='/about_us' element={<AboutUs data={prods_data} />} />
				<Route path='/contact' element={<ContactPage data={prods_data} />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
