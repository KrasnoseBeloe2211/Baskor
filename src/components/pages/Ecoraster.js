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
import prod7 from '../../styles/prods/frame11.png'
import { Helmet } from 'react-helmet'

export default function Ecoraster({ data }) {
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
						title={'георешетки ECORASTER'}
						openContactMenu={openContactMenu}
						nameclass={'gason'}
					/>
					<Table />
					<div className='welcome_p'>
						<Title bigTitle='ECORASTER' />
						<AutoResizeTextArea
							el={`Ecoraster – Газонные решетки ECORASTER соответствуют самым высоким стандартам качества и могут применяться в различных областях с целью укрепления грунта.`}
						/>
					</div>

					<div className='chars_section'>
						<AutoResizeTextArea
							el={`ECORASTER Е50 – используются для зон с повышенной рабочей нагрузкой: проезды спецтехники, автостоянки, складские площадки;`}
						/>
						<div className='prod_table'>
							<ProdTable
								headers_prop={['Характеристика', 'Значение']}
								rows_prop={[
									['Размеры', '33 х 33 х 5 см'],
									['Толщина стенки', 'до 7 мм'],
									['Вес ячейки', '1,05 кг'],
									['Материал', 'полиэтилен'],
									['Вес на кв.м', '9,45 кг'],
									['Площадь укладки', '57,19 м²'],
								]}
							/>
						</div>
						<AutoResizeTextArea
							el={`ECORASTER Е40 – универсальная газонная решетка с низкой ценой за м2; она характеризуется хорошими эксплуатационными свойствами и предназначена для укладки пешеходных дорожек, подъездных путей, прочее;`}
						/>
						<div className='prod_table'>
							<ProdTable
								headers_prop={['Характеристика', 'Значение']}
								rows_prop={[
									['Размеры', '33 х 33 х 4 см'],
									['Толщина стенки', 'до 5 мм'],
									['Вес ячейки', '0,72 кг'],
									['Материал', 'полиэтилен'],
									['Вес на кв.м', '6,48 кг'],
									['Площадь укладки', '73,15 м²'],
								]}
							/>
						</div>
						<AutoResizeTextArea
							el={`ECOGRID 33 – это облегченная георешетка в отдельном ценовом сегменте, модель имеет специальную структуру с усиленными стенками, которые позволяют выдерживать большие рабочие нагрузки; в этих решетках применяется специальная система гарпунной фиксации, исключающая случайное разъединение модулей;`}
						/>
						<div className='prod_table'>
							<ProdTable
								headers_prop={['Характеристика', 'Значение']}
								rows_prop={[
									['Размеры', '40 х 40 х 3,3 см'],
									['Толщина стенки', 'от 2 до 5 мм'],
									['Вес ячейки', '0,5 кг'],
									['Материал', 'полиэтилен'],
								]}
							/>
						</div>
					</div>
					<OrderForm />

					<ProdRecomendationSection
						nameclass={'gason'}
						image={prod7}
						data={data}
					/>
					<OrderGuide openContactMenu={openContactMenu} />
					<AboutSection />
					<ProdCatalogDesc
						title={'Продажа газонных георешеток'}
						text={`Газонные георешётки: надёжное решение для вашего участка

Представляем вам газонную георешётку — инновационное решение для укрепления грунта и создания красивого газона на вашем участке. Наша продукция изготовлена из высококачественных материалов, устойчивых к воздействию влаги, ультрафиолета и механических повреждений.

Преимущества газонной георешётки:

  • Укрепление грунта. Георешётка предотвращает эрозию почвы, обеспечивает стабильность и предотвращает проседание грунта.
  • Создание красивого газона. Благодаря нашей продукции, вы сможете создать ровный и густой газон, который станет украшением вашего участка.
  • Экономия времени и средств. Установка газонной георешётки занимает меньше времени, чем укладка традиционного газона, и позволяет сэкономить на материалах и рабочей силе.
  • Экологичность. Наши георешётки не содержат вредных веществ и не оказывают негативного воздействия на окружающую среду.
Как выбрать газонную георешётку?

При выборе газонной георешётки обратите внимание на следующие характеристики:

  • Размер ячейки. Он должен соответствовать размеру семян газонной травы, чтобы обеспечить равномерное прорастание и укрепление корневой системы.
  • Материал изготовления. Выбирайте продукцию из прочных и долговечных материалов, таких как полипропилен или полиэтилен.
  • Цвет. Газонные георешётки доступны в различных цветах, что позволяет выбрать оптимальный вариант для вашего участка.
Закажите газонную георешётку прямо сейчас и наслаждайтесь красивым и надёжным газоном на вашем участке!`}
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
