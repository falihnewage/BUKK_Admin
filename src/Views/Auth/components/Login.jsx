import Link from 'next/link'

import {
  Button,
  Checkbox,
  CircularProgress,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from '@mui/material'

import CircleIcon from '@mui/icons-material/Circle'
import Header from '../../../Components/AuthHeader'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Check, SyncProblem } from '@mui/icons-material'
import SideNavContext from 'src/Contexts/SideNavContext'
import { useContext, useState } from 'react'
import { useRouter } from 'next/router'

const validationSchema = Yup.object({
  email: Yup.string().email('Enter valid email.').required('Email is required.'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
})

const Login = () => {
  const { setIsAuthenticated } = useContext(SideNavContext)
  const router = useRouter()
  const [submitLabel, setSubmitLabel] = useState('Login')

  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember_me: false,
    },
    onSubmit: (values, { resetForm }) => {
      setSubmitLabel('loading')
      setTimeout(() => {
        localStorage.setItem('email', values.email)
        if (localStorage.getItem('email')) {
          console.log(values)
          setIsAuthenticated(true)
          router.push('/')
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
                size='small'
                type='password'
                name='password'
                label=''
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                onBlur={formik.handleBlur}
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
              justifyContent: 'space-between',
            }}
          >
            <Grid>
              <FormGroup>
                <FormControlLabel
                  name='remember_me'
                  onChange={formik.handleChange}
                  control={
                    <Checkbox
                      checked={formik.values.remember_me}
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
              type='submit'
              sx={{
                backgroundColor: 'warning.light',
                width: '8rem',
                height: '30px',
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
  )
}

export default Login
