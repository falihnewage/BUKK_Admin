import React from 'react'
import { Box, Rating, Typography } from '@mui/material'
import DashboardCard from '../components/DashboardCard'

const RATINGS = [
  {
    label: 'Customer Ratings',
    value: 'customer',
    rate: 3.5,
  },
  {
    label: 'Driver Ratings',
    value: 'driver',
    rate: 3.5,
  },
  {
    label: 'App Ratings',
    value: 'app',
    rate: 3.5,
  },
]

const Ratings = () => (
  <DashboardCard>
    <Typography sx={{ fontWeight: 700, mb: 1 }}>Ratings</Typography>
    {RATINGS.map((rating) => (
      <Box
        key={`rt-${rating.value}`}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}
      >
        <Typography variant='caption'>{rating.label}</Typography>
        <Rating value={rating.rate} readOnly size='small' precision={0.1} max={4} />
      </Box>
    ))}
  </DashboardCard>
)

export default Ratings
