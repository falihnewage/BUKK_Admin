import React from 'react'
import { Box, Typography } from '@mui/material'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'
import DashboardCard from '../components/DashboardCard'

const DATA = {
  labels: ['Trips', 'Loading Services'],
  datasets: [
    {
      label: 'Overview',
      backgroundColor: ['#F12D7F', '#2DF193'],
      data: [55, 45],
      borderWidth: 0,
      weight: 1,
      cutout: '85%',
    },
  ],
}

const OPTIONS = {
  plugins: {
    legend: {
      display: false,
    },
  },
}

const STATUS = [
  { label: 'Trips', value: 'trips', color: '#F12D7F' },
  { label: 'Loading Services', value: 'loading', color: '#2DF193' },
]

const Profitability = () => (
  <DashboardCard>
    <Typography sx={{ fontWeight: 'bold', mb: 3 }}>Profitability</Typography>
    <Doughnut data={DATA} options={OPTIONS} />
    <Box sx={{ mt: 'auto' }}>
      {STATUS.map((state) => (
        <Box key={`st-${state.value}`} sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Box sx={{ width: 33, height: 11, backgroundColor: state.color, mr: 3 }} />
          <Typography>{state.label}</Typography>
        </Box>
      ))}
    </Box>
  </DashboardCard>
)

export default Profitability
