import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import Image from 'next/image'

const NavBar = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '55px',
        backgroundColor: 'primary.light',
        display: 'flex',
        top: 0,
        left: 0,
        position: 'fixed',
      }}
    >
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='h1' sx={{ fontSize: 24, mx: 0.5 }}>
            e
          </Typography>
          <Image src='/logo_bukk.svg' width='65' height='65' />
        </Box>
      </Container>
    </Box>
  )
}

export default NavBar
