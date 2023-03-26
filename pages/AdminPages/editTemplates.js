import Navbar from '../../components/Navbar';
import React, { useState } from 'react';
import AWS from 'aws-sdk'; // import AWS SDK

import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import  ListItem  from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

AWS.config.update({
  region: 'your-region',
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

const StyledButton = styled(Button)({
  textTransform: 'none', // set textTransform to none to prevent auto-uppercase
});

function EditTemplates() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  async function handleSearch(event) {
    event.preventDefault();

    const params = {
      TableName: 'topic-template',
      KeyConditionExpression: 'searchKey = :searchTerm',
      ExpressionAttributeValues: {
        ':searchTerm': searchTerm
      }
    };

    try {
      const { Items } = await dynamodb.query(params).promise();
      setResults(Items);
    } catch (error) {
      console.error(error);
      // handle error
    }
  }

  return (
    <>
      <Navbar />
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
        height: '500px',
        '@media screen and (max-width: 600px)': {
          height: '300px',
          backgroundSize: 'contain',
          backgroundPosition: 'top',
        },
      }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '500px',
            // bgcolor: 'rgba(192, 192, 192, 0.6)', //red, green, and blue values, and the fourth parameter (0.5) is the alpha value.
            flexDirection: 'column'
          }}
        >
          <TextField
            label="Search Term"
            variant="outlined"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Box sx={{ my: 2 }} />
          <StyledButton variant="contained" color="secondary" onClick={handleSearch}>
            Search
          </StyledButton>
        </Box>

        {results.length > 0 && (
          <List>
            {results.map((item) => (
              <ListItem key={item.id}>
                <ListItemText primary={item.name} secondary={item.description} />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </>
  );
}

export default EditTemplates;
