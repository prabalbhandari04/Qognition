import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import formatDate from '../../../utils/formatDate';
import { deleteCommentDoctor } from '../../../actions/query';


import trash2Outline from '@iconify-icons/eva/trash-2-outline';
import moreVerticalFill from '@iconify-icons/eva/more-vertical-fill';
import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';

import { Box, Stack,  Card, Button, Divider, Typography, CardHeader,  Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@material-ui/core';



const ReplyItemDoctor = ({
  queryId,
  comment: { _id, text, firstname, avatar, doctor, date },
  authdoctor,
  deleteCommentDoctor
}) => {
  
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  
  
  return (
  
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
            <Typography variant="subtitle2" noWrap>
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


  <>

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
      {(!authdoctor.loading && doctor === authdoctor.doctor._id ) ? (
      <ListItemText onClick={() => deleteCommentDoctor(queryId, _id)} primary="Delete" primaryTypographyProps={{ variant: 'body2' }} />
      ):  ("No Option")}
    </MenuItem>

   
  </Menu>
  </>
</Box>
</Card>
     
);
};

ReplyItemDoctor.propTypes = {
  queryId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  authdoctor: PropTypes.object.isRequired,
  deleteCommentDoctor: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authdoctor: state.authdoctor
});

export default connect(mapStateToProps, { deleteCommentDoctor })(ReplyItemDoctor);

