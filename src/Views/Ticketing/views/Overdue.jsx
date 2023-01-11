import React, { useState } from 'react'
import { Box, MenuItem, Typography, Select } from '@mui/material'
import { KeyboardArrowDown } from '@mui/icons-material'
import { Chart } from 'react-chartjs-2'
import 'chart.js/auto'
import Card from '../components/Card'

const Overdue = () => {
  const [select, setSelect] = useState('')

  const data = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
    datasets: [
      {
        type: 'line',
        label: 'Line Dataset',
        data: [10, 17, 15, 22, 8, 28, 6, 35],
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
        data: [35, 35, 35, 35, 10, 35, 20, 20],
        fill: 'start',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx
          const gradient = ctx.createLinearGradient(0, 0, 0, 200)
          gradient.addColorStop(0, 'rgba(65, 68, 155, 0)')
          gradient.addColorStop(1, 'rgba(65, 68, 155, 1)')
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
    <Card>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ fontWeight: 'bold', mb: 2 }}>Tickets Overdue Stat</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Typography sx={{ fontWeight: 'bold', mb: 2 }}>Filter</Typography>
          <Select
            disableUnderline
            variant='filled'
            sx={{
              height: '1.8rem',
              borderRadius: '0rem',
              bgcolor: '#2E2957',
              ml: 1,
              float: 'right',
              '&:hover': {
                color: '#2E2957',
              },
              pb: 2,
            }}
            IconComponent={() => <KeyboardArrowDown sx={{ mb: '-1rem' }} />}
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <MenuItem value='daily'>Daily Status</MenuItem>
            <MenuItem value='weekly'>Weekly Status</MenuItem>
            <MenuItem value='monthly'>Monthly Status</MenuItem>
            <MenuItem value='yearly'>Yearly Status</MenuItem>
          </Select>
        </Box>
      </Box>
      <Chart data={data} options={OPTION} />
    </Card>
  )
}

export default Overdue
