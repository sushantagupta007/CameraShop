import React from 'react';
import { Card, Button,Col } from 'react-bootstrap';


import { NavLink } from 'react-router-dom';


const Product = (props) => {
    const {name,description, img,price} = props.product
    

    return (
         <Col lg={4} sm={6} md={6} xs={12}> 
            <Card style={{ width: '18rem' }} className="bg-light">
                <Card.Img variant="top" src={img} style={{height:'180px'}} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <NavLink to={{ 
                    pathname: "/purchase", 
                    state: props.product
                }}>
                    <Button variant="warning">Purchase {name}</Button>
                </NavLink>
                </Card.Body>
            </Card>
         </Col>
    );
};

export default Product;