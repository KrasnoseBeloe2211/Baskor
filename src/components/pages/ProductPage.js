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
import prod7 from '../../styles/prods/Frame-7.png'
import { Helmet } from 'react-helmet'

export default function ProductPage({ data }) {
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
		<div className='App'>
			<div className='background'></div>
			<div className='container'>
				<Header data={data} openContactMenu={openContactMenu} />
				<ProductWelcome
					image={prod7}
					title={'Геотекстиль'}
					openContactMenu={openContactMenu}
				/>
				<Table />
				<div className='welcome_p'>
					<Title bigTitle='Геотекстиль' />
					<AutoResizeTextArea el='Нетканый геотекстиль, изготовленный из ориентированных или хаотично расположенных полипропиленовых или полиэфирных волокон или мононитей, скреплённых иглопробивным способом, с последующей термической обработкой.' />
				</div>

				<div className='choose_section'>
					<Title bigTitle='Выбор' />
					<div className='choose_cards'>
						<button id='dornit' className='choose_button'>
							<img src={dornit} alt='' />
							<h1>Геотекстиль нетканый ДОРНИТ (полиэфир)</h1>
						</button>
						<button id='typar' className='choose_button'>
							<img src={typar} alt='' />
							<h1>Геотекстиль TYPAR</h1>
						</button>
					</div>
				</div>
				<Usage
					list={`   • предотвращение взаимопроникания крупнофракционных материалов и грунта
   • предотвращение или замедление процесса эрозии грунтов
   • предотвращение выноса грунтовых частиц в результате волнового воздействия, водного течения, давления воды из выклинивающихся водоносных горизонтов
   • предотвращение загрязнения традиционных дренажей
   • ускорение отвода воды в плоскости полотна

	Функции
   • Разделение
   • Фильтрация`}
				/>
				<div className='chars_section'>
					<ProdTable
						headers_prop={['Характеристика', 'Значение']}
						rows_prop={[
							['Страна производитель', 'Россия'],
							['Длина рулона, м', 'До 200'],
							['Материал', 'Синтетическое волокно'],
							['Поверхностная плотность', 'от 100 до 1000'],
							['Ширина рулона, м', 'до 6'],
						]}
					/>
					<Advantage
						advantages={`• Высокая сопротивляемость к механическим повреждениям
• Стойкость к биологическому и химическому воздействию
• Экологичность`}
					/>
				</div>
				<OrderForm />

				<ProdRecomendationSection image={prod7} data={data} />
				<OrderGuide openContactMenu={openContactMenu} />
				<AboutSection />
				<ProdCatalogDesc
					title={'Геотекстиль: инновации  в мире геоматериалов'}
					text={`Добро пожаловать в нашу компанию – надежного поставщика геотекстиля

Геотекстиль – современное нетканое полотно из полипропиленовых или полиэфирных волокон, ставшее незаменимым материалом в строительстве и ландшафтном дизайне. Его уникальные свойства открывают новые возможности для реализации сложных проектов.

Ключевые преимущества нашего геотекстиля:

• Исключительная прочность – устойчив к разрывам, УФ-излучению и агрессивным средам

• Оптимальная эластичность – сохраняет целостность при подвижках грунта

• Идеальная водопроницаемость – эффективно фильтрует воду, предотвращая вымывание грунта

• Надежный барьер – блокирует прорастание корней без вреда для растений

• Абсолютная экологичность – безопасен для окружающей среды

Основные сферы применения:
В дорожном строительстве материал укрепляет обочины и откосы, продлевая срок службы покрытий. Для железных дорог он становится защитой насыпей от деформаций. В гидротехнике предотвращает размывание дамб и каналов. Ландшафтные дизайнеры ценят его за возможность создавать устойчивые зеленые зоны и укреплять берега водоемов.

Мы предлагаем широкий выбор геотекстиля различных плотностей и характеристик. Наши специалисты помогут подобрать оптимальное решение для вашего проекта, учитывая особенности грунта и эксплуатационные требования.

Используйте передовые технологии в своих проектах – геотекстиль от нашей компании обеспечит надежность, долговечность и безупречный результат!`}
				/>
			</div>
			<Footer openContactMenu={openContactMenu} />
			<ContactMenu
				closeContactMenu={closeContactMenu}
				contactMenu={contactMenu}
			/>
		</div>
	)
}
