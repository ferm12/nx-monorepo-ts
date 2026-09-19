import React, { useEffect } from 'react'

const apiArr = [ 'a', 'b', 'c' ]; 

function Macdonalds() {

    const [topping, setTopping] = React.useState<Record<string, boolean>>(() =>{
        return Object.fromEntries(apiArr.map((item) => [item, false])) as Record<string, boolean>
});
    console.log('Topping state:', topping);

    const [selectedToppings, setSelectedToppings] = React.useState<string[]>([]);


    const handleChange = (item: string) => {
        setTopping((prevTopping) => ({
             ...prevTopping,
             [item]: !prevTopping[item]
        }));
    }
    useEffect(() => {
        console.log('Toppings updated:', topping);
        setSelectedToppings(selected());
    }, [topping]);  

    function selected() {
        const selected: string[] = [];
        for (const key of Object.keys(topping)) {
            if (topping[key]) {
                selected.push(key);
            }
        }
        return selected;
    }

    return (
    <div>
        <h1>Welcome to McDonald's</h1>
        <div><input type='checkbox' onChange={() => handleChange('a')} /><label>a</label></div>
        <div><input type='checkbox' onChange={() => handleChange('b')} /><label>b</label></div>
        <div><input type='checkbox' onChange={() => handleChange('c')} /><label>c</label></div>
        <div>
            {
                selectedToppings.length == 0 
                ? (<p>No toppings selected</p>) 
                : selectedToppings.length == 1 
                    ? (<p>Selected Topping: {selectedToppings[0]}</p>)
                    : (<p>Selected Toppings: {selectedToppings.join(', ')}</p>)
            }
        </div>

    </div>
    )
}

export default Macdonalds
