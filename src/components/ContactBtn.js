import React from 'react'

export default function ContactBtn({ content, className, openContactMenu }) {
	if (className === 'free_dialog') {
		return (
			<div>
				<button onClick={openContactMenu} className={className}>
					{content}
					<div className='flash'></div>
				</button>
			</div>
		)
	}
	return (
		<div>
			<button type='button' className={className} onClick={openContactMenu}>
				{content}
			</button>
		</div>
	)
}
