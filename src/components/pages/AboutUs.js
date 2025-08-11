import Header from '../Header'
import OrderGuide from '../OrderGuide'
import AboutSection from '../AboutSection'
import Footer from '../Footer'
import { useState } from 'react'
import ContactMenu from '../ContactMenu'
import Title from '../Title'
import { Helmet } from 'react-helmet'

export default function AboutUs({ data }) {
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
					<div className='about_us'>
						<Title bigTitle={'О нас'} />
						<div className='about_us_text'>
							<p>
								ПТК БАСКОР, молодая и энергичная компания, основанная в 2021
								году. Мы специализируемся на оптовых поставках строительных
								материалов и инженерных решений по всей России. Мы предлагаем
								только оригинальные, сертифицированные и проверенные материалы,
								чтобы вы могли быть уверены в надёжности и безопасности каждого
								проекта.
							</p>
							<h4>Что мы предлагаем</h4>
							<ul>
								<li>
									Широкий ассортимент строительных материалов — более 1000
									наименований всегда в наличии
								</li>
								<li>
									Комплексные поставки для транспортного, гражданского и
									гидротехнического строительства
								</li>
								<li>
									Высокое качество и сертификация продукции, соответствие
									российским стандартам
								</li>
								<li>
									Оптовые и розничные поставки с индивидуальным подходом
									Контрактное производство и инженерное сопровождение проектов
								</li>
								<li>Участие в тендерах, госзакупках и гособоронзаказах</li>
								<li>Систему скидок и акции для постоянных партнёров</li>
								<li>
									Быстрая доставка по всей России и странам ЕАЭС — от 1 дня
									благодаря отлаженной логистике
								</li>
								<li>Аккредитация на ключевых электронных торговых площадках</li>
								<li>
									Открытие спецсчёта в банке в течение 24 часов после подписания
									договора
								</li>
							</ul>
							<h4>Почему выбирают ПТК БАСКОР?</h4>
							<p>
								Мы ценим долгосрочное сотрудничество и строим наши отношения на
								доверии и взаимной поддержке. Наша цель — помочь вам сэкономить
								до 40% от сметной стоимости за счёт грамотного подбора
								материалов и оптимизации процессов.
							</p>
							<p>
								<strong>ПТК БАСКОР</strong> — ваш надёжный партнёр в мире
								строительных материалов. Давайте строить будущее вместе!
							</p>
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
