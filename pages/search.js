import React from 'react';
import style from "../styles/search.module.css";
import Head from "next/Head"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';


const SearchTextField = styled(TextField)({
        borderRadius: '20px',
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#888',
        },
        '&:hover fieldset': {
          borderColor: '#100',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#000',
        },
      },
      
});

function Search(){
    return(
        <div className={style.outer}>
            <Head>
                <title>Search</title>
                <meta name="description" content="created by team"  />

                <link rel="icon" href="/favicon.ico"/> 
            </Head>
            <div className={style.navbar}>
                
            </div>
            <div className={style.searchBox}>
                <Box sx={{ width: 1400, maxWidth: '100%'}}>
                    <SearchTextField fullWidth  placeholder="Search Article" id="fullWidth" type="search" 
                    InputProps={{style: {borderRadius: '20px'}}} />
                </Box>
            </div>
            <div className={style.articleBoxOuter}>
                
            </div>
        </div>
    );
}

export default Search;