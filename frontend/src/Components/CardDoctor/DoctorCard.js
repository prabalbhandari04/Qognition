import { Icon } from '@iconify/react';
// material
import { alpha, styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
// utils
import React,{useEffect} from "react";


import { connect } from 'react-redux';

import PropTypes from "prop-types";

import { getProfiles } from '../../actions/profiledoctor';
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


const DoctorCard = ({ getProfiles, profiledoctor: { profiles} }) => {

  
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);


  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon="mdi:doctor" width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Total Doctors
      </Typography>
      <Typography variant="h3">{profiles.length > 0 ? (
        <>{profiles.length}</>
        ):(null)}</Typography>
    </RootStyle>
  );
}


DoctorCard.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profiledoctor: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profiledoctor: state.profiledoctor
});

export default  connect(mapStateToProps, { getProfiles })(DoctorCard);
