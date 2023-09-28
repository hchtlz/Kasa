import './Host.css'
import React from "react";

export default function Host({image, name}) {
  return (
    <div className="host">
      <h4 className='host__name'>{name}</h4>
      <img src={image} alt={name} className='host__img'/>
    </div>
  )
}