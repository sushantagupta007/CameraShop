import React from 'react';
import { Carousel } from 'react-bootstrap';

import slideImage1 from '../../../Image/1.jpg'
import slideImage2 from '../../../Image/2.jpg'
import slideImage3 from '../../../Image/3.jpg'

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                style={{width:"320px"}}
                className="d-block w-100"
                src={slideImage1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className="text-black ">Best Selling Cameras</h3>
                <h4 className="text-black">Classic Camera</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{width:"320px"}}
                className="d-block w-100"
                src={slideImage2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3 className="text-black">Best Selling Cameras</h3>
                <h4 className="text-black">DSLR Camera</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{width:"320px"}}
                className="d-block w-100"
                src={slideImage3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="text-black">Best Selling Cameras</h3>
                <h4 className="text-black">SLR Camera</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
            );
};

export default Slider;