export default function Operator({...props}) {
    return (
        <button onClick={() => {
            if (props.operator === "=") {
                props.endOperation()
            } else if (props.operator === "C") {
                props.clear()
            }
            props.pickOperator(props.operator)
        }
        }>{props.operator}</button>
    )
}