import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingeReview from './../SingleReview/SingeReview';

const Review = () => {
    const [reviews,setReview]= useState([]); 
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
            .then(res=>res.json())
            .then(data=>setReview(data))
    },[])

    return (
    <div>
        <h3 className="text-center"> Customer Review </h3>
        <Container>
            <Row>
            {
                reviews.map((review)=><SingeReview key={review._id} review={review}></SingeReview>)
            }
            </Row>    
        </Container>
    </div>    
        
    );
};

export default Review;