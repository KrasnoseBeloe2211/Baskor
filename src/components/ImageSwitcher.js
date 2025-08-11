import React, { useEffect, useState, useRef } from 'react'

export default function ImageSwitcher() {
	const [frame, setFrame] = useState('frame1')
	const indexRef = useRef(1)
	const totalFrames = 9 

	useEffect(() => {
		const interval = setInterval(() => {
			indexRef.current =
				indexRef.current < totalFrames ? indexRef.current + 1 : 1
			setFrame(`frame${indexRef.current}`)
		}, 7000)

		return () => clearInterval(interval)
	}, [])
	return (
		<div className='switcher'>
			<div className={`image ${frame}`}></div>
		</div>
	)
}
