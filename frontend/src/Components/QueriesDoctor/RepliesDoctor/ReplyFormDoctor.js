import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCommentDoctor } from '../../../actions/query';

import { Box } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';

const ReplyFormDoctor = ({ queryId, addCommentDoctor }) => {
  const [text, setText] = useState('');

  return (
    <div className='post-form' style={{paddingTop: "20px"}}>
     
    <form
      className='form my-1'
      onSubmit={e => {
        e.preventDefault();
          addCommentDoctor(queryId, { text });
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

ReplyFormDoctor.propTypes = {
  addCommentDoctor: PropTypes.func.isRequired
};

export default connect(
  null,
  { addCommentDoctor }
)(ReplyFormDoctor);

