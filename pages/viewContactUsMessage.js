import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Snackbar,
  IconButton,
  CloseIcon,
} from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";

export default function ViewContactUsMessage({}) {
  const router = useRouter();
  const name = router.query.itemName;
  const email = router.query.itemEmail;
  const message = router.query.itemMessage;

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const handleButtonClick = () => {
    setOpen(true);
    //window.open("mailto:" + email);
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
            <Typography
              variant="h5"
              color="primary"
              align="left"
              marginLeft={2}
            >
              Email : {email}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary" align="left" padding={2}>
              Message : {message}
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="right">
            <Button variant="contained" onClick={handleButtonClick}>
              Reply
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />
      </div>
    </Container>
    
  );
}
