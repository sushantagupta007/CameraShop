import React from 'react';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ManageProduct = () => {
    const [products,setProducts] = useState([]);
    
    
    
    useEffect(()=>{
        fetch('https://sleepy-ridge-11982.herokuapp.com/allProducts')
            .then(res=>res.json())
            .then(data=>{
                setProducts(data)
            })
    },[])

    const handleClick=(id)=>{
        const adminInterest = prompt("Are You Sure Want to Cancel Order")
        if(adminInterest==='yes'||'ok')
        {
            const url = `https://sleepy-ridge-11982.herokuapp.com/allProducts?id=${id}`
            fetch(url,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    const remainingProduct = products.filter(product=>product._id!==id)
                    setProducts(remainingProduct)
                }  
            })
        }
        else{
            return 
        }
    }
    return (
        <div>
           
            <Container> 
                {
                    products.map((product)=>
                    <Row key={product._id}className="my-1 border border-left-0 border-top-0"> 
                        <Col> Product Name: {product.name}</Col>
                        <Col> <button type="button" onClick={()=>handleClick(product._id)} className="btn btn-danger"> Delete </button> </Col>
                    </Row>)
                }
              </Container>
            
        </div>
    );
};

export default ManageProduct;