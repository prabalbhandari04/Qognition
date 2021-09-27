import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Card, Stack, Link, Container, Typography, } from '@material-ui/core';
// layouts
import AuthLayout from '../../Components/authentication_doctor/AuthLayout';
// components
import Page from '../../Components/Page';
import { MHidden } from '../../Components/@material-extend';
import { LoginFormDoctor } from '../../Components/authentication_doctor/login';
import AuthSocial from '../../Components/authentication_doctor/AuthSocials';
import Alert from '../../Components/Alert';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function LoginDoctor() {
  return (
    
    <RootStyle title="Doctor Login | Qognition">
      
      <AuthLayout>
      Don’t have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/registerdoctor">
          Get started
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Hi, Welcome Back Doctor
          </Typography>
          <img src="/illustration/illustration_login.png" alt="login" />
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Alert/>
            <Typography variant="h4" gutterBottom>
              Sign in to Doctor Dashboard
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography>
          </Stack>
          <AuthSocial />

          <LoginFormDoctor />

          <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to="/registerdoctor">
                Get started
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
