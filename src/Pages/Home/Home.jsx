import React from 'react';
import Banner from '../../Components/Banner/Banner';
import FeaturedProduct from '../../Components/FeaturedProduct/FeaturedProduct';
import BeautyProducts from '../../Components/BeautyProducts/BeautyProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProduct></FeaturedProduct>
            <BeautyProducts></BeautyProducts>
        </div>
    );
};

export default Home;