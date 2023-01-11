import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'
import BasePriceTable from '../components/BasePriceTable'
import ProfitabilityChart from '../components/ProfitabilityChart'
import DriverDeductionTable from '../components/DriverDeductionTable'

const DriverPriceDeductions = () => {
  return (
    <Box sx={{ mt: 0, backgroundColor: '#251A40', ml: 1 }}>
      <Typography>Base Price</Typography>
      <Box>
        <BasePriceTable />
      </Box>
      <Box sx={{ mt: 1, backgroundColor: '#41449B' }}>
        <ProfitabilityChart />
      </Box>
      <Box sx={{ mt: 2 }}>
        <DriverDeductionTable />
      </Box>
    </Box>
  )
}

export default DriverPriceDeductions
