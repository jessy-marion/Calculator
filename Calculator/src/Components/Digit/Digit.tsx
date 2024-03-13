export default function Digit({...props}){
    return (
        <button onClick={() => props.pickDigit(props.digit)
        }>{props.digit}</button>
    )
}