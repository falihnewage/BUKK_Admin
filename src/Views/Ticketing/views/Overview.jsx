import React from 'react'
import { Box, Typography } from '@mui/material'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'
import Card from '../components/Card'

const OVERVIEW = {
  labels: ['Pending tickets', 'In-progress', 'Completed'],
  datasets: [
    {
      label: 'Overview',
      backgroundColor: ['#F12D7F', '#F1CA2D', '#2DF193'],
      data: [10, 20, 30],
      borderWidth: 0,
      weight: 1,
      cutout: '85%',
    },
  ],
}

const OPTION = {
  plugins: {
    legend: {
      display: false,
    },
  },
}

const STATUS = [
  { label: 'Pending tickets', value: 'pending', color: '#F12D7F' },
  { label: 'In-progress', value: 'progress', color: '#F1CA2D' },
  { label: 'completed', value: 'completed', color: '#2DF193' },
]

const Overview = () => (
  <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <Typography sx={{ fontWeight: 'bold', mb: 3 }}>Tickets Overview</Typography>
    <Doughnut data={OVERVIEW} options={OPTION} />
    <Box sx={{ mt: 'auto' }}>
      {STATUS.map((state) => (
        <Box key={`st-${state.value}`} sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Box sx={{ width: 22, height: 22, backgroundColor: state.color, borderRadius: 11, mr: 1 }} />
          <Typography>{state.label}</Typography>
        </Box>
      ))}
    </Box>
  </Card>
)

export default Overview
