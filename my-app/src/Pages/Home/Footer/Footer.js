import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <Container fluid className="border bg-light">
            <Row>
                <Col sm={4} lg={4} xs={12} className="d-flex flex-column">
                    <h4> Useful Links</h4> 
                    <a href="www.facebook.com" className="text-black">Facebook</a>
                    <a href="www.facebook.com" className="text-black">LinkedIn</a>
                    <a href="www.facebook.com" className="text-black">Youtube</a>
                </Col>
                <Col  sm={4} lg={4} xs={12} className="d-flex flex-column">
                    
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/products">Products</NavLink>
                </Col>
                <Col  sm={4} lg={4} xs={12}>
                <address>
                    <h5> Office Address </h5> 
                    <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>  <br/> 
                    Schanzenstrasse 7  <br/>
                    3030 BERNE  <br/>
                    SWITZERLAND <br/> 
                    <a href="www.facebook.com"> For Details </a>
                </address>
                </Col>
            </Row>
            <p className="text-center"> Copyright&copy;Camera Shop</p>
        </Container>
    );
};

export default Footer;