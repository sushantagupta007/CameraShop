import React from 'react';
import { Container,Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import { useHistory } from 'react-router';

const Products = () => {
    const [products,setProducts] = useState([]);
    const [allProducts, setallProducts] = useState([])
    const history = useHistory(); 
    console.log(history.location.pathname)
    useEffect(()=>{
        fetch('https://sleepy-ridge-11982.herokuapp.com/allProducts')
            .then(res=>res.json())
            .then(data=>{
                setallProducts(data)
                setProducts(data.slice(0,6))
               
            })
    },[])

    const showsixPrdocut =()=>{
        return products.map((product)=><Product product={product} key={product.name}></Product>)
    }
    const showallProduct =()=>{
        return allProducts.map((products)=><Product product={products} key={products.name}></Product>)
    }
    return (
        <div>
            <Container>
                <h2 className="text-center text-primary fw-bold"> Our Products </h2>
                <Row>
                
                {
                    history.location.pathname==="/products"? showallProduct():showsixPrdocut()
                }
                </Row>
                
                   
            </Container>

        </div>
    );
};

export default Products;