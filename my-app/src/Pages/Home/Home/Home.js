import React from 'react';

import Products from '../Products/Products';
import Slider from './../Slider/Slider';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <hr/>
            <Products></Products>
        </div>
    );
};

export default Home;