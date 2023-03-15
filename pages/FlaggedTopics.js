import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';

function FlaggedTopics() {
  return (

    <div>
    <Navbar/>
    <Box sx={{
      padding: '20px',
      marginTop: '100px',
      marginLeft: '260px',
      marginRight: '260px',
      backgroundColor: 'black',
      color: 'white',
    }}>
      <h1 >Flagged Topic 1</h1>
      <h1 >Flagged Topic 2</h1>
      <h1 >Flagged Topic 3</h1>
      <h1 >Flagged Topic 4</h1>
      <h1 >Flagged Topic 5</h1>
      <h1 >Flagged Topics</h1>
      <h1 >Flagged Topics</h1>
      <h1 >Flagged Topics</h1>

    </Box>

    </div>
  );
}

export default FlaggedTopics;
