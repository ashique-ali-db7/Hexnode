import React from "react";
import styles from "./signup.module.css";
const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>Sign up and try Hexnode free for 14 days!</h1>
        <div className={styles.fieldContainer}>
          <input type="text" placeholder="Your Work Email" />
          <button>GET STARTED</button>
        </div>
        <p className={styles.paragraph}>
          No credit cards required. <a href="#">Request a demo</a>
        </p>
      </div>
      <footer className={styles.footer}>
        <div>
          <ul className={styles.footerList}>
            <li>Terms of use</li>-<li>Privacy</li>-<li>Cookies</li>
          </ul>
          <p>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Signup;
