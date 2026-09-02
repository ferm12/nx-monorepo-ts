import {useState, useEffect} from 'react';

export default function Calculator(){
    const [result, setResult] = useState(0);
    const [operation, setOperation] = useState('')
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);

    useEffect(() =>{
        let input11 = parseInt(input1);
        let input22 = parseInt(input2);
        
        if (operation === '+'){
            setResult(input11 + input22)
        }else if (operation === '-'){
            setResult(input11 - input22)
        }else if (operation === '*'){
            setResult(input11 * input22)
        }else if (operation === '/'){
            setResult(input11 / input22)
        }

    }, [operation]);

    const reset = () =>{
        setOperation('');
        setInput1(0);
        setInput2(0);
    }
    return (
        <>
            <label>input 1</label>
            <input type='number' value={input1} onChange={(e) => setInput1(e.target.value)}/>
            <br/>

            <label>input 2</label>
            <input type='number' value={input2} onChange={(e) => setInput2(e.target.value)}/> 
            
            <button type='submit' onClick={() => setOperation('+')}>+</button>
            <button type='submit' onClick={() => setOperation('-')}>-</button>
            <button type='submit' onClick={() => setOperation('*')}>*</button>
            <button type='submit' onClick={() => setOperation('/')}>/</button>
            <button onClick={() => reset()}>Reset</button>

            <div>Result: {result}</div>
        </>
    );
}