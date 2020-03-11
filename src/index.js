import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ColorBoxes from './ColorBoxes';

const App = () => {
  return (
    <div>
      <h1>Entropy - the natural course for colors!</h1>
	    <label>My chosen color is: </label>
      <input type="text" id="chosenColor" value=""/>
      <ColorBoxes />
    </div>
  );
};

//Takes the react component and shows it on the screen
ReactDOM.render(<App />,document.querySelector('#root'));
