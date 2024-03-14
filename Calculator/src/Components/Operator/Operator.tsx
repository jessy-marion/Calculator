import "../../App.css"
import styles from './Operator.module.css'


export default function Operator({...props}) {

let getOperator: string = props.operator;
let transcribeOperator: string = "";


    switch(getOperator) {
        case "+":
          transcribeOperator = "Addition"
          break
        case "-":
            transcribeOperator = "Soustraction"
          break
        case "*":
            transcribeOperator = "Multiplication"
          break
        case "/":
            transcribeOperator = "Division"
          break
          case "=":
            transcribeOperator = "Egal"
          break
            case "C":
                transcribeOperator = "Clear"
                break
        default:
          return
      }



    return (
        <button className={`operator operator${transcribeOperator}grid ${styles.operatorProperties} `} onClick={() => {
            if (props.operator === "=") {
                props.endOperation()
            } else if (props.operator === "C") {
                props.clear()
                console.log("clear");
                
            }
             else {
                props.pickOperator(props.operator)
                console.log("test");
                
            }
        }
        }><div className={styles.key}>{props.operator}</div> </button>
    )
}