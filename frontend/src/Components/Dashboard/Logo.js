import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

import { Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return   <Typography variant="h3" style={{color: "#6331d8"}}> Qognition <Icon icon="fluent:brain-circuit-20-filled" style={{marginBottom:"4px", color:"#6331d8"}}/></Typography>;
}

//<Box component="img" src="/static/qognition.png" sx={{ width: 40, height: 40, ...sx }} />