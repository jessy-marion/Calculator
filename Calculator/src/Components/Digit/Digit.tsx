import "../../App.css"
import styles from './Digit.module.css'

export default function Digit({...props}){
    return (
        <button className={`digit digit${props.number + "grid"} ${styles.digitProperties}`}  onClick={() => props.pickDigit(props.digit)
        }><div className={styles.key}>{props.digit}</div></button>
    )
}