import React from "react";
import { Container, Row, Col } from "shards-react";

import ProfileDetailsDoctor from "../../Components/ProfileDoctor/ProfileDetailsDoctor";
import ProfileFormDoctor from "../../Components/ProfileDoctor/ProfileFormDoctor";

import {  Typography } from '@material-ui/core';

import Page from '../../Components/Page';

const ProfileDoctor = () => (

  <Page title="Profile | Qognition">
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
    <Typography variant="h4">Profile</Typography>
    </Row>
    <Row>
      <Col lg="4">
        <ProfileDetailsDoctor />
      </Col>
      <Col lg="8">
        <ProfileFormDoctor />
      </Col>
    </Row>
  </Container>
  </Page>
);

export default ProfileDoctor;
