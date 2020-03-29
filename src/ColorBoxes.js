import React, {useState} from 'react';
import './ColorBoxes.css';

const ColorBoxes = () => {
  //define my variables & functions
  const [inputText, setinputText] = useState("My Hex")
  var style;
  var squareColor;
  var hex;

  function retrieveColor(e) {
    style = window.getComputedStyle(e.target)
    style.getPropertyValue('background-color');
    squareColor = style.backgroundColor;
    document.body.style.backgroundColor = squareColor
    //squareColor = background color of square
    hex = rgbToHex(squareColor);
    setinputText(hex);
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
      <h1>Entropy - the natural course for colors!</h1>
      <label>My chosen color is: </label>
      <input type="text" readOnly id="chosenColor" value={ inputText }/>
      <br></br><br></br>
      <div className="container">
            <div className="boxitem box1" onClick={(e) => retrieveColor(e)}>1</div>
            <div className="boxitem box2" onClick={(e) => retrieveColor(e)}>2</div>
            <div className="boxitem box3" onClick={(e) => retrieveColor(e)}>3</div>
            <div className="boxitem box4" onClick={(e) => retrieveColor(e)}>4</div>
      </div>
    </div>
  )
}
export default ColorBoxes;
