import React from 'react';
import './Header.css';
import Head from './Head';
import Navbar from './Navbar';
import Search from './Search';

const Header = () => {
    return (
        <div>
            <Head />
            <Search />
            <Navbar />            
        </div>
        // 21:19분 부터 시작
    );
};

export default Header;