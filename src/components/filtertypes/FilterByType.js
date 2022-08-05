
import React from 'react'
import './FilterByType.css'

const FilterByType = ({ data, head }) => {

    const handleclick = (e) => {
        e.target.style.backgroundColor = "rgb(0, 172, 129)"; 
    }

    return (
        <div className='fltbox'>
            <div className="heading">
                <h3>{head }</h3>
            </div>
            <div className="filterItems">
                {
                    data.map((val) =>
                        <div key={val.id} className="metoo">
                            <p onClick={handleclick}>{val.name } <span style={{color : "white"}}>x</span></p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default FilterByType