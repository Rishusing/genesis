import React, { useState } from 'react'
import './Product.css'
import image from './medicine.jpg'
import {FaTelegramPlane} from 'react-icons/fa'

const Products = () => {

    const [products, setProducts] = useState([
        {
            id: 1,
            title : "Favipiravir 400mg(Fabiflu) Tablets",
            img: image,
            price: "1,775",
            company: "Glenmark Pharmaceutical Limited",
            address : "PARVAT PATIYA, SURAT, GUJRAT"
        },
        {
            id: 2,
            title : "Favipiravir 400mg(Fabiflu) Tablets",
            img: image,
            price: "1,775",
            company: "Glenmark Pharmaceutical Limited",
            address : "PARVAT PATIYA, SURAT, GUJRAT"
        },
        {
            id: 3,
            title : "Favipiravir 400mg(Fabiflu) Tablets",
            img: image,
            price: "1,775",
            company: "Glenmark Pharmaceutical Limited",
            address : "PARVAT PATIYA, SURAT, GUJRAT"
        },
        {
            id: 4,
            title : "Favipiravir 400mg(Fabiflu) Tablets",
            img: image,
            price: "1,775",
            company: "Glenmark Pharmaceutical Limited",
            address : "PARVAT PATIYA, SURAT, GUJRAT"
        },
        {
            id: 5,
            title : "Favipiravir 400mg(Fabiflu) Tablets",
            img: image,
            price: "1,775",
            company: "Glenmark Pharmaceutical Limited",
            address : "PARVAT PATIYA, SURAT, GUJRAT"
        },
        {
            id: 6,
            title : "Favipiravir 400mg(Fabiflu) Tablets",
            img: image,
            price: "1,775",
            company: "Glenmark Pharmaceutical Limited",
            address : "PARVAT PATIYA, SURAT, GUJRAT"
        }
    ])

    return (
        <div className='productMain'>
            <div className="cards">
                {
                    products.map((val) => 
                        
                        <div key={val.id} className="card">
                            <img src={val.img} alt="" />
                            <div className="detail">
                                <h4 className='title'>{val.title}</h4>
                                <h3 className='price'>Rs {val.price} <span>/ stripe</span> </h3>
                                <h4 className='company'>{val.company} </h4>
                                <h4 className='address'>{val.address} </h4>
                            </div>
                            <div className='share'>
                                <FaTelegramPlane/>
                                <h3> Contact Supplier</h3>
                            </div>
                            <div className="faltu"></div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Products