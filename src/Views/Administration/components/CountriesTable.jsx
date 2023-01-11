import React from 'react'
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid'
import { Box, Typography } from '@mui/material'
import { columnData, rowData } from './CountryList'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const columns = columnData
const rows = rowData

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
        mt: 3,
        display: 'flex',
      }}
    >
      <Typography sx={{ float: 'left', ml: 1, mt: 1 }}>Countries</Typography>
      <GridToolbarQuickFilter
        placeholder='Search by profile name or contact'
        sx={{
          width: 500,
          ml: 3,
          color: '#fff',
          mb: 0.5,
        }}
      />
      <Box sx={{ display: 'flex', ml: 6, mt: 2 }}>
        <Typography>see all</Typography>
        <KeyboardArrowRightIcon color='white' />
      </Box>
    </Box>
  )
}

const EmployeesTable = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[]}
        checkboxSelection
        disableSelectionOnClick
        hasPagination={false}
        hideFooterPagination={false}
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
        autoHeight
        headerHeight={35}
        rowHeight={30}
        hideFooter={true}
        components={{ Toolbar: QuickSearchToolbar }}
      />
    </Box>
  )
}

export default EmployeesTable
