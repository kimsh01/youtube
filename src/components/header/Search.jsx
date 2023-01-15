//*estlint-disable*//
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'

const Search = () => {
    

    return (
        <>
            <section className='flex items-center' id='search'>
                <div className='ml-24 mt-7'>
                    <span className='text-red-700 font-bold text-3xl'>Bonik</span>
                </div>

                <div className='ml-36 mt-7 w-3/5 h-11 border-2 border-solid rounded-md text-sm ' id='search'>
                    <i className='fa fa-search ml-6 '></i>
                    <input type='text' placeholder='Search and hit enter...' className='w-4/5 h-10 pl-5' />
                    <span className='text-sm mt-0 w-3/12 opacity-50 border-l-2'>All Catagory</span>
                </div>
               
                <div className='mt-6 ml-40'>
                    <i className='fa fa-user icon-circle'></i>
                    <Link to='/cart'>
                    <i className='fa fa-shopping-bag icon-circle'></i>
                    </Link>
                </div>
               
            </section>
        </>
    );
};


export default Search;