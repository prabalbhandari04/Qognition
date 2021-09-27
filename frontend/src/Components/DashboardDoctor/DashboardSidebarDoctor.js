import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Link,  Drawer, Typography, Avatar, } from '@material-ui/core';
// components
import Logo from './Logo';

import NavSection from '../NavSection';
import { MHidden } from './@material-extend';
//
import sidebarConfig from './SidebarConfigDoctor';


import './Dash.css';

import { connect } from 'react-redux';


import {getCurrentProfile} from '../../actions/profiledoctor';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH
  }
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[200]
}));

// ----------------------------------------------------------------------


 
const DashboardSidebarDoctor = ({ getCurrentProfile,
  authdoctor: { doctor },
  isOpenSidebar, onCloseSidebar }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <div className="dash-container">
     
   
      <Box sx={{ px: 2.5, py: 3 }}>
        <Box component={RouterLink} to="/dashdoctor" sx={{ display: 'flex', justifyContent:'center', textDecoration: 'none' }}>
          <Logo />
        </Box>
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src="/static/avatar.png"  alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
              {doctor !== null ? (
        <>Doctor: {doctor.firstname}</>
        ):(null)}
              </Typography>
              
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={sidebarConfig} />

      <Box sx={{ flexGrow: 1 }} />

     
      </div>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default'
            }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}

DashboardSidebarDoctor.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
  authdoctor: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profiledoctor: PropTypes.object.isRequired
};


const mapStateToProps = (state) => ({
  authdoctor: state.authdoctor,
  profiledoctor: state.profiledoctor
});


export default  connect(mapStateToProps, { getCurrentProfile}) (DashboardSidebarDoctor);