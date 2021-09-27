import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addImmunize } from '../../actions/immunize';

import {AiFillPlusCircle} from 'react-icons/ai'


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import MenuItem from '@material-ui/core/MenuItem';

const ImmunizeForm = ({ addImmunize }) => {
  const [vaccineName, setVaccineName] = useState('');
  const [date, setDate] = useState('');

 
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (

    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      <AiFillPlusCircle/> &nbsp; Add
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Get updated with your vaccination records</DialogTitle>
        <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addImmunize({ vaccineName, date});
          setVaccineName('');
          setDate('');
        }}>

        <DialogContent>
          <DialogContentText>
            Vaccine Name 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            name='vaccineName'
            value={vaccineName}
            onChange={e => setVaccineName(e.target.value)}
            required
          />

          <DialogContentText>
            Vaccination Date
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="DD/MM/YY"
            fullWidth
            name='date'
            value={date}
            onChange={e => setDate(e.target.value)}
            required
          />

            
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button  onClick={handleClose} type="submit"  value='Submit' color="primary" >
            Add
          </Button>
        </DialogActions>
</form>
        
      </Dialog>
    </div>
    
  );
};

ImmunizeForm.propTypes = {
    addImmunize: PropTypes.func.isRequired
};

export default connect(
  null,
  { addImmunize }
)(ImmunizeForm);



