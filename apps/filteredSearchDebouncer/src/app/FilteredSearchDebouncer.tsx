import { useState, useEffect, useCallback } from 'react';
import  debouncer  from './utils';

interface Data {
    id: number;
    name: string;
}

const data: Data[] = [
    {
        id: 1,
        name: 'fermin'
    },
    {
        id:2,
        name:'arturo'
    },
    {
        id:3,
        name:'jose'
    },
    {
        id:4,
        name:'fernando'
    },
    {
        id:5,
        name:'maxi'
    },
    {
        id:6,
        name:'benny'
    }

]


export default function FilteredSearchDebouncer() {
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);

   
    const debouncerFn = (value) => {
        const filteredData = data.filter( item =>
            item.name.toLowerCase().startsWith(value.toLowerCase())
        )
        setFilteredData(filteredData)
    }

    const debouncerValue = useCallback( 
        debouncer(debouncerFn, 1000)
    , [])

    const onChangeHandler = (e) => {
        const value = e.target.value
        setSearchValue(value)
        debouncerValue(value)
    }
    return (
        <>
            <input
                type='text'
                placeholder='...search'
                value={searchValue}
                onChange={(e) => onChangeHandler(e)}
            />
            <ul>
            {
                filteredData.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))
            }
            </ul>
        
        </>
    
    )
}

