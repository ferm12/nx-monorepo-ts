import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Search from './Search.tsx';
import SearchResults from './searchResults';

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
        <Search 
            value={value}
            setValue={setValue}
        />
        <SearchResults filteredData={filteredData} />


            {/* <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {filteredData.map((item, index) => (
                <div key={index}>{item}</div>
            ))} */}


    
        </>
    );



}
