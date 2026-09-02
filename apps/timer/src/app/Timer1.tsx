import {useState, useEffect, useRef, use} from 'react'

export default function Timer1(){
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        console.log('timer updated', timer);
    }, [timer])
    const ref = useRef(null)

    const start = () => {
        if (ref.current === null){
            ref.current = setInterval(() => 
                { setTimer(prev => prev + 1) }
            , 1000)
        }
    }
    const stop = () => {
        if(ref.current !== null) {
            clearInterval(ref.current)
            ref.current = null;
        }
    }

    const reset = () => {
        console.log('reset called', ref.current);
        if(ref.current === null) {
            clearInterval(ref.current)
            ref.current = null;
            setTimer(0);
        }
    }

    return(
        <>
            <div>{timer}</div>
            <button onClick={() => start()}>Start</button>
            <button onClick={() => stop()}>Stop</button>
            <button onClick={() => reset()}>Reset</button>
        </>
    );
}