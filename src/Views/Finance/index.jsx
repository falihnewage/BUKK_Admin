import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import ProfitabilitySidePanel from './views/ProfitabilitySidePanel'
import Transaction from './views/Transaction'
import DriverPriceDeductions from './views/DriverPriceDeductions'

const Finance = () => (
  <Box>
    <Typography>Finance Panel</Typography>
    <Grid container>
      <Grid item xs={12} md={3} lg={2.6}>
        <Box sx={{ mt: 1 }}>
          <ProfitabilitySidePanel />
        </Box>
      </Grid>
      <Grid item xs={12} md={5} lg={5}>
        <Box sx={{ mt: 3 }}>
          <Transaction />
        </Box>
      </Grid>
      <Grid item xs={12} md={4} lg={4.4}>
        <Box sx={{ mt: 1 }}>
          <DriverPriceDeductions />
        </Box>
      </Grid>
    </Grid>
  </Box>
)

export default Finance
