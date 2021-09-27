
import PropTypes from 'prop-types';

// material
import { Card, Typography, CardHeader, CardContent } from '@material-ui/core';

//


import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot
} from '@material-ui/lab';


    
const MedicationUpdateItem = ({
    med: { _id, medName, date, status, isLast},

  }) => {
    
    
    return(
        <>
        <TimelineItem>
        <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor:'success.main'
          }}
        />
         {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{medName} ({status})</Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {date}
        </Typography>
      </TimelineContent>
   
    </TimelineItem>
      </>
  
  );
   };
  
  MedicationUpdateItem.defaultProps = {
    showActions: true
  };
  
  MedicationUpdateItem.propTypes = {
    med: PropTypes.object.isRequired,
  };
  
  
  
export default MedicationUpdateItem;
  
  
      
      