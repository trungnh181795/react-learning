import React from 'react';

const Keyboard = props => {

  return(
    <div className="Keyboard">
      <div className="Row">
        <button className="KeyboardButton"  onClick={(e) => props.handleOnClick(e)} value="C">C</button>
        <button className="KeyboardButton"  onClick={(e) => props.handleOnClick(e)} value="CE">CE</button>
        <button className="KeyboardButton"  onClick={(e) => props.handleOnClick(e)} value="+">+</button>
        <button className="KeyboardButton"  onClick={(e) => props.handleOnClick(e)} value="-">-</button>
      </div>
      <div className="Row">
        <button className="KeyboardButton"  onClick={(e) => props.handleOnClick(e)} value="1">1</button>
        <button className="KeyboardButton"  onClick={(e) => props.handleOnClick(e)} value="2">2</button>
        <button className="KeyboardButton"  onClick={(e) => props.handleOnClick(e)} value="3">3</button>
        <button className="KeyboardButton"  onClick={(e) => props.handleOnClick(e)} value="*">*</button>
      </div>
      <div className="Row">
        <button className="KeyboardButton"  onClick={(e) => props.handleOnClick(e)} value="4">4</button>
        <button className="KeyboardButton"  onClick={(e) => props.handleOnClick(e)} value="5">5</button>
        <button className="KeyboardButton"  onClick={(e) => props.handleOnClick(e)} value="6">6</button>
        <button className="KeyboardButton"  onClick={(e) => props.handleOnClick(e)} value="/">/</button>
      </div>
      <div className="Row">
        <button className="KeyboardButton"  onClick={(e) => props.handleOnClick(e)} value="7">7</button>
        <button className="KeyboardButton"  onClick={(e) => props.handleOnClick(e)} value="8">8</button>
        <button className="KeyboardButton"  onClick={(e) => props.handleOnClick(e)} value="9">9</button>
        <button className="KeyboardButton"  onClick={(e) => props.handleOnClick(e)} value="=">=</button>
      </div>
    </div>
    )

}

export default Keyboard