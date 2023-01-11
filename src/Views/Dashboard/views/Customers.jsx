import React from 'react'
import { Box, Typography } from '@mui/material'
import DashboardCard from '../components/DashboardCard'
import CountView from '../components/CountView'

const Customers = () => (
  <DashboardCard>
    <Typography sx={{ fontWeight: 700, mb: 1 }}>Customers</Typography>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CountView backgroundColor='success.dark' count={20076} />
      <Typography variant='caption' sx={{ ml: 1 }}>
        200 New Customers
      </Typography>
    </Box>
  </DashboardCard>
)

export default Customers
