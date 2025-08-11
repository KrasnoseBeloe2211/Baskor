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
import hexagonal from '../../styles/prods/hexgonal.webp'
import polyephyr from '../../styles/prods/Polyephyr.webp'
import polyprop from '../../styles/prods/polyprop.webp'
import glassgrid from '../../styles/prods/glassgrid.webp'
import { Helmet } from 'react-helmet'

export default function Hexagonal({ data }) {
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
					title={'геосетки гексагональные'}
					openContactMenu={openContactMenu}
				/>
				<Table />

				<AutoResizeTextArea
					el={`Характеристики: 

Прочность при растяжении при максимальной нагрузке, кН/м, не менее:

– вдоль: 19 кН/м,

– поперек: 18 кН/м,

– по диагонали: 18 кН/м.

Относительное удлинение при максимальной нагрузке, %, не более:

– вдоль: 15%,

– поперек: 15%,

– по диагонали: 15%.

Прочность соединения в узле: 90 %.

Ширина рулона: 4 метра.

Длина рулона: 50 метров.

Размер ячеек: 40х40х40 мм.
            




            
            Описание
Общее описание, основные области применения:

Плоские полипропиленовые решетки с гексагональной ячейкой, специально разработанные для строительства на слабых грунтах, а также для применения в конструкциях, воспринимающих высокие динамические или статические нагрузки. Использование триаксиальной (гексагональной) плоской трёхосной георешётки ТХ позволяет решить следующие задачи:

– сокращение толщины несущего слоя основания и увеличения сроков службы покрытия за счет повышения прочности слоя основания;

– улучшение условий формирования слоя основания за счет создания на контакте защитного слоя, препятствующего перемешиванию материалов несущего слоя основания и дополнительного слоя основания;

– улучшение работы дорожной конструкции под действием динамических нагрузок за счет обеспечения совместной работы отдельных частиц крупнофракционных материалов, объединенных в результате расположения в ячейках георешетки (блокировка крупнофракционного материала в ячейках георешетки).

Достигаемые результаты приводят к качественному улучшению дорожной конструкции, что может быть учтено количественно расчетами.

При армировании, триаксиальную (гексагональную) плоскую трёхосную георешетку ТХ располагают на поверхности песчаного дополнительного слоя основания (на поверхности земляного полотна при его отсутствии) под слоем несущего основания из крупнофракционного материала`}
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
