import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ColorBoxes from './ColorBoxes';
import ColorboxesUseRef from './ColorboxesUseRef';

const App = () => {
  return (
    <div>
      <ColorBoxes />
      <ColorboxesUseRef />
    </div>
  );
};

//Takes the react component and shows it on the screen
ReactDOM.render(<App />,document.querySelector('#root'));
