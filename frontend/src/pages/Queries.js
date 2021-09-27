import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions/query';
import QueryForm from '../Components/Queries/QueryForm';
import QueryItem from '../Components/Queries/QueryItem';

import { Box, Stack, Grid, Container, Typography } from '@material-ui/core';

import Page from '../Components/Page';

const Queries = ({ getPosts, query: { queries } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Page title="Queries | Qognition">
       <Container maxWidth="xl">
       <Box sx={{ pb: 5 }}>
       <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">Queries</Typography>
           <QueryForm/>
      </Stack>

      <div className="posts">
        {queries.length > 0 ? (queries.map((query) => (
          <div style={{paddingBottom:"20px"}}>
          <QueryItem key={query._id} query={query} />
          </div>
        )) ):(
          <Grid spacing={5} item xs={12} sm={6} md={3} >
            <h5>No queries found </h5>
              <h6>Ask Something? </h6>
          </Grid>
         
         
        )}
      </div>
      </Box>
      </Container>
    </Page>
  );
};

Queries.propTypes = {
  getPosts: PropTypes.func.isRequired,
  query: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  query: state.query
});

export default connect(mapStateToProps, { getPosts })(Queries);
