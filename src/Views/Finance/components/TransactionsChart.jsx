import React from 'react'
import { Box, Button } from '@mui/material'
import { Chart } from 'react-chartjs-2'
import 'chart.js/auto'

const TransactionsChart = () => {
  const data = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'],
    datasets: [
      {
        type: 'line',
        label: 'Line Dataset',
        data: [10, 17, 15, 22, 8, 28, 6, 35, 20],
        fill: false,
        borderColor: (context) => {
          const ctx = context.chart.ctx
          const gradient = ctx.createLinearGradient(0, 0, 0, 200)
          gradient.addColorStop(0, 'rgba(241, 202, 45, 1)')
          gradient.addColorStop(1, 'rgba(114, 0, 239, 1)')
          return gradient
        },
        tension: 0.5,
      },
      {
        type: 'bar',
        label: 'Bar Dataset',
        data: [35, 35, 35, 35, 10, 35, 20, 20, 30],
        fill: 'start',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx
          const gradient = ctx.createLinearGradient(0, 0, 0, 200)
          gradient.addColorStop(0, 'rgba(65, 68, 155, 0)')
          gradient.addColorStop(1, 'rgba(177, 217, 30, 1)')
          return gradient
        },
      },
      {
        type: 'bar',
        label: 'Bar Dataset',
        data: [25, 35, 35, 35, 10, 35, 20, 20, 30],
        fill: 'start',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx
          const gradient = ctx.createLinearGradient(0, 0, 0, 200)
          gradient.addColorStop(0, 'rgba(65, 68, 155, 0)')
          gradient.addColorStop(1, 'rgba(79, 217, 30, 1)')
          return gradient
        },
      },
      {
        type: 'bar',
        label: 'Bar Dataset',
        data: [35, 35, 35, 35, 10, 35, 20, 20, 30],
        fill: 'start',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx
          const gradient = ctx.createLinearGradient(0, 0, 0, 200)
          gradient.addColorStop(0, 'rgba(65, 68, 155, 0)')
          gradient.addColorStop(1, 'rgba(241, 45, 127, 1)')
          return gradient
        },
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

  return (
    <Box>
      <Chart data={data} options={OPTION} />
      <Box>
        <Button
          sx={{
            backgroundColor: '#F1CA2D',
            float: 'right',
            mr: 1,
            mt: 1,
          }}
          size='small'
        >
          Generate a excel sheet
        </Button>
      </Box>
    </Box>
  )
}

export default TransactionsChart
