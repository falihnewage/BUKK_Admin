import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import Countries from 'src/Constants/Countries'

const SignupStep1 = ({ formik }) => {
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
      <Grid
        item
        sx={{
          border: '1px solid #5390FB',
          p: 1,
          width: { xs: '99.3%', sm: '32.2%' },
        }}
      >
        <Typography sx={{ fontWeight: 700, color: '#fff' }}>First Name</Typography>
        <TextField
          fullWidth
          variant='standard'
          name='first_name'
          value={formik.values.first_name}
          onChange={formik.handleChange}
          label=''
          placeholder='Minimum of 4 characters'
          InputProps={{
            disableUnderline: true,
          }}
        />
        <FormHelperText onBlur={formik.handleBlur} sx={{ color: 'error.light' }}>
          {formik.touched.first_name && formik.errors.first_name}
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
        <Typography sx={{ fontWeight: 700, color: '#fff' }}>Last Name</Typography>
        <TextField
          fullWidth
          variant='standard'
          name='last_name'
          value={formik.values.last_name}
          onChange={formik.handleChange}
          label=''
          placeholder='Minimum of 4 characters'
          InputProps={{ disableUnderline: true }}
        />
        <FormHelperText onBlur={formik.handleBlur} sx={{ color: 'error.light' }}>
          {formik.touched.last_name && formik.errors.last_name}
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
        <Typography sx={{ fontWeight: 700, color: '#fff' }}>Email</Typography>
        <TextField
          fullWidth
          variant='standard'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          type='email'
          label=''
          placeholder='Use company email address'
          InputProps={{ disableUnderline: true }}
        />
        <FormHelperText onBlur={formik.handleBlur} sx={{ color: 'error.light' }}>
          {formik.touched.email && formik.errors.email}
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
        <Typography sx={{ fontWeight: 700, color: '#fff' }}>Phone Contact</Typography>
        <TextField
          fullWidth
          variant='standard'
          name='phone'
          value={formik.values.phone}
          onChange={formik.handleChange}
          label=''
          placeholder='Required field'
          InputProps={{ disableUnderline: true }}
        />
        <FormHelperText onBlur={formik.handleBlur} sx={{ color: 'error.light' }}>
          {formik.touched.phone && formik.errors.phone}
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
        <Typography sx={{ fontWeight: 700, color: '#fff' }}>Country</Typography>
        <FormControl variant='standard' sx={{ width: '100%', mt: formik.values.country === '' && '-1rem' }}>
          {formik.values.country === '' && <InputLabel> State your country</InputLabel>}
          <Select
            name='country'
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disableUnderline
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: '16rem',
                  width: 250,
                  backgroundColor: '#251A40',
                  color: '#fff',
                },
              },
            }}
          >
            {Countries.map((country) => (
              <MenuItem key={country.name} value={country.name}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormHelperText onBlur={formik.handleBlur} sx={{ color: 'error.light' }}>
          {formik.touched.country && formik.errors.country}
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
        <Typography sx={{ fontWeight: 700, color: '#fff' }}>Position</Typography>
        <TextField
          fullWidth
          variant='standard'
          name='position'
          value={formik.values.position}
          onChange={formik.handleChange}
          label=''
          placeholder='State your job title'
          InputProps={{ disableUnderline: true }}
        />
        <FormHelperText onBlur={formik.handleBlur} sx={{ color: 'error.light' }}>
          {formik.touched.position && formik.errors.position}
        </FormHelperText>
      </Grid>
      <Grid
        item
        sx={{
          border: '1px solid #5390FB',
          p: 1,
          width: '99.3%',
        }}
      >
        <Typography sx={{ fontWeight: 700, color: '#fff' }}>Tasks</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant='standard'
          name='tasks'
          value={formik.values.tasks}
          onChange={formik.handleChange}
          label=''
          placeholder='List your main tasks here'
          InputProps={{ disableUnderline: true }}
        />
        <FormHelperText onBlur={formik.handleBlur} sx={{ color: 'error.light' }}>
          {formik.touched.tasks && formik.errors.tasks}
        </FormHelperText>
      </Grid>
    </Grid>
  )
}

export default SignupStep1
