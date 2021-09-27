// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
// components
import Page from '../Components/Page';

import React, {useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles } from '../actions/profiledoctor';
import DoctorCard from '../Components/DoctorCard';

// ----------------------------------------------------------------------

const Doctors = ({ getProfiles, profiledoctor: { profiles} }) => {

  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Page title="Doctors | Qognition">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4" style={{paddingBottom:"20px"}}>Doctors</Typography>


          <Grid container spacing={3}>
          {profiles.length > 0 ? (
              profiles.map(profiledoctor => (
                <Grid key={profiledoctor._id} profiledoctor={profiledoctor} item xs={12} sm={6} md={3} >
                  <DoctorCard profiledoctor={profiledoctor}/>
                  </Grid>
              ))
            ) : (
              <Grid spacing={5} item xs={12} sm={6} md={3} >
                  <h5>No doctors found!</h5>
              </Grid>
             
             
            )}
        
        </Grid>
          
        </Box>
      </Container>
    </Page>
  );
}

Doctors.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profiledoctor: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profiledoctor: state.profiledoctor
});


export default connect(mapStateToProps,{ getProfiles } )(Doctors);
