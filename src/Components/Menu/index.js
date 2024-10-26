import styles from './menu.module.css'; 
import closeIcon from './../../Assets/images/close-icon.svg'
const Menu = ({isMenuOpen,setMenuOpen})=>{
    const handleClose=()=>{
        setMenuOpen(false)
    }
return<>
 {isMenuOpen && (
            <nav className={styles.mobileMenu}>
<div className={styles.topPart}>
    <img src={closeIcon} alt='close icon' width={25}    onClick={handleClose}/>
</div>
<div className={styles.bottomPart}>
<button className={styles.desktopButton}>14 DAY FREE TRIAL</button>
<button className={styles.desktopLoginButton}>Login</button>
</div>
               
            </nav>
        )}
</>
}

export default Menu