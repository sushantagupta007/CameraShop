import React from 'react';
import { Col, Container, Row, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import useAuth from './../../Hooks/useAuth';
import Order from '../Orders/Order/Order';
import Review from './../Review/Review';
import Payment from './../Payment/Payment';
import ManageOrder from './../Admin/Manage Order/ManageOrder';
import AddProduct from './../Admin/Add Product/AddProduct';
import MakeAdmin from './../Admin/Make Admin/MakeAdmin';
import ManageProduct from './../Admin/ManageProduct/ManageProduct';
import {useHistory} from 'react-router'

import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";


  
const Dashboard = () => {

    const {user,signOutUser} = useAuth(); 
    const adminEmail = 'admin@admin.com'; 

    let { path, url } = useRouteMatch();
    const history = useHistory(); 
    const handleLogouot= ()=>{
        signOutUser()
        history.push('/')
    }

    return (
        
        <Container>
            {
                user.email!==adminEmail ? 
                <Row>
                <Col style={{height:'90vh',backgroundColor:"#D3D3D3"}} lg={3} xs={12} md={4} className="border border-secondary p-3 d-flex flex-column align-items-center">
                <Nav defaultActiveKey="/home" className="flex-column">
                    <NavLink className="my-3" to={`${url}/myorder`}>My Order</NavLink>
                    <NavLink className="my-3" to={`${url}/review`}>Review</NavLink>
                    <NavLink className="my-3" to={`${url}/payment`}>Payment</NavLink>
                    <button onClick={handleLogouot}className="btn btn-danger" type="button"> Logout</button>
                </Nav>
               
                </Col>
                <Col lg={9} xs={12} md={8} >
               
                    {/* <Switch>
                        <Route path={`${path}/:orderId`}> <Order></Order></Route>
                    </Switch> */}

                    <Switch>
                        <Route path={`${path}/myorder`}> <Order></Order></Route>
                        <Route path={`${path}/review`}> <Review></Review></Route>
                        <Route path={`${path}/payment`}> <Payment></Payment></Route>
                    </Switch>
                    
                </Col>
                </Row>
                
                :
                <Row>
                <Col style={{height:'90vh',backgroundColor:"#D3D3D3"}} lg={3} xs={12} md={4} className="border border-secondary p-3 d-flex flex-column align-items-center">
                <Nav defaultActiveKey="/home" className="flex-column">
                    <NavLink className="my-3" to={`${url}/manageorder`}>Manage Order</NavLink>
                    <NavLink className="my-3" to={`${url}/addproduct`}>Add Product</NavLink>
                    <NavLink className="my-3" to={`${url}/manageproduct`}>Manage Product</NavLink>
                    <NavLink className="my-3" to={`${url}/makeadmin`}>Make Admin</NavLink>
                    <button onClick={handleLogouot} className="btn btn-danger" type="button"> Logout</button>
                </Nav>
                </Col>
                <Col lg={9} xs={12} md={8} >
                    <Switch>
                        <Route path={`${path}/manageorder`}> <ManageOrder></ManageOrder></Route>
                        <Route path={`${path}/addproduct`}> <AddProduct></AddProduct></Route>
                        <Route path={`${path}/manageproduct`}> <ManageProduct></ManageProduct></Route>
                        <Route path={`${path}/makeadmin`}> <MakeAdmin></MakeAdmin></Route>
                    </Switch>
                </Col>
                </Row>
            }
            
        </Container>
    );
};

export default Dashboard;