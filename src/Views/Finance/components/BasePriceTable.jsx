import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { columnData, rowData } from './BasePricelist'
import { Button, Box } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const columns = columnData
const rows = rowData

const BasePriceTable = () => {
  return (
    <Box>
      <Box>
        <Button
          endIcon={<KeyboardArrowRightIcon />}
          sx={{
            backgroundColor: '#2E2957',
            borderRadius: 10,
            color: '#fff',
            mb: 1,
            ml: 35,
          }}
          size='small'
        >
          see all
        </Button>
      </Box>
      <Box>
        <DataGrid
          rows={rows}
          columns={columns}
          rowsPerPageOptions={[5]}
          sx={{
            '.MuiDataGrid-columnSeparator': {
              display: 'none',
            },
            '&.MuiDataGrid-root': {
              border: 1,
              fontFamily: 'Poppins',
              borderColor: '#2E2957',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#2E2957',
              color: '#fff',
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

export default BasePriceTable
