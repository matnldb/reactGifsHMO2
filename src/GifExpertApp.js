import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import GifGrid from './Components/GifGrid';
// import PropTypes from 'prop-types'

const GifExpertApp = props => 
{

    const [categories, setCategories] = useState(['MLB']);

    return (
    <>
        <h2>GifExpertApp</h2>;
        <AddCategory setCategories={setCategories}/>
        <hr/>;        
        {            
            <ol>
                {
                    categories.map(category => 
                         (
                            <GifGrid 
                                key = {category}
                                category={category}
                            />
                         )
                    )
                }
            </ol>
        }
    </>)
}

// GifExpertApp.propTypes = {}

export default GifExpertApp