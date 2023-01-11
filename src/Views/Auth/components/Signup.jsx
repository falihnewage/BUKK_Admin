import { Button, CircularProgress, Grid, Stepper, Step, Typography } from '@mui/material'

import { useState } from 'react'

import Image from 'next/image'
import Step1 from './SignupStep1'
import Step2 from './SignupStep2'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Check } from '@mui/icons-material'
import Link from 'next/link'

const validationSchemaStep1 = Yup.object({
  first_name: Yup.string().min(4, 'Minimum of 4 characters required').required('Required.'),
  last_name: Yup.string().min(4, 'Minimum of 4 characters required').required('Required.'),
  email: Yup.string().email('Enter valid email.').required('Required.'),
  phone: Yup.string().required('Required.'),
  country: Yup.string().required('Required.'),
  position: Yup.string().required('Required.'),
  tasks: Yup.string()
    .min(200, 'Minimum of 200 characters (30 words or more)')
    .max(1000, 'Maximum 1000 characters (250 words or less)')
    .required('Required.'),
})

const validationSchemaStep2 = Yup.object({
  main_specialty: Yup.string().required('Required.'),
  department: Yup.string().required('Required.'),
  portfolio: Yup.string().required('Required.'),
  photo: Yup.string().typeError('Required.'),
  text_notifications: Yup.boolean().oneOf([true], 'Required.'),
  email_notifications: Yup.boolean().oneOf([true], 'Required.'),
})

const Signup = () => {
  const [activeStep, setActiveStep] = useState(1)
  const [submitLabel, setSubmitLabel] = useState('Continue')

  let formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      country: '',
      position: '',
      tasks: '',
      main_specialty: '',
      department: '',
      portfolio: '',
      photo: null,
      text_notifications: false,
      email_notifications: false,
    },

    // Call each formik submit function per step.
    onSubmit:
      activeStep === 1
        ? () => {
            setSubmitLabel('Submit')
            setActiveStep(2)
          }
        : (values, { resetForm }) => {
            setSubmitLabel('submitting')
            setTimeout(() => {
              console.log(values)
              setSubmitLabel('submitted')
            }, 3000)
            resetForm()
          },
    // Check validation per step.
    validationSchema: activeStep === 1 ? validationSchemaStep1 : validationSchemaStep2,
  })

  const getStepContent = (step) => {
    switch (step) {
      case 1:
        return Step1((formik = { formik }))
      case 2:
        return Step2((formik = { formik }))
      default:
        return Step1((formik = { formik }))
    }
  }

  return (
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
          <Typography variant='h4' sx={{ fontWeight: 700 }}>
            e
          </Typography>
          <Image src='/logo_bukk.svg' width='80' height='60' />
        </Grid>
      </Grid>
      <Grid
        sx={{
          direction: 'column',
          padding: '2rem',
        }}
      >
        <Typography variant='h6'>
          {activeStep === 1
            ? 'New management registration'
            : `Hello ${formik.values.first_name}, please complete your registration`}
        </Typography>
        <Typography variant='body2' my={2}>
          Step {activeStep === 1 ? 'one' : 'two'} of two
        </Typography>
        <Grid container justifyContent='space-between'>
          <Grid item sx={{ width: '20%' }}>
            <Stepper activeStep={activeStep} connector={null}>
              {[1, 2].map((item) => (
                <Step
                  key={item}
                  sx={{
                    backgroundColor: activeStep === item ? '#41449B' : 'primary.light',
                    color: activeStep === item ? '#F1CA2D' : '#fff',
                    padding: { xs: '0.6em', sm: '1.5rem' },
                    fontSize: { xs: '0.6em', sm: '1rem' },
                    fontWeight: 700,
                    mr: '0.5rem',
                    border: activeStep === item ? '1px solid #5390FB' : 'none',
                  }}
                >
                  {item}
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid item sx={{ width: '80%' }}>
            <Typography
              align='center'
              sx={{
                backgroundColor: 'primary.light',
                padding: { xs: '0.4em', sm: '1.5rem' },
                fontSize: { xs: '0.6em', sm: '1rem' },
              }}
            >
              This is the BUKK CRM system. Please enter your details as required below.
            </Typography>
          </Grid>
        </Grid>

        <form onSubmit={formik.handleSubmit}>
          {getStepContent(activeStep)}
          <Grid
            container
            mt={5}
            gap='1rem'
            sx={{
              justifyContent: 'flex-end',
            }}
          >
            {activeStep !== 1 && (
              <Button
                onClick={() => setActiveStep(1)}
                size='small'
                sx={{
                  backgroundColor: 'primary.light',
                  width: { xs: '30%', md: '133.3px' },
                  height: '30px',
                  color: '#fff',
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: '0.9em',
                  borderRadius: 0,
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                Back
              </Button>
            )}
            <Button
              size='small'
              sx={{
                backgroundColor: 'primary.light',
                width: { xs: '30%', md: '133.3px' },
                height: '30px',
                color: '#fff',
                textTransform: 'none',
                fontWeight: 700,
                fontSize: '0.9em',
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
            >
              <Link href='/login'>Cancel</Link>
            </Button>
            <Button
              type='submit'
              size='small'
              sx={{
                backgroundColor: 'warning.light',
                width: { xs: '30%', md: '133.3px' },
                height: '30px',
                color: '#354869',
                textTransform: 'none',
                fontWeight: 700,
                fontSize: '0.9em',
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: 'warning.dark',
                },
              }}
            >
              {activeStep === 1 ? (
                'Continue'
              ) : submitLabel === 'submitting' ? (
                <CircularProgress size='1rem' sx={{ color: 'info.light' }} />
              ) : submitLabel === 'submitted' ? (
                <Check size='1rem' sx={{ color: 'success.dark' }} />
              ) : (
                submitLabel
              )}
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}

export default Signup
