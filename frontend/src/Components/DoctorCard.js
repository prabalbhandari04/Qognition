import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
// utils


// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

// ----------------------------------------------------------------------



const DoctorCard =({
    profiledoctor: { doctor: { _id, firstname, avatar }, education, speciality}
  }) => {
  

  return (
    <Card underline="hover">
      <Box sx={{ pt: '100%', position: 'relative' }}>
       
        <Link to={`/dashboard/doctor/${_id}`} color="inherit" underline="hover" component={RouterLink}>
        <ProductImgStyle alt={firstname} src={avatar} />
        </Link>

      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to={`/dashboard/doctor/${_id}`} color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle1" noWrap>
            Dr. {firstname}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
         
          <Typography variant="subtitle2">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
               
              }}
            >
            {speciality}
            </Typography>
           <br></br>

           {education}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}

DoctorCard.propTypes = {
    profiledoctor: PropTypes.object.isRequired
};

export default DoctorCard;
