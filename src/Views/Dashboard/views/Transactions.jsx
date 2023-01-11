import React from 'react'
import { Box, Typography } from '@mui/material'
import { Pie } from 'react-chartjs-2'
// import 'chart.js/auto'
import DashboardCard from '../components/DashboardCard'

const DATA = {
  labels: ['Drivers', 'Customers', 'BUKK Business'],
  datasets: [
    {
      label: 'Overview',
      backgroundColor: ['#1461D6', '#21CAAB', '#D6C214'],
      data: [45, 20, 35],
      borderWidth: 0,
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
  { label: 'Drivers', value: 'drivers', color: '#1461D6' },
  { label: 'Customers', value: 'customers', color: '#21CAAB' },
  { label: 'BUKK Business', value: 'business', color: '#D6C214' },
]

const Transactions = () => (
  <DashboardCard>
    <Typography sx={{ fontWeight: 'bold', mb: 3 }}>Transactions</Typography>
    <Pie data={DATA} options={OPTIONS} />
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

export default Transactions
