import React, { useState } from 'react'
import './FilterItem.css'

const FilterItem = () => {

    const [filter, setFilter] = useState([{ id: 1, title: "Aceclofenac" }, { id: 2, title: "500mg" }])
    
    const clearFilter = () => {
        setFilter([]);
    }

    const clear = (item) => {

        const newfilter = [];

        filter.forEach((val) => {
            if (val.id !== item.id) newfilter.push(val);
        })

        setFilter(newfilter)
        
    }

    return (
        <div className='filtMain'>
            <div className="filLeft">
                <h2 className="filterName">Paracetamol</h2>
                <h4 className="numberOfItem">(128 products)</h4>
            </div>
            <div className="filRight">
                {
                    filter.map((item) => 
                        <h5 key={item.id} >{item.title } <span onClick={() => clear(item)}>X</span></h5>
                    )
                }
            </div>
            <h5 onClick={clearFilter} className="removeAll">Remove all</h5>
        </div>
    )
}

export default FilterItem