import React from 'react'
import { Box, Typography, Button, colors } from '@mui/material'
import { Chart } from 'react-chartjs-2'
import 'chart.js/auto'
import 'chartjs-plugin-datalabels'
import dynamic from 'next/dynamic'

// const chart = dynamic(() => import('chart.js/auto'), {
//   ssr: false,
// })
// const ChartData = dynamic(() => import('chartjs-plugin-datalabels'), {
//   ssr: false,
// })

const TransactionsChart = () => {
  const data = {
    labels: ['bakkers', 'Tailer', 'truck'],
    datasets: [
      {
        type: 'bar',
        label: 'Bar Dataset',
        data: [25, 20, 20],
        fill: 'start',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx
          const gradient = ctx.createLinearGradient(0, 0, 0, 200)
          gradient.addColorStop(0, 'rgba(83,144,251, 0)')
          gradient.addColorStop(1, 'rgba(83,144,251, 1)')
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
    },
  }

  return (
    <Box
      sx={{
        backroungColor: '#41449B',
        height: 300,
        mt: 2,
        color: '#fff',
      }}
    >
      <Typography>Profitability</Typography>
      <Chart data={data} options={OPTION} height={210} />
    </Box>
  )
}

export default TransactionsChart
