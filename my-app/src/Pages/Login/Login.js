import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const { register, handleSubmit,reset} = useForm();
    const {emailSignIn,loggedUser} = useAuth(); 
    const history = useHistory(); 
    const location = useLocation(); 
    
  
    const onSubmit = data => {
       emailSignIn(data.email,data.password,history,location) 
      
       console.log(loggedUser)
       reset()
    };

 
    return (
      <div className="mx-auto border w-25 bg-light m-3">
        <h2 className="text-center">Login</h2>
        <form className="d-flex flex-column  mx-auto border p-3" onSubmit={handleSubmit(onSubmit)}>
            <label className="fw-bold"> Your Full Name</label>
            <input 
                className="my-3"
                {...register("email", 
                { required: true})} 
                type="email"
                placeholder="email"
            />            
            <label className="fw-bold"> Your Password</label>
            <input 
                className="my-3"
                {...register("password",{ required: true})}
                type="password"
                placeholder="Your Password"
            />
            <label className="fw-bold"> Retype Password</label>
            <input 
                className="my-3"
                {...register("password2",{ required: true})}
                type="password"
                placeholder="Confirm Password"
            />
             <input type="submit" value="Log in"/>  
        </form>
        <div className="d-flex  flex-column align-items-center">
            <button type="button" className="btn btn-success"> Sign In Using Google</button>
            
            <NavLink  to="/register">If not registered? Please Register</NavLink>
        </div>
           
      </div>  
    )
};

export default Login;