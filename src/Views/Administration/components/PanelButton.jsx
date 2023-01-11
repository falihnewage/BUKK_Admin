import React from 'react'
import { Box, Typography } from '@mui/material'

const PanelButton = () => {
  return (
    <Box
      sx={{
        height: 40,
        backgroundColor: '#F1CA2D',
      }}
    >
      <Typography
        sx={{
          color: '#354869',
          fontWeight: 700,
          fontSize: 16,
          textAlign: 'center',
          fontFamily: 'Poppins',
          py: 1,
        }}
      >
        Add New MGT Panel
      </Typography>
    </Box>
  )
}

export default PanelButton
