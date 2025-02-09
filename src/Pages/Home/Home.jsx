import React from 'react';
import Banner from '../../Components/Banner/Banner';
import FeaturedProduct from '../../Components/FeaturedProduct/FeaturedProduct';
import BeautyProducts from '../../Components/BeautyProducts/BeautyProducts';
import GadgetsProducts from '../../Components/Gadgets/GadgetsProducts';
import FashionProducts from '../../Components/FashionProducts/FashionProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProduct></FeaturedProduct>
            <BeautyProducts></BeautyProducts>
            <GadgetsProducts></GadgetsProducts>
            <FashionProducts></FashionProducts>
        </div>
    );
};

export default Home;