import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { deleteImmunize } from '../../actions/immunize';

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


const ImmunizeItem = ({
  deleteImmunize,
  auth,
  immunize: { _id, vaccineName, date}, showActions
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
          <TableCell align="left">Vaccine Name</TableCell>
          <TableCell align="left">Vaccination Date</TableCell>
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
       
        <ListItemText  onClick={() => deleteImmunize(_id)} primary="Delete" primaryTypographyProps={{ variant: 'body2' }} />
      
      </MenuItem>

    
    </Menu>
</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

          <TableRow>
              <TableCell align="left">
                  {vaccineName}
              </TableCell>
              <TableCell align="left">
                  {date}
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


ImmunizeItem.defaultProps = {
  showActions: true
};

ImmunizeItem.propTypes = {
  immunize: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteImmunize: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteImmunize })(
  ImmunizeItem
);