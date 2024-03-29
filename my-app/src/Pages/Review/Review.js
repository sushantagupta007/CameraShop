import React from 'react';
import { Alert } from 'react-bootstrap';




import { useForm } from 'react-hook-form';

// import './Purchase.css'
import { useState } from 'react';




const Review = () => {
    
    const [response,setResponse] = useState({})
    

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch('https://sleepy-ridge-11982.herokuapp.com/reviews',{
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
        <h3 className="text-center"> Add Your Review</h3>
        {response.status===200? <Alert variant="success"> Successfully Added</Alert>:""}
        <form onSubmit={handleSubmit(onSubmit)} className=" border  p-2 d-flex flex-column w-75 mx-auto">
        <label className="fw-bold">Customer Name</label>
        <input 
            className="my-1"
            {...register("customername", { required: true, maxLength: 30 })} 
            type="text"
        />
         <label className="fw-bold">Product Name</label>
        <input 
            className="my-1"
            type="text" 
            {...register("productname")} 
        />
         <label className="fw-bold">Product Image</label>
        <input 
            className="my-1"
            type="file" 
            {...register("image")} 
        />
         <label className="fw-bold">Your Review</label>
        <textarea 
            style={{resize:'none'}}
            rows="8"
            className="my-1"
            type="text" 
            {...register("review")} 
        />
        <label className="fw-bold">Rating</label>
        <input 
            className="my-1"
            type="number" 
            {...register("rating",{maxLength:12,required:true})} 
        />
        <hr/>
        <input className="btn-warning fw-bold" type="submit" value="Submit" />
    </form>
      
        
    </div>    
    );
};

export default Review;