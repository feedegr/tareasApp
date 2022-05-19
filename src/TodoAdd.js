import React from 'react'
import { useForm } from './useForm';

export const TodoAdd = ({ handleAddTodo }) => {
  
    const [ { description }, handledInputChange, reset ] = useForm ({
        description:""
    });

    const handleSubmit = (e) => {
         e.preventDefault();
        if (description.trim().length <= 1){
            return;
        } 
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        
        handleAddTodo ( newTodo );
        reset();
    }
  
    return (
    <>
    <h4>Agregar Todo</h4>
        <hr/>

        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='description'
                placeholder='aprender...'
                className='form-control'
                autoComplete='off'
                value={ description }
                onChange={ handledInputChange }
                />

            <button 
                type='submit'
                className='btn btn-outline-primary mt-4 btn-block'
            > 
            Agregar 
            </button>

        </form>
    </>
  )
}
