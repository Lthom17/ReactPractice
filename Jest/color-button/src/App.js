import {useState} from 'react'
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');

}

function App() {

  const [buttonColor, setButtonColor] = useState('MediumVioletRed')
  const [buttonText, setButtonText] = useState('Change to Midnight Blue')
  const [buttonDisabled, setButtonDisabled] = useState(false)

  function changeButton() {
    const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'; 
    setButtonText('Change to ' + replaceCamelWithSpaces(buttonColor));
    setButtonColor(newButtonColor)
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
