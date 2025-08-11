import React from 'react'
import prod7 from '../../styles/prods/Frame-7.png'

export default function ProdRecomendationSection({ image,data, nameclass }) {
	return (
		<div className='recommendation_table'>
			<div className='switcher'>
				<img className={`image ${nameclass}`} src={image} alt='' />
			</div>
			<div>
				<h1>Сэкономьте свое время, деньги и нервы</h1>
				<h2>на покупке геоматериалов</h2>
				<div className='eco_time'>
					<svg
						aria-hidden='true'
						class='clock_icon'
						viewBox='0 0 512 512'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z'></path>
					</svg>
					<p>
						Вам не нужно ждать неделями. Все нужные геоматериалы
						<strong> всегда есть в наличие.</strong>
					</p>
				</div>
				<div className='eco_time'>
					<svg
						aria-hidden='true'
						class='clock_icon'
						viewBox='0 0 640 512'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z'></path>
					</svg>
					<p>
						Своевременная доставка к Вам на объект, сэкономит Вам
						<strong> много времени.</strong>
					</p>
				</div>
			</div>
		</div>
	)
}
