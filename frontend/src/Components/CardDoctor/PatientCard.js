import { Icon } from '@iconify/react';
// material
import { alpha, styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
// utils
import React,{useEffect} from "react";


import { connect } from 'react-redux';

import PropTypes from "prop-types";

import { getProfiles } from '../../actions/profile';
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

const PatientCard = ({ getProfiles, profile: { profiles} }) => {

  
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);


  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon="mdi:account-heart" width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Total Patients
      </Typography>
      <Typography variant="h3">{profiles?.length > 0 ? (
        <>{profiles.length}</>
        ):(null)}</Typography>
    </RootStyle>
  );
}


PatientCard.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default  connect(mapStateToProps, { getProfiles })(PatientCard);
