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
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
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
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

// function Conversion(centi) {
//   var inch = 0.3937 * centi;
//   var feet = 0.0328 * centi;
//    inch=inch.toFixed(2);
//    feet=feet.toFixed(2);
//  document.write("Inches is: \n" + inch + "<br>");
//  document.write("Feet is: " + feet); 
//  return 0;
// }


const HeightCard = ({  
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
        <Icon icon="mdi:human-male-height" width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Height
      </Typography>
      <Typography variant="h3">{profile !== null ? (
        <>{profile.height}<span style={{fontSize: "15px"}}>cm</span></>
        ):(null)}</Typography>
    </RootStyle>
  );
}


HeightCard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default  connect(mapStateToProps, { getCurrentProfile })(HeightCard);
