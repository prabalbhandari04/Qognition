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

const QueryItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  query: { _id, text, firstname, avatar, user, likes, comments, date },
  showActions
}) => {
  
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  
  return(
  

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
        <Link to={`/dashboard/queries/${_id}`}  color="inherit" underline="hover" >
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
    <span style={{paddingRight:"15px"}}>
          <button
            onClick={() => addLike(_id)}
            type="button"
            className="btn btn-light"
          >
            <i className="fas fa-thumbs-up" />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            onClick={() => removeLike(_id)}
            type="button"
            className="btn btn-light"
          >
            <i className="fas fa-thumbs-down" />
          </button>

          </span>
         
        <Link to={`/dashboard/queries/${_id}`} style={{background:"#6331d8", color:"white"}} className="btn">
          Reply{' '}
          {comments.length > 0 && (
            <span className="comment-count">{comments.length}</span>
          )}
        </Link>
       

        
   

      
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
          {(!auth.loading && user === auth.user._id) ? (
          <ListItemText  onClick={() => deletePost(_id)} primary="Delete" primaryTypographyProps={{ variant: 'body2' }} />
          ):  ("No Option")}
        </MenuItem>

       
      </Menu>


    
      

      </>
        )}
     
  </Box>
</Card>
   
</>

);
 };

QueryItem.defaultProps = {
  showActions: true
};

QueryItem.propTypes = {
  query: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  QueryItem
);


    
    