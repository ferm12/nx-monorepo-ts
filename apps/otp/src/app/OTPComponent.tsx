import react, {useState, useEffect, useRef} from 'react';

interface Props{
    len:number
}


export default function OTPComponent(props: Props){
    const { len } = props
    const arr = new Array(len).fill(1)
    const [value, setValue] = useState(new Array(len).fill(''))

    const refs = useRef<HTMLInputElement[]>([])

    const onChangeHandler = (e, index) => {
        const isNum = RegExp(/^\d$/).test(e.target.value)
        if (!isNum) {
            const newValue = [...value];
            newValue[index] = ''
            setValue(newValue)
            return
        }

        const newValue = [...value];
        newValue[index] = e.target.value
        setValue(newValue)
        if (index < len - 1) {
            refs.current[index + 1].focus()
        }
    }
    return (
        <>
            {
                arr.map((el, index) => (
                    <input
                        key={index}
                        type='text'
                        value={value[index]}
                        onChange={(e) => onChangeHandler(e, index)}
                        maxLength={1}
                        ref = { (el) => 
                            refs.current[index] = el
                        }
                    /> 
                ))
            }
        </>
    )
}
