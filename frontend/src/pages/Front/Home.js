import React from 'react';
import { Helmet } from 'react-helmet-async';
import CustomNavbar from '../../Components/Front/CustomNavbar';
import DesignBanner from '../../Components/Front/DesignBanner';
import Footer from '../../Components/Front/Footer';
import FooterData from '../../Components/Front/FooterData';
import SupportIntegration from '../../Components/Front/SupportIntegration';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router';

const Home = ({isAuthenticated}) => { 

    if (isAuthenticated) {
        return <Navigate to='/dashboard' />;
      }
    
    
    return (
    <div className="body_wrapper">
        <Helmet>
                <title>Home | Qognition</title>
        </Helmet>
        <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>
        <DesignBanner/>
        <SupportIntegration/>
        <Footer FooterData={FooterData}/>
    </div>
)
}


Home.propTypes = {
    isAuthenticated: PropTypes.bool
  };


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStateToProps) (Home);