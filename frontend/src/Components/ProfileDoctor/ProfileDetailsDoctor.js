import React,{useEffect} from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from "shards-react";

import {getCurrentProfile} from '../../actions/profiledoctor';

import { connect } from 'react-redux';


import '../../pages/Doctor.css';


const ProfileDetailsDoctor = ({  
  getCurrentProfile,
  authdoctor: { doctor },
  profiledoctor: { profiledoctor } 
}) => { 

    useEffect(() => {
      getCurrentProfile();
    }, [getCurrentProfile]);

  return (
  <Card small className="mb-4 pt-0 shadow p-3 mb-5 bg-white rounded">
    <CardHeader className="background-banner">
      <div className="mb-3 mx-auto text-center">
        <img
          className="rounded-circle d-inline-flex p-2"
          src="/static/avatar.png"
          width="110"
        />
      </div>
      <h4 className="mb-0 text-center" style={{textTransform: "capitalize", color: "white"}}>Dr. {doctor && doctor.firstname}</h4>
    </CardHeader>
    <ListGroup flush>

      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          About Me
        </strong>
        {profiledoctor !== null ? (
        <span>{profiledoctor.description}</span>
        ):(null)}
      </ListGroupItem>
    </ListGroup>
  </Card>
);
};

ProfileDetailsDoctor.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  authdoctor: PropTypes.object.isRequired,
  profiledoctor: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  authdoctor: state.authdoctor,
  profiledoctor: state.profiledoctor
});

export default connect(mapStateToProps, { getCurrentProfile }) (ProfileDetailsDoctor);
