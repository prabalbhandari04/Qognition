import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { deleteAllergy } from '../../actions/allergy';

import trash2Outline from '@iconify-icons/eva/trash-2-outline';
import moreVerticalFill from '@iconify-icons/eva/more-vertical-fill';
import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';

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
  Menu, MenuItem, ListItemIcon, ListItemText, Box, Collapse 
} from '@material-ui/core';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const AllergyItem = ({
  deleteAllergy,
  auth,
  allergy: { _id,  allergyCategory, encounterDate, encounterAge, lastOccurence, status, reaction}, showActions
}) => {


  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const [open, setOpen] = React.useState(false);


  
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
          <TableCell align="left">Allergy Category</TableCell>
          <TableCell align="left">Encounter Date</TableCell>
          <TableCell align="left">Encounter Age</TableCell>
          <TableCell align="left">More</TableCell>
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
       
        <ListItemText  onClick={() => deleteAllergy(_id)} primary="Delete" primaryTypographyProps={{ variant: 'body2' }} />
      
      </MenuItem>

    
    </Menu>
</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

          <TableRow>
         
            
              <TableCell align="left">
                  {allergyCategory}
              </TableCell>
              <TableCell align="left">
                  {encounterDate}
              </TableCell>
              <TableCell align="left">
                  {encounterAge}
              </TableCell>

              <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
            
          </TableRow>

          <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
             
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>More Info</TableCell>
                    <TableCell>Last Occurence</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Reaction</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                 
                    <TableRow >

                    <TableCell align="left">
                      
                    </TableCell>
                    <TableCell align="left">
                        {lastOccurence}
                    </TableCell>
                    <TableCell align="left">
                        {status}
                    </TableCell>
                    <TableCell align="left">
                        {reaction}
                    </TableCell>
                      
                     
                    </TableRow>
           
                </TableBody>
              </Table>
            </Box>
          </Collapse>
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


AllergyItem.defaultProps = {
  showActions: true
};

AllergyItem.propTypes = {
  allergy: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteAllergy: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteAllergy })(
  AllergyItem
);