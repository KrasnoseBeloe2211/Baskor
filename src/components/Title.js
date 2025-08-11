import React from 'react'

export default function Title({smallTitle, bigTitle}) {
	return (
		<div className='catalog_title'>
			<h1 className='lil_title guide'>{smallTitle}</h1>
			<h1 className='big_title guide'>{bigTitle}</h1>
			<div className='divider'></div>
		</div>
	)
}
