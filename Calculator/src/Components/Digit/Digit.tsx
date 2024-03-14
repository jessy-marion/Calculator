import "../../App.css"
import styles from './Digit.module.css'

export default function Digit({...props}){
    return (
        <button className={`digit digit${props.number + "grid"} ${styles.digitProperties}`}  onClick={() => props.pickDigit(props.digit)
        }>{props.digit}</button>
    )
}