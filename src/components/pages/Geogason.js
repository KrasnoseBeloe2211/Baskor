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
import prod7 from '../../styles/prods/frame12.png'
import { Helmet } from 'react-helmet'

export default function Geogason({ data }) {
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
						title={'георешетки ГЕО ГАЗОН'}
						openContactMenu={openContactMenu}
						nameclass={'gason'}
					/>
					<Table />
					<div className='welcome_p'>
						<Title bigTitle='ГЕО ГАЗОН' />
						<AutoResizeTextArea
							el={`ГЕО ГАЗОН – модульный сотовый материал (газонная решетка). Собирается с помощью замков, расположенных по краям модуля.

Виды:
   • ГЕО ГАЗОН 40 – георешетка высотой 40 мм, с толщиной стенки 2, 5 мм 
   • ГЕО ГАЗОН 50 ЛАЙТ– георешетка высотой 50 мм, с толщиной стенки 3, 0 мм 
   • ГЕО ГАЗОН 50 – георешетка высотой 50 мм, с толщиной стенки 3, 5 мм
            `}
						/>
					</div>
					<Usage
						list={` - Экопарковки

-Пешеходные дорожки

– Складские площади.

– Пожарные проезды, подъездые пути к зданиям и сооружениям

– Спортивные площадки

– Вертолетные взлетно-посадочные площадки.

– Для ипподрома и конюшен

– для дома и сада

Функции

-Армирование`}
					/>
					<div className='chars_section'>
						<ProdTable
							headers_prop={['Характеристика', 'Значение']}
							rows_prop={[
								['Страна производитель', 'Россия'],
								['Длина модуля, мм', '640'],
								['Количество модулей в 1 м2, шт	', '4'],
								['Материал', 'Полиэтилен высокой плотности (HDPE)'],
								['Цвет', 'Черный, зеленый'],
								['Ширина модуля, мм', '395'],
							]}
						/>
						<Advantage
							advantages={`• Защищает почву от вымывания и эрозии
• Сохраняет почвенную фауну
• Защищает поверхность от механического воздействия
• Простота укладки и обслуживания
• Надёжное соединение модулей
• Оптимальное распределение нагрузки`}
						/>
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
