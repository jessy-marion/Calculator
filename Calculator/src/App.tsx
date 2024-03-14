import './App.css'
import { useState } from 'react'
import Digit from './Components/Digit/Digit'
import Operator from './Components/Operator/Operator'
import Screen from './Components/Screen/Screen'

function App() {

  let test : string = "test"

  const [currentValue, setCurrentValue] = useState<string>("0")
  const [operation, setOperation] = useState<string>("")
  const [previousValue, setPreviousValue] = useState<string>("0")
  const [overwrite, setOverwrite] = useState<boolean>(true)
  
  const operator: string[] = ['+', '-', 'x', '÷', '=', 'C'];
  const digit: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

  function clear() {
    setPreviousValue("")
    setOperation("")
    setCurrentValue("0")
    setOverwrite(true)
  }

  function del() {
    setCurrentValue("0")
    setOverwrite(true)
  }

  function calculate() {
    
    if(!previousValue || !operation) return currentValue
    const current = parseFloat(currentValue)
    const previous = parseFloat(previousValue)

    let result;

    switch(operation) {
      case "+":
        result = previous + current
        break
      case "-":
        result = previous - current
        break
      case "x":
        result = previous * current
        break
      case "÷":
        result = previous / current
        break
      default:
        return
    }
    return result
  }

  function endOperation() {
    const val = calculate()
    setCurrentValue(`${val}`)
    setPreviousValue("")
    setOperation("")
    setOverwrite(true)
  }


  function selectOperation(operation: string) {
    setPreviousValue(currentValue)
    setOperation(operation)
    setOverwrite(true)
  }

  function setDigit(digit: string) {
    //if(currentValue[0] === "0" && digit === "0") return
    if(currentValue.includes(".") && digit === ".") return
    if (overwrite && digit !== ".") {
        setCurrentValue(digit)
    } else {
        setCurrentValue(currentValue === "0" ? digit : currentValue + digit)
    }
    console.log(digit)
    setOverwrite(false)
  }
  
  return (
    <div className="calculator">

      <div className='stripesContainer'>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className="name">Calculator</div>
      </div>

      <Screen currentValue={currentValue} />
      <br />
      <div className='buttonsArea' > {digit.map((digit,index) => {
        return <Digit number={index + 1}  key={index} digit={digit} pickDigit={setDigit}/>
      }) }
      { operator.map((op,index) => {
        return <Operator  key={index} operator={op} pickOperator={selectOperation} endOperation={endOperation} clear={clear} />
      } )}
        <button className='function'><div className='key'>M+</div></button>
        <button className='function' ><div className='key'>M-</div></button>
        <button className='function'><div className='key'>MR</div></button>
      </div>
      <br />
      <br />
    </div>
  )
}

export default App
