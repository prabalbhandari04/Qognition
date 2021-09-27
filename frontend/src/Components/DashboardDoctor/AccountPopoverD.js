///--------UseState ra Link vayo Usestate vaneko function jastai state manage garcha link le href ko kam garcha 
import { useRef, useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

///--------Icon chai react-icon use garamla pachi jhan easy cha

import { Icon } from '@iconify/react';
import homeFill from '@iconify-icons/eva/home-fill';
import personFill from '@iconify-icons/eva/person-fill';


/////------Material UI ko component ho 

import { alpha } from '@material-ui/core/styles';
import { Button, Box, Divider, MenuItem, Typography, Avatar, IconButton } from '@material-ui/core';



import MenuPopoverD from './MenuPopoverD';


import {getCurrentProfile} from '../../actions/profiledoctor';

// ----------------------------------------------------------------------

import { connect } from 'react-redux';
import { logout } from '../../actions/authdoctor';
import PropTypes from 'prop-types';


const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: homeFill,
    linkTo: '/dashdoctor'
  },
  {
    label: 'Profile',
    icon: personFill,
    linkTo: '/profiledoctor'
  },

];

// ----------------------------------------------------------------------

const AccountPopoverD = ({ getCurrentProfile,
  authdoctor: { doctor },
  profiledoctor: { profiledoctor },  logout }) => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        <Avatar src="/static/avatar.png" alt="photoURL" />

      </IconButton>

      <MenuPopoverD
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap style={{textTransform: "capitalize"}}>
          {doctor !== null ? (
        <>Dr. {doctor.firstname}</>
        ):(null)}
            
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {doctor !== null ? (
        <>{doctor.email}</>
        ):(null)}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24
              }}
            />

            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button onClick={logout} fullWidth color="inherit" variant="outlined">
            Logout
          </Button>
        </Box>
      </MenuPopoverD>
    </>
  );
}

AccountPopoverD.propTypes = {
  logout: PropTypes.func.isRequired,
  authdoctor: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profiledoctor: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  authdoctor: state.authdoctor,
  profiledoctor: state.profiledoctor
});

export default  connect(mapStateToProps, {logout, getCurrentProfile}) (AccountPopoverD);