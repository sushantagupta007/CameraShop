import React from 'react';
import { Col, Container, Image, Modal, Row,Button} from 'react-bootstrap';
import { useHistory } from 'react-router';


import useAuth from './../../Hooks/useAuth';
import { useForm } from 'react-hook-form';

import './Purchase.css'
import { useState } from 'react';



const Purchase = () => {
    const {user} = useAuth(); 
    const [response,setResponse] = useState({})

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(user)

    const modalShow = () =>{
        handleShow(); 
    }
    
    const history = useHistory();
    console.log(history.location)

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/myorder',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res=> {
            setResponse(res)
            console.log(res)
            if(response.status===200){
                modalShow(); 
                reset(); 
            }
        })
    };
    
    const {name,img,price} = history.location.state; 
    console.log(img)
        return (
    <>  
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Place Order</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-success fw-bold">{user.displayName} Place order successfully!!</Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </Modal> 

        <div className="customBackGround">
            <div className="w-50 border mx-auto bg-light mt-3">
                <Container> 
                    <Row>
                        <Col lg={6} sm={6} xs={12}>
                        <h4 className="text-center text-primary fw-bold"> Purchase {name} </h4> 
                        </Col>
                        <Col lg={6} sm={6} xs={12}>
                            <div className="w-25 mx-auto"> 
                                <Image className="w-100 mx-auto bg-light" src={img} rounded />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <hr/>
                <form onSubmit={handleSubmit(onSubmit)} className=" border  p-2 d-flex flex-column w-75 mx-auto">
                    <label className="fw-bold">Name</label>
                    <input 
                        className="my-1"
                        {...register("UserName", { required: true, maxLength: 30 })} 
                        defaultValue={user.displayName}
                        type="text"
                    />
                     <label className="fw-bold">Product Name</label>
                    <input 
                        defaultValue={name}
                        className="my-1"
                        type="text" 
                        {...register("productname")} 
                    />
                    <label className="fw-bold">Email</label>
                    <input 
                        className="my-1"
                        type="text"
                        {...register("email",{required: true})} 
                        defaultValue={user.email}
                    />
                     <label className="fw-bold">Postal Address</label>
                    <input 
                        className="my-1"
                        type="text" 
                        {...register("postaladdress")} 
                    />
                     <label className="fw-bold">Shipping Address</label>
                    <input 
                        className="my-1"
                        type="text" 
                        {...register("shippingaddress",{required: true})} 
                    />
                    <label className="fw-bold">Price</label>
                    <input 
                        defaultValue={price}
                        className="my-1"
                        type="text" 
                        {...register("price",{required: true})} 
                    />
                    <label className="fw-bold">Mobile</label>
                    <input 
                        className="my-1"
                        type="number" 
                        {...register("phonenumber",{maxLength:12,required:true})} 
                    />
                    <hr/>
                    <input className="btn-warning fw-bold" type="submit" value="Purchase" />
                </form>
            </div>       
        </div>
    </>
    );
};

export default Purchase;