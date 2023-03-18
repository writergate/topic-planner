
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
