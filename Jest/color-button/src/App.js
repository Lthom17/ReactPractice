import {useState} from 'react'
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const [buttonText, setButtonText] = useState('Change to blue')
  const [buttonDisabled, setButtonDisabled] = useState(false)

  function changeButton() {
    (buttonColor === 'red' ? setButtonColor('blue') : setButtonColor('red')); 
    (buttonText === 'Change to blue' ? setButtonText('Change to red') : setButtonText('Change to blue'));
  };

  function handleButton() {
    (buttonDisabled ? setButtonDisabled(false) : setButtonDisabled(true))
  }

  return (
    <div className="App">
      <button id="my-button" style={{ backgroundColor: buttonDisabled ? 'gray' : buttonColor }} onClick={changeButton} disabled={buttonDisabled}>{buttonText}</button>
      <input type="checkbox" id="disable-button-checkbox" defaultChecked={buttonDisabled} onChange={handleButton}></input>
      <label htmlFor="disable-button-checkbox">Disable Button</label>
    </div>
  );
}

export default App;
