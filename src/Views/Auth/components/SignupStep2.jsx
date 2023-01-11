import { Checkbox, FormControlLabel, FormGroup, FormHelperText, Grid, TextField, Typography } from '@mui/material'

import CircleIcon from '@mui/icons-material/Circle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'

const SignupStep2 = ({ formik }) => {
  return (
    <Grid
      container
      gap={1}
      sx={{
        backgroundColor: 'primary.light',
        justifyContent: 'space-evenly',
        mt: '0.5rem',
        p: 1,
      }}
    >
      <Typography sx={{ fontWeight: 700, color: '#fff', width: '99.3%' }}>Your expertise and skills</Typography>
      <Grid
        item
        sx={{
          border: '1px solid #5390FB',
          p: 1,
          width: { xs: '99.3%', sm: '32.2%' },
        }}
      >
        <Typography sx={{ fontWeight: 700, color: '#fff' }}>Main Specialty</Typography>
        <TextField
          fullWidth
          variant='standard'
          name='main_specialty'
          value={formik.values.main_specialty}
          onChange={formik.handleChange}
          label=''
          placeholder='State your main specialty'
          InputProps={{ disableUnderline: true }}
        />
        <FormHelperText onBlur={formik.handleBlur} sx={{ color: 'error.light' }}>
          {formik.touched.main_specialty && formik.errors.main_specialty}
        </FormHelperText>
      </Grid>
      <Grid
        item
        sx={{
          border: '1px solid #5390FB',
          p: 1,
          width: { xs: '99.3%', sm: '32.2%' },
        }}
      >
        <Typography sx={{ fontWeight: 700, color: '#fff' }}>Department</Typography>
        <TextField
          fullWidth
          variant='standard'
          name='department'
          value={formik.values.department}
          onChange={formik.handleChange}
          label=''
          placeholder='State your department'
          InputProps={{ disableUnderline: true }}
        />
        <FormHelperText onBlur={formik.handleBlur} sx={{ color: 'error.light' }}>
          {formik.touched.department && formik.errors.department}
        </FormHelperText>
      </Grid>
      <Grid
        item
        sx={{
          border: '1px solid #5390FB',
          p: 1,
          width: { xs: '99.3%', sm: '32.2%' },
        }}
      >
        <Typography sx={{ fontWeight: 700, color: '#fff' }}>Portfolio or Social Media</Typography>
        <TextField
          fullWidth
          variant='standard'
          name='portfolio'
          value={formik.values.portfolio}
          onChange={formik.handleChange}
          label=''
          placeholder='Paste a URL here'
          InputProps={{ disableUnderline: true }}
        />
        <FormHelperText onBlur={formik.handleBlur} sx={{ color: 'error.light' }}>
          {formik.touched.portfolio && formik.errors.portfolio}
        </FormHelperText>
      </Grid>

      <Grid
        item
        sx={{
          p: 1,
          display: 'flex',
          width: { xs: '99.3%', sm: '49%' },
          borderRight: { sm: '1px solid #fff' },
        }}
      >
        {formik.values.photo === null ? (
          <div
            style={{
              width: '6.5rem',
              height: '6.5rem',
              borderRadius: '100%',
              background: '#d1d1d1',
            }}
          />
        ) : (
          <div
            style={{
              width: '6.5rem',
              height: '6.5rem',
              border: '1px solid #d1d1d1',
              borderRadius: '100%',
              backgroundImage: `url(${URL.createObjectURL(formik.values.photo)})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}

        <input
          id='photo'
          hidden
          type='file'
          accept='image/x-png'
          name='photo'
          onChange={(e) => {
            e.preventDefault()
            formik.setFieldValue('photo', e.target.files[0])
          }}
        />

        <label htmlFor='photo'>
          <Grid container direction='column' mt={2.5} ml={1.5}>
            <Typography variant='body1' align='left' sx={{ fontWeight: 700, color: '#fff' }}>
              Upload your photo
            </Typography>
            <Typography variant='body2' align='left' sx={{ color: '#d1d1d1' }}>
              .png only
            </Typography>

            <Typography
              variant='body2'
              align='left'
              sx={{
                fontWeight: 700,
                color: 'warning.light',
              }}
            >
              {formik.values.photo === null ? 'Upload' : 'Update'}
            </Typography>
            <FormHelperText onBlur={formik.handleBlur} sx={{ color: 'error.light' }}>
              {formik.touched.photo && formik.errors.photo}
            </FormHelperText>
          </Grid>
        </label>
      </Grid>
      <Grid
        item
        sx={{
          p: 1,
          width: { xs: '99.3%', sm: '49%' },
        }}
      >
        <FormGroup>
          <FormControlLabel
            name='text_notifications'
            onChange={formik.handleChange}
            control={
              <Checkbox
                checked={formik.values.text_notifications}
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
            label={
              <>
                <Typography variant='body1' sx={{ fontWeight: 600, color: '#fff' }}>
                  Enable text notifications
                </Typography>
                <Typography variant='body2' sx={{ fontWeight: 100, color: '#fff' }}>
                  Change anytime later
                </Typography>
                <FormHelperText onBlur={formik.handleBlur} sx={{ color: 'error.light' }}>
                  {formik.touched.text_notifications && formik.errors.text_notifications}
                </FormHelperText>
              </>
            }
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            name='email_notifications'
            onChange={formik.handleChange}
            control={
              <Checkbox
                checked={formik.values.email_notifications}
                icon={
                  <RadioButtonUncheckedIcon
                    sx={{
                      borderRadius: '30rem',
                      color: 'info.light',
                      marginTop: '1rem',
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
                      marginTop: '1rem',
                      fontSize: '1rem',
                      '&:hover': {
                        color: 'info.dark',
                      },
                    }}
                  />
                }
              />
            }
            label={
              <>
                <Typography variant='body1' sx={{ marginTop: '1rem', fontWeight: 600, color: '#fff' }}>
                  Enable emails
                </Typography>
                <Typography variant='body2' sx={{ fontWeight: 100, color: '#fff' }}>
                  No adds
                </Typography>
                <FormHelperText onBlur={formik.handleBlur} sx={{ color: 'error.light' }}>
                  {formik.touched.email_notifications && formik.errors.email_notifications}
                </FormHelperText>
              </>
            }
          />
        </FormGroup>
      </Grid>
    </Grid>
  )
}

export default SignupStep2
