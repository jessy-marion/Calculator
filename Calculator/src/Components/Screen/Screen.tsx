import styles from './Screen.module.css';

export default function Screen({...props}) {
    return(
        <div className={styles.screen}>
            <h1>{props.currentValue}</h1>
        </div>
        
    )
}