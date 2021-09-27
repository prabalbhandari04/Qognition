import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { deleteMed } from '../../actions/med';

import trash2Outline from '@iconify-icons/eva/trash-2-outline';
import moreVerticalFill from '@iconify-icons/eva/more-vertical-fill';
import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';

import Scrollbar from '../Scrollbar';


import {
  Card,
  IconButton,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  Menu, MenuItem, ListItemIcon, ListItemText 
} from '@material-ui/core';


const MedItem = ({
  deleteMed,
  auth,
  med: { _id, medName, date, status}, showActions
}) => {


  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);


  
  return(
    <Card>
      <Container>
      {/* <Stack> */}
        <Stack alignItems="left" justifyContent="space-evenly" mb={5}>
        <div style={{overflow: "scroll", }}>
        <TableContainer>
       
        <Table>
        <TableHead>
          <TableRow>
          <TableCell align="left">Medicine Name</TableCell>
          <TableCell align="left">Start Date</TableCell>
          <TableCell align="left">Status</TableCell>
          <TableCell align="left">

<IconButton ref={ref} onClick={() => setIsOpen(true)}>
<Icon icon={moreVerticalFill} width={20} height={20} />
</IconButton>


<Menu
      open={isOpen}
      anchorEl={ref.current}
      onClose={() => setIsOpen(false)}
      PaperProps={{
        sx: { width: 200, maxWidth: '100%' }
      }}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MenuItem sx={{ color: 'text.secondary' }}>
        <ListItemIcon>
          <Icon icon={trash2Outline} width={24} height={24} />
        </ListItemIcon>
       
        <ListItemText  onClick={() => deleteMed(_id)} primary="Delete" primaryTypographyProps={{ variant: 'body2' }} />
      
      </MenuItem>

    
    </Menu>
</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

          <TableRow>
              <TableCell align="left">
                  {medName}
              </TableCell>
              <TableCell align="left">
                  {date}
              </TableCell>
              <TableCell align="left">
                  {status}
              </TableCell>
            
          </TableRow>

        </TableBody>

        </Table>

        </TableContainer>

        </div>
   
    </Stack>
    </Container>
    </Card>
        
);
};


MedItem.defaultProps = {
  showActions: true
};

MedItem.propTypes = {
  med: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteMed: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteMed })(
  MedItem
);