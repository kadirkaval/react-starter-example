import React from 'react'

function Guarantee({img, title, description}) {
  return (
    <div className=''>
        <img src={img} className="mx-auto p-2 mb-5 h-[100px]"/>
        <h3 className='font-bold text-2xl mb-1 text-gray-600'>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Guarantee