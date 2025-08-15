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
			<Helmet></Helmet>

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
							el={`ГЕО ГАЗОН – модульная газонная решетка. Сотовый материал, собираемый при помощи замковых соединений по краям модулей.

Модификации

• ГЕО ГАЗОН 40
	Высота: 40 мм
	Толщина стенки: 2,5 мм

• ГЕО ГАЗОН 50 ЛАЙТ
	Высота: 50 мм
	Толщина стенки: 3,0 мм

• ГЕО ГАЗОН 50
	Высота: 50 мм
	Толщина стенки: 3,5 мм
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
						text={`Газонные георешётки — современное решение для укрепления грунта и создания эстетичного травяного покрытия. Эта продукция изготавливается из прочных материалов, устойчивых к влаге, солнечному излучению и механическим воздействиям.

Основные плюсы использования: укрепление почвы и защита от эрозии, формирование ровного зелёного покрова, сокращение времени и затрат на обустройство территории, а также экологическая безопасность.

При подборе георешётки учитывайте: размер ячеек (должен соответствовать типу газонной травы), материал (лучше полипропилен или полиэтилен) и цветовое исполнение.

Закажите георешётку и получите долговечное газонное покрытие с минимальными затратами на обслуживание.`}
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
