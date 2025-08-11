import React from 'react'
import AutoResizeTextArea from './AutoResizeTextArea'

export default function Advantage({advantages}) {
	return (
		<div>
			<h1>ПРЕИМУЩЕСТВА</h1>
			<AutoResizeTextArea el={advantages} />
		</div>
	)
}
