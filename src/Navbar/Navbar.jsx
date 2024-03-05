import React from 'react'
import "./Navbar.scss";
import { GrApple } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import { IoBag } from "react-icons/io5";
import { HiMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className="container">
                <div>
                    <GrApple className='nav-brand-icon' />
                </div>

                <div className='nav-items'>Store</div>
                <div className='nav-items'>Mac</div>
                <div className='nav-items'>iPad</div>
                <div className='nav-items'>iPhone</div>
                <div className='nav-items'>Watch</div>
                <div className='nav-items'>AirPods</div>
                <div className='nav-items'>Entertainment</div>
                <div className='nav-items'>Accessories</div>
                <div className='nav-items'>Support</div>

                <div className="nav-items-icon-div">
                    <div className='nav-items-icon'><GoSearch /></div>
                    <div className='nav-items-icon'><IoBag /></div>
                    <div className='nav-items-icon menu'><HiMenuAlt4 /></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar