import Head from "next/head"
import LoginLayout from "../components/loginlayout"
import styles from "../styles/register.module.css";
import Link from "next/link";

export default function Register(){
    return(
        <LoginLayout>

            <Head>
                <title>Create an account</title>
            </Head>

            <section className={styles.section}>
        <div className={styles.title}>
          <h1 className={styles.title1}>Create an account</h1>
        
        </div>
        {/*form*/}
        <form className={styles.form}>
        <div className={styles.input1}>
            <input
              className={styles.username}
              type="text"
              name="Username"
              placeholder="Username"
    
            />
            
          </div>
          <div className={styles.input2}>
            <input
              className={styles.email}
              type="email"
              name="email"
              placeholder="Email"
    
            />
            
          </div>

          <div className={styles.input3}>
            <input
              className={styles.password}
              type="Password"
              name="Password"
              placeholder="Password"
            />
            </div>
         <div className={styles.input3}>
            <input
              className={styles.password}
              type="Password"
              name="Password"
              placeholder="Confirm Password"
            />
            
          </div>
          {/*login buttons */}
          <div className={styles.raw2}>
            <div className="inputbutton">
              <button type="submit" className={styles.submit}>
                Create account  
              </button>
            </div>
            <div className={styles.or}>OR</div>
            <div className={styles.inputbutton2}>
              <button type="submit" className={styles.submit2}>
                Sign up with Google
              </button>
            </div>
          </div>
        </form>

        {/*bottom*/}
        <p className={styles.footer}>
          Already have an account?
          <Link href={"/login"} className={styles.last}>
            Log in
          </Link>
        </p>
      </section>
        </LoginLayout>
    )
}