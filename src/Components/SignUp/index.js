import React, { useState } from "react";
import styles from "./signup.module.css";
import Arrow from "./../../Assets/images/redRightArrow.svg";
const Signup = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const startHandler = () => {
    if (!email) {
      setError("Please enter your work email!");
    } else if (!isValidEmail(email)) {
      setError("Please enter a valid email address!");
    } else {
      setError("");
    }
    setTimeout(() => setError(""), 1500);
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>Sign up and try Hexnode free for 14 days!</h1>
        <div className={styles.fieldContainer}>
          <input type="text" placeholder="Your Work Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button  onClick={startHandler}>GET STARTED</button>
        </div>
        <div className={styles.errorMessageContainer}>
          <span className={`${styles.errorMessage} ${error ? styles.showError : ""}`}>
            {error}
          </span>
        </div>
        <p className={styles.paragraph}>
          No credit cards required. <a>Request a demo  <img
                      src={Arrow}
                      alt="img"
                      style={{
                        width: "7px",
                        height: "10px",
                      
                      }}
                    /></a>
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
