import React, {useRef,useState} from 'react';
import {
  setBgColor,
  setBgColorFn,
} from './functions';
import './ColorBoxes.css';

const ColorboxesUseRef = () => {
  const [inputText, setinputText] = useState("My Hex")
  const colorBoxElement1 = useRef(null);
  const colorBoxElement2 = useRef(null);
  const colorBoxElement3 = useRef(null);
  const colorBoxElement4 = useRef(null);

  return (
    <div>
      <h1>Entropy - Colorboxes using useRef</h1>
      <label>My chosen color is: </label>
      <input type="text" readOnly id="chosenColor" value={ inputText }/>
      <br></br><br></br>
      <div className="container">
            <div
              className="boxitem box1"
              ref={colorBoxElement1}
              onClick={() => setBgColor(colorBoxElement1, setinputText)}
            />
            <div
              className="boxitem box2"
              ref={colorBoxElement2}
              onClick={setBgColorFn(colorBoxElement2, setinputText)}
            />
            <div 
              className="boxitem box3"
              ref={colorBoxElement3}
              onClick={setBgColorFn(colorBoxElement3, setinputText)}
            />
            <div
              className="boxitem box4"
              ref={colorBoxElement4}
              onClick={setBgColorFn(colorBoxElement4, setinputText)}
            />
      </div>
    </div>
  )
}
export default ColorboxesUseRef;
