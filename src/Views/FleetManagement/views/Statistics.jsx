import React from 'react'
import { Box, Typography } from '@mui/material'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const Statistics = () => {
  const statisticsCategories = [
    {
      id: 1,
      categoryName: 'Fleet',
      values: [
        {
          name: 'movingToCustomer',
          value: 15,
        },
        {
          name: 'onTrip',
          value: 25,
        },
        {
          name: 'offline',
          value: 30,
        },
        {
          name: 'inactive',
          value: 40,
        },
        {
          name: 'requestingLocation',
          value: 60,
        },
      ],
    },
    {
      id: 2,
      categoryName: 'Trips',
      values: [
        {
          name: 'completed',
          value: 30,
        },
        {
          name: 'cancelled',
          value: 50,
        },
      ],
    },
  ]
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'custom.purple',
          display: 'flex',
          justifyContent: 'space-between',
          px: 2,
          py: 3,
          mt: { md: -3 },
        }}
      >
        <Typography sx={{ fontWeight: 'bold' }}>Statistics</Typography>
        <AddBoxOutlinedIcon sx={{ color: 'grey.500' }} />
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.purple',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {statisticsCategories.map((category) => {
          const chartData = {
            labels: category.values.map((value) => `${value.name}`),
            datasets: [
              {
                label: category.values.map((value) => `${value.name}`),
                data: category.values,
                backgroundColor: ['#F1CA2D', '#2DF193', '#FFFFFF', '#F12D2D', '#354869'],
                borderColor: ['#F1CA2D', '#2DF193', '#FFFFFF', '#F12D2D', '#354869'],
                borderWidth: 0,
              },
            ],
          }
          const chartOptions = {
            cutout: '85%',
            radius: '90%',
            rotation: -90,
            parsing: {
              key: 'value',
            },
            plugins: {
              legend: {
                display: true,
                position: 'right',
                align: 'center',
                backgroundColor: '#41449B96',
                maxWidth: 88,
                labels: {
                  boxWidth: 20,
                  color: '#FFFFFF',
                  padding: 6,
                },
              },
            },
          }
          return (
            <Box
              key={category.id}
              sx={{
                borderBottom: '1px solid #FFFFFF5C',
                mb: 2,
                height: '100%',
                width: '90%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  position: 'absolute',
                  height: 'auto',
                  top: '-20px',
                  bottom: '0',
                  left: '-44px',
                  textAlign: 'center',
                  lineHeight: '30px',
                  fontSize: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {category.categoryName}
              </Box>
              <Box
                sx={{
                  width: 'auto',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}
              >
                <Doughnut data={chartData} options={chartOptions} />
              </Box>
            </Box>
          )
        })}
      </Box>
    </>
  )
}

export default Statistics
