import React from 'react'
import { Box } from '@mui/material'
import MapVector from 'public/images/map-vector.png'
import Image from 'next/image'

const Map = () => (
  <>
    <Box>
      <Image src={MapVector} alt='Fleet map' />
    </Box>
  </>
)

export default Map
