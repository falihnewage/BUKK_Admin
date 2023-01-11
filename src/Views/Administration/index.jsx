import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import StatisticsCard from './views/StatisticsCard'
import StaffAdmininstrationCard from './views/StaffAdmininstrationCard'

const Administration = () => (
  <Box>
    <Typography sx={{ fontFamily: 'Poppins', FontSize: 16 }}>Main Administration Panel</Typography>
    <Grid container spacing={0.5}>
      <Grid item xs={12} md={3} lg={3}>
        <StatisticsCard />
      </Grid>
      <Grid xs={12} md={9} lg={9}>
        <StaffAdmininstrationCard />
      </Grid>
    </Grid>
  </Box>
)

export default Administration
