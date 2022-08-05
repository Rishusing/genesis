import React from 'react'
import './Navbar.css'
import { CgProfile } from 'react-icons/cg'

const Navbar = () => {
    return (
        <div className='navMain'>
            <div className="navLeft">
                <div className="navItem x1"></div>
                <div className="navItem x2"><h2>Medical Darpan</h2></div>
                <div className="navItem x3">Home</div>
                <div className="navItem x4">Products</div>
                <div className="navItem x5">Distributors</div>
                <div className="navItem x6">Manufacturers</div>
                <div className="navItem x7">About us</div>
                <div className="navItem x8">Blog</div>
                
            </div>
            <div className="navRight">
                <div className="navLogin"><h3>Login</h3></div>
                <div className="navAvatar"><CgProfile/></div>
            </div>
        </div>
    )
}

export default Navbar