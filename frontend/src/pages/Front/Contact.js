import React from 'react';
import CustomNavbar from '../../Components/Front/CustomNavbar';
import Breadcrumb from '../../Components/Front/Breadcrumb';
import Contacts from '../../Components/Front/Contacts';
import Footer from '../../Components/Front/Footer';
import FooterData from '../../Components/Front/FooterData';

import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return(
        

            <div className="body_wrapper">
            <Helmet>
                <title>Contacts | Qognition</title>
            </Helmet>
            <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Contact Us" Pdescription="A holistic healthcare consultation web service."/>
            <Contacts/>
            <Footer FooterData={FooterData}/>
            </div>



    )
}
export default Contact;