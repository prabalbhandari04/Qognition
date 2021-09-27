// import { motion } from 'framer-motion';
// import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Button, Typography, Container } from '@material-ui/core';
// // components
// import { MotionContainer, varBounceIn } from '../components/animate';
import Page from '../../Components/Page';
import AuthLayout from '../../Components/authentication/AuthLayout';
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <RootStyle title="404 | Page Not Found ">

      <AuthLayout> 
      </AuthLayout>

      
      <Container>

    
      
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
         
              <Typography variant="h3" paragraph>
                Sorry, page not found!
              </Typography>
            
            <Typography sx={{ color: 'text.secondary' }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL?
              Be sure to check your spelling.
            </Typography>

          
              <Box
                component="img"
                src="/illustration/illustration_404.svg"
                sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
              />
         

            <Typography>
            <Link to="/" className="btn"  style={{background:"#6331d8", color:"white"}} >
              Go to Home
            </Link>
            </Typography>
           
          </Box>
  
      </Container>
    </RootStyle>
  );
}
