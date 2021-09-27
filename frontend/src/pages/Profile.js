import React from "react";
import { Container, Row, Col } from "shards-react";

import ProfileDetails from "../Components/Profile/ProfileDetails";
import ProfileForm from "../Components/Profile/ProfileForm";

import {  Typography } from '@material-ui/core';

import Page from '../Components/Page';

const Profile = () => (

  <Page title="Profile | Qognition">
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
    <Typography variant="h4">Profile</Typography>
    </Row>
    <Row>
      <Col lg="4">
        <ProfileDetails />
      </Col>
      <Col lg="8">
        <ProfileForm />
      </Col>
    </Row>
  </Container>
  </Page>
);

export default Profile;
