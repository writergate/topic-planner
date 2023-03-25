import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';

function createTemplates(){
    return (
      <><Navbar />
      <Box sx={{
        padding: '20px',
        marginTop: '100px',
        marginLeft: '260px',
        marginRight: '260px',
        backgroundColor: 'black',
        color: 'white',
      }}>
        <h1>Create templates</h1>


      </Box></>
    
    
      );
    }
 export default createTemplates;