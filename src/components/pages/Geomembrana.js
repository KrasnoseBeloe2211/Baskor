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
						el='Геомембраны марки ГММ представляют собой гидроизоляционный материал, изготавливаемый из полиэтилена высокой плотности (HDPE) или линейного полиэтилена низкой плотности (LLDPE). В зависимости от типа поверхности эти мембраны выпускаются в нескольких вариантах исполнения: гладкие (Smooth), гладкие с сигнальным слоем (Signal) для визуального контроля повреждений, композитные (Composite) с многослойной структурой и текстурированные (Textured) с усиленными адгезионными свойствами. Текстурированные геомембраны дополнительно подразделяются на два вида - с шероховатой поверхностью (R - Rough) и с шипованной текстурой (S - Spike), что позволяет подобрать оптимальное решение для различных гидроизоляционных задач в строительстве и инженерных сооружениях.

'
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
					text={`Геомембрана представляет собой современный геосинтетический материал, используемый для создания надежной гидроизоляции в различных строительных и инженерных сооружениях. Этот сплошной полимерный лист, выпускаемый различной толщины с гладкой или текстурированной поверхностью, обладает уникальными эксплуатационными характеристиками. В зависимости от используемого сырья и типа поверхности (гладкая, односторонняя или двусторонняя текстурированная) геомембраны демонстрируют исключительную прочность, эластичность и долговечность.

Материал отличается высокой устойчивостью к механическим повреждениям, перепадам температур, агрессивным средам, ультрафиолетовому излучению и воздействию микроорганизмов, сохраняя свои свойства на протяжении десятилетий. Экологическая безопасность в сочетании с простотой монтажа делает геомембрану оптимальным решением для широкого спектра задач.

Области применения охватывают практически все направления современного строительства: от гидроизоляции полигонов ТБО, токсичных отходов и промышленных объектов до создания искусственных водоемов, защиты нефтехранилищ и строительства дорожных покрытий. Материал успешно используется при укреплении откосов дамб, изоляции подземных сооружений, гидроизоляции фундаментов и многих других задачах.

Наши специалисты готовы подобрать оптимальный тип геомембраны с учетом специфики вашего проекта, выполнив все необходимые расчеты и предложив наиболее эффективное техническое решение.`}
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
