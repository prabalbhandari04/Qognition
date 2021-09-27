import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  FormTextarea,
 
} from "shards-react";
import {  Typography,  Button } from '@material-ui/core';

import { connect } from 'react-redux';

import { createProfile, getCurrentProfile } from '../../actions/profile';
import Alert from "../Alert";

import '../../pages/Doctor.css';


const initialState = {
  firstName: '',
  lastName: '',
  gender: '',
  age: '',
  bloodgroup : '',
  height :'',
  weight :'',
  phone :'',
  description :'',
};


const ProfileForm = ({ title, profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history }) => {

    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
      if (!profile) getCurrentProfile();
      if (!loading && profile) {
        const profileData = { ...initialState };
        for (const key in profile) {
          if (key in profileData) profileData[key] = profile[key];
        }
        for (const key in profile.social) {
          if (key in profileData) profileData[key] = profile.social[key];
        }
        if (Array.isArray(profileData.skills))
          profileData.skills = profileData.skills.join(', ');
        setFormData(profileData);
      }
    }, [loading, getCurrentProfile, profile]);


    const {
      firstName,
      lastName,
      gender,
      age,
      bloodgroup, 
      height,
      weight,
      phone,
      description,
      } = formData;


      const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };


    return(
     
  <Card small className="mb-4 shadow p-3 mb-5 bg-white rounded" >
     <Alert/>
    <CardHeader className="background-banner">
    <Typography variant="h6"  style={{color: "white"}}>{title}</Typography>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form onSubmit={onSubmit}>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                <label htmlFor="feCity">First Name</label>
                  <FormInput
                  type="text"
                    placeholder="First Name"
                     name="firstName"
                     value={firstName}
                     onChange={onChange}
                    
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Last Name</label>
                  <FormInput
                    type="text"
                      placeholder="Last Name"
                     name="lastName"
                     value={lastName}
                     onChange={onChange}
                  />
                </Col>
              </Row>
              <Row >
                
              <Col md="4" className="form-group">
                  <label htmlFor="feInputState">Gender</label>
                  <FormSelect name="gender" value={gender}
                    onChange={onChange}>
                    <option hidden>Choose</option> 
                    <option>Male</option>
                    <option>Female</option>
                  </FormSelect>
                </Col>

                <Col md="4" className="form-group">
                  <label htmlFor="feInputState">Age</label>
                  <FormInput
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={age}
                    onChange={onChange}
                  />
                </Col>

                <Col md="4" className="form-group">
                  <label htmlFor="feInputState">Blood Group</label>
                  <FormSelect name="bloodgroup" value={bloodgroup} onChange={onChange}>
                  <option hidden>Choose</option> 
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </FormSelect>
                </Col>
                
              </Row>
              
              <Row form>
               
                <Col md="3" className="form-group">
                  <label htmlFor="feZipCode">Height (Cm)</label>
                  <FormInput
                    type="number"
                    name="height"
                    placeholder="Height"
                    value={height}
                    onChange={onChange}
                  />
                </Col>
                
                <Col md="3" className="form-group">
                  <label htmlFor="feZipCode">Weight (Kg)</label>
                  <FormInput
                    type="number"
                    name="weight"
                    placeholder="Weight"
                    value={weight}
                    onChange={onChange}
                  />
                </Col>

                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Phone Number</label>
                  <FormInput
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={onChange}
                   
                  />
                </Col>

              </Row>
              <Row form>
                {/* Description */}
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">About me</label>
                  <FormTextarea type="text" name="description" rows="5" value={description} onChange={onChange}/>
                </Col>
              </Row>
              
              <Button
            fullWidth
            type="submit" 
            variant="contained"
            style={{color: "white"}}
          >
            Save
          </Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
  );
  };

ProfileForm.propTypes = {
  title: PropTypes.string,
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

ProfileForm.defaultProps = {
  title: "My Profile"
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(ProfileForm);
