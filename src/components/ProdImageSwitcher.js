import React, { useEffect, useState, useRef } from 'react'

export default function ProdImageSwitcher() {
  const [frame, setFrame] = useState('frame10')
  const indexRef = useRef(10)
  const totalFrames = 11 

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current =
        indexRef.current < totalFrames ? indexRef.current + 1 : 10
      setFrame(`frame${indexRef.current}`)
    }, 7000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div className='switcher'>
      <div className={`image switch_image ${frame}`}></div>
    </div>
  )
}
