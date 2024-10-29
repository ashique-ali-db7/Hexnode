import styles from "./menu.module.css";
import closeIcon from "./../../Assets/images/close-icon.svg";
import useWindowSize from "../../Hooks/windowSize";

const Menu = ({ isMenuOpen, setMenuOpen }) => {
  const width = useWindowSize();
  const handleClose = () => {
    setMenuOpen(false);
  };
  return (
    <>
      {isMenuOpen && width <= 1280 && (
        <>
          <div className={styles.overlay} onClick={handleClose}>
            <nav className={styles.mobileMenu}>
              <div className={styles.topPart}>
                <img
                  src={closeIcon}
                  alt="close icon"
                  width={25}
                  onClick={handleClose}
                  aria-label="Close"
                />
              </div>
              <div className={styles.bottomPart}>
                <button className={styles.desktopButton}>
                  14 DAY FREE TRIAL
                </button>
                <button className={styles.desktopLoginButton}>Login</button>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
