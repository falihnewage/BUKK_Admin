import React from 'react'
import { Box, Typography } from '@mui/material'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'

const DriverCustomerDataset = {
  labels: ['Drivers', 'Customers'],
  datasets: [
    {
      label: 'Overview',
      backgroundColor: ['#F12D7F', '#2DF193'],
      data: [30, 30],
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
  responsive: true,
  maintainAspectRatio: false,
}

const plugins = [
  {
    beforeDraw: function (chart) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx
      ctx.restore()
      var fontSize = (height / 164).toFixed(2)
      ctx.font = fontSize + 'em sans-serif'
      ctx.textBaseline = 'top'

      var text = 'Drivers',
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 5
      ctx.fillStyle = '#fff'
      ctx.fillText(text, textX, textY)
      ctx.save()
    },
    afterDatasetsDraw: function (chart) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx
      ctx.restore()
      var fontSize = (height / 164).toFixed(2)
      ctx.font = fontSize + 'em sans-serif'
      ctx.textBaseline = 'top'
      var text = '--',
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 3
      ctx.fillText(text, textX, textY)
      ctx.save()
    },
    afterDraw: function (chart) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx
      ctx.restore()
      var fontSize = (height / 164).toFixed(2)
      ctx.font = fontSize + 'em sans-serif'
      ctx.textBaseline = 'top'
      var text = 'Customers',
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2
      ctx.fillText(text, textX, textY)
      ctx.save()
    },
  },
]

const STATUS = [
  { label: 'Drivers', value: 'drivers', color: '#2DF193' },
  { label: 'Customers', value: 'Customers', color: '#F12D2D' },
]

const DriverCustomerChart = () => {
  return (
    <Box
      sx={{
        height: 196,
        backgroundColor: '#41449B',
        p: 2,
      }}
    >
      <Doughnut data={DriverCustomerDataset} options={OPTION} plugins={plugins} />
    </Box>
  )
}

export default DriverCustomerChart
