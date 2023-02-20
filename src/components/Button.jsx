import React from 'react'

function Button({add}) {
  return (
    <div>
        <button className='py-2 px-4 border border-gray-300 bg-blue-500 text-white font-semibold rounded' onClick={add}>Add 1!</button>
    </div>
  )
}

export default Button