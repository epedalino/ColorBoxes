import React, {useRef,useState} from 'react';
import './ColorBoxes.css';

const ColorboxesUseRef = () => {
  const [inputText, setinputText] = useState("My Hex")
  const colorBoxElement1 = useRef(null);
  const colorBoxElement2 = useRef(null);
  const colorBoxElement3 = useRef(null);
  const colorBoxElement4 = useRef(null);
  var squareStyle
  var squareColor;
  var hex;

  const retriveColor1 = () => {
    if (colorBoxElement1.current !== null) {
      squareStyle = window.getComputedStyle(colorBoxElement1.current)
      squareColor = squareStyle.getPropertyValue('background-color')
      console.log(squareStyle.getPropertyValue('background-color'));
      document.body.style.backgroundColor = squareColor
      hex = rgbToHex(squareColor);
      setinputText(hex);
      console.log(hex);
    }
  }
  const retriveColor2 = () => {
    if (colorBoxElement2.current !== null) {
      squareStyle = window.getComputedStyle(colorBoxElement2.current)
      squareColor = squareStyle.getPropertyValue('background-color')
      console.log(squareStyle.getPropertyValue('background-color'));
      document.body.style.backgroundColor = squareColor
      hex = rgbToHex(squareColor);
      setinputText(hex);
      console.log(hex);
    }
  } 
  const retriveColor3 = () => {
    if (colorBoxElement3.current !== null) {
      squareStyle = window.getComputedStyle(colorBoxElement3.current)
      squareColor = squareStyle.getPropertyValue('background-color')
      console.log(squareStyle.getPropertyValue('background-color'));
      document.body.style.backgroundColor = squareColor
      hex = rgbToHex(squareColor);
      setinputText(hex);
      console.log(hex);
    }
  }
  const retriveColor4 = () => {
    if (colorBoxElement4.current !== null) {
      squareStyle = window.getComputedStyle(colorBoxElement4.current)
      squareColor = squareStyle.getPropertyValue('background-color')
      console.log(squareStyle.getPropertyValue('background-color'));
      document.body.style.backgroundColor = squareColor
      hex = rgbToHex(squareColor);
      setinputText(hex);
      console.log(hex);
    }
  }
  function rgbToHex(rgb) {
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);
  
    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
  
    if (r.length === 1)
      r = "0" + r;
    if (g.length === 1)
      g = "0" + g;
    if (b.length === 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }

  return (
    <div>
      <h1>Entropy - Colorboxes using useRef</h1>
      <label>My chosen color is: </label>
      <input type="text" readOnly id="chosenColor" value={ inputText }/>
      <br></br><br></br>
      <div className="container">
            <div className="boxitem box1" ref={colorBoxElement1} onClick={retriveColor1}></div>
            <div className="boxitem box2" ref={colorBoxElement2} onClick={retriveColor2}></div>
            <div className="boxitem box3" ref={colorBoxElement3} onClick={retriveColor3}></div>
            <div className="boxitem box4" ref={colorBoxElement4} onClick={retriveColor4}></div>
      </div>
    </div>
  )
}
export default ColorboxesUseRef;
