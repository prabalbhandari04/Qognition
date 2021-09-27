import React,{useEffect} from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from "shards-react";

import {getCurrentProfile} from '../../actions/profile';

import { connect } from 'react-redux';


import '../../pages/Doctor.css';

const ProfileDetails = ({  
  getCurrentProfile,
  auth: { user },
  profile: { profile } 
}) => { 

    useEffect(() => {
      getCurrentProfile();
    }, [getCurrentProfile]);

  return (
  <Card small className="mb-4 pt-0 shadow p-3 mb-5 bg-white rounded">
    <CardHeader className="background-banner" >
      <div className="mb-3 mx-auto text-center">
        <img
          className="rounded-circle d-inline-flex p-2"
          src="/static/avatar.png"
          width="110"
        />
      </div>
      <h4 className="mb-0 text-center" style={{textTransform: "capitalize", color: "white"}}>{user && user.firstname}</h4>
    </CardHeader>
    <ListGroup flush>

      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          About Me
        </strong>
        {profile !== null ? (
        <span>{profile.description}</span>
        ):(null)}
      </ListGroupItem>
    </ListGroup>
  </Card>
);
};

ProfileDetails.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile }) (ProfileDetails);
