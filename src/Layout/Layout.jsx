import React from 'react';
import Navber from '../Components/SharedComponents/Navber/Navber';
import { Outlet } from "react-router";
import Footer from '../Components/SharedComponents/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;