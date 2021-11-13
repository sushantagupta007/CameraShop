import React from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import { useHistory } from 'react-router';


const Register = () => {
    const { register, handleSubmit,reset} = useForm();
    const history = useHistory(); 

    const {registerUser,user}= useAuth(); 
    const onSubmit = data => {
        
        
        registerUser(data.name,data.email,data.password,history)
        
        console.log(data)
        reset();
        
    };
    return (
      <div className="mx-auto border w-25 bg-light m-3">
        <h2 className="text-center">Registration Form</h2>

        <form className="d-flex flex-column  mx-auto border p-3" onSubmit={handleSubmit(onSubmit)}>
            <label className="fw-bold"> Your Full Name</label>
            <input 
                className="my-3"
                {...register("name", 
                { required: true, maxLength: 20 })} 
                type="text"
                placeholder="Your Full Name"
            />
            <label className="fw-bold"> Your Email</label>
            <input 
                className="my-3"
                {...register("email", { required: true})} 
                type="email"
                placeholder="Your Email"
            />
            <label className="fw-bold"> Your Password</label>
            <input 
                className="my-3"
                {...register("password",{ required: true})}
                type="password"
                placeholder="Your Password"
            />
            <label className="fw-bold"> Confirm Password</label>
            <input 
                className="my-3"
                {...register("password2",{ required: true})}
                type="password"
                placeholder="Confirm Password"
            />
            <button type="submit" className="btn btn-warning">Register</button> 
        </form>
        <div className="d-flex justify-content-center">
            <NavLink  to="/login">Already Register? Please Log in</NavLink> 
        </div>
        {
            user?.displayName? <Alert variant='info'> Successfully Registered </Alert> :""
        }
      </div>  
    );
};

export default Register;