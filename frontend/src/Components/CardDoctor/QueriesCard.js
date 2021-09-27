import { Icon } from '@iconify/react';
// material
import { alpha, styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
// utils
import React,{useEffect} from "react";


import { connect } from 'react-redux';

import PropTypes from "prop-types";

import { getPosts } from '../../actions/query';
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


const QueriesCard = ({ getPosts, query: { queries } }) => {

  useEffect(() => {
    getPosts();
  }, [getPosts]);


  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon="mdi:forum" width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Total Queries
      </Typography>
      <Typography variant="h3">{queries?.length > 0 ? (
        <>{queries.length}</>
        ):(null)}</Typography>
    </RootStyle>
  );
}


QueriesCard.propTypes = {
  getPosts: PropTypes.func.isRequired,
  query: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  query: state.query
});

export default  connect(mapStateToProps, { getPosts })(QueriesCard);
