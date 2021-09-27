import { Icon } from '@iconify/react';
// material
import { alpha, styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
// utils
import React,{useEffect, useState} from "react";

import {getCurrentProfile} from '../../actions/profile';

import { connect } from 'react-redux';

import PropTypes from "prop-types";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: "#005249",
  backgroundColor: "#C8FACD"
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: "#007B55",
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}));





const BmiCard = ({  
  getCurrentProfile,
  auth: { user },
  profile: { profile } 
}) => {


  

  
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);





  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon="healthicons:medium-level" width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        BMI
      </Typography>
      <Typography variant="h3">{(() => {
        if (profile !== null ) {
          let bmi = (profile.weight / ((profile.height * profile.height) 
          / 10000)).toFixed(2);
          return (
            <>{bmi}</>
          )
           } else {
          return (
            (null)
          )
        }
      })()}</Typography>
    </RootStyle>
  );
}


BmiCard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default  connect(mapStateToProps, { getCurrentProfile })(BmiCard);
