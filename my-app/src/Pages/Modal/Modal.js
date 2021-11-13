import React from 'react';
import Modal from './Modal';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const CustomModal = (props) => {
  
    console.log(props.handleShow)

  
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
   
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
  
        <Modal show={props.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={props.handleShow}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}


export default CustomModal;   