import TrendingArticleBox from "./Trending/trendingArticleBox";
import Styles from '../styles/homePage.module.css'
import React from 'react';
import { Button } from "@mui/material";


function HomePage(){

    return(
        <div className={Styles.outer}>
            <div className={Styles.navBar} >
                <div style={{ flexGrow: 1 }} ></div>
                <Button href="#text-buttons" sx={{marginRight:4}}>Contact Us</Button>
                <Button href="#text-buttons" sx={{marginRight:4}}>Sign In</Button>
                <Button sx={{borderRadius:6,marginRight:14}} variant="contained">Get Started</Button>
            </div>
            <div className={Styles.introBox}></div>
            <div className={Styles.trends}>< TrendingArticleBox /> </div>
        </div>
    );

}

export default HomePage;