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

export default function Glassgrid({ data }) {
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
					title={'стеклосетку дорожную'}
					openContactMenu={openContactMenu}
				/>
				<Table />
				<div className='welcome_p'>
					<Title bigTitle='Стеклосетка дорожная' />
					<AutoResizeTextArea
						el='Стекловолоконные нити геосетки изготовлены из прочных ровингов, за счет чего материал способен обеспечить повышенную износоустойчивость дорожной конструкции при вертикальных и горизонтальных статический и динамических напряжениях.        
          
Описание
Стеклосетка – это нитепрошивная сетка ячеистой структуры, изготовленная из прочных и эластичных обработанных битумным составом стекловолоконных нитей, узлы которых скреплены прошивной нитью. Стекловолоконные нити геосетки  изготовлены из прочных ровингов, за счет чего материал способен обеспечить повышенную износоустойчивость дорожной конструкции при вертикальных и горизонтальных статический и динамических напряжениях. Таким образом, стеклосетка дорожная находит широкое применение в дорожном проектировании и строительстве в качестве функционального конструкционного слоя для распределения нагрузок и повышения качества готового дорожного покрытия со значительным увеличением срока его службы.'
					/>
					<Usage
						list={`   • Армирование конструкций автомобильных дорог общего пользования IV-V категорий;
   • Армирование асфальтобетонных покрытий рулежных дорожек, мест стоянок, а также других вспомогательных сооружений инфраструктуры аэропортов;
   • Армирование асфальтобетонных слоев проездов дворовых территорий, мест стоянок автомобильного транспорта.
 

Стекловолоконные геосинтетические материалы не только повышают качественно-эксплуатационные характеристики дорожных конструкций и увеличивают срок службы магистральных покрытий, но и значительно снижают затраты на устройство, ремонт, обслуживание и эксплуатацию автомобильных дорог. Поэтому проектирование строительства дорог в большинстве стран Европы уже много лет ведется с применением геосинтетики в целом и стеклосетки в частности.

 

Применение стеклосетки гарантирует эффективную защиту покрытия из асфальтобетона от различных типов трещин:
– температурные – возникающие от напряжений при температурном воздействии.
– отраженные – дублирующие трещины нижележащего слоя дорожной одежды.
– усталостные – возникающие при многократных нагрузках и являющиеся следствием усталостного типа разрушения асфальтобетонного покрытия.`}
					/>

					<ProdTable
						headers_prop={['Наименование', 'Стеклосетка 50/50-40']}
						rows_prop={[
							['Длина рулона, м	', '100'],
							['Ширина рулона, м	', '4'],
							['Размер ячейки, мм	', '40×40'],
							['Прочность на разрыв, кН/м продольная (основа)	', '50'],
							['Прочность на разрыв,  кН/м поперечная (уток)	', '50'],
							['Относительное удлинение при разрыве, %	', '≤3%'],
							[
								'Допустимая потеря прочности на растяжение',
								' не более 10 %',
							],
							['Температурный диапазон применения	', 'от -100° до +280°C'],
							['Содержание связующего вещества	', '≤20%'],
							['Пропитка', 'Битумно-акриловая'],
							['Материал	', 'Стекловолокно'],
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
