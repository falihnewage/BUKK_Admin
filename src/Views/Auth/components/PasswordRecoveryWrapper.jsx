import React from 'react'
import Header from './Header'
import { Grid, Typography, TextField, Divider, Button } from '@mui/material'

import Link from 'next/link'

import RightContainer from './RightContainer'

const PasswordRecoveryWrapper = () => {
  return (
    <Grid
      container
      sx={{
        height: '100vh',
      }}
    >
      <Grid
        item
        xs={12}
        md={7}
        mt={5}
        sx={{
          direction: 'column',
        }}
      >
        <Header />
        <Grid
          sx={{
            direction: 'column',
            padding: '2rem',
          }}
        >
          <Typography variant='h6'>Password recovery</Typography>
          <Typography variant='body2' my={2}>
            Please fill in your BUKK email address and we will send you a password recovery link.{' '}
          </Typography>
          <form>
            <Grid
              container
              sx={{
                my: 2,
                justifyContent: 'space-between',
              }}
            >
              <Grid item xs={12} md={2}>
                <Typography sx={{ fontWeight: 700, color: '#fff' }}>Email</Typography>
              </Grid>
              <Grid item xs={12} md={10}>
                <TextField fullWidth variant='outlined' id='email' name='email' label='' type='email' size='small' />
              </Grid>
            </Grid>
            <Divider
              sx={{
                my: 2,
              }}
            />
            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                size='small'
                sx={{
                  backgroundColor: 'warning.light',
                  height: '30px',
                  px: '1rem',
                  color: '#354869',
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: ' 16px',
                  borderRadius: '15px',
                  '&:hover': {
                    backgroundColor: 'warning.dark',
                  },
                }}
              >
                Reset my password
              </Button>
            </Grid>
          </form>
        </Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 3,
          }}
        >
          <Typography
            variant='body2'
            sx={{
              px: 1,
              fontWeight: 'bold',
              fontSize: '16px',
            }}
          >
            <Link href='/login'>Return to login</Link>
          </Typography>
        </Grid>
      </Grid>
      <RightContainer />
    </Grid>
  )
}

export default PasswordRecoveryWrapper
