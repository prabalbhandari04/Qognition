import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/query';
import trash2Outline from '@iconify-icons/eva/trash-2-outline';
import moreVerticalFill from '@iconify-icons/eva/more-vertical-fill';
import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';


import { Box, Stack,  Card, Button, Divider, Typography, CardHeader,  Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@material-ui/core';

const QueryItemDoctor = ({
  deletePost,
  authdoctor,
  query: { _id, text, firstname, avatar, doctor, likes, comments, date },
  showActions
}) => (
  
  (
  <>
 
  <Card>
  <CardHeader />


    <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
      <>
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        alt=""
        src={avatar}
        sx={{ width: 48, height: 48, borderRadius: 1.5 }}
      />
      <Box sx={{ minWidth: 240 }}>
        <Link to={`/dashdoctor/queries/${_id}`}  color="inherit" underline="hover" >
          <Typography variant="subtitle1" noWrap>
           {text}
          </Typography>
        </Link>
        <Typography variant="body2" sx={{ color: 'text.secondary', textTransform:"capitalize" }} noWrap>
        By: {firstname} ({formatDate(date)})
          
        </Typography>
      </Box>
      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
       
      </Typography>
    </Stack>
    </>
    </Stack>

   

    
  

  <Divider />

 

    <Box sx={{ p: 2, textAlign: 'right' }}>

        {showActions && (
      <>
         
        <Link to={`/dashdoctor/queries/${_id}`} style={{background:"#6331d8", color:"white"}} className="btn">
          Reply{' '}
          {comments.length > 0 && (
            <span className="comment-count">{comments.length}</span>
          )}
        </Link> 

      </>
        )}
     
  </Box>
</Card>
   
</>

));

QueryItemDoctor.defaultProps = {
  showActions: true
};

QueryItemDoctor.propTypes = {
  query: PropTypes.object.isRequired,
  authdoctor: PropTypes.object.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
  authdoctor: state.authdoctor
});

export default connect(mapStateToProps, {  })(
  QueryItemDoctor
);  

