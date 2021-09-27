import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMed } from '../../actions/med';

import {AiFillPlusCircle} from 'react-icons/ai'

import {
  FormSelect,
} from "shards-react";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';

import MenuItem from '@material-ui/core/MenuItem';

const MedForm = ({ addMed }) => {
  const [medName, setMedName] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

 
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
        <DialogTitle id="form-dialog-title">Add Medication to track your medical history</DialogTitle>
        <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addMed({ medName, date, status});
          setMedName('');
          setDate('');
          setStatus('');
        }}>

        <DialogContent>
          <DialogContentText>
            Medicine Name 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            name='medName'
            value={medName}
            onChange={e => setMedName(e.target.value)}
            required
          />

          <DialogContentText>
            Start Date
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

          <DialogContentText>
            Status
          </DialogContentText>
          <FormSelect name="status" value={status} onChange={e => setStatus(e.target.value)}>
                  <option hidden>Choose</option> 
                    <option>Active</option>
                    <option>On-Hold</option>
                    <option>Completed</option>
                  </FormSelect>
            
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

MedForm.propTypes = {
    addMed: PropTypes.func.isRequired
};

export default connect(
  null,
  { addMed }
)(MedForm);




// <div className='post-form'>
// <form
//   className='form my-1'
//   onSubmit={e => {
//     e.preventDefault();
//     addMed({ medName, date, status});
//     setMedName('');
//     setDate('');
//     setStatus('');
//   }}
// >
//   <input
//     name='medName'
//     placeholder='Medicine Name'
//     value={medName}
//     onChange={e => setMedName(e.target.value)}
//     required
//   />
//   <input
//     name='date'
//     placeholder='Date'
//     value={date}
//     onChange={e => setDate(e.target.value)}
//     required
//   />
//   <input
//     name='status'
//     placeholder='Status'
//     value={status}
//     onChange={e => setStatus(e.target.value)}
//     required
//   />
//   <input type='submit' className='btn btn-dark my-1' value='Submit' />
// </form>
// </div>


