
import PropTypes from 'prop-types';
import React, {useEffect } from 'react';
import { Icon } from '@iconify/react';
import arrowIosForwardFill from '@iconify-icons/eva/arrow-ios-forward-fill';
import { Link} from 'react-router-dom';
// material
import { Box, Stack,Card, Button, Divider, Typography, CardHeader,  Grid } from '@material-ui/core';

//
import QueryUpdateItem from './QueryUpdateItem';

import { connect } from 'react-redux';
import { getPosts } from '../../../actions/query';


const QueryUpdateDoctor = ({ getPosts, query: { queries } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (

    <Card>
    <CardHeader title="Patient Queries" />

        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>

          {/* {queries.map((query) => (
            <QueryUpdateItem key={query._id} query={query}  />
          ))} */}

              {queries.length > 0 ? (queries.map((query) => (
                <div style={{paddingBottom:"20px"}}>
                <QueryUpdateItem key={query._id} query={query} />
                </div>
              )) ):(
                <Typography variant="subtitle2" noWrap>
                  No recent queries found! &nbsp;
                  
              </Typography>)}
          
        </Stack>

        <Divider />

        <Box sx={{ p: 2, textAlign: 'right' }}>
        <Link
          to="/dashdoctor/queries"

          style={{color:"#6331d8"}}
        >
          View all <Icon icon={arrowIosForwardFill} />
        </Link>

        </Box>
        </Card>
      
  );
};

QueryUpdateDoctor.propTypes = {
  getPosts: PropTypes.func.isRequired,
  query: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  query: state.query
});

export default connect(mapStateToProps, { getPosts })(QueryUpdateDoctor);
