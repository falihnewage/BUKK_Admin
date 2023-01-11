import React from 'react'
import { Box, Typography } from '@mui/material'
import DashboardCard from '../components/DashboardCard'
import CountView from '../components/CountView'

const Countries = () => (
  <DashboardCard>
    <Typography sx={{ fontWeight: 700, mb: 1 }}>Countries</Typography>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CountView backgroundColor='warning.light' count={87} />
      <Typography variant='caption' sx={{ ml: 1 }}>
        3 New Countries
      </Typography>
    </Box>
  </DashboardCard>
)

export default Countries
