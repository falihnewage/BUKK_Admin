import React from 'react'
import { Box, Typography } from '@mui/material'
import DashboardCard from '../components/DashboardCard'
import CountView from '../components/CountView'

const Drivers = () => (
  <DashboardCard>
    <Typography sx={{ fontWeight: 700, mb: 1 }}>Drivers</Typography>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CountView backgroundColor='custom.orange' count={8671} />
      <Typography variant='caption' sx={{ ml: 1 }}>
        89 New Drivers
      </Typography>
    </Box>
  </DashboardCard>
)

export default Drivers
