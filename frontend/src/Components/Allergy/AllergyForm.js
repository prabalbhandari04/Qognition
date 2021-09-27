import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addAllergy } from '../../actions/allergy';

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

const AllergyForm = ({ addAllergy }) => {
  const [allergyCategory, setAllergyCategory] = useState('');
  const [encounterDate, setEncounterDate] = useState('');
  const [encounterAge, setEncounterAge] = useState('');
  const [lastOccurence, setLastOccurence] = useState('');
  const [status, setStatus] = useState('');
  const [reaction, setReaction] = useState('');


 
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
        <DialogTitle id="form-dialog-title">Add allergy history to track your medical status</DialogTitle>
        <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addAllergy({ allergyCategory, encounterDate, encounterAge, lastOccurence, status, reaction});
          setAllergyCategory('');
          setEncounterDate('');
          setEncounterAge('');
          setLastOccurence('');
          setStatus('');
          setReaction('');
        }}>


        <DialogContent>

        <DialogContentText>
            Allergy Caategory
          </DialogContentText>
          <FormSelect autoFocus name="allergyCategory" value={allergyCategory} onChange={e => setAllergyCategory(e.target.value)}>
                  <option hidden>Choose</option> 
                    <option>Food</option>
                    <option>Drug</option>
                    <option>Pollen</option>
                    <option>Pet</option>
                    <option>Insect</option>
                    <option>Mold</option>
                  </FormSelect>
            

          <DialogContentText>
            Encounter Date
          </DialogContentText>
          <TextField
            
            margin="dense"
            id="name"
            label="DD/MM/YY"
            fullWidth
            name='encounterDate'
            value={encounterDate}
            onChange={e => setEncounterDate(e.target.value)}
            required
          />

          <DialogContentText>
            Encounter Age
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Years"
            fullWidth
            name='encounterAge'
            value={encounterAge}
            onChange={e => setEncounterAge(e.target.value)}
            required
          />


          <DialogContentText>
            Last Occurence
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Last Occurence"
            fullWidth
            name='lastOccurence'
            value={lastOccurence}
            onChange={e => setLastOccurence(e.target.value)}
            required
          />

          <DialogContentText>
            Status
          </DialogContentText>
          <FormSelect name="status" value={status} onChange={e => setStatus(e.target.value)}>
                  <option hidden>Choose</option> 
                    <option>Low</option>
                    <option>High</option>
                    <option>Critical</option>
          </FormSelect>

          <DialogContentText>
            Reaction
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Reaction"
            fullWidth
            name='reaction'
            value={reaction}
            onChange={e => setReaction(e.target.value)}
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

AllergyForm.propTypes = {
    addAllergy: PropTypes.func.isRequired
};

export default connect(
  null,
  { addAllergy }
)(AllergyForm);





