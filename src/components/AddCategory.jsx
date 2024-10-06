import { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {
    const [valor, setValor] = useState('');

    const handleChange = ({ target }) => {
        setValor(target.value);
        console.log(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(valor.trim().length > 0){
            onAddCategory(valor);
        }
        setValor('');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" placeholder="Buscar gifs" onChange={ handleChange } value={ valor }/>
        </form>
    )
}
