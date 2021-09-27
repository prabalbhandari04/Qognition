// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
import DoctorCard from '../../Components/CardDoctor/DoctorCard';
import PatientCard from '../../Components/CardDoctor/PatientCard';
import QueriesCard from '../../Components/CardDoctor/QueriesCard';
// import MedicalCard from '../../Components/Card/MedicalCard';
// components
import Page from '../../Components/Page';

import QueryUpdateDoctor from '../../Components/DashboardDoctor/QueryUpdateDoctor/QueryUpdateDoctor';
import Corona from '../../Components/Card/Corona';
import Corona2 from '../../Components/Card/Corona2';
// ----------------------------------------------------------------------

export default function DashboardDoctor() {
  return (
    <Page title="Doctor | Qognition">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome </Typography>
        </Box>

        <Grid container spacing={3}>


        <Grid item xs={12} sm={6} md={6}>
            <Corona/>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
            <Corona2/>
        </Grid>


        <Grid item xs={12} sm={6} md={3}>
           <PatientCard/>
          </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <DoctorCard/>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <QueriesCard/>
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
            <QueryUpdateDoctor/>
          </Grid>

        </Grid>
      </Container>
    </Page>
  );
}
