import React, {useState} from 'react';
import './ColorBoxes.css';

const ColorBoxes = () => {
  //define my variables & functions
  return (
  <div className="container">
        {/* <div className="boxitem box1" onClick={() => setHappyDog("puppy")}></div> */}
        <div className="boxitem box1">1</div>
        <div className="boxitem box2">2</div>
        <div className="boxitem box3">3</div>
        <div className="boxitem box4">4</div>
  </div>
  )
}

export default ColorBoxes;
