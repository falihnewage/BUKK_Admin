import React from 'react'
import { Box, Typography } from '@mui/material'
import DashboardCard from '../components/DashboardCard'

const FLEETS = [
  {
    label: 'Active (Online)',
    value: 'active',
    count: 200,
    background: 'success.main',
  },
  {
    label: 'On trip',
    value: 'ontrip',
    count: 489,
    background: 'warning.main',
  },
  {
    label: 'Inactive',
    value: 'inactive',
    count: 58,
    background: 'error.main',
  },
]

const FleetItem = ({ data }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
    <Typography variant='caption'>{data.label}</Typography>
    <Box sx={{ minWidth: 40, backgroundColor: data.background, textAlign: 'right', px: 1 }}>
      <Typography variant='caption'>{data.count}</Typography>
    </Box>
  </Box>
)

const Fleet = () => (
  <DashboardCard>
    <Typography sx={{ fontWeight: 700, mb: 1 }}>Fleet</Typography>
    {FLEETS.map((fleet) => (
      <FleetItem key={fleet.value} data={fleet} />
    ))}
  </DashboardCard>
)

export default Fleet
