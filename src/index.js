import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ColorBoxes from './ColorBoxes';

const App = () => {
  return (
    <div>
      <ColorBoxes />
    </div>
  );
};

//Takes the react component and shows it on the screen
ReactDOM.render(<App />,document.querySelector('#root'));
