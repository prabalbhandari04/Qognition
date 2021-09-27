import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal/';
class Breadcrumb extends Component {
    render(){
        var {Ptitle, Pdescription,breadcrumbClass, imgName} = this.props;
        return(
            <section className={`${breadcrumbClass}`} style={{background: "#f7fdfc"}} >
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
                <img className="breadcrumb_shap" src={require ("../../img/" + imgName)} alt=""/>

                <div className="container">
                    <div className="breadcrumb_content text-center">
                    <div className="row">
                        <div className="col-md-12 text-center seo_banner_content">
                        <Reveal effect="fadeInUp"><h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20" style={{color:"#263b5e"}}>{Ptitle}</h1></Reveal>
                        </div>
                    </div>
                        <p className="f_400 w_color f_size_16 l_height26" style={{color:"#263b5e"}}>{Pdescription}</p>
                    </div>
                </div>
                
            </section> 
        )
    }
}
export default Breadcrumb;