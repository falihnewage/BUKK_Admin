import React, { useState } from 'react'

import {
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Divider,
  Button,
  Box,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Slide,
  CircularProgress,
  Container,
} from '@mui/material'

import Link from 'next/link'

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CircleIcon from '@mui/icons-material/Circle'
import RightContainer from './RightContainer'
import Image from 'next/image'
import Step1 from './SignupStep1'
import Step2 from './SignupStep2'

const steps = ['1', '2']

const SignupWrapper = () => {
  const [activeStep, setActiveStep] = useState(0)

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return Step1()
      case 1:
        return Step2()
      default:
        return 'Unknown step'
    }
  }

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
        <Typography variant='body1' mt={5} align='center'>
          Welcome To
        </Typography>
        <Grid
          container
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='h4'>e</Typography>
            <Image src='/logo_bukk.svg' width='80' height='60' />
          </Grid>
        </Grid>
        <Grid
          sx={{
            direction: 'column',
            padding: '2rem',
          }}
        >
          {activeStep === 0 ? (
            <>
              <Typography variant='h6'>New management registration</Typography>
              <Typography variant='body2' my={2}>
                Step one of two
              </Typography>
            </>
          ) : (
            <>
              <Typography variant='h6'>Hello Israel, please complete your registration</Typography>
              <Typography variant='body2' my={2}>
                Step two of two
              </Typography>
            </>
          )}
          <Grid container>
            <Grid item xs={2}>
              <Stepper activeStep={activeStep} connector=''>
                <Step
                  sx={{
                    backgroundColor: activeStep === 0 ? '#41449B' : 'primary.light',
                    color: activeStep === 0 ? '#F1CA2D' : '#fff',
                    padding: '1rem 1.5rem',
                    fontWeight: 700,
                    mr: '0.5rem',
                    border: activeStep === 0 ? '1px solid #5390FB' : 'none',
                  }}
                >
                  1
                </Step>
                <Step
                  sx={{
                    backgroundColor: activeStep === 1 ? '#41449B' : 'primary.light',
                    color: activeStep === 1 ? '#F1CA2D' : '#fff',
                    padding: '1rem 1.5rem',
                    fontWeight: 700,
                    mr: '0.5rem',
                    border: activeStep === 1 ? '1px solid #5390FB' : 'none',
                  }}
                >
                  2
                </Step>
              </Stepper>
            </Grid>
            <Grid item xs={10}>
              <Typography
                variant='body1'
                align='center'
                sx={{
                  backgroundColor: 'primary.light',
                  padding: '1rem 1.5rem',
                }}
              >
                This is the BUKK CRM system. Please enter your details as required below.
              </Typography>
            </Grid>
          </Grid>

          <form>
            {getStepContent(activeStep)}
            <Grid container mt={5} justifyContent='flex-end' gap='1rem'>
              {activeStep === 0 ? (
                <>
                  <Button
                    onClick={null}
                    size='small'
                    sx={{
                      backgroundColor: 'primary.light',
                      width: '133px',
                      height: '30px',
                      color: '#fff',
                      textTransform: 'none',
                      fontWeight: 700,
                      fontSize: ' 16px',
                      borderRadius: 0,
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => setActiveStep(1)}
                    size='small'
                    sx={{
                      backgroundColor: 'warning.light',
                      width: '133px',
                      height: '30px',
                      color: '#354869',
                      textTransform: 'none',
                      fontWeight: 700,
                      fontSize: ' 16px',
                      borderRadius: 0,
                      '&:hover': {
                        backgroundColor: 'warning.dark',
                      },
                    }}
                  >
                    Continue
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => setActiveStep(0)}
                    size='small'
                    sx={{
                      backgroundColor: 'primary.light',
                      width: '133px',
                      height: '30px',
                      color: '#fff',
                      textTransform: 'none',
                      fontWeight: 700,
                      fontSize: ' 16px',
                      borderRadius: 0,
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={null}
                    size='small'
                    sx={{
                      backgroundColor: 'primary.light',
                      width: '133px',
                      height: '30px',
                      color: '#fff',
                      textTransform: 'none',
                      fontWeight: 700,
                      fontSize: ' 16px',
                      borderRadius: 0,
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type='submit'
                    size='small'
                    sx={{
                      backgroundColor: 'warning.light',
                      width: '133px',
                      height: '30px',
                      color: '#354869',
                      textTransform: 'none',
                      fontWeight: 700,
                      fontSize: ' 16px',
                      borderRadius: 0,
                      '&:hover': {
                        backgroundColor: 'warning.dark',
                      },
                    }}
                  >
                    Submit
                  </Button>
                </>
              )}
            </Grid>
          </form>
        </Grid>
      </Grid>
      <RightContainer />
    </Grid>
  )
}

export default SignupWrapper
