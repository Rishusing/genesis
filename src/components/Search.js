import React from 'react'
import './Search.css'

const Search = () => {
    return (
        <div className='searchMain'>
            <input type="text" placeholder='Enter Medicine' />
            <button>Search</button>
        </div>
    )
}

export default Search