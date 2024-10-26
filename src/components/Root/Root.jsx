import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
            <div className='max-w-7xl m-auto'>
                <Header></Header>
                <Outlet />
            </div>

            <div>
                <Footer ></Footer>
            </div>
        </div>
    );
};

export default Root;