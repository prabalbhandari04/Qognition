import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ReplyForm from '../Components/Queries/Replies/ReplyForm';
import ReplyItem from '../Components/Queries/Replies/ReplyItem';
import { getPost } from '../actions/query';
import QueryItem from '../Components/Queries/QueryItem';
import Page from '../Components/Page';


import { Box, Stack, Container, Typography } from '@material-ui/core';

const Reply = ({ getPost, query: { query, loading}}) => {

    let im = useParams().id;

  useEffect(() => {
    getPost(im);
  }, [getPost,im]);

  return loading || query === null ? (
    ""
  ) : (
    <Page title="Replies | Qognition">
      <Container maxWidth="xl">
       <Box sx={{ pb: 5 }}>
       <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">Replies</Typography>
            <Typography>
              <Link to="/dashboard/queries" className="btn"  style={{background:"#6331d8", color:"white"}} >
              Go Back 
            </Link>
            </Typography>
            
      </Stack>
    

      <QueryItem query={query} showActions={false} />
      <ReplyForm queryId={query._id} />
      <div className="comments">
        {query.comments.map((comment) => (
          <div style={{paddingBottom:"20px"}}>
          <ReplyItem key={comment._id} comment={comment} queryId={query._id} />
          </div>
        ))}
        </div>
       </Box>
      </Container>
      </Page>
  );
};

Reply.propTypes = {
  getPost: PropTypes.func.isRequired,
  query: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  query: state.query
});

export default connect(mapStateToProps, { getPost })(Reply);
