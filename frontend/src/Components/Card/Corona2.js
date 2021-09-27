import React, {useEffect, useState} from 'react'
import { Box, Grid, Card, Paper, Typography, CardHeader, CardContent } from '@material-ui/core';
import { Icon } from '@iconify/react';

const Corona2 = () => {

    const [data, setData] = useState([]);


    const getCovidData = async () => {
        try {
            const res = await fetch('https://covid19.mohp.gov.np/covid/api/confirmedcases');
            const actualData = await res.json();
            setData(actualData.nepal);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);


    return (
      
    <Card>
      <CardHeader title="Covid | Total Data" />
      <CardContent>

             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Updated at: {data.updated_at}
                </Typography>

                <br></br>

         <Grid container spacing={2}>
                <Grid item xs={6}>
                <Paper variant="outlined" sx={{ py: 2.5, textAlign: 'center', background:"#D0F2FF" }}>
                <Box sx={{ mb: 0.5 }}><Icon icon="ic:baseline-coronavirus" width={24} height={24} color="#0C53B7" /></Box>
                <Typography variant="h6">{data.positive}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Total Cases
                </Typography>
                </Paper>
                </Grid>


                <Grid item xs={6}>
                <Paper variant="outlined" sx={{ py: 2.5, textAlign: 'center', background:"#FFF7CD" }}>
                <Box sx={{ mb: 0.5 }}><Icon icon="fa-solid:head-side-cough" width={24} height={24} color="#B78103" /></Box>
                <Typography variant="h6">{data.extra2}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Total Infected
                </Typography>
                </Paper>
                </Grid>



                <Grid item xs={6}>
                <Paper variant="outlined" sx={{ py: 2.5, textAlign: 'center', background:"#E9FCD4" }}>
                <Box sx={{ mb: 0.5 }}><Icon icon="fa-regular:smile-beam" width={24} height={24} color="#007B55" /></Box>
                <Typography variant="h6">{data.extra1}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Recovered
                </Typography>
                </Paper>
                </Grid>



                <Grid item xs={6}>
                <Paper variant="outlined" sx={{ py: 2.5, textAlign: 'center', background: "#FFE7D9" }}>
                <Box sx={{ mb: 0.5 }}><Icon icon="entypo:emoji-sad" width={24} height={24} color="#B72136" /></Box>
                <Typography variant="h6">{data.deaths}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Deaths
                </Typography>
                </Paper>
                </Grid>




        </Grid>
      </CardContent>
    </Card>
       
    )
}

export default Corona2
