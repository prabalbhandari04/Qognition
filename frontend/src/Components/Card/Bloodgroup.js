import { Icon } from '@iconify/react';
// material
import { alpha, styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
// utils
import React,{useEffect} from "react";

import {getCurrentProfile} from '../../actions/profile';

import { connect } from 'react-redux';

import PropTypes from "prop-types";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.error.darker,
  backgroundColor: theme.palette.error.lighter
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
  color: theme.palette.error.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.error.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------
 


const Bloodgroup = ({  
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
        <Icon icon="mdi:water-circle" width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Bloodgroup
      </Typography>
      <Typography variant="h3">{profile !== null ? (
        <>{profile.bloodgroup}</>
        ):(null)}</Typography>
    </RootStyle>
  );
}


Bloodgroup.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default  connect(mapStateToProps, { getCurrentProfile })(Bloodgroup);
