import React from 'react'
import frame1 from '../styles/prods/Frame-7.png'
import { Link } from 'react-router-dom'

export default function ProductCard({title, image, link}) {
	return (
		<Link to={link}>
			<div className='product_card'>
				<img className='card_image' src={image} alt='' />
				<h2>{title}</h2>
			</div>
		</Link>
	)
}
