import styles from '@/styles/loginlayout.module.css'

export default function LoginLayout({children}){
    return(
        <div className={styles.screen}>
            <div className={styles.column}>
                    <div className={styles.imgstyle}>
                        <div className={styles.img}></div>
                        
                    </div>
                    
                <div className={styles.rightcol}>
                       <div className={styles.blurcol}>
                       <div className={styles.whitebox}>
                       
                       {children}

                       </div>
                       </div>
                    <div className={styles.padding}>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
