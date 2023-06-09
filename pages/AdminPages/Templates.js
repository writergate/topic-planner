/*
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import NavBar from '../../components/Navbar';

const StyledButton = styled(Button)({
    textTransform: 'none', // set textTransform to none to prevent auto-uppercase
});

function Templates() {
    const router = useRouter();
    const handleCreateButtonClick = () => {
        console.log('Button 1 clicked');
        router.push('/AdminPages/createTemplates');
    };

    const handleEditButtonClick = () => {
        router.push('/AdminPages/editTemplates');
    };

    return (
        <div>
            <NavBar />
            <Box sx={{
                padding: '20px',
                marginTop: '100px',
                marginLeft: '260px',
                marginRight: '260px',
                color: 'white',
                backgroundImage: 'url("/templates.png")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                /*when the screen width is 600px or less. We've set the height to 300px and changed the backgroundSize to contain, which will scale the image down to fit within the Box component.*/

/* height: '500px',
 '@media screen and (max-width: 600px)': {
     height: '300px',
     backgroundSize: 'contain',
     backgroundPosition: 'top',
 },
/*         }}>



 <Box
     sx={{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         height: '500px',
         flexDirection: 'column'
     }}
 >
     <StyledButton variant="contained"  color="secondary" onClick={handleCreateButtonClick} sx={{ width: '250px',fontWeight:'600', ':hover': { color: '#030d28', backgroundColor: 'white' } }} >
         Create New Topic Templates
     </StyledButton>
     <Box sx={{ my: 2 }} />
     <StyledButton variant="contained" color="secondary" onClick={handleEditButtonClick} sx={{ width: '250px',fontWeight:'600' , ':hover': { color: '#030d28', backgroundColor: 'white'} }} >
         Edit Topic Templates
     </StyledButton>
 </Box>
</Box>
</div>
)

}

export default Templates

*/

import * as React from 'react';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import TablePaginationActions from '../../components/TablePaginationActions';

import Button from '@mui/material/Button';
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

export default function Templates() {
    const [data, setData] = useState([
        { templateId: 1, template: 'Template 1', topic: 'Topic 1', articleType: 'Article Type 1', editable: false },
        { templateId: 2, template: 'Template 2', topic: 'Topic 2', articleType: 'Article Type 2', editable: false },
        { templateId: 3, template: 'Template 3', topic: 'Topic 3', articleType: 'Article Type 3', editable: false },
        // Add more sample data as needed
    ]);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleEditClick = (index) => {
        setData((prevData) => {
            const updatedData = prevData.map((item, i) => {
                if (i === index) {
                    return { ...item, editable: true };
                }
                return item;
            });
            return updatedData;
        });
    };

    const handleSaveClick = (index) => {
        setData((prevData) => {
            const updatedData = prevData.map((item, i) => {
                if (i === index) {
                    return { ...item, editable: false };
                }
                return item;
            });
            return updatedData;
        });
    };



    const handleFieldChange = (index, field, value) => {
        setData((prevData) => {
            const updatedData = [...prevData];
            updatedData[index][field] = value;
            return updatedData;
        });
    };

    const handleAddClick = () => {
        const lastRow = data[data.length - 1];
      
        if (lastRow && (!lastRow.template || !lastRow.topic || !lastRow.articleType)) {
          // Don't add a new row if the previous row's fields are empty
          return;
        }
      
        setData((prevData) => {
          const newTemplateId = prevData.length + 1;
          const newRow = {
            templateId: newTemplateId,
            template: '',
            topic: '',
            articleType: '',
            editable: true,
          };
          return [...prevData, newRow];
        });
      };
      

    return (

        <div>
            <Navbar />

            <TablePaginationActions />
            <Box
                sx={{
                    padding: '20px',
                    marginTop: '2px',
                    marginLeft: '300px',
                    marginRight: '260px',
                    backgroundColor: 'white',
                    color: 'white',
                }}
            >


                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 600 }} aria-label="custom pagination table">
                        <TableHead >

                            <TableRow sx={{ backgroundColor: '#0e0e42', fontWeight: 700 }}>
                                <TableCell sx={{ fontSize: '1rem', color: 'white' }}>Template Id</TableCell>
                                <TableCell sx={{ fontSize: '1rem', color: 'white' }}>Template</TableCell>
                                <TableCell sx={{ fontSize: '1rem', color: 'white' }}>Topic Domain</TableCell>
                                <TableCell sx={{ fontSize: '1rem', color: 'white' }}>Article Type</TableCell>
                                <TableCell sx={{ fontSize: '1rem', color: 'white' }}>Edit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.templateId}</TableCell>
                                        <TableCell>
                                            {item.editable ? (
                                                <input
                                                    type="text"
                                                    value={item.template}
                                                    onChange={(e) => handleFieldChange(index, 'template', e.target.value)}
                                                />
                                            ) : (
                                                item.template
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {item.editable ? (
                                                <input
                                                    type="text"
                                                    value={item.topic}
                                                    onChange={(e) => handleFieldChange(index, 'topic', e.target.value)}
                                                />
                                            ) : (
                                                item.topic
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {item.editable ? (
                                                <input
                                                    type="text"
                                                    value={item.articleType}
                                                    onChange={(e) => handleFieldChange(index, 'articleType', e.target.value)}
                                                />
                                            ) : (
                                                item.articleType
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {item.editable ? (
                                                <button onClick={() => handleSaveClick(index)}>Save</button>
                                            ) : (
                                                <button onClick={() => handleEditClick(index)}>Edit</button>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            <TableRow>
                                <TableCell colSpan={5} align="center">
                                    <button onClick={handleAddClick}>Add</button>
                                </TableCell>
                            </TableRow>
                        </TableBody>

                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={3}
                                    count={data.length}
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
