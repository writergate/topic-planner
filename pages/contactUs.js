import { Paper, Grid, Typography, Button, TextField } from '@mui/material';
import Container from '@mui/material/Container'

export default function ContactUs() {
  return (

    <Container>
      <Paper elevation={4}>
        <Grid container spacing={2}>
          <Grid item xs = {12}>
            <Typography variant="h4" color="primary" align='center'>Contact us</Typography>
          </Grid>
          <Grid item xs ={6} align="center">
          <img src='https://i.ibb.co/XjFv4h7/5124556.jpg' alt='Contact us' height={500}/><br/>
          <Typography variant="subtitle1" color="black" align='center'>Image by <a href="https://www.freepik.com/free-vector/flat-design-illustration-customer-support_12982910.htm#query=contact%20us&position=0&from_view=search&track=sph">Freepik</a></Typography>
          </Grid>
          <Grid item xs ={6}>
            <TextField
              id="name"
              label="Name"
              type="text"
              variant="outlined"
              margin='normal'
              required='true'
              
            />
            <br/>
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              margin='normal'
            />
            <br/>
            <TextField
              id="message"
              label="Contact message"
              variant="outlined"
              margin='normal'
              multiline='true'
              rows='10'
            />
            <br/>
            <Button variant="contained" color="primary">
             Submit 
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
