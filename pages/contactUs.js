import { Paper, Grid, Typography, Button, TextField} from '@mui/material';
import Container from '@mui/material/Container'
import { useState } from 'react';

export default function ContactUs() {
  const [name,setName] = useState('')
  const [nameError,setNameError] = useState(false)

  const validateForm = (e) => {
    e.preventDefault()
    if(name == ''){
      setNameError(true)
    }
    console.log(name)
  }
  return (
<Container maxWidth="xl">
      <Paper elevation={4} >
        <Grid container spacing={2}>
          <Grid item xs = {12}>
            <Typography variant="h4" color="primary" align='center'>Contact us</Typography>
          </Grid>
          <Grid item xs ={6} align="center">
          <img src='https://i.ibb.co/XjFv4h7/5124556.jpg' alt='Contact us' height={500}/><br/>
          <Typography variant="subtitle1" color="black" align='center'>Image by <a href="https://www.freepik.com/free-vector/flat-design-illustration-customer-support_12982910.htm#query=contact%20us&position=0&from_view=search&track=sph">Freepik</a></Typography>
          </Grid>
          <Grid item xs ={6}>
            <form onSubmit={validateForm()}>
            <TextField
              onChange={(e)=>setName(e.target.value)}
              id="name"
              label="Name"
              type="text"
              variant="outlined"
              margin='normal'
              required='true'
              sx={{width:'70%'}}
              error={nameError}
            />
            <br/>
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              required='true'
              margin='normal'
              sx={{width:'70%'}}
            />
            <br/>
            <TextField
              id="message"
              label="Contact message"
              variant="outlined"
              required='true'
              margin='normal'
              multiline='true'
              rows='10'
              sx={{width:'70%'}}
            />
            <br/>
            <Button variant="contained" color="primary" type='submit' sx={{width:'40%',marginBottom:2, padding:1}} onClick={validateForm()}>
             Submit 
            </Button>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Container>  
  );
}
