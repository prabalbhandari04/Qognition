
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import arrowIosForwardFill from '@iconify-icons/eva/arrow-ios-forward-fill';
// material
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@material-ui/core';

//

import formatDate from '../../../utils/formatDate';


    
const QueryUpdateItem = ({
    query: { _id, text, firstname, avatar, user, date },

  }) => {
    
    
    return(
        <>
        <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        alt=""
        src={avatar}    
        sx={{ width: 48, height: 48, borderRadius: 1.5 }}
      />
       <Box sx={{ minWidth: 240 }}>
          <Typography variant="subtitle2" noWrap>
            {text}
          </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', textTransform:"capitalize" }} noWrap>
        By: {firstname} ( {formatDate(date)})
        </Typography>
      </Box>
    
    </Stack>
      </>
  
  );
   };
  
  QueryUpdateItem.defaultProps = {
    showActions: true
  };
  
  QueryUpdateItem.propTypes = {
    query: PropTypes.object.isRequired,
  };
  
  
  
export default QueryUpdateItem;
  
  
      
      