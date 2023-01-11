import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Button, Divider, Typography } from '@mui/material'
import { columnData, rowData } from './walletlist'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const columns = columnData
const rows = rowData

const Driverwallets = () => {
  return (
    <Box sx={{ mt: 2, p: 1 }}>
      <Box sx={{ mt: 8 }}>
        <Divider />
        <Typography>Driver wallets</Typography>
        <Button
          endIcon={<KeyboardArrowRightIcon />}
          size='small'
          sx={{
            color: '#fff',
            float: 'right',
            backgroundColor: '#251A40',
            borderRadius: 10,
            fontSize: 10,
          }}
        >
          sell all
        </Button>
        <Box sx={{ mt: 4 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            rowsPerPageOptions={[5]}
            sx={{
              '.MuiDataGrid-columnSeparator': {
                display: 'none',
              },
              '&.MuiDataGrid-root': {
                border: 'none',
                fontFamily: 'Poppins',
              },
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: '#41449B',
                color: '#fff',
              },
            }}
            headerHeight={35}
            hideFooter={true}
            rowHeight={26}
            autoHeight
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Driverwallets
