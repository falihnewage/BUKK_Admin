import React from 'react'
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid'
import { Box, Typography } from '@mui/material'
import { columnData, rowData } from './EmployeesList'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const columns = columnData
const rows = rowData

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
        display: 'flex',
      }}
    >
      <Typography sx={{ ml: 1, mt: 1 }}>Employees</Typography>
      <GridToolbarQuickFilter
        placeholder='Search by profile name or contact'
        sx={{
          width: 500,
          float: 'right',
          ml: 3,
          mb: 0.5,
        }}
      />
      <Box sx={{ display: 'flex', ml: 4, mt: 2 }}>
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
        rowsPerPageOptions={[6]}
        checkboxSelection
        disableSelectionOnClick
        hasPagination={false}
        hideFooterPagination={true}
        paginationMode={undefined}
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
        rowHeight={35}
        autoHeight
        hideFooter={true}
        components={{ Toolbar: QuickSearchToolbar }}
      />
    </Box>
  )
}

export default EmployeesTable
