import React from 'react'
import { Box, Typography } from '@mui/material'
import { Chart } from 'react-chartjs-2'
import 'chart.js/auto'
import DashboardCard from '../components/DashboardCard'

const NewSignUps = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    datasets: [
      {
        type: 'line',
        label: 'Drivers',
        data: [0, 10, 5, 20, 10, 30, 20, 45],
        fill: false,
        borderColor: '#54F12D',
        borderWidth: 1,
        tension: 0.5,
      },
      {
        type: 'line',
        label: 'Customers',
        data: [0, 15, 5, 25, 15, 35, 25, 45],
        fill: false,
        borderColor: '#F12D7F',
        borderWidth: 1,
        tension: 0.5,
      },
      {
        type: 'line',
        label: 'BUKK Business',
        data: [0, 8, 8, 8, 35, 35, 15, 45],
        fill: 'start',
        borderColor: '#F1CA2D',
        borderWidth: 0.5,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx
          const gradient = ctx.createLinearGradient(0, 0, 0, 200)
          gradient.addColorStop(0.4, '#A5A3A3')
          gradient.addColorStop(0.6, '#8C747E')
          return gradient
        },
        tension: 0.5,
      },
    ],
  }

  const OPTIONS = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
          borderColor: '#F1CA2D',
        },
        ticks: {
          display: false,
        },
      },
    },
  }

  const STATUS = [
    { label: 'Drivers', value: 'drivers', color: '#54F12D' },
    { label: 'Customers', value: 'customers', color: '#F12D7F' },
    { label: 'BUKK Business', value: 'business', color: 'linear-gradient(to bottom, #A5A3A3, #8C747E)' },
  ]

  return (
    <DashboardCard>
      <Typography sx={{ fontWeight: 'bold', mb: 2 }}>New Sign Ups</Typography>
      <div style={{ height: '8.8rem' }}>
        <Chart data={data} options={OPTIONS} />
      </div>
      <Box sx={{ display: { sm: 'flex' }, mt: 'auto', justifyContent: 'space-between' }}>
        {STATUS.map((state) => (
          <Box key={`st-${state.value}`} sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <Box sx={{ width: 33, height: 11, background: state.color, mr: 1 }} />
            <Typography>{state.label}</Typography>
          </Box>
        ))}
      </Box>
    </DashboardCard>
  )
}

export default NewSignUps
