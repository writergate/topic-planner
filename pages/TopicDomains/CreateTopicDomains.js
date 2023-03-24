import Navbar from '../../components/Navbar';

import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TopTabDomains from '../../components/TopTab';
import { Paper, Grid, Typography, Button, TextField, colors } from "@mui/material";
import Container from "@mui/material/Container";
function CreateTopicDomains() {

  return (
    <div >

      <Navbar />

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
        <Box
          component="form"
          sx={{
            backgroundColor: 'white',
            display: 'flex',
            
            padding:'40px',
            flexDirection: 'column',
            alignItems: 'center',
            '& .MuiTextField-root': {
              m: 1,
              width: '25ch',
            },
          }}
          noValidate
          autoComplete="off"
        >
          <div  >
            <span style={{ color: 'blue' }}>Enter Topic Domain</span>
            <span>Some text here</span>
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Your Topic Domain"
            
              //helperText='name'
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginTop:'10px',padding: 1 }}
            >
              Save
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );


}
export default CreateTopicDomains;
