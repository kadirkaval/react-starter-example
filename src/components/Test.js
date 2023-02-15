import { useEffect, useState } from "react";

function Test(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/'+count)
      .then(response => response.json())
      .then(json => console.log(json))
    }, [count]);

    return(
        <div>
            <h1 className="text-2xl py-3">{count}</h1>
            <button onClick={()=>setCount(count => count+1)}>Arttır</button>
            <hr></hr>
         Test components
        </div>
    )
}

export default Test;