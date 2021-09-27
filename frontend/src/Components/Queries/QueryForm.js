import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/query';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const QueryForm = ({ addPost }) => {
  const [text, setText] = useState('');
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
        Ask Something
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Queries</DialogTitle>
        <form
        className='form my-1'
      onSubmit={e => {
        e.preventDefault();
        addPost({ text });
        setText('');
      }}>
        <DialogContent>
          <DialogContentText>
          Start your queries with "What", "How", "Why", etc. 
          </DialogContentText>
         

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Query"
            fullWidth
            name='text'
            value={text}
            onChange={e => setText(e.target.value)}
            required
          />
            
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button  onClick={handleClose} type="submit"  value='Submit' color="primary" >
            Post
          </Button>
        </DialogActions>
</form>
        
      </Dialog>
    </div>
   
  );
};

QueryForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(QueryForm);


