import React from 'react';
import Footer from '../Footer/Footer';

import Products from '../Products/Products';
import Review from '../Review/Review';
import Slider from './../Slider/Slider';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <hr/>
            <Products></Products>
            <hr/>
            <Review></Review>
            <hr/>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;