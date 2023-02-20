import React from 'react'

function Hobby() {
    const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];
  return (
    <ul>
    {
        hobbies.map((hobby, index)=>(
            <li key={index}>{hobby}</li>
        ))
    }
    </ul>
  )
}

export default Hobby