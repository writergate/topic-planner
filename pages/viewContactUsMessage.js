import { Button, Container, Grid, Paper,Typography } from "@mui/material";
import { useRouter } from "next/router";



export default function ViewContactUsMessage({}) {
    const router = useRouter()
    const name = router.query.itemName;
    const email = router.query.itemEmail;
    const message = router.query.itemMessage;

    const handleButtonClick = () => {
        window.open('mailto:'+email);
      };
  return (
    <Container maxWidth="lg" sx={{ marginTop: 10 }}>
      <Paper elevation={4}>
        <Grid Container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" color="primary" align="center">
              View Message
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary" align="left" padding={2}>
              Name : {name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary" align="left" marginLeft={2}>
              Email : {email}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary" align="left" padding={2}>
              Message : {message}
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="right">
            <Button variant="contained" onClick={handleButtonClick}>Reply</Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
