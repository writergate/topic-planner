import styles from '../styles/forgotPassword.module.css'
import Image from 'next/image'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';

const RestButton = styled(Button)({
    textTransform: 'none' ,
    marginTop: '22px',
    width: '500px',
    height: '55px',
    borderRadius: '20px',
    backgroundColor:'#060606',
    fontSize: '25px',
    fontFamily:  'sans-serif',
    
});


function forgotPassword(){
    return (
        <div className={styles.box}>
            <div className={styles.box1}>
                <div  className={styles.innerBox}>
                    <h1 className={styles.title}>Forget<br /> Your Password?</h1>
                    <TextField id="standard-basic" label="Email address" variant="standard"   sx={{ mt: 4, width: '60ch',fontFamily: 'FontAwesome'}} /><br/>
                    <RestButton variant="contained" href="/changePassword">Reset Password</RestButton>
                </div>
            </div>
            <div className={styles.box2}>
                <Image src="/../public/forgotPassword.jpg" width="800" height="708" alt='Forgot Password'/>
            </div>
       </div>
    )
}

export default forgotPassword