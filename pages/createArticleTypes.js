import Navbar from '../components/Navbar';

import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TopTab  from '../components/TopTab';
import { Paper, Grid, Typography, Button, TextField, colors } from "@mui/material";
import Container from "@mui/material/Container";
function createArticleTypes() {

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

<Container maxWidth="lg" >
      <Paper elevation={4}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" color="primary" align="center">
              Create 
            </Typography>
          </Grid>
          <Grid item xs={6} align="center">
           Enter
           
            <br />
            <Typography variant="subtitle1" color="black" align="center">
            hi
            </Typography>
          </Grid>
          <Grid item xs={6}>
          
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ width: "40%", marginBottom: 2, padding: 1 }}
              >
                Submit
              </Button>
           
          </Grid>
        </Grid>
      </Paper>
    </Container>


    </Box>
  </div>
  );


}
export default createArticleTypes;
