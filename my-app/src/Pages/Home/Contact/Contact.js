import React from 'react';
import { useForm } from 'react-hook-form';
import { Container } from 'react-bootstrap';

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container style={{background:'rgba(15, 22, 49, 0.93)'}} >
            <h2 className="text-center text-white"> Write Your Feedback Here</h2>
            <form className="d-flex flex-column w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <input 
                        className="my-3 p-2"    
                        placeholder="Your Name"
                        type="text"
                        {...register("Address", { required: true, maxLength: 30 })} 
                />
                <input 
                        className="my-3 p-2"  
                        placeholder="Your Email"
                        {...register("Email", { required:true })} 
                        type="email"
                />
                  <input 
                        className="my-3 p-2"  
                        placeholder="Your Email"
                        {...register("Delivery Location", { required:true })} 
                        type="email"
                />
                <textarea style={{resize:'none',height:'100px'}} 
                        className="my-3 p-2"  
                        placeholder="Your Feedback"
                        {...register("lastName", { required:true })} 
                        type="textarea"
                />
                <input type="submit" className="mb-2"/>
            </form>
        </Container>
    );
};

export default Contact;