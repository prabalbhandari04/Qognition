import React,{Component} from 'react';
import Reveal from 'react-reveal/Reveal/';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dialoghome from '../Dialoghome';
import Dialoghome2 from '../Dialoghome2';

class DesignBanner extends Component  {
    render() {

        var {isAuthenticated} = this.props;

    return(
        <section className="seo_home_area">
            <div className="home_bubble">
                <div className="bubble b_one"></div>
                <div className="bubble b_two"></div>
                <div className="bubble b_three"></div>
                <div className="bubble b_four"></div>
                <div className="bubble b_five"></div>
                <div className="bubble b_six"></div>
                <div className="triangle b_seven" data-parallax='{"x": 20, "y": 150}'><img src={require('../../img/seo/triangle_one.png')} alt=""/></div>
                <div className="triangle b_eight" data-parallax='{"x": 120, "y": -10}'><img src={require('../../img/seo/triangle_two.png')} alt=""/></div>
                <div className="triangle b_nine"><img src={require('../../img/seo/triangle_three.png')} alt=""/></div>
            </div>
            <div className="banner_top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center seo_banner_content">
                            <Reveal effect="fadeInUp" duration={500}><h2>Are you sick and tired<br/> of being sick and tired?</h2></Reveal>
                            <Reveal effect="fadeInUp" duration={1000}><p className="wow fadeInUp" data-wow-delay="0.5s">Try Qognition now and feel the difference!</p></Reveal>
                           
                        { isAuthenticated ?  <Reveal effect="fadeInLeft" duration={1200}><a href="/profile" className="seo_btn seo_btn_one btn_hover wow fadeInLeft">Profile</a></Reveal> : <Reveal effect="fadeInLeft" duration={1200}><div  className="seo_btn seo_btn_one btn_hover wow fadeInRight"><Dialoghome2/></div></Reveal>}
                           <Reveal effect="fadeInLeft" duration={1200}><div  className="seo_btn seo_btn_two btn_hover wow fadeInRight"> <Dialoghome/> </div></Reveal>
                            
                           
                           
                        </div>
                    </div>
                    <div className="saas_home_img">
                        <Reveal effect="fadeInUp" duration={1400}><img src={require('../../img/seo/image.png')} alt=""/></Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
}

DesignBanner.propTypes = {
    isAuthenticated: PropTypes.bool
  };

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
export default connect(mapStateToProps) (DesignBanner);