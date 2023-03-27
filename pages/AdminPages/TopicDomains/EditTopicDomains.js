
/*
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';





  

function EditTopicDomains() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [openDialog, setOpenDialog] = React.useState(false);
  
  const [TopicDomain, setTopicDomains] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/getTopics');
      const data = await response.json();
      setTopicDomains(data.topicDomains);
    }
    fetchData();
  }, []);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - topicDomains.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditButtonClick = (id) => {
    // Find the row with the given id
    const row = topicDomains.find((r) => r.id === id);

    // Set the initial value of the text field
    setTopicDomain(row.name);

    // Open the dialog
    setOpenDialog(true);
  };

  return (
    <div >

      <Navbar />

    
      <TablePaginationActions/>
      <TopTabDomains />
      <Box
        sx={{
          padding: '20px',
          marginTop: '2px',
          marginLeft: '300px',
          marginRight: '260px',
          backgroundColor: '#242444',
          color: 'white',
        }}
      >
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Edit Topic Domain</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Topic Domain"
              fullWidth
              value={TopicDomain}
              onChange={(e) => setTopicDomain(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button onClick={() => {
              // Save the updated value of the article type and i have to code this further
              // and close the dialog
              setOpenDialog(false);
            }} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} aria-label="custom pagination table">
            <TableHead >

              <TableRow sx={{ backgroundColor: '#b3b3b3' }}>
                <TableCell sx={{ fontSize: '1.1rem', color: 'white' }}>Topic Domain Id</TableCell>
                <TableCell sx={{ fontSize: '1.1rem', color: 'white' }}>Topic Domain</TableCell>
                <TableCell sx={{ fontSize: '1.1rem', color: 'white' }}>Edit</TableCell>
              </TableRow>

            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? topicdomain.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : topicdomain
                
              ).map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell style={{ width: 260 }} align="Left">
                 

                    {row.name}
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" onClick={() => handleEditButtonClick(row.id)}>
                      Edit
                    </Button>
                  </TableCell>

                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );


}
export default EditTopicDomains;
*/

import Navbar from '../../../components/Navbar';
import TopTabDomains from '../../../components/TopTabDomains';
import TablePaginationActions from '../../../components/TablePaginationActions';
import * as React from 'react';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';



export const getStaticProps = async () => {
  const response = await fetch('https://m6x0ff12cj.execute-api.us-east-1.amazonaws.com/topicDoms/topicdomains');
  const data = await response.json();
  console.log(data);
  return {
    props: { topicDomains: data.topicDomains }
  }
}



function EditTopicDomains({ topicDomains }) {
  console.log(topicDomains);
  const sortedTopicDomains = topicDomains.sort((a, b) =>
    a.topicDomainId.localeCompare(b.topicDomainId)
  );
  console.log(sortedTopicDomains);





  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [openDialog, setOpenDialog] = React.useState(false);

  




  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - topicDomains.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditButtonClick = (id) => {
    // Find the row with the given id
    const row = topicDomains.find((r) => r.topicDomainId === id);

    // Set the initial value of the text field
   // setTopicD(row.topicDomainName);

    // Open the dialog
    setOpenDialog(true);
  };


  return (
    <div>
      <Navbar />
      <TablePaginationActions />
      <TopTabDomains />
      <Box
        sx={{
          padding: '20px',
          marginTop: '2px',
          marginLeft: '300px',
          marginRight: '260px',
          backgroundColor: '#242444',
          color: 'white',
        }}
      ><Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Edit Topic Domain</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Topic Domain"
              fullWidth
              value={topicDomains.topicDomainName}
             // onChange={(e) => setTopicDomain(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button onClick={() => {
              // Save the updated value of the article type and i have to code this further
              // and close the dialog
              setOpenDialog(false);
            }} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} aria-label="Topic-Domain-Table">
            <TableHead >

              <TableRow sx={{ backgroundColor: '#b3b3b3' }}>
                <TableCell sx={{ fontSize: '1.1rem', color: 'white' }}>Topic Domain Id</TableCell>
                <TableCell sx={{ fontSize: '1.1rem', color: 'white' }}>Topic Domain</TableCell>
                <TableCell sx={{ fontSize: '1.1rem', color: 'white' }}>Edit</TableCell>
              </TableRow>

            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? topicDomains.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : topicDomains
              ).map(topicDomain => (
                <TableRow key={topicDomain.topicDomainId}>
                  <TableCell component="th" scope="row">
                    {topicDomain.topicDomainId}
                  </TableCell>
                  <TableCell style={{ width: 260 }} align="Left">
                    {topicDomain.topicDomainName}
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" onClick={() => handleEditButtonClick(topicDomain.topicDomainId)}>
                      Edit
                    </Button>
                  </TableCell>

                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={topicDomains.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>

      </Box>
    </div>
  );
}

export default EditTopicDomains;


{/* 
        <h1>Topic Domains</h1>
        <table>
          <thead>
            <tr>
              <th>Topic Domain ID</th>
              <th>Topic Domain Name</th>
            </tr>
          </thead>
          <tbody>
            {topicDomains.map(topicDomain => (
              <tr key={topicDomain.topicDomainId}>
                <td>{topicDomain.topicDomainId}</td>
                <td>{topicDomain.topicDomainName}</td>
              </tr>
            ))}
          </tbody>
        </table>
        */}

/*

function EditTopicDomains() {
  const [topicDomains, setTopicDomains] = useState([]);

  useEffect(() => {
    async function fetchTopicDomains() {
      const response = await fetch('https://m6x0ff12cj.execute-api.us-east-1.amazonaws.com/topicDoms/topicdomains');
      console.log("response:",response);
      const data = await response.json();
      setTopicDomains(data.topicDomains);
      console.log(setTopicDomains);
    }
    fetchTopicDomains();
  }, []);

  return (
    <div>
      <h1>Topic Domains</h1>
      <table>
        <thead>
          <tr>
            <th>Topic Domain ID</th>
            <th>Topic Domain Name</th>
          </tr>
        </thead>
        <tbody>
          {topicDomains.map(topicDomain => (
            <tr key={topicDomain.topicDomainId}>
              <td>{topicDomain.pk.split("#")[1]}</td>
              <td>{topicDomain.topicDomainName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EditTopicDomains;
*/