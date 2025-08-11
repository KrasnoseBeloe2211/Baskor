import React from 'react'
import frame7 from '../styles/prods/Frame-7.png'
import frame1 from '../styles/prods/Frame-1.png'
import frame8 from '../styles/prods/Frame-8.png'


export default function AboutSection() {
	return (
		<div className='about_section'>
			<div className='catalog_title'>
				<h1 className='lil_title guide'>Немного о компании</h1>
				<h1 className='big_title guide'>ООО БАСКОР</h1>
				<div className='divider'></div>
			</div>
			<div className='about_cards'>
				<div className='about_card'>
					<h1>О нас</h1>
					<p>
						ПТК БАСКОР, молодая и энергичная компания, основанная в 2021 году.
						Мы специализируемся на оптовых поставках строительных материалов и
						инженерных решений по всей России.
					</p>
					<div className='about_img'>
						<img src={frame7} alt='' />
					</div>
				</div>
				<div className='about_card'>
					<h1>Каталог</h1>
					<p>
						На сайте представлены: геотекстиль, объемные георешетки, газонные
						решетки, геосетки дорожные, базальтовые сетки, геомембрана,
						профилированные мембраны, гидрошпонки, деформационные профили.
					</p>
					<div className='about_img'>
						<img src={frame1} alt='' />
					</div>
				</div>
				<div className='about_card'>
					<h1>Новости компании</h1>
					<p>
						ПТК Баскор продолжает активно развиваться и расширять ассортимент
						своей продукции, чтобы удовлетворить потребности клиентов и
						предложить им самые современные и качественные решения для различных
						областей применения геоматериалов.
					</p>
					<div className='about_img'>
						<img src={frame8} alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}
