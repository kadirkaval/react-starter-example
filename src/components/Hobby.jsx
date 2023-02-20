import React from 'react'

function Hobby() {
    const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];
  return (
    <ul className='text-xl font-semibold'>
    {
        hobbies.map((hobby, index)=>(
            <li key={index}>{index+1}-{hobby}</li>
        ))
    }
    </ul>
  )
}

export default Hobby