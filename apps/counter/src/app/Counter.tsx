import { useState } from 'react';

export default function Counter(){

    const [counter, setCounter] = useState(0);

    const handleDecrement = () =>{
        setCounter(prev => prev - 1)
    }

    const handleIncrement = () =>{
        setCounter(prev => prev +1)
    }
    return (
        <>
            <div>{counter}</div>
            <button onClick={() => handleIncrement()}>+</button>
            <button onClick={() => handleDecrement()}>-</button>
        </>
    )
}