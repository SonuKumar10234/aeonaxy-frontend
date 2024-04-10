import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

const RootLayout = () => {
    
    return (
        <div>
            <Navbar />
            <main>
               <ScrollToTop />
               <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout;