import { useEffect, useRef } from 'react'

export default function AutoResizeTextArea({el}) {
	const textareaRef = useRef(null)


	const initialText = el

	useEffect(() => {
		const el = textareaRef.current
		if (el) {
			el.style.height = 'auto' 
			el.style.height = el.scrollHeight + 'px' 
		}
	}, []) 

	return (
		// <textarea
		// 	ref={textareaRef}
		// 	defaultValue={initialText}
		// 	rows={1}
		//   disabled
		//   className='textarea'
		// />
		<>
			{el.split('\n').map((paragraph, i) => (
				<p key={i}>{paragraph}</p>
			))}
		</>
	)
}
