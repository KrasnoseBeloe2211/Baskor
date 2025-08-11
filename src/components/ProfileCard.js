import React from 'react'

export default function ProfileCard({image, text, title}) {
  return (
    <div className='prof_card'>
      <h4>{title}</h4>
      <img src={image} alt=''/>
      <p>{text}</p>
    </div>
  )
}
