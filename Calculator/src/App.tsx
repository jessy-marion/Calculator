import './App.css'
import { useState } from 'react'
import Digit from './Components/Digit/Digit'
import Operator from './Components/Operator/Operator'

function App() {

  let test : string = "test"

  const [currentValue, setCurrentValue] = useState<string>("0")
  const [operation, setOperation] = useState<string>("")
  const [previousValue, setPreviousValue] = useState<string>("0")
  const [overwrite, setOverwrite] = useState<boolean>(true)
  
  const operator: string[] = ['+', '-', '*', '/', '=', 'C'];
  const digit: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

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
      case "*":
        result = previous * current
        break
      case "/":
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
    <>
      <h1>{currentValue}</h1>
      <button onClick={() =>setDigit("0")}>0</button>
      <button onClick={() =>setDigit("1")}>1</button>
      <button onClick={() =>setDigit("2")}>2</button>
      <button onClick={() =>setDigit("3")}>3</button>
      <button onClick={() =>setDigit("4")}>4</button>
      <button onClick={() =>setDigit("5")}>5</button>
      <button onClick={() =>setDigit("6")}>6</button>
      <button onClick={() =>setDigit("7")}>7</button>
      <button onClick={() =>setDigit("8")}>8</button>
      <button onClick={() =>setDigit("9")}>9</button>
      <button onClick={() =>setDigit(".")}>.</button>
      <br />
      <br />
      <button onClick={() =>selectOperation("+")}>+</button>
      <button onClick={() =>selectOperation("-")}>-</button>
      <button onClick={() =>selectOperation("*")}>*</button>
      <button onClick={() =>selectOperation("/")}>/</button>
      <button onClick={() =>endOperation()}>=</button>
      <button onClick={() =>clear()}>C</button>
      <br />
      <br />
      { digit.map((digit,index) => {
        return <Digit  key={index} digit={digit} pickDigit={setDigit}/>
      }) }
      <br />
      <br />
      { operator.map((op,index) => {
        return <Operator key={index} operator={op} pickOperator={selectOperation} endOperation={endOperation} clear={clear} />
      } )}
      <br />
      <br />
    </>
  )
}

export default App
