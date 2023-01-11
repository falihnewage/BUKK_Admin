import { Box, Button, FormControl, InputLabel, Select, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ProfileImagePlaceholder from 'public/images/ProfileImagePlaceholder.png'

const CustomerProfile = () => {
  const styles = {
    textField: {
      margin: '2px 10px 3px 0',
      border: '0.5px solid #5390FB',
      borderRadius: '6px',
    },
    formGroup: {
      margin: '5px 0',
    },
  }
  return (
    <>
      <Box sx={{ padding: '10px 14px 15px 30px' }}>
        <Typography sx={{ fontWeight: '700', fontSize: '20px', lineHeight: '36px' }}>Edit Customer Profile</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <Box>
            <Image src={ProfileImagePlaceholder} />
          </Box>
          <Box></Box>
        </Box>
        <Box sx={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between', marginTop: '10px' }}>
          <Box sx={{ borderRight: '2px solid #FFFFFF2B', height: '100%', paddingRight: '20px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Box style={styles.formGroup}>
                <Typography>First Name</Typography>
                <TextField label='First Name' style={styles.textField} size='small' />
              </Box>
              <Box style={styles.formGroup}>
                <Typography>Last Name</Typography>
                <TextField label='Last Name' style={styles.textField} size='small' />
              </Box>
            </Box>
            <Box style={styles.formGroup}>
              <Typography>Email</Typography>
              <TextField label='Email' sx={{ width: '100%' }} style={styles.textField} size='small' />
            </Box>
            <Box style={styles.formGroup}>
              <Typography>Phone Contact</Typography>
              <TextField label='+256 777 000 000' sx={{ width: '100%' }} style={styles.textField} size='small' />
            </Box>
            <Box style={styles.formGroup}>
              <Typography>Address</Typography>
              <TextField
                label='4A1 Rd. Moyo Close Bukoto'
                sx={{ width: '100%' }}
                style={styles.textField}
                size='small'
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Box style={styles.formGroup}>
                <Typography>City</Typography>
                <TextField label='Kampala' style={styles.textField} size='small' />
              </Box>
              <Box style={styles.formGroup}>
                <Typography>Region</Typography>
                <TextField label='Central' style={styles.textField} size='small' />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Box style={styles.formGroup}>
                <Typography>Zip Code</Typography>
                <TextField label='256' style={styles.textField} size='small' />
              </Box>
              <Box sx={{ width: '100%' }} style={styles.formGroup}>
                <Typography>Country</Typography>
                <FormControl fullWidth size='small'>
                  <InputLabel>Country</InputLabel>
                  <Select label='Country' sx={{ border: '0.5px solid #5390FB' }}></Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: '50%', position: 'relative', paddingLeft: '15px' }}>
            <Box style={styles.formGroup}>
              <Typography>Password</Typography>
              <TextField label='' type='password' style={styles.textField} size='small' sx={{ width: '100%' }} />
            </Box>
            <Box style={styles.formGroup}>
              <Typography>Attachments</Typography>
              <Box sx={{ height: '200px' }}></Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                position: 'absolute',
                bottom: '0',
                right: '0',
              }}
            >
              <Box>
                <Button
                  sx={{
                    backgroundColor: '#F20A0A',
                    color: '#fff',
                    padding: '9px 18px',
                    fontSize: '14px',
                    fontWeight: '700',
                    textAlign: 'center',
                    marginRight: '20px',
                  }}
                >
                  Cancel
                </Button>
              </Box>
              <Box>
                <Button
                  sx={{
                    backgroundColor: '#F1CA2D',
                    color: '#354869',
                    padding: '9px 18px',
                    fontSize: '14px',
                    fontWeight: '700',
                    textAlign: 'center',
                  }}
                >
                  Save Changes
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default CustomerProfile
