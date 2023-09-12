import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('');
  const handleInput = (e) => setInputValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();                         //previene el comportamiento por dfecto del formulario
    if(inputValue.trim().length >2) //trim elimina espacios al principio y final del texto, aseguramos un texto de 3 letras
    setCategories(categories =>[inputValue,...categories]);
  }
    return (
    <form onSubmit={handleSubmit}>
        <input
            type='text'
            value={inputValue}
            onChange={handleInput}
        />
    </form>
  )
}

AddCategory.propTypes = {setCategories: PropTypes.func.isRequired}