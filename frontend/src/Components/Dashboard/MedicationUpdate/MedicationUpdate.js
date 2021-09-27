
import PropTypes from 'prop-types';
import React, {useEffect } from 'react';
import { Link} from 'react-router-dom';
// material
import { Box, Stack,Card, Button, Divider, Typography, CardHeader, CardContent } from '@material-ui/core';

import {
  Timeline,
} from '@material-ui/lab';

//


import { connect } from 'react-redux';
import { getMeds } from '../../../actions/med';
import MedicationUpdateItem from './MedicationUpdateItem';


const MedicationUpdate = ({ getMeds, med: {meds}}) => {
 
  useEffect(() => {
    getMeds();
  }, [getMeds]);

  return (

        <Card
        sx={{
          '& .MuiTimelineItem-missingOppositeContent:before': {
            display: 'none'
          }
        }}
        >
        <CardHeader title="My Medication" />
        <CardContent>
          <Timeline>
                  {meds.length > 0 ? (meds.map((med) => (
                            <div style={{paddingBottom:"20px"}}>
                            <MedicationUpdateItem  key={med._id} med={med}/>
                            </div>
                          )) ):(
                          <Typography variant="subtitle2" noWrap>
                            No medication found! &nbsp;<Link
                    to="/dashboard/medication"

                    style={{color:"#6331d8"}}
                  >
                    Add?
                  </Link>
                          </Typography>)}

          </Timeline>
        </CardContent>
        </Card>
      
  );
};

MedicationUpdate.propTypes = {
  getMeds: PropTypes.func.isRequired,
  med: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  med: state.med,
});

export default connect(mapStateToProps, { getMeds })(MedicationUpdate);
