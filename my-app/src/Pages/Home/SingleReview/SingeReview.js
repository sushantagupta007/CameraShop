import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from './../../Rating/Rating';

const SingeReview = (props) => {
    const {customername, productname,review,rating,img} = props.review
    return (
        
            
                <Col lg="4" sm="6" xs="12">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{customername}</Card.Title>
                        <Card.Text>{productname}</Card.Text>
                        <Card.Text>
                            {review}
                        </Card.Text>
                        <Card.Text>
                            <Rating rating={rating}></Rating>
                        </Card.Text>
                        
                    </Card.Body>
                    </Card>
                </Col>
            
        
    );
};

export default SingeReview;