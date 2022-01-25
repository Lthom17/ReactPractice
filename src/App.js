import {useState} from 'react';
import './App.css';

function App() {

const[name, setName] = useState('Mario');


  const handleClick = () => {
    setName("Luigi");
    console.log(name);
  }

  return (
    <div className="App">
    <h1>My name is {name}</h1>
    <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default App;
