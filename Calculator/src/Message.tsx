import styles from './Message.module.css'

export default function Message() {
    return(
        <div className={styles.messageContainer}>
            <p className={styles.message}>Les fonctionnalités M+, M- et MR <br /> ne sont pas encore  implantées !</p>
        </div>
        
    )
}