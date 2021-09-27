import React, { Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import { getImmunizes } from '../actions/immunize';


import { Box, Stack, Grid, Container, Typography } from '@material-ui/core';

import Page from '../Components/Page';

import ImmunizeForm from '../Components/Immunize/ImmunizeForm';
import ImmunizeItem from '../Components/Immunize/ImmunizeItem';


const Immunization = ({ immunize: {immunizes} }) => {


  useEffect(() => {
    getImmunizes();
  }, [ getImmunizes]);

  return (
    <Page title="Immunization | Qognition">
       <Container maxWidth="xl">
       <Box sx={{ pb: 5 }}>
       <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">Immunization</Typography>
            <ImmunizeForm/>
      </Stack>

       

      

        {immunizes.length > 0 ? (immunizes.map((immunize) => (
          <div style={{paddingBottom:"20px"}}>
          <ImmunizeItem  key={immunize._id} immunize={immunize} />
          </div>
        )) ):(
          <Grid  >
            <h5>No immunization records found! </h5>
            <h6>Add Immunization records to track your medical status!</h6>
          </Grid>
         
         
        )}

        
     

      </Box>
      </Container>
    </Page>
  );
};

Immunization.propTypes = {
  getImmunizes: PropTypes.func.isRequired,
  immunize: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  immunize: state.immunize,
  auth: state.auth
});



export default connect(mapStateToProps, {getImmunizes })(Immunization);


