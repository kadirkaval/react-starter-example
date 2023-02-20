import React from 'react'
import "../index.css";

function Guarantee({img, title, description}) {
  return (
    <div className=''>
        <img src={img} className="mx-auto mb-2 h-[20px]"/>
        <h3 className='text-2xl font-bold mb-2'>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Guarantee