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
import prod7 from '../../styles/prods/Frame-5.png'
import { Helmet } from 'react-helmet'

export default function Basaltgrid({ data }) {
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
		<>
			<Helmet>
				
			</Helmet>

			<div className='App'>
				<div className='background'></div>
				<div className='container'>
					<Header data={data} openContactMenu={openContactMenu} />
					<ProductWelcome
						image={prod7}
						title={'базальтовую сетку'}
						openContactMenu={openContactMenu}
					/>
					<Table />
					<div className='welcome_p'>
						<Title bigTitle='Базальтовая сетка' />
						<AutoResizeTextArea
							el='Базальтовые сетки – строительный материал, изготовленный из непрерывных волокон базальта. Их применяют:

   • для армирования стен перед отделочными работами;
   • для усиления фундаментов зданий и бетонных полов;
   • для укрепления склонов холмов, обочин дорог, берегов водоемов.
Базальтовые сетки продаются в рулонах, которые можно хранить неограниченно долго в любом подсобном помещении. Волокна базальта легко режутся строительными ножницами. Если сетчатое полотно не повреждено, его можно использовать повторно.


Базальтовые сетки по сравнению со своими металлическими аналогами обладают следующими преимуществами:

   • меньший вес – базальт весит в среднем 3 г/см3, а сталь – 7,85 г/см3;
   • стойкость к коррозии – постоянный контакт с водой не приводит к ослаблению базальтовой сетки или к разрыву соединений между нитями;
   • прочность на разрыв – нити выдерживают сильные нагрузки на растяжение. Они не рвутся и, растягиваясь, выдерживают давление сползающего грунта (до 50 кН/м2).
Волокна базальта к резким температурным перепадам. Они могут полностью обледенеть, но сохранить свою прочность. Базальт выдерживает нагревание до +700 градусов Цельсия и прямой контакт с открытым огнем.'
						/>
					</div>

					<OrderForm />

					<ProdRecomendationSection image={prod7} data={data} />
					<OrderGuide openContactMenu={openContactMenu} />
					<AboutSection />
					<ProdCatalogDesc
						title={
							'Базальтовая сетка: прочность, долговечность и экологичность для вашего строительства'
						}
						text={`Базальтовая сетка — это современный и надёжный материал, который широко используется в строительстве. Она изготавливается из базальтовых волокон, которые обладают высокой прочностью, стойкостью к коррозии и агрессивным средам.

Преимущества базальтовой сетки:

   • Прочность и долговечность. Базальтовая сетка способна выдерживать значительные нагрузки и не деформироваться со временем. Это обеспечивает надёжность и долговечность строительных конструкций.
   • Экологичность. Базальтовые волокна являются натуральным материалом, который не выделяет вредных веществ и не загрязняет окружающую среду.
   • Устойчивость к внешним воздействиям. Базальтовая сетка не подвержена гниению, плесени и воздействию грызунов, что делает её идеальным материалом для использования в условиях повышенной влажности и агрессивных сред.
   • Лёгкость и удобство монтажа. Базальтовая сетка легко режется и укладывается, что упрощает процесс монтажа и сокращает время выполнения работ.
   • Экономичность. Благодаря своей прочности и долговечности, базальтовая сетка позволяет сократить расходы на строительство, так как не требует частой замены и ремонта.
Применение базальтовой сетки:

Базальтовая сетка широко используется в различных областях строительства, таких как:

   • возведение жилых и общественных зданий;
   • строительство хозяйственных сооружений;
   • укрепление кладки из кирпича и строительных блоков;
   • создание гибких связей в стяжках полов, штукатурке и многослойных поверхностях стен;
   • дорожное строительство для увеличения срока эксплуатации дорожного полотна и предотвращения деформаций и трещин.
Базальтовая сетка — это идеальный выбор для тех, кто ценит качество, надёжность и экологичность в строительстве. Обращайтесь к нам, и мы поможем вам подобрать оптимальный вариант базальтовой сетки для вашего проекта!`}
					/>
				</div>
				<Footer openContactMenu={openContactMenu} />
				<ContactMenu
					closeContactMenu={closeContactMenu}
					contactMenu={contactMenu}
				/>
			</div>
		</>
	)
}
