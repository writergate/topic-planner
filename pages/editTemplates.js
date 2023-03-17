import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import * as React from 'react';

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';


const StyledButton = styled(Button)({
  textTransform: 'none', // set textTransform to none to prevent auto-uppercase
});
function editTemplates() {
  return (
    <><Navbar />
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

        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            Enter the Topic Template
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={<InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>} />
        </FormControl>


        <Box sx={{ my: 2 }} />
        <StyledButton variant="contained" color="secondary">
          Search
        </StyledButton>
      </Box>



    </Box></>
  );

}


export default editTemplates



