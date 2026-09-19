import { Input } from 'postcss';
import React, { useEffect } from 'react'

// const initialArray=[
//     {
//         id:1,
//         title: 'Array Rotate',
//         description: 'Rotate an array by a given number of positions.',
//     },
//     {
//         id: 2,
//         title: 'Array Rotate Example',
//         description: 'Example of rotating an array.',
//     },
//     {
//         id: 3,
//         title: 'Array Rotate Challenge',
//         description: 'Challenge to rotate an array in a specific way.',
//     },  
//     {
//         id: 4,
//         title: 'Array Rotate Solution',
//         description: 'Solution to the array rotation challenge.',
//     },  
//     {
//         id: 5,
//         title: 'Array Rotate Tips',
//         description: 'Tips for rotating arrays efficiently.',
//     }
// ]



function ArrayRotate() {
    const [arrayRotate, setArrayRotate] = React.useState([]);
    const [value, setValue] = React.useState('');

    const handleDownClick = () => { // right rotation
        setArrayRotate(prevArray => {
            const n = prevArray.length;
            const last = prevArray[n - 1];
            return [last, ...prevArray.slice(0, n - 1)];
        });

        // const n = arrayRotate.length;
        // const last = arrayRotate[n - 1];
        // for (let i = n - 1; i > 0; i--) {
        //     arrayRotate[i] = arrayRotate[i - 1];
        // }
        // arrayRotate[0] = last;
    }
    const handleUpClick = () => { // left rotation
        setArrayRotate(prevArray => {
            const n = prevArray.length;
            const first = prevArray[0];                //0  1  2hbn.,..///3334
            return [...prevArray.slice(1, n), first]; //[a, b, c]
        });
        // const n = arrayRotate.length;
        // const first = arrayRotate[0];
        // for (let i = 0; i < n - 1; i++) {
        //     arrayRotate[i] = arrayRotate[i + 1];
        // }
        // arrayRotate[n - 1] = first;
    }
    const handleSubmit = () => {
        setArrayRotate(prevArray => [
            ...prevArray,
            {
                id: prevArray.length + 1,
                title: value,
                description: `Description for ${value}`,
            }
        ]);
        setValue('');
    }
    useEffect(() => {
        console.log('Array Rotate Component Mounted');
        return () => {
            console.log('Array Rotate Component Unmounted');
        }
    }, []);

    return (
        <div>
            <h1>Array Rotate</h1>
            <input 
                type="text"
                placeholder="Add comment"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />  
            <button 
                onClick={handleSubmit}>Submit
            </button>
            
            <ul>
                {arrayRotate.map(item => (
                    <li key={item.id}>
                        <span>{item.id}-{item.title}-{item.description}
                            <button onClick={() => handleUpClick(item.id)}>UP</button>
                            <button onClick={() => handleDownClick(item.id)}>DOWN</button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ArrayRotate
