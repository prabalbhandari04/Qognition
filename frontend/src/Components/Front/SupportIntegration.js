import React, {Component} from 'react';
import Sectitle from './Sectitle';

class SupportIntegration extends Component {
    constructor(){
        super();
        this.state = {
            integrationItem:[
                {
                    "id": 100,
                    "iImage": "kissmetrics.png",
                    "text": "Role-based System"
                },
                {
                    "id": 101,
                    "iImage": "metorik.png",
                    "text": "Doctors"
                },
                {
                    "id": 102,
                    "iImage": "nicereply-1.png",
                    "text": "Clients"
                },
                {
                    "id": 103,
                    "iImage": "campfire.png",
                    "text": "Consultation"
                },
                {
                    "id": 104,
                    "iImage": "webhooks.png",
                    "text": "Health-tracking"
                },
                {
                    "id": 105,
                    "iImage": "briteverify.png",
                    "text": "Data Storage"
                }
            ]
        };
    }

    render(){
        return(
            <section className="support_integration_area">
                <div className="container">
                    <Sectitle sClass="sec_title text-center mb_70" Title='Qognition Purpose' TitleP='Qognition is a holistic healthcare consultation web service that seeks to integrate common medical practice tasks and processes into a unified system.'/>
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9 col-md-10 col-sm-12">
                            <div className="row">
                                {this.state.integrationItem.map(post =>(
                                    <div className="col-lg-4 col-md-4 col-sm-6" key={post.id}>
                                        <a href="/#" className="s_integration_item">
                                            <h5>{post.text}</h5>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-12">
                            <img className="integration_img" src="/static/tree.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default SupportIntegration;
