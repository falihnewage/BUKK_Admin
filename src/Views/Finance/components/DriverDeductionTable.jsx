import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { columnData, rowData } from './Deductionlist'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
const columns = columnData
const rows = rowData

const DriverDeductionTable = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2E2957',
        p: 1,
      }}
    >
      <Typography>Driver Deduction</Typography>
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
              borderColor: '#2E2957',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '##2E2957',
              color: '#fff',
              border: 'none',
            },
            '& .MuiDataGrid-cell': {
              backgroundColor: '#251A40',
              color: '#fff',
              border: 0.5,
              borderColor: '#2E2957',
            },
          }}
          headerHeight={35}
          hideFooter={true}
          rowHeight={35}
          autoHeight
        />
      </Box>
    </Box>
  )
}

export default DriverDeductionTable
