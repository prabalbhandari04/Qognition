import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../../actions/query';
import TextField from '@material-ui/core/TextField';

import { Box } from '@material-ui/core';


const ReplyForm = ({ queryId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <div className='post-form' style={{paddingTop: "20px"}}>
     
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addComment(queryId, { text });
          setText('');
        }}
      >

        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Reply"
            fullWidth
            name='text'
            value={text}
            onChange={e => setText(e.target.value)}
            required
            s
          />
        <Box sx={{ p: 2, textAlign: 'right' }}>
        <input type='submit' className='btn'  style={{background:"#6331d8", color:"white"}}  value='Submit' />
        </Box>
      </form>
    </div>
  );
};

ReplyForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(ReplyForm);
