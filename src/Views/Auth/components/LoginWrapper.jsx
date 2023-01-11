import React from 'react'
import Header from './Header'
import { Grid, Typography, TextField, FormControlLabel, FormGroup, Checkbox, Divider, Button } from '@mui/material'

import Link from 'next/link'

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CircleIcon from '@mui/icons-material/Circle'
import RightContainer from './RightContainer'

const LoginWrapper = () => {
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
          <Typography variant='h6'>Login</Typography>
          <Typography variant='body2' my={2}>
            Welcome to eBUKK. Please put your login credentials below to start using the system.
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
            <Grid
              container
              sx={{
                my: 2,
                justifyContent: 'space-between',
              }}
            >
              <Grid item xs={12} md={2}>
                <Typography sx={{ fontWeight: 700, color: '#fff' }}>Password</Typography>
              </Grid>
              <Grid item xs={12} md={10}>
                <TextField
                  fullWidth
                  variant='outlined'
                  id='password'
                  name='password'
                  label=''
                  type='password'
                  size='small'
                />
              </Grid>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                fontWeight: 700,
              }}
            >
              <Link href='/password-recovery'>Forgot Password?</Link>
            </Grid>
            <Divider
              sx={{
                my: 2,
              }}
            />
            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Grid>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        filled
                        icon={
                          <RadioButtonUncheckedIcon
                            sx={{
                              borderRadius: '30rem',
                              color: 'info.light',
                              fontSize: '1rem',
                              '&:hover': {
                                color: 'info.dark',
                              },
                            }}
                          />
                        }
                        checkedIcon={
                          <CircleIcon
                            sx={{
                              borderRadius: '30rem',
                              color: 'info.light',
                              fontSize: '1rem',
                              '&:hover': {
                                color: 'info.dark',
                              },
                            }}
                          />
                        }
                      />
                    }
                    label='Remember Me'
                  />
                </FormGroup>
              </Grid>
              <Button
                size='small'
                sx={{
                  backgroundColor: 'warning.light',
                  width: '133px',
                  height: '30px',
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
                Login
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
          <Typography variant='body2'>Don't have an account?</Typography>
          <Typography
            variant='body2'
            sx={{
              px: 1,
              fontWeight: 'bold',
              fontSize: '16px',
            }}
          >
            <Link href=''>Contact Management</Link>
          </Typography>
        </Grid>
      </Grid>
      <RightContainer />
    </Grid>
  )
}

export default LoginWrapper
