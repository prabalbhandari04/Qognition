import {Modal} from 'react-bootstrap'

import React from 'react';

import Button from '@material-ui/core/Button';


import { Box, Stack, Container, Typography, Divider } from '@material-ui/core';


import TextField from '@material-ui/core/TextField';



const CustomModal = (props)=>{

    const disabled = props.name===""?true:false;
    return (

      <Container maxWidth="xl">

          <Modal show={props.show} onHide={props.handleClose} centered>
            <Modal.Header closeButton>
              <Typography variant="h6" >{props.title}</Typography>
            </Modal.Header>
            <Modal.Body>
                <Typography>{props.label}</Typography>

                <TextField  autoFocus
                  margin="dense"
                  id="name"
                  label="Name"
                  fullWidth
                  name='text'
                  value={props.name} onChange={props.handleChange} required/>

               


            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.handleClose}>
                Close
              </Button>
              <Button color="primary" onClick={()=>{
                    props.handleSave(props.name)
                    props.handleClose()
                }} disabled={disabled}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

      </Container>
        );
}

export default CustomModal;