/*
import React from "react";
import {Grid, Typography} from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';

function ArticleTypes(){
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  return(
    <Paper
      sx={{
        p: 2,
        margin: 'auto', // center the paper
        maxWidth: '80%', // adjust the width to make it larger
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/templates.png"/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Create
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                Edit
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ArticleTypes;

*/
/*
import { Container, Grid, Button } from '@mui/material';
import Image from 'next/image';
import Navbar from '../components/Navbar';

 function ArticleTypes() {
  return (
    <div>
      <Navbar/>
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={4}>
        <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '100%' }}>
          <Image src="/templates.png" alt="My Image" layout="fill" objectFit="contain" />
        </div>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <Button variant="contained" color="primary">
             Create
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              Edit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
  </div>
);
}
export default ArticleTypes;
*/
import next from 'next';
import Navbar from '../components/Navbar';
import TopTab from '../components/TopTab';
import image from 'next/image';

function ArticleTypes(){
  return(

    <div>
      <Navbar/>
      <TopTab/>
      

    </div>
  );
}
export  default ArticleTypes;