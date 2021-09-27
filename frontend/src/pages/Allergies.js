import React, { Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import { getAllergies } from '../actions/allergy';


import { Box, Stack, Grid, Container, Typography } from '@material-ui/core';

import Page from '../Components/Page';


import AllergyForm from '../Components/Allergy/AllergyForm';
import AllergyItem from '../Components/Allergy/AllergyItem';



const Allergies = ({ getAllergies, allergy: {allergies}}) => {


  useEffect(() => {
  
    getAllergies();
 
  }, [getAllergies]);

  return (
    <Page title="Allergies | Qognition">
       <Container maxWidth="xl">
       <Box sx={{ pb: 5 }}>
       <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">Allergies</Typography>
          <AllergyForm/>
      </Stack>


          
          {allergies.length > 0 ? (allergies.map((allergy) => (
          <div style={{paddingBottom:"20px"}}>
          <AllergyItem  key={allergy._id} allergy={allergy} />
          </div>
        )) ):(
          <Grid  >
            <h5>No allergy history found! </h5>
            <h6>Add allergy history to track your medical status!</h6>
          </Grid>
         
         
        )}


      
        
     

      </Box>
      </Container>
    </Page>
  );
};

Allergies.propTypes = {

  getAllergies: PropTypes.func.isRequired,

  allergy: PropTypes.object.isRequired,

  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  allergy: state.allergy,
  auth: state.auth
});



export default connect(mapStateToProps, { getAllergies})(Allergies);


