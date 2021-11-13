import React from 'react';
import useAuth from './../../../Hooks/useAuth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-bootstrap';

const AddProduct = () => {
    const {user} = useAuth(); 
    const [response,setResponse] = useState({})
    

    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/allProducts',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res=>{
            setResponse(res)
            reset(); 
        })
        
    };
    return (
        <div>
            <h3 className="text-center"> Add Product</h3>
            {response.status===200? <Alert variant="success"> Product Added Successfully</Alert>:""}
        <form onSubmit={handleSubmit(onSubmit)} className=" border  p-2 d-flex flex-column w-75 mx-auto">
        <label className="fw-bold">Product Name</label>
            <input 
                className="my-1"
                type="text" 
                {...register("name")} 
            />
         
         <label className="fw-bold">Product Description </label>
        <textarea 
            style={{resize:'none'}}
            rows="8"
            className="my-1"
            type="text" 
            {...register("description")} 
        />
        <label className="fw-bold">Product Image </label>
            <input 
                className="my-1"
                type="file" 
                
                {...register("image")} 
            />
        <hr/>
            <input className="btn-warning fw-bold" type="submit" value="Add Product" />
        </form>
    </div>    
    
    );
};

export default AddProduct;