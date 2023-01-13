import React from 'react';

const Head = () => {
    return (
        <div className='bg-blue-900 text-white h-10 flex justify-between uppercase capitalize  '>
            <div id='container d_flex' className='flex  items-center space-x-7 ml-20 '>
                <span>
                    <i class="fa-solid fa-phone"></i> 
                    <lable>+88012 3457 7894</lable>
                </span> 
                <span>
                    <i class="fa-regular fa-envelope"></i>
                    <lable>example@gmail.com</lable>
                </span>
            </div>
            <div id='right row' className='flex items-center space-x-5 mr-36 '>
                <lable>Theme FAQ's</lable>
                <lable>Need Helps</lable>
                <img src='' alt=''></img>
                <lable>EN</lable>
                <img src='' alt=''></img>
                <lable>USD</lable>
            </div>
            

        </div>
    );
};

export default Head;