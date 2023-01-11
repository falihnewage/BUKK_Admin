import React from 'react'
import { Box, Typography } from '@mui/material'

const Protability = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#41449B',
        height: 164,
      }}
    >
      <Typography sx={{ textAlign: 'center', fontWeight: 500, fontFamily: 'Poppins' }}>Profitability</Typography>
      <Typography sx={{ fontWeight: 500, textAlign: 'center', mt: 2 }}>Total earnings Profits</Typography>
      <Typography sx={{ fontWeight: 700, textAlign: 'center', fontSize: 32, mt: 1 }}>R.890k</Typography>
      <Typography sx={{ fontWeight: 600, textAlign: 'center', fontSize: 14, mt: 1 }}>Margin +60%</Typography>
    </Box>
  )
}

export default Protability
