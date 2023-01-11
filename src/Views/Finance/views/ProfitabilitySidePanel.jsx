import React from 'react'
import { Box, Typography } from '@mui/material'
import Collection from '../components/Collections.'
import DriverCustomerChart from '../components/DriverCustomerChart'
import Protability from '../components/Protability'
import MakerChecker from '../components/MakerChecker'
import PayementHistory from '../components/PayementHistory'

const ProfitabilitySidePanel = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2E2957',
        p: 2,
      }}
    >
      <Box>
        <Collection />
      </Box>
      <Box sx={{ mt: 3 }}>
        <DriverCustomerChart />
      </Box>
      <Box sx={{ mt: 3 }}>
        <Protability />
      </Box>
      <Box sx={{ mt: 3 }}>
        <MakerChecker />
      </Box>
      <Box sx={{ mt: 3 }}>
        <PayementHistory />
      </Box>
    </Box>
  )
}

export default ProfitabilitySidePanel
