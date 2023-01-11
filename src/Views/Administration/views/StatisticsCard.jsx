import React from 'react'
import { Box } from '@mui/material'
import Statistics from '../components/Statistics'
import Numberofstaff from '../components/Numberofstaff'
import TopManagement from '../components/TopManagement'
import Finance from '../components/Finance'
import Administration from '../components/Administration'
import Design from '../components/Design'
import Frontend from '../components/Frontend'
import Backend from '../components/Backend'
import PanelButton from '../components/PanelButton'

const StatisticsCard = () => {
  return (
    <Box sx={{ p: 2, backgroundColor: '#2E2957' }}>
      <Box sx={{ mb: 1 }}>
        <Statistics />
      </Box>
      <Box sx={{ mb: 1 }}>
        <Numberofstaff />
      </Box>
      <Box sx={{ mb: 1 }}>
        <TopManagement />
      </Box>
      <Box sx={{ mb: 1 }}>
        <Administration />
      </Box>
      <Box sx={{ mb: 1 }}>
        <Finance />
      </Box>
      <Box sx={{ mb: 1 }}>
        <Design />
      </Box>
      <Box sx={{ mb: 1 }}>
        <Frontend />
      </Box>
      <Box sx={{ mb: 1 }}>
        <Backend />
      </Box>
      <Box>
        <PanelButton />
      </Box>
    </Box>
  )
}

export default StatisticsCard
