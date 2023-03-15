import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
function ArticleTypes() {
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
        <h1>Article type 1</h1>
        <h1>Article type 2</h1>
        <h1>Article type 3</h1>
        <h1>Article type 4</h1>
        <h1>Article type 5</h1>


      </Box></>


  );


}
export default ArticleTypes;
