import React from 'react';
import './Navbar.css';

import {IoIosArrowBack} from 'react-icons/io'


import { Box, Stack, Container, Typography, Button } from '@material-ui/core';

const navbardoctor = (props) => {
    const folderName = (props.currentFolder==null||props.currentFolder=="")?"Home":props.currentFolder
    return (
      
          

            <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h4">{folderName}</Typography>
            <Typography>
              <Button onClick={props.clicked} variant="outlined" color="primary" >
              <IoIosArrowBack /> &nbsp; Back  
            </Button>
            </Typography>
            
      </Stack>
           
          
       
    )

}

export default navbardoctor;