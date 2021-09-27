import React, { Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getMeds } from '../actions/med';


import { Box, Stack, Grid, Container, Typography } from '@material-ui/core';

import Page from '../Components/Page';

import MedForm from '../Components/Meds/MedForm';
import MedItem from '../Components/Meds/MedItem';


const Medication = ({ getMeds, med: {meds}}) => {


  useEffect(() => {
    getMeds();
  }, [getMeds]);

  return (
    <Page title="Medication | Qognition">
       <Container maxWidth="xl">
       <Box sx={{ pb: 5 }}>
       <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">Medication</Typography>
          <MedForm/>
      </Stack>

       

        {meds.length > 0 ? (meds.map((med) => (
          <div style={{paddingBottom:"20px"}}>
          <MedItem  key={med._id} med={med} />
          </div>
        )) ):(
          <Grid  >
            <h5>No medication found! </h5>
            <h6>Add Medication to track your medical history!</h6>
          </Grid>
         
         
        )}

        
     

      </Box>
      </Container>
    </Page>
  );
};

Medication.propTypes = {
  getMeds: PropTypes.func.isRequired,
  med: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  med: state.med,
  auth: state.auth
});



export default connect(mapStateToProps, { getMeds})(Medication);


