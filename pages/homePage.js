import TrendingArticleBox from "./Trending/trendingArticleBox";
import Styles from '../styles/homePage.module.css'
 

function HomePage(){

    return(
        <div className={Styles.outer}>
            <div className={Styles.navBar}></div>
            <div className={Styles.introBox}></div>
            <div className={Styles.trends}>< TrendingArticleBox /> </div>
        </div>
    );

}

export default HomePage;