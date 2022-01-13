import React, {useState, useEffect} from "react";
import Keyboard from "./Keyboard";
import './Calculator.scss';

const Calculator = () => {

  useEffect(() => {
    document.title = 'Calculator';
  })


  const [mathExpression, setMathExpression] = useState('');
  const [mathResult, setMathResult] = useState(0);

  const clearCharacter = () => {
    let currentValue = mathExpression;
    setMathExpression(currentValue.slice(0, -1));
  }

  const clearScreen = () => {
    setMathExpression('');
    setMathResult(0)
  }

  const calculateExpression = () => {
    let result = eval(mathExpression);
    setMathResult(result);
  }

  const handleClick = e => {
    let buttonValue = e.target.value;

    if(buttonValue === 'C')  return clearCharacter()
    else if(buttonValue === 'CE') return clearScreen()
    else if(buttonValue === '=')  return calculateExpression()

    setMathExpression(mathExpression + buttonValue)
  }

  return (
    <div className="Calculator">
      <div className="Screen">
        <div className="ScreenDisplay">{mathExpression}</div>
        <div className="ScreenDisplay">{mathResult}</div>
      </div>
      <Keyboard handleOnClick={handleClick}/>
    </div>
  );
}

export default Calculator;
