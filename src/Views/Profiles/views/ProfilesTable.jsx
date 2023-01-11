import { AddCircleOutline, ArrowDropDown, ArrowUpward, CancelOutlined, CheckCircleOutline } from '@mui/icons-material'
import {
  Box,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'

const ProfilesTable = () => {
  const styles = {
    Table: {
      overflowX: 'scroll',
    },
    tableRow: {
      border: 0,
    },
    tableCell: {
      border: 0,
      fontSize: '14px',
      padding: '0 10px',
    },
    tableBody: {
      backgroundColor: '#41449B42',
    },
  }
  return (
    <>
      <Box sx={{ height: '100%', backgroundColor: 'box.purple', display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', margin: '27px 22px 10px 22px', flexFlow: 'row wrap' }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mb: 2 }}>
            <SearchIcon sx={{ fontSize: '16px', marginRight: '5px' }} />
            <Typography sx={{ fontSize: '14px', color: '#FFFFFF66', textAlign: 'center' }}>
              Search profile by name or contact...
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Button sx={{ backgroundColor: 'warning.main', padding: '7px 30px', color: '#354869' }}>
              <AddCircleOutline sx={{ marginRight: '15px' }} />
              <Typography sx={{ textTransform: 'capitalize', fontWeight: '700', fontSize: '16px' }}>
                Create new profile
              </Typography>
            </Button>
          </Box>
        </Box>
        <TableContainer>
          <Table stickyHeader style={styles.Table}>
            <TableHead sx={{ '& th': { backgroundColor: '#41449BC9' } }}>
              <TableRow style={styles.tableRow}>
                <TableCell style={styles.tableCell}>
                  <Checkbox />
                </TableCell>
                <TableCell style={styles.tableCell}>
                  <Box sx={{ display: 'flex' }}>
                    Date added
                    <ArrowUpward />
                  </Box>
                </TableCell>
                <TableCell style={styles.tableCell}>Name</TableCell>
                <TableCell style={styles.tableCell}>Country</TableCell>
                <TableCell style={styles.tableCell}>
                  <Box sx={{ display: 'flex' }}>
                    Trips
                    <ArrowDropDown />
                  </Box>
                </TableCell>
                <TableCell style={styles.tableCell}>Contact</TableCell>
                <TableCell style={styles.tableCell}>
                  <Box sx={{ display: 'flex' }}>
                    Profile Type
                    <ArrowDropDown />
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={styles.tableBody}>
              <TableRow style={styles.tableRow}>
                <TableCell style={styles.tableCell}>
                  <Checkbox></Checkbox>
                </TableCell>
                <TableCell style={styles.tableCell}>30th Oct, 12:42</TableCell>
                <TableCell style={styles.tableCell}>James Zulu</TableCell>
                <TableCell style={styles.tableCell}>South Africa</TableCell>
                <TableCell style={styles.tableCell}>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'custom.green', paddingRight: '5px' }}>
                      <CheckCircleOutline sx={{ paddingRight: '2px' }} />
                      20
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'error.main' }}>
                      <CancelOutlined sx={{ paddingRight: '2px' }} />6
                    </Box>
                  </Box>
                </TableCell>
                <TableCell style={styles.tableCell}>+1 0800 55432</TableCell>
                <TableCell style={styles.tableCell}>Customer</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default ProfilesTable
