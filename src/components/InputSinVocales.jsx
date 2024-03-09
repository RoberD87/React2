import React,{useState} from 'react';

const InputSinVocales = () => {

    const [inputValue,setInputValue] = useState('')

    const handleKeyDown = (event) => {
        const key = event.key.toLowerCase()
        const esVocal = 'aeiou'.includes(key)

        if(esVocal){
            event.preventDefault()
        }
    }

    return (

        <div>
            
            <h1>Input de texto sin vocales</h1>

            <input
            type='text'
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}
            onKeyPress={handleKeyDown}
            />
            <p>Texto ingresado: {inputValue}</p>

            
        </div>

    );
};

export default InputSinVocales;