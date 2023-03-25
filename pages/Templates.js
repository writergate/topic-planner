
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import NavBar from '../components/Navbar';

const StyledButton = styled(Button)({
    textTransform: 'none', // set textTransform to none to prevent auto-uppercase
});

function Templates() {
    const router = useRouter();
    const handleCreateButtonClick = () => {
        console.log('Button 1 clicked');
        router.push('/createTemplates');
    };

    const handleEditButtonClick = () => {
        router.push('/editTemplates');
    };

    return (
        <div>
            <NavBar />
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
                        flexDirection: 'column'
                    }}
                >
                    <StyledButton variant="contained"  color="secondary" onClick={handleCreateButtonClick} sx={{ width: '250px',fontWeight:'600', ':hover': { color: '#030d28', backgroundColor: 'white' } }} >
                        Create New Topic Templates
                    </StyledButton>
                    <Box sx={{ my: 2 }} />
                    <StyledButton variant="contained" color="secondary" onClick={handleEditButtonClick} sx={{ width: '250px',fontWeight:'600' , ':hover': { color: '#030d28', backgroundColor: 'white'} }} >
                        Edit Topic Templates
                    </StyledButton>
                </Box>
            </Box>
        </div>
    )

}

export default Templates

