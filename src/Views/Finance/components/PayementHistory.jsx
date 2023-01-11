import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'

const PayementHistory = () => {
  return (
    <Box sx={{ backgroundColor: '#41449B' }}>
      <Typography sx={{ textAlign: 'center' }}>Payment History</Typography>
      <Grid container justifyContent='center'>
        <Box
          sx={{
            backgroundColor: '#F1CA2D',
            color: 'black',
            height: 26,
            width: 152,
            textAlign: 'center',
            mb: 1,
            borderRadius: 0,
            justifyContent: 'center',
            alignItems: 'center',
            mt: 1,
          }}
        >
          View ALL
        </Box>
      </Grid>
    </Box>
  )
}

export default PayementHistory
