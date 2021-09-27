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

import { createProfile, getCurrentProfile } from '../../actions/profiledoctor';

import Alert from "../Alert";

import '../../pages/Doctor.css';

const initialState = {
  firstName: '',
  lastName: '',
  gender: '',
  age: '',
  speciality : '',
  education :'',
  experience :'',
  designation :'',
  description :'',
};


const ProfileFormDoctor = ({ title, profiledoctor: { profiledoctor, loading },
  createProfile,
  getCurrentProfile,
  history }) => {

    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
      if (!profiledoctor) getCurrentProfile();
      if (!loading && profiledoctor) {
        const profileData = { ...initialState };
        for (const key in profiledoctor) {
          if (key in profileData) profileData[key] = profiledoctor[key];
        }
        for (const key in profiledoctor.social) {
          if (key in profileData) profileData[key] = profiledoctor.social[key];
        }
        if (Array.isArray(profileData.skills))
          profileData.skills = profileData.skills.join(', ');
        setFormData(profileData);
      }
    }, [loading, getCurrentProfile, profiledoctor]);


    const {
      firstName,
      lastName,
      gender,
      age,
      speciality, 
      education,
      experience,
      designation,
      description,
      } = formData;


      const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, profiledoctor ? true : false);
  };


    return(
  <Card small className="mb-4 shadow p-3 mb-5 bg-white rounded" >
    <Alert/>
    <CardHeader className="background-banner">
    <Typography variant="h6" style={{color: "white"}}>{title}</Typography>
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

                <Col md="3" className="form-group">
                  <label htmlFor="feZipCode">Experience</label>
                  <FormSelect name="experience" value={experience}
                    onChange={onChange}>
                    <option hidden>Choose</option>   
                    <option>1 year</option>
                    <option>2 year</option>
                    <option>3 year</option>
                    <option>4 year</option>
                    <option>5+ year</option>
                  </FormSelect>
                </Col>

                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Speciality</label>
                  <FormInput
                    type="text"
                      placeholder="Speciality"
                     name="speciality"
                     value={speciality}
                     onChange={onChange}
                  />
                </Col>

                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Designation</label>
                  <FormInput
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    value={designation}
                    onChange={onChange}
                   
                  />
                </Col>
                
              </Row>
              
              <Row form>
               
              <Col md="12" className="form-group">
                  <label htmlFor="feLastName">Education</label>
                  <FormInput
                    type="text"
                    placeholder="MBBS/MD/MS/DM"
                     name="education"
                     value={education}
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

ProfileFormDoctor.propTypes = {
  title: PropTypes.string,
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profiledoctor: PropTypes.object.isRequired
};

ProfileFormDoctor.defaultProps = {
  title: "My Profile"
};

const mapStateToProps = state => ({
  profiledoctor: state.profiledoctor
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(ProfileFormDoctor);
