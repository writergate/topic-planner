import styles from "../styles/forgotPassword.module.css";
import Image from "next/image";

function forgotPassword() {
  return (
    <div className={styles.box}>
      <div className={styles.box1}>
        <div className={styles.innerBox}>
          <h1 className={styles.title}>
            Forgot
            <br /> Your Password?
          </h1>
          <input
            type="text"
            id="email"
            placeholder=" &nbsp; &#xf007; &nbsp; Email address"
            className={styles.emailText}
          />
          <br />
          <button className={styles.button}>Reset Password</button>
        </div>
      </div>
      <div className={styles.box2}>
        <Image src="/../public/forgotPassword.jpg" width="800" height="708" />
      </div>
    </div>
  );
}

export default forgotPassword;
