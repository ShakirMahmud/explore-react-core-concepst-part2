import { useState } from "react";
import { BsArrowCounterclockwise } from "react-icons/bs";
export default function Counter() {
    const [count, setCount] = useState(0);
    const handleAdd =()=>{
        const newCount = count+1;
        setCount(newCount);
    }
    const handleReduce = () =>{
        const newCount = count-1;
        setCount(newCount);
    }
    return (
        <div style={{border:'2px solid red'}}>
            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}><BsArrowCounterclockwise /> Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}