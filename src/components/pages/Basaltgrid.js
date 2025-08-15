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
			<Helmet></Helmet>

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
							el='Базальтовые сетки производятся из непрерывных базальтовых волокон и широко применяются в строительстве:

   • армирование стен перед нанесением штукатурки или других отделочных материалов;

   • усиление фундаментов и бетонных стяжек;

   • укрепление откосов, дорожных обочин и береговых линий.

Этот материал поставляется в рулонах, которые удобно хранить в подсобных помещениях без ограничения по сроку. Резать базальтовые волокна можно обычными строительными ножницами, а при отсутствии повреждений сетку можно использовать повторно.

Преимущества перед металлическими аналогами

   • Легкость – плотность базальта всего 3 г/см³ против 7,85 г/см³ у стали.

   • Коррозионная стойкость – не разрушается от влаги, сохраняя прочность соединений.

   • Высокая прочность на разрыв – выдерживает нагрузку до 50 кН/м², устойчива к давлению грунта.

   • Термостойкость – не теряет свойств при -60°C или +700°C, не горит и не плавится.

Базальтовая сетка сохраняет прочность даже при обледенении и прямом контакте с огнем, что делает её надежным решением для сложных условий эксплуатации.'
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
