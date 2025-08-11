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
				<ProdCatalogDesc title={"Геотекстиль: инновации  в мире геоматериалов"}
					text={`Добро пожаловать на сайт компании, занимающейся продажей геотекстиля — инновационного материала, который меняет представление о строительстве и ландшафтном дизайне.

Геотекстиль — это нетканое полотно, изготовленное из полипропиленовых или полиэфирных волокон. Он обладает уникальными свойствами, делающими его незаменимым в различных отраслях промышленности и строительства.

Основные преимущества геотекстиля:

  • Прочность и долговечность. Геотекстиль устойчив к механическим воздействиям, ультрафиолетовому излучению и химическим веществам, что обеспечивает долгий срок службы материала.

  • Эластичность. Геотекстиль способен растягиваться и возвращаться в исходное состояние без потери своих свойств, что делает его идеальным для использования в условиях нестабильных грунтов.

  • Водопроницаемость. Геотекстиль пропускает воду, но задерживает частицы грунта, что предотвращает вымывание почвы и обеспечивает стабильность конструкции.

  • Защита от корней. Геотекстиль препятствует прорастанию корней растений, что особенно важно при создании зелёных зон и укреплении склонов.

  • Экологичность. Геотекстиль изготавливается из натуральных материалов, не выделяющих вредных веществ, что делает его безопасным для окружающей среды.


Применение геотекстиля:

  • Дорожное строительство. Геотекстиль используется для укрепления обочин, откосов, мостов и путепроводов, обеспечивая стабильность и безопасность движения.

  • Железнодорожное строительство. Геотекстиль применяется для укрепления насыпей, тоннелей и мостов, предотвращая деформацию и разрушение конструкций.

  • Гидротехническое строительство. Геотекстиль используется для укрепления дамб, плотин и каналов, защищая сооружения от воздействия воды и предотвращая размывание грунта.

  • Ландшафтный дизайн. Геотекстиль применяется для создания зелёных зон, укрепления склонов и берегов водоёмов, обеспечивая стабильность и эстетическую привлекательность объектов.

Компания предлагает широкий ассортимент геотекстиля различных марок и плотности, изготовленного из высококачественных материалов. Наши опытные специалисты помогут вам выбрать оптимальное решение для вашего проекта, учитывая все особенности местности и требования к качеству и долговечности.

Не упустите возможность сделать свой проект надёжным, долговечным и эстетически привлекательным с помощью геотекстиля — инновационного материала, который изменит ваше представление о строительстве и ландшафтном дизайне.`}
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
