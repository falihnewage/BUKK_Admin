import React from 'react'
import { Badge, Box, Typography } from '@mui/material'
import DashboardCard from '../components/DashboardCard'
import CountView from '../components/CountView'

const Tasks = () => (
  <DashboardCard badge>
    <Badge color='success' variant='dot' anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
      <Typography sx={{ fontWeight: 700, px: 1, mb: 1 }}>Tasks</Typography>
    </Badge>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CountView backgroundColor='error.light' count={46} />
      <Typography variant='caption' sx={{ ml: 1 }}>
        12 New Tasks
      </Typography>
    </Box>
  </DashboardCard>
)

export default Tasks
