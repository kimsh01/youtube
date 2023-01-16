//* estlint-disable *//
import React from 'react';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'


const Navbar = () => {

    const [MobileMenu, setMobileMenu] = useState(false)

    return (
        <div className='flex justify-between mt-8 mx-24 '>
            <div className='flex bg-gray-50 rounded-md h-10 w-36 justify-center items-center' id='header'>
                <span class='fa-solid fa-border-all w-5'></span>
                <h4 className='font-medium'>
                    Catagories <i className='fa fa-chevron-down'></i>
                </h4>
            </div>

            <div className='' id='cate'>
                <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                    <li>
                        <Link to ='/'>home</Link>
                    </li>
                    <li>
                        <Link to ='/pages'>pages</Link>
                    </li>
                    <li>
                        <Link to ='/user account'>user account</Link>
                    </li>
                    <li>
                        <Link to ='/vendor account'>vendor account</Link>
                    </li>
                    <li>
                        <Link to ='/track my order'>track my order</Link>
                    </li>
                    <li>
                        <Link to ='/contact'>contact</Link>
                    </li>
                </ul>

                <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                    {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                </button>

            </div>
            
        </div>
    );
};

export default Navbar;