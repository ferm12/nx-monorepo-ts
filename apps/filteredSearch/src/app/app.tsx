import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  // Your style here
`;

const data = [
    'fermin',
    'max',
    'ben'
]
export default function App(){
    const [value, setValue] = useState('')
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        const timerId = setTimeout(() =>{
            setFilteredData(data.filter(item =>
                item.toLowerCase().startsWith(value.toLowerCase()))
            )
            console.log('value',value );
        }
        , 1000)

        return () => clearTimeout(timerId)
    }, [value])

    return (
        <>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {filteredData.map((item, index) => (
                <div key={index}>{item}</div>
            ))}


    
        </>
    );



}
