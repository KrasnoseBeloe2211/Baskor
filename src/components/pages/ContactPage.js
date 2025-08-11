import Header from '../Header'
import OrderGuide from '../OrderGuide'
import AboutSection from '../AboutSection'
import Footer from '../Footer'
import { useState } from 'react'
import ContactMenu from '../ContactMenu'
import Title from '../Title'
import Ymaps from '../Ymaps'
import map_icon from '../../styles/map.svg'
import email_icon from '../../styles/email.svg'
import truck_icon from '../../styles/truck.svg'
import phone_icon from '../../styles/phone.svg'
import { Helmet } from 'react-helmet'

export default function ContactPage({ data }) {
  const [contactMenu, setContactMenu] = useState('contact_menu')
  function openContactMenu() {
    console.log('Открываем меню')
    setContactMenu('contact_menu active')
  }
  function closeContactMenu() {
    setContactMenu('contact_menu')
  }

  return (
		<>
			<Helmet>
				
			</Helmet>
			
			<div className='App'>
				<div className='background'></div>
				<div className='container'>
					<Header data={data} openContactMenu={openContactMenu} />
					<div className='contact_page_section'>
						<Title bigTitle={'Контакты'} />
						<div className='c_pafe'>
							<div className='contact_address_cards'>
								<div className='contact_adderss'>
									<img alt='' src={map_icon} />
									<p>
										Ю117648, г. Москва, вн. тер. г. муниципальный округ
										Чертаново Северное, мкр. Северное Чертаново, д. 5, к. Г,
										помещ. 6Ц
									</p>
								</div>
								<div className='contact_adderss'>
									<img alt='' src={truck_icon} />
									<p>
										Широкая складская сеть - оперативная доставка по всей
										стране.
									</p>
								</div>
								<div className='contact_adderss'>
									<img alt='' src={email_icon} />
									<p>zakaz@ptk-baskor.ru</p>
								</div>
								<div className='contact_adderss'>
									<img alt='' src={phone_icon} />
									<p>8-(986)-295-82-89</p>
								</div>
							</div>
							<Ymaps />
						</div>
					</div>
					<OrderGuide openContactMenu={openContactMenu} />
					<AboutSection />
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
