import React from 'react'
import { Badge, Box, Typography } from '@mui/material'
import DashboardCard from '../components/DashboardCard'
import CountView from '../components/CountView'

const Tickets = () => (
  <DashboardCard badge>
    <Badge color='warning' variant='dot' anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
      <Typography sx={{ fontWeight: 700, px: 1, mb: 1 }}>Tickets</Typography>
    </Badge>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CountView backgroundColor='info.light' count={46} />
      <Typography variant='caption' sx={{ ml: 1 }}>
        23 New Tickets
      </Typography>
    </Box>
  </DashboardCard>
)

export default Tickets
