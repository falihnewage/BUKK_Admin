import React, { useState } from 'react'
import { MenuItem, Select, Typography, Grid } from '@mui/material'
import { Bar } from 'react-chartjs-2'
import DashboardCard from '../components/DashboardCard'
import { KeyboardArrowDown } from '@mui/icons-material'

const DATA = {
  labels: ['South Africa', 'Uganda', 'Nigeria', 'Kenya', 'Tanzania', 'Zambia', 'DRC', 'Egypt', 'Botswana'],
  datasets: [
    {
      label: 'Overview',
      backgroundColor: ['#3154B1'],
      data: [75, 35, 50, 20, 60, 60, 75, 55, 10],
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
        borderColor: '#fff',
      },
      ticks: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
        borderColor: '#fff',
      },
      ticks: {
        color: '#fff',
      },
    },
  },
}

const ScheduledTrips = () => {
  const [selectedRange, setSelectedRange] = useState('weekly')
  return (
    <DashboardCard>
      <Grid container justifyContent='space-between'>
        <Typography sx={{ fontWeight: 'bold', mb: 3 }}>Scheduled Trips</Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Select
            disableUnderline
            variant='filled'
            sx={{
              height: '1.8rem',
              borderRadius: '0rem',
              bgcolor: '#AFABB1',
              color: '#354869',
              '&:hover': {
                color: '#fff',
              },
              pb: 2,
            }}
            IconComponent={() => <KeyboardArrowDown sx={{ mb: '-1rem' }} />}
            value={selectedRange}
            onChange={(e) => setSelectedRange(e.target.value)}
          >
            <MenuItem value='daily'>Daily</MenuItem>
            <MenuItem value='weekly'>Weekly</MenuItem>
            <MenuItem value='monthly'>Monthly</MenuItem>
            <MenuItem value='yearly'>Yearly</MenuItem>
          </Select>
        </div>
      </Grid>
      <div style={{ height: '10rem' }}>
        <Bar data={DATA} options={OPTIONS} />
      </div>
    </DashboardCard>
  )
}

export default ScheduledTrips
