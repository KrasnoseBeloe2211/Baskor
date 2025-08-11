import React from 'react'
import AutoResizeTextArea from './AutoResizeTextArea'

export default function Usage({list}) {
  return (
    <div className='usage_section'>
      <h1>ПРИМЕНЕНИЕ</h1>
      <AutoResizeTextArea el={list}/>
    </div>
  )
}
