import React from 'react'
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const FleetViewer = () => {
  const styles = {
    Table: {
      marginTop: '11px',
      overflowX: 'scroll',
    },
    tableRow: {
      border: 0,
    },
    tableCell: {
      border: 0,
      padding: '3px 7px',
      fontSize: '12px',
    },
    status: {
      backgroundColor: '#41AD4A',
      width: '49px',
      height: '9px',
    },
  }
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'primary.light',
          height: '100%',
          padding: '6px 14px',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexFlow: 'row wrap' }}>
          <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>Fleet Viewer</Typography>
          <Box
            sx={{
              backgroundColor: 'custom.purple',
              display: 'flex',
              alignItems: 'center',
              borderRadius: 25,
              padding: '2px 30px',
            }}
          >
            <Typography sx={{ fontSize: '12px', color: '#FFFFFF66', textAlign: 'center' }}>
              Search Driver or Vehicle ID
            </Typography>
            <SearchIcon sx={{ fontSize: '16px', marginLeft: '5px' }} />
          </Box>
          <Box>
            <FormControl sx={{ minWidth: 150 }} variant='standard'>
              <InputLabel sx={{ fontWeight: 'bold' }}>Select Location</InputLabel>
              <Select label='Select location'>
                <MenuItem></MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box>
          <TableContainer style={styles.Table}>
            <Table size='small'>
              <TableHead>
                <TableRow style={styles.tableRow}>
                  <TableCell style={styles.tableCell}>Status</TableCell>
                  <TableCell style={styles.tableCell}>Vehicle</TableCell>
                  <TableCell style={styles.tableCell}>Driver</TableCell>
                  <TableCell style={styles.tableCell}>Location</TableCell>
                  <TableCell style={styles.tableCell}>Documents</TableCell>
                  <TableCell style={styles.tableCell}>Completed</TableCell>
                  <TableCell style={styles.tableCell}>Cancelled</TableCell>
                  <TableCell style={styles.tableCell}>Mileage</TableCell>
                  <TableCell style={styles.tableCell}>Compliance</TableCell>
                  <TableCell style={styles.tableCell}>Capacity</TableCell>
                  <TableCell style={styles.tableCell}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ backgroundColor: '#41449B4A', border: 'none' }}>
                <TableRow style={styles.tableRow}>
                  <TableCell style={styles.tableCell}>
                    <Box style={styles.status}></Box>
                  </TableCell>
                  <TableCell style={styles.tableCell}>Bakkie Cargo</TableCell>
                  <TableCell style={styles.tableCell}>James</TableCell>
                  <TableCell style={styles.tableCell}>Johannesburg</TableCell>
                  <TableCell style={styles.tableCell}>Valid</TableCell>
                  <TableCell style={styles.tableCell}>90</TableCell>
                  <TableCell style={styles.tableCell}>2</TableCell>
                  <TableCell style={styles.tableCell}>1800</TableCell>
                  <TableCell style={styles.tableCell}>Good</TableCell>
                  <TableCell style={styles.tableCell}>200kg</TableCell>
                  <TableCell style={styles.tableCell}>View</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  )
}

export default FleetViewer
