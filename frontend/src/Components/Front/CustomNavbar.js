import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Sticky from 'react-stickynode';
import Logo from '../Dashboard/Logo';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dialognav from '../Dialognav';
import './front.css';

class CustomNavbar extends Component {
    render() {
        var {mClass, nClass, cClass, slogo, hbtnClass, isAuthenticated} = this.props;
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <header className="header_area">
                <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
                    <div className={`container ${cClass}`}>
                        <Link className={`navbar-brand ${slogo}`} to="/">
                            <Logo/>
                        </Link>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_toggle">
                                <span className="hamburger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="hamburger-cross">
                                    <span></span>
                                    <span></span>
                                </span>
                            </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                                <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                                    <Link to="/" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Home
                                    </Link>

                                </li>
                                
                                <li className="dropdown submenu nav-item">
                                    <Link to="/service" title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Service</Link>
                                </li>
                    
                               
                                <li className="nav-item"><NavLink title="Pricing" className="nav-link" to="/Contact">Contact</NavLink></li>
                            </ul>
                            <div className="getstarted-mobile">

                            { isAuthenticated ? <a className={`btn_get btn_hover ${hbtnClass}`} href="/dashboard">Dashboard</a>: <div className={`${hbtnClass}`}><Dialognav/></div>}

                            </div>

                        </div>
                    </div>
                </nav>
                </header>
            </Sticky>
        );
    }
}

CustomNavbar.propTypes = {
    isAuthenticated: PropTypes.bool
  };

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStateToProps) (CustomNavbar);