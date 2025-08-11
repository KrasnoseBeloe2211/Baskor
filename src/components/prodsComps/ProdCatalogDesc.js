import React from 'react'
import AutoResizeTextArea from '../AutoResizeTextArea'
import Title from '../Title'

export default function ProdCatalogDesc({title, text}) {
	return (
		<div className='catalog_description_section'>
			<Title smallTitle={title}/>
			<div className='catalog_description_text'>
				<AutoResizeTextArea
					el={text}
				/>
			</div>
		</div>
	)
}
