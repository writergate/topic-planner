import styles from '../styles/article.module.css'
import Image from 'next/image'
import React from 'react'
import Head from "next/Head"
function Article(){
return(

        <div>
            <Head>
                <title>Article</title>
                <meta name="description" content="created by team"  />

                <link rel="icon" href="/favicon.ico"/> 
            </Head>
           
            <div className={styles.box1}>
                <div className={styles.img1}>
                    <Image src="/../public/user.png" width="45" height="45" alt='user'/>
                </div>
            </div>
            <div className={styles.box2}>
                <div className={styles.img2}>
                    <Image src="/../public/user.png" width="60" height="60" alt='user'/>
                </div>
                <div className={styles.innerBox}>
                    <h1>Article Writer's Name</h1>
                    <div className={styles.dateTimeFollow}>
                        <div className={styles.time}>Published Time</div>
                        <div className={styles.date}>Published Date</div>
                        <div className={styles.follow}>Follow</div>
                    </div>
                   
                </div>
            </div>
            <div className={styles.box3}>
                <h1 className={styles.title}>Article Title</h1>
                <div className={styles.articleBody}></div>
            </div>
            <div className={styles.box4}>
                <div className={styles.like}><Image src="/../public/hands-clapping.png" width="50" height="40" alt='like'/> <p>100</p></div>
                <div className={styles.comment}><Image src="/../public/comment.png" width="35" height="35" alt='comment'/> <p>10</p></div>
                <div className={styles.download}><Image src="/../public/download.png" width="35" height="35" alt='download'/></div>
                <div className={styles.share}><Image src="/../public/share.png" width="35" height="35" alt='share'/></div>
            </div>
            <div className={styles.box5}>
                <div className={styles.img3}>
                    <Image src="/../public/user.png" width="45" height="45" alt='user'/>
                    <div  ><input type="text" className={styles.text}/></div>
                </div>
            </div>
        </div>
    );
}

export default Article;