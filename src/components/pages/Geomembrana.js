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
import prod7 from '../../styles/prods/Frame-6.png'
import { Helmet } from 'react-helmet'

export default function Geomembrana({ data }) {
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
					title={'геомембрану'}
					openContactMenu={openContactMenu}
				/>
				<Table />
				<div className='welcome_p'>
					<Title bigTitle='Геомембрана' />
					<AutoResizeTextArea
						el='Геомембраны марки ГММ предназначены для использования в качестве гидроизоляционной прослойки. Изготавливаются из полиэтилена высокой плотности HDPE или линейного полиэтилена низкой плотности LLDPE.
Геомембраны марки ГММ подразделяются в зависимости от типа исполнения: гладкая («Smooth»), гладкая с сигнальным слоем («Signal»), композитная («Composite») и текстурированная («Textured»). Текстурированная геомембрана подразделяется в зависимости от текстурированной поверхности – на шероховатую текстуру («R» – Rough) или текстуру в форме шипов («S» – Spike).'
					/>
				</div>
				<Usage
					list={`   • Устройство противофильтрационных экранов гидротехнических сооружений, хвостохранилищ, шламонакопителей, накопителей ТКО и промышленных отходов
   • Устройство гидроизоляционных прослоек в конструкциях автомобильных и железнодорожных дорог
   • Устройство противофильтрационной защиты пожарных водоемов, резервуаров для хранения нефтепродуктов, сточных вод
   • предотвращение загрязнения традиционных дренажей
   • Гидроизоляционное покрытие бетонных, кирпичных и других поверхностей

  Функции
   • Гидроизоляция `}
				/>
				<div className='chars_section'>
					<ProdTable
						headers_prop={['Страна производитель', 'Россия']}
						rows_prop={[
							['Страна производитель', 'Россия'],
							['Длина рулона, м', 'до 200'],
							['Материал', 'Полиэтилен (ПНД'],
							['Номинальная толщина, мм, ± 10 %', 'от 0,3 до 3,00'],
							['Ширина рулона, м', 'до 6,6'],
						]}
					/>
					<Advantage
						advantages={`• высокие гидроизоляционные свойства

• устойчивость к кислотам и щелочам в диапазоне рН от 0,5 до 14
• устойчивость к высоким и низким температурам ( +60 -70 °С)
• устойчивость к УФ излучению
• отсутствие токсичности и экологическая безопасность`}
					/>
				</div>
				<OrderForm />

				<ProdRecomendationSection image={prod7} data={data} />
				<OrderGuide openContactMenu={openContactMenu} />
				<AboutSection />
				<ProdCatalogDesc
					title={'Геомембрана: надёжная защита и долговечность в строительстве'}
					text={`Геомембрана — это геосинтетический материал, предназначенный для обеспечения надёжной и долговечной гидроизоляции в различных строительных конструкциях, включая промышленные, гражданские, геотехнику и инжиниринг окружающей среды.

Что такое геомембрана?

Геомембрана — это сплошной полимерный лист различной толщины с гладкой или текстурированной поверхностью. Текстурирование может быть односторонним или двусторонним. Свойства геомембран зависят от исходного сырья.

Основные достоинства геомембраны:

прочность;

эластичность;

экологичность;

долговечность;

простота монтажа;

устойчивость к механическим повреждениям;

устойчивость к перепадам температуры;

устойчивость к воздействию агрессивных сред;

устойчивость к воздействию микроорганизмов;

устойчивость к ультрафиолетовому облучению.

Где применяется геомембрана?

Геомембрана широко применяется в различных областях строительства и инженерии:

укрепление откосов дамб;

создание искусственных водоёмов;

гидроизоляция полигонов ТБО и ПО;

гидроизоляция полигонов по утилизации снега;

гидроизоляция зернохранилищ и силосных ям;

создание защитного фильтра для нефтехранилищ и нефтепроводов;

создание защитного экрана для площадок кучного выщелачивания меди и золота;

гидроизоляция золоотвалов;

изоляция могильников, ядерных и других токсических отходов;

гидроизоляция плотин, дамб и каналов;

изоляция подвалов, туннелей и других подземных сооружений;

гидроизоляция фундаментов;

строительство гидрометаллургических площадок;

строительство дорог и аэродромов.

Как выбрать геомембрану?

Наши специалисты подготовят расчёт и подберут подходящий материал с учётом индивидуальных особенностей вашего проекта.`}
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
