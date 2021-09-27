
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify-icons/eva/eye-fill';
import eyeOffFill from '@iconify-icons/eva/eye-off-fill';
import {  Navigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';


import { register } from '../../../actions/authdoctor';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// ----------------------------------------------------------------------
const RegisterFormDoctor = ({ register, isAuthenticated }) => {

  const [showPassword, setShowPassword] = useState(false);



  const formik = useFormik({
    
    // validationSchema: RegisterSchema,
    
  });

  const {  isSubmitting, getFieldProps } = formik;

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    license: '',
    speciality: '',
    email: '',
    password: '',
  });

  const { firstname, lastname, license, speciality, email, password} = formData;


  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
      register({ firstname, lastname, license, speciality, email, password });
  };

  if (isAuthenticated) {
    return <Navigate to="/profiledoctor" />;
  }


  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={onSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps('firstname')}
              value={firstname}
              onChange={onChange}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('lastname')}
              value={lastname}
              onChange={onChange}
            />
          </Stack>



          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              type="number"
              label="License No."
              {...getFieldProps('license')}
              value={license}
              onChange={onChange}
            />

            <TextField
              fullWidth
              label="Speciality"
              {...getFieldProps('speciality')}
              value={speciality}
              onChange={onChange}
            />
          </Stack>


          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
        
            value={email}
            onChange={onChange}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          

            value={password}
            onChange={onChange}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}

RegisterFormDoctor.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authdoctor.isAuthenticated
});

export default connect(mapStateToProps, { register })(RegisterFormDoctor);