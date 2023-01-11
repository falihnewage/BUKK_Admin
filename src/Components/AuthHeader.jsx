import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const AuthHeader = () => {
  return (
    <Grid
      container
      sx={{
        direction: 'column',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant='h4'>e</Typography>
        <Image src='/logo_bukk.svg' width='80' height='60' />
      </Grid>
      <Grid container justifyContent='center'>
        <Grid
          item
          sx={{
            border: '1px solid #5390FB',
            backgroundColor: 'warning.light',
            color: '#2E2957',
            borderRadius: '15px',
            width: '33.3%',
            height: '1.5em',
            alignItems: 'center',
            zIndex: 2,
            '&:hover': {
              backgroundColor: 'warning.dark',
            },
          }}
        >
          <Typography align='center' fontSize='0.8em' fontWeight={700}>
            <Link href=''>Management </Link>
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            border: '1px solid #5286EA',
            backgroundColor: 'info.light',
            borderRadius: '15px',
            width: { xs: '40%', sm: '33.3%' },
            height: '1.5em',
            alignItems: 'center',
            zIndex: 1,
            marginLeft: { xs: '-1rem', sm: '-1.4rem' },
            '&:hover': {
              backgroundColor: 'info.main',
            },
          }}
        >
          <Typography align='center' fontSize='0.8em' fontWeight={700}>
            <Link href=''>Administration</Link>
          </Typography>
        </Grid>

        <Grid
          item
          sx={{
            border: '1px solid #5286EA',
            backgroundColor: 'primary.main',
            borderRadius: '15px',
            width: '33.3%',
            height: '1.5em',
            alignContent: 'center',
            marginLeft: '-1.4rem',
            '&:hover': {
              backgroundColor: 'primary.light',
            },
          }}
        >
          <Typography align='center' fontSize='0.8em' fontWeight={700}>
            <Link href=''>Staff </Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AuthHeader
