import styles from './mainContent.module.css';
import desktopImage from './../../Assets/images/hexnode-kiosk.webp';
const MainContent = () => {
    return <>

        <div className={styles.firstContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.textContainer}>
                    <h2>Turn your devices into kiosks in a few minutes with Hexnode UEM</h2>
                    <div className={styles.fieldContainer}>
                        <input type='text' placeholder='Your Work Email' />
                    <button>GET STARTED NOW!</button></div>
                </div>

                <div className={styles.imageContainer}><img src={desktopImage} /></div>


            </div>
        </div>
    </>
}
export default MainContent