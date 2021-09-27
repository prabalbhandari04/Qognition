// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
import HeightCard from '../Components/Card/HeightCard';
import Bloodgroup from '../Components/Card/Bloodgroup';
import BmiCard from '../Components/Card/BmiCard';
import QueryUpdate from '../Components/Dashboard/QueryUpdate/QueryUpdate';
// components
import Page from '../Components/Page';
import WeightCard from '../Components/Card/WeightCard';
import MedicationUpdate from '../Components/Dashboard/MedicationUpdate/MedicationUpdate';
import Corona from '../Components/Card/Corona';
import Corona2 from '../Components/Card/Corona2';

// ----------------------------------------------------------------------

export default function Dashboard() {
  return (
    <Page title="Dashboard | Qognition">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome</Typography>
        </Box>


        <Grid container spacing={3}>

        <Grid item xs={12} sm={6} md={3}>
            <HeightCard/>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <WeightCard/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <BmiCard/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Bloodgroup/>
          </Grid>


          <Grid item xs={12} md={6} lg={8}>
            <QueryUpdate/>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
          <MedicationUpdate/>
          </Grid>


               
        <Grid item xs={12} sm={6} md={6}>
            <Corona/>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
            <Corona2/>
        </Grid>


         

        </Grid>
      </Container>
    </Page>
  );
}
