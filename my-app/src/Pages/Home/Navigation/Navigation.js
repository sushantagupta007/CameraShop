import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';



const Navigation = () => {
  const {user,signOutUser}= useAuth();

  const handleSignOut =()=>{
      signOutUser(); 
  }
    return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">npm
      <Nav className="me-auto ">
        <NavLink className="me-3" to="/home">Home</NavLink>
        <NavLink className="me-3" to="/products">Explore Products</NavLink>
        {user.email? <NavLink className="me-3" to="/dashboard">Dashboard</NavLink>:""}
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        {
          user.email?
          
            <Navbar.Text className="me-5">
              Signed in as: <a href="#login">{user.displayName}</a>
            </Navbar.Text>
          
          :
          ""
          }
          {
          user.email?
            <button onClick={handleSignOut} type="button" className="btn btn-danger"> Log Out</button>
            :
          <NavLink to="/login">Login</NavLink>
        }
         </Navbar.Collapse>
    </Navbar.Collapse>
  </Container>
</Navbar>
    

    );
};

export default Navigation;