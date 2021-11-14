import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder = () => {
    const [allOrders,setallOrder] = useState([])
    const [singleOrder,setSingleOrder]= useState([]); 
    let j=0;
    const [count, setCount] = useState(j)


    

    let i=1;

    const handleUpdate=(id)=>{
        
        setCount(j++)
        console.log(count)
        fetch(`https://sleepy-ridge-11982.herokuapp.com/allmyorder/${id}`)
            .then(res=>res.json())
            .then(data=>{
                setSingleOrder(data)
                console.log(data)
            })
        fetch(`https://sleepy-ridge-11982.herokuapp.com/allmyorder/${id}`,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(singleOrder)
        })
    }
   
    useEffect(()=>{
        fetch('https://sleepy-ridge-11982.herokuapp.com/allmyorder')
            .then(res=>res.json())
            .then(data=>{
                setallOrder(data)
                console.log(data)
        })        
    },[count])


    return (
        <div>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>No</th>
                <th>Customer Name</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Update</th>
                <th>Calcel</th>
                </tr>
            </thead>
            <tbody>
                {
                    allOrders.map((allOrder)=>
                    <tr key={allOrder._id}>
                        <td>{i++}</td>
                        <td>{allOrder.UserName}</td>
                        <td>{allOrder.productname}</td>
                        <td>{allOrder.price}</td>
                        <td>{allOrder.status}</td>
                        <td><button onClick={()=>handleUpdate(allOrder._id)} type="button" className="btn btn-info"> Update</button></td>
                        <td><button  type="button" className="btn btn-danger "> Cancel</button></td>
                    </tr>
                    )
                }
            </tbody>
        </Table>
        </div>
    );
};

export default ManageOrder;