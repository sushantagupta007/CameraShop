import React from 'react';
import Contact from '../Contact/Contact';
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
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;