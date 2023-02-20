import React, { useState } from 'react'
import Button from './Button';
import Count from './Count';


function Counter() {
    const [count, setCount] = useState(0);
    function add(){
        setCount(count+1);
    }
  return (
    <div className='border border-gray-500 w-[200px] p-5 flex space-x-5 mx-auto'>
        <Count count={count}/>
        <Button add={add}/>
    </div>
  )
}

export default Counter