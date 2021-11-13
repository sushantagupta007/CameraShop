import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/users/admin',{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                alert("Make Admin Successfully")
            }
            else{
                return 
            }
            console.log(data)
            reset();
        })
    };
     
    return (
    <div className="p-5">
        <h3 className="text-center"> Make Admin </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-50 mx-auto">
        <input 
            placeholder="User Email"
            className="my-2"
            type="email"
            {...register("email", { required: true })} />
        
        <input className="btn btn-primary" type="submit" value="Make admin" />
        </form>
    
    </div>        
    )
      
};

export default MakeAdmin;