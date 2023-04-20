import * as React from 'react';
import  { useState, useEffect } from 'react'
import './Table.scss'
import { styled } from '@mui/material/styles';
import appi from '../api/appi'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'id', label: 'id', minWidth: 50 },
  { id: 'abbreviation', label: 'Abbreviation', minWidth: 100,align:'left' },
  {
    id: 'city',
    label: 'City',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'division',
    label: 'Division',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'full_name',
    label: 'Full Name',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'name',
    label: 'Name',
    minWidth: 170,
    align: 'left',
  },
];

function createData(id, abbreviation, city, division, full_name, name) {

  return { id, abbreviation, city, division, full_name, name};
}


const Tablex = () => {
const [team, setTeam] = useState([])
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);


const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};

    useEffect(() => {
        appi.get('/teams').then(response => {setTeam(response.data.data);
  })}, [])

  let rows = team.map(function(cout){
    return createData(cout.id, cout.abbreviation, cout.city, cout.division, cout.full_name, cout.name)
  })


  return ( 
    <div className='listcontainer'>
      <div className='listtitle'>
        <img className='image' src='https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png&w=100&h=70&transparent=true'></img>
        Basket Ball Team Info
      <div className='tablet'>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10,15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
        </div>
      </div>
    </div>
  )
}

export default Tablex