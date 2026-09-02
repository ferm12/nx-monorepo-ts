import { useState } from 'react';
import { compileFunction } from 'vm';

const data = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Elderberry' },
];

export default function FilterSearch() {
    const [value, setValue] = useState('')

    const filteredData = data.filter(item => item.name.toLowerCase().startsWith(value.toLowerCase()))
                
    function compareFunction(a,b){
        if (a < b){
            return 1;
        }else if (a > b) 
            return -1;
        else{
            return 0;
        }





    }
    filteredData.sort(compareFunction)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <>
            <input 
                type="text" 
                placeholder="...search"
                value={value}
                onChange={handleChange}
            />
            {
                filteredData.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))
            }
        </>
    );
}