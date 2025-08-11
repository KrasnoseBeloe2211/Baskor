import React from 'react'
import ProductCard from './ProductCard'
import prod1 from './../styles/prods/Frame-1.png'
import prod2 from './../styles/prods/Frame-2.png'
import prod3 from './../styles/prods/Frame-3.png'
import prod4 from './../styles/prods/Frame-4.png'
import prod5 from './../styles/prods/Frame-5.png'
import prod6 from './../styles/prods/Frame-6.png'
import prod7 from './../styles/prods/Frame-7.png'
import prod8 from './../styles/prods/Frame-8.png'
import prod9 from './../styles/prods/Frame-9.png'
import prod10 from './../styles/prods/Frame-10.png'
import prod11 from './../styles/prods/frame11.png'
import prod12 from './../styles/prods/frame12.png'
import prod13 from './../styles/prods/Frame-13.png'
import prod14 from './../styles/prods/Frame-14.png'
import prod15 from './../styles/prods/Frame17.png'

export default function Catalog() {
	return (
		<div className='catalog_section' id='catalog'>
			<div className='catalog_title'>
				<h1 className='lil_title'>Какие геоматериалы</h1>
				<h1 className='big_title'>Вы можете купить у нас</h1>
				<div className='divider'></div>
			</div>
			<div className='product_list'>
				<ProductCard
					link='/hydroshponki'
					title='Гидрошпонки АКВАСТОП'
					image={prod3}
				/>
				<ProductCard link='/vilaterm' title='Вилатерм' image={prod10} />
				<ProductCard link='/gernit' title='Гернитовый шнур' image={prod13} />
				<ProductCard link='/geotextile' title='Геотекстиль' image={prod7} />
				<ProductCard
					link='/geogrid'
					title='Объемные георешетки'
					image={prod8}
				/>
				<ProductCard
					link='/grassgeogrid'
					title='Газонные георешетки'
					image={prod2}
				/>
				<ProductCard link='/geomembrana' title='Геомембрана' image={prod6} />
				<ProductCard
					link='/profmembrana'
					title='Профилированные мембраны'
					image={prod1}
				/>
				<ProductCard
					link='/roadgeogrid'
					title='Геосетки дорожные'
					image={prod9}
				/>
				<ProductCard
					link='/basaltgrid'
					title='Базальтовые сетки'
					image={prod5}
				/>
				<ProductCard
					link='/defprofile'
					title='Деформационные профили'
					image={prod4}
				/>
				<ProductCard
					link='/roadgeogrid'
					title='Теплоизоляционные материалы'
					image={prod14}
				/>
				<ProductCard link='/techsalt' title='Техническая соль' image={prod15} />
			</div>
		</div>
	)
}
