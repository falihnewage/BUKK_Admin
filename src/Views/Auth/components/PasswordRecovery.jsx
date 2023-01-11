import { Button, CircularProgress, Divider, Grid, TextField, Typography } from '@mui/material'
import AuthHeader from '../../../Components/AuthHeader'
import Link from 'next/link'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Check, SyncProblem } from '@mui/icons-material'
import { useState } from 'react'

const validationSchema = Yup.object({
  email: Yup.string().email('Enter valid email.').required('Email is required.'),
})

const PasswordRecovery = () => {
  const [submitLabel, setSubmitLabel] = useState('Reset my password')

  let formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values, { resetForm }) => {
      setSubmitLabel('loading')
      setTimeout(() => {
        localStorage.setItem('email', values.email)
        if (localStorage.getItem('email')) {
          console.log(values)
          setSubmitLabel('success')
        } else {
          setSubmitLabel('fail')
        }
      }, 3000)
      resetForm()
    },
    validationSchema: validationSchema,
  })

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
      <AuthHeader />
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
        <form onSubmit={formik.handleSubmit}>
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
              <TextField
                fullWidth
                variant='outlined'
                size='small'
                type='email'
                name='email'
                label=''
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                onBlur={formik.handleBlur}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent='flex-end'>
            <Grid item xs={12} md={10}>
              <Divider
                sx={{
                  my: 2,
                }}
              />
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Button
              size='small'
              type='submit'
              sx={{
                backgroundColor: 'warning.light',
                width: '12rem',
                height: '30px',
                px: '1rem',
                color: '#354869',
                textTransform: 'none',
                fontWeight: 700,
                fontSize: '0.9em',
                borderRadius: '15px',
                '&:hover': {
                  backgroundColor: 'warning.dark',
                },
              }}
            >
              {submitLabel === 'loading' ? (
                <CircularProgress size='1rem' sx={{ color: 'info.light' }} />
              ) : submitLabel === 'success' ? (
                <Check size='1rem' sx={{ color: 'success.dark' }} />
              ) : submitLabel === 'fail' ? (
                <SyncProblem size='1rem' sx={{ color: 'error.light' }} />
              ) : (
                submitLabel
              )}
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
  )
}

export default PasswordRecovery
