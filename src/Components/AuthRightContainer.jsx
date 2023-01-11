import { Hidden, Grid, Typography } from '@mui/material'

import Image from 'next/image'

const AuthRightContainer = () => {
  return (
    <Hidden mdDown>
      <Grid
        item
        md={5}
        sx={{
          display: 'flex',
          flex: '0.5',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(/images/background.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundPosition: 'center',
        }}
      >
        <Image src='/logo_bukk.svg' width='200%' height='200%' alt='Bukk logo' />
        <Typography variant='h5' sx={{ fontWeight: 700 }} mt={-4}>
          Move Your Cargo
        </Typography>
        <Typography variant='body2' mt={4} sx={{ fontWeight: 700 }}>
          Fast. Cheap. Secure
        </Typography>
      </Grid>
    </Hidden>
  )
}

export default AuthRightContainer
