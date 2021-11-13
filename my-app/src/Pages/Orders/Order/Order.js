import React from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';

import { useEffect, useState } from 'react';
import useAuth from './../../../Hooks/useAuth';

const Order = () => {
    const {orderId}=  useParams(); 
    const {user}= useAuth(); 
    const userEmail = user.email; 
    
    
    const [myorders,setOrder] =useState([]); 
    const [remaininUser, setremainingUser] = useState([]); 
    let i=1; 
    useEffect(()=>{
        const url = `http://localhost:5000/myorder?email=${userEmail}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setOrder(data)
        })
    },[userEmail])
   
    const handleClick =(id)=>{
        const userInterest = prompt("Are You Sure Want to Cancel Order")
        if(userInterest==='yes'||'ok')
        {
            const url = `http://localhost:5000/myorder?id=${id}`
            fetch(url,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    const remainingUsers = myorders.filter(order=>order._id!==id)
                    setOrder(remainingUsers)
                }  
            })
        }
        else{
            return 
        }
   
        
    }
        return (
        <div>
            <Table striped bordered hover size="sm">
                {orderId}
            <thead>
                <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    myorders.map((myorder)=>
                    <tr key={myorder._id}>
                        <td>{i++}</td>
                        <td>{myorder.productname}</td>
                        <td>{myorder.price}</td>
                        <td><button onClick={()=>handleClick(myorder._id)}type="button" className="btn btn-danger "> Delete</button></td>
                    </tr>
                    )
                }
            </tbody>
            </Table>
        </div>
        )
    }
    


export default Order;