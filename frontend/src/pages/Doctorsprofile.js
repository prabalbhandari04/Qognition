import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { getProfileById } from '../actions/profiledoctor';

import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from "shards-react";

import './Doctor.css';

import { Divider } from '@material-ui/core';


import { Box, Stack, Container, Typography } from '@material-ui/core';
import Page from '../Components/Page';



const Doctorsprofile = ({ getProfileById, profiledoctor: { profiledoctor, loading }, authdoctor }) => {

  let im = useParams().id;

  useEffect(() => {
    getProfileById(im);
  }, [getProfileById, im]);

  return loading || profiledoctor === null ? (
       ""
      ) : (
        <>
        <Page title="Profile | Qognition">
      <Container maxWidth="xl">
       <Box sx={{ pb: 5 }}>
       <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">Profile ( Dr. {profiledoctor.firstName} )</Typography>
            <Typography>
              <Link to="/dashboard/doctors" className="btn"  style={{background:"#6331d8", color:"white"}} >
              Go Back 
            </Link>
            </Typography>
            
      </Stack>
          
    
        <Card small className="mb-4 pt-0 shadow p-3 mb-5 bg-white rounded">
        <CardHeader className="background-banner">
          <div className="mb-3 mx-auto text-center ">
            <img
              className="rounded-circle d-inline-flex p-2"
              src="/static/avatar.png"
              width="110"
            />
          </div>
          <div>
          <div className="mb-0  text-center" style={{textTransform: "capitalize", color:"white"}}>
            <h4 style={{textTransform: "capitalize", color:"white"}}> Dr. {profiledoctor.firstName} {profiledoctor.lastName}</h4>
            {profiledoctor.speciality}
            
             </div>
         
        </div>
        </CardHeader>

        <ListGroup flush>
    
          <ListGroupItem className="p-4 text-center">
            <strong className="text-muted d-block mb-2">
              About Me
            </strong>
           
            <span>{profiledoctor.description}</span>
            <br></br>
            <br></br>

            <Divider/>

            <div style={{display: "flex", alignItems:"flex-end", justifyContent:"space-between", paddingTop:"15px"}}>

            <div>
            <strong className="text-muted d-block">
              Education
            </strong>
            <span>{profiledoctor.education}</span>

            </div>

            <div>
            <strong className="text-muted d-block ">
              Experience
            </strong>
            <span>{profiledoctor.experience}</span>
            </div>

            <div>
            <strong className="text-muted d-block">
              Gender
            </strong>
            <span>{profiledoctor.gender}</span>
            </div>

            

            </div>

           
          </ListGroupItem>

          <ListGroupItem className="p-4 text-center">

          <div  style={{display: "flex", alignItems:"flex-end", justifyContent:"space-evenly"}}>
          <div  className="text-muted d-block text-center">
            <strong className="text-muted d-block ">
             Age
            </strong>
            <span>{profiledoctor.age} years</span>
            </div>

            <div  className="text-muted d-block text-center" >
            <strong className="text-muted d-block ">
             Designation
            </strong>
            <span>{profiledoctor.designation}</span>
            </div>

            

            </div>

           
          

            </ListGroupItem>


            <ListGroupItem className="p-4 text-center">

              <div  style={{display: "flex", alignItems:"flex-end", justifyContent:"space-evenly"}}>
                <div  className="text-muted d-block text-center">
              <strong className="text-muted d-block ">
              Joined on
              </strong>
              <span>{profiledoctor.createddate}</span>
              </div>



              </div>


  </ListGroupItem>
           

            
        </ListGroup>
      </Card>

      </Box>
      </Container>
      </Page>
      </>
      )}
  

Doctorsprofile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profiledoctor: PropTypes.object.isRequired,
  authdoctor: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profiledoctor: state.profiledoctor,
  authdoctor: state.authdoctor
});

export default connect(mapStateToProps, { getProfileById })(Doctorsprofile);
