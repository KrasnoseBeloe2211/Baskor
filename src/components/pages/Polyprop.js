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


export default function Polyprop({ data }) {
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
					title={'геосетку полипропиленовую'}
					openContactMenu={openContactMenu}
				/>
				<Table />
				<div className='welcome_p'>
					<Title bigTitle='Геосетка полипропиленовая СД' />
					<AutoResizeTextArea el='Геосетка СД применяется для армирования дорожного полотна на разделение материалов разных фракций, служит как барьер, предотвращая проникание насыпного слоя в нижние слои. Использование двуосной георешетки позволяет сэкономить на количестве фракционных материалов (гравий, щебень), а также на трудозатратах выполняемых работ.' />
					<ProdTable
						headers_prop={[
							'Наименование показателей	',
							'Единицы измерения	',
							'Итоговое значение',
						]}
						rows_prop={[
							['Масса на единицу площади не менее', 'г/м2', '110'],
							['Ширина рулона	', 'г/м2', '110'],
							['Длина рулона', 'м', '50'],
							[
								'Прочность на разрыв не менее: – вдоль – поперек',
								'  кН/м кН/м	',
								'  10 10',
							],
							[
								'Усиление на растяжение при удлинении 2%: – вдоль – поперек	',
								'  кН/м кН/м	',
								'9 9',
							],
							[
								'Усиление на растяжение при удлинении 2%: – вдоль – поперек		',
								'  кН/м кН/м	',
								'10 10',
							],
							[
								'Относительное удлинение при максимальной нагрузке не более	',
								'% %',
								'10 10',
							],
							['Масса рулона	', 'кг', '22'],
							['Рулон', 'м2', '200'],
							['Диаметр рулона	', 'см', '40'],
						]}
					/>
					<AutoResizeTextArea
						el={`Описание
Геосетка СД — армирующий и разделительный материал. Производится из полипропиленового волокна методом экструзии, когда после нанесения преформации материал растягивается в двух направлениях до появления ячеек заданного стандарта. Такой подход сохраняет целостность структуры, что повышает надежность и устойчивость на разрыв.

Геосетка СД  имеет ячейки размером 40 на 40 с допустимой погрешностью до 2 мм.`}
					/>
				</div>

				<Usage
					list={`Геосетка СД — считается самым востребованным в строительстве материалом среди плоских двуосноориентированных георешеток. Она используется в основном для армирования и разделения прослоек дорожной одежды.

А также:

   • Армирует откосы.
   • Укрепляет овраги и склоны.
   • Используется между грунтом и бетонными плитами.
   • Армирует подпорные стены.
   • Укрепляет слабые грунты.
   • Используется при обустройстве дорожек с повышенными нагрузками.
   • Сводит риск образования ям к нулю.
   • Эффективно разделяет слои дорожной одежды.
   
Как применять?

Геосетка укладывается на основание, после чего засыпается щебнем или гравием с размером фракций от 20 до 40 мм. Просто. Быстро. Надежно.

 

Материал не подвержен разрушению микроорганизмами и грибками, имеет выраженную устойчивость к химическому воздействию веществ как внешних, так и находящихся в почве.

Однако геосетка чувствительна к ультрафиолетовому излучению, поэтому для защиты во время транспортировки, хранения и укладки в материал добавляют технический углерод.

Важно знать! Где не стоит использовать полипропиленовую геосетку:
Полипропиленовая геосетка не используется под асфальт, т.к. температура при которой сетка плавится ниже, чем температура горячего асфальта. Под асфальт применяются сетки другого типа (стеклянные, базальтовые, полиэфирные) с битумной пропиткой.

Также не рекомендуется использовать полипропиленовую сетку без щебня, камня, гравия, т.к. основная задача сетки, заклинивание щебня и других ПГС в ячейках и создание прочного композитного слоя.`}
				/>
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
