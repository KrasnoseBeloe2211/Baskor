import React from 'react'
import ContactBtn from './ContactBtn'

export default function OrderGuide({ openContactMenu }) {
	return (
		<div className='order_guide_section'>
			<div className='catalog_title'>
				<h1 className='lil_title guide'>Как сделать заказ</h1>
				<h1 className='big_title guide'>геоматериалов</h1>
				<div className='divider'></div>
			</div>
			<div className='steps'>
				<div className='step_card'>
					<h1>1</h1>
					<p>Вы оставляете заявку на сайте или звоните по телефону</p>
				</div>
				<div className='step_card'>
					<h1>2</h1>
					<p>Мы подбираем материал и готовим для вас решение</p>
				</div>
				<div className='step_card'>
					<h1>3</h1>
					<p>Предоставляем бесплатные образцы материалов</p>
				</div>
				<div className='step_card'>
					<h1>4</h1>
					<p>Подписываем договор и выставляем счет на оплату</p>
				</div>
				<div className='step_card'>
					<h1>5</h1>
					<p>Поставка материала на объект или самовывоз со склада</p>
				</div>
				<div className='step_card'>
					<h1>6</h1>
					<p>Передаем полный пакет сопроводительных документов</p>
				</div>
				<div className='free_contact_section little'>
					<div>
						<h1>Получите бесплатную консультацию</h1>
						<p>Наш менеджер на связи 24/7</p>
					</div>

					<ContactBtn
						openContactMenu={openContactMenu}
						content='БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ'
						className='free_dialog'
					/>
				</div>
			</div>
		</div>
	)
}
