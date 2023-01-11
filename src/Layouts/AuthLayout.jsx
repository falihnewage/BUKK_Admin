import { Box, Typography, Container, Grid } from '@mui/material'
import AuthRightContainer from '@Components/AuthRightContainer'
import Image from 'next/image'

const AuthLayout = ({ children }) => (
  <Box sx={{ display: 'flex' }}>
    <Box
      sx={{
        width: '100vw',
        height: '55px',
        backgroundColor: 'primary.light',
        display: 'flex',
        top: 0,
        left: 0,
        position: 'fixed',
        zIndex: 2,
      }}
    >
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='h1' sx={{ fontSize: 24, mx: 0.5, fontWeight: 700 }}>
            e
          </Typography>
          <Image src='/logo_bukk.svg' width='65' height='65' />
        </Box>
      </Container>
    </Box>
    <Box sx={{ width: '100%' }}>
      <Grid
        container
        sx={{
          height: '100vh',
        }}
      >
        {children} <AuthRightContainer />
      </Grid>
    </Box>
  </Box>
)

export default AuthLayout
