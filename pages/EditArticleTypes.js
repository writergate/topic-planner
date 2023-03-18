import Navbar from '../components/Navbar';
import Button from '@mui/material/Button';
import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
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
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

import TopTab from '../components/TopTab';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>

      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(id, name) {
  return { id, name };
}

const rows = [
  createData(1, 'Article Type 1'),
  createData(2, 'Article Type 2'),
  createData(3, 'Article Type 3'),
  createData(4, 'Article Type 4'),
  createData(5, 'Article Type 5'),
  createData(6, 'Article Type 6'),
  createData(7, 'Article Type 7'),
  createData(8, 'Article Type 8'),
]
function EditArticleTypes() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div >

    <Navbar />
    
    <TopTab/>
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="custom pagination table">
          <TableHead >
           
              <TableRow sx={{backgroundColor:'#b3b3b3' }}>
                <TableCell sx={{ fontSize: '1.1rem', color:'white' }}>Article Type Id</TableCell>
                <TableCell sx={{ fontSize: '1.1rem', color:'white' }}>Article Type</TableCell>
                <TableCell sx={{ fontSize: '1.1rem', color:'white' }}>Edit</TableCell>
               
              </TableRow>

         
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell style={{ width: 260 }} align="Left">
                  {row.name}
                </TableCell>
                <TableCell>
                    <Button variant="contained" color="primary">
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
export default EditArticleTypes;
/*
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useState } from 'react';
import { useRouter } from 'next/router';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import TablePaginationActions from '../components/TablePaginationActions';



function FlaggedTopics() {
  const router = useRouter();

  // Define the state for the page, rows per page, and topics
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); //change deafult raw page
  const [topics, setTopics] = useState([
    {
      id: '1',
      name: 'Topic 1',
      description: 'This is the description for Topic 1',
    },
    {
      id: '2',
      name: 'Topic 2',
      description: 'This is the description for Topic 2',
    },
    {
      id: '3',
      name: 'Topic 3',
      description: 'This is the description for Topic 3',
    },

    {
      id: '4',
      name: 'Topic 1',
      description: 'This is the description for Topic 1',
    },
    {
      id: '5',
      name: 'Topic 2',
      description: 'This is the description for Topic 2',
    },
    {
      id: '6',
      name: 'Topic 3',
      description: 'This is the description for Topic 3',
    },
    {
      id: '7',
      name: 'Topic 1',
      description: 'This is the description for Topic 1',
    },
    {
      id: '8',
      name: 'Topic 2',
      description: 'This is the description for Topic 2',
    },
    {
      id: '9',
      name: 'Topic 3',
      description: 'This is the description for Topic 3',
    },
    {
      id: '10',
      name: 'Topic 1',
      description: 'This is the description for Topic 1',
    },
    {
      id: '11',
      name: 'Topic 2',
      description: 'This is the description for Topic 2',
    },
    {
      id: '12',
      name: 'Topic 3',
      description: 'This is the description for Topic 3',
    },
    // Add more topics here
  ]);

  // Calculate the total number of topics
  const count = topics.length;

  // Define the event handlers for changing the page and rows per page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  //const emptyRows = rowsPerPage - Math.min(rowsPerPage, topics.length - page * rowsPerPage);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - topics.length) : 0;
  return (
    <div>

      <Navbar />
      <Box
        sx={{
          padding: '20px',
          marginTop: '20px',
          marginLeft: '300px',
          marginRight: '260px',
          backgroundColor: 'white',
          color: 'white',
        }}
      >
        <h1>Topics</h1>
        <TableContainer>
          <Table>
            <TableHead align="center">
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topics
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((topic) => (
                  <TableRow
                    key={topic.id}
                    onClick={() => router.push(`/topics/${topic.id}`)}
                    hover
                  >
                    <TableCell>{topic.id}</TableCell>
                    <TableCell>{topic.name}</TableCell>
                    <TableCell>{topic.description}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary">
                        Accept
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={3} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component={'div'}
          rowsPerPageOptions={[5, 10, 15, { label: 'All', value: -1 }]}
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              "aria-label": "rows per page",
            },
            native: true,
          }}
          onPageChange={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </Box>
    </div>
  );
}

export default FlaggedTopics;
*/




