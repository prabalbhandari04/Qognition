import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ReplyFormDoctor from '../../Components/QueriesDoctor/RepliesDoctor/ReplyFormDoctor';
import ReplyItemDoctor from '../../Components/QueriesDoctor/RepliesDoctor/ReplyItemDoctor';
import { getPost } from '../../actions/query';
import QueryItemDoctor from '../../Components/QueriesDoctor/QueryItemDoctor';

import Page from '../../Components/Page';



import { Box, Stack, Container, Typography } from '@material-ui/core';

const ReplyDoctor = ({ getPost, query: { query, loading }}) => {

    let im = useParams().id;

  useEffect(() => {
    getPost(im);
  }, [getPost,im]);

  return loading || query === null ? (
    ""
  ) : (
    <Page title="Replies Doctor | Qognition">
      <Container maxWidth="xl">
       <Box sx={{ pb: 5 }}>
       <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">Replies</Typography>
            <Typography>
              <Link to="/dashdoctor/queries" className="btn"  style={{background:"#6331d8", color:"white"}} >
              Go Back 
            </Link>
            </Typography>
            
      </Stack>
    

      <QueryItemDoctor query={query} showActions={false} />
      <ReplyFormDoctor queryId={query._id} />
      <div className="comments">
        {query.comments.map((comment) => (
          <div style={{paddingBottom:"20px"}}>
          <ReplyItemDoctor key={comment._id} comment={comment} queryId={query._id} />
          </div>
        ))}
        </div>
       </Box>
      </Container>
      </Page>
  );
};

ReplyDoctor.propTypes = {
  getPost: PropTypes.func.isRequired,
  query: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  query: state.query
});

export default connect(mapStateToProps, { getPost })(ReplyDoctor);



// <Fragment>
//       <Link to="/posts" className="btn">
//         Back To Posts
//       </Link>
//       <QueryItemDoctor query={query} showActions={false} />
//       <ReplyFormDoctor queryId={query._id} />
//       <div className="comments">
//         {query.comments.map((comment) => (
//           <ReplyItemDoctor key={comment._id} comment={comment} queryId={query._id} />
//         ))}
//       </div>
//     </Fragment>