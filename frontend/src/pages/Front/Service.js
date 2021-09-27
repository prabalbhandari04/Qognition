import React from 'react';
import CustomNavbar from '../../Components/Front/CustomNavbar';
import Breadcrumb from '../../Components/Front/Breadcrumb';
import HRService from '../../Components/Front/HRService';
import ServiceData from '../../Components/Front/ServiceData';
import Footer from '../../Components/Front/Footer';
import FooterData from '../../Components/Front/FooterData';
import { Helmet } from 'react-helmet-async';



import { connect } from 'react-redux';


const Service = () => {

   
    return(
        <div className="body_wrapper">
            <Helmet>
                <title>Services | Qognition</title>
            </Helmet>
            <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Our services" Pdescription="Qognition is a holistic healthcare consultation web service that seeks to integrate common medical practice tasks and processes into a unified system."/>
            <HRService ServiceData={ServiceData}/>
            <Footer FooterData={FooterData}/>
        </div>
    )
}


const mapStateToProps = state => ({
    
  });

export default connect(mapStateToProps) (Service);