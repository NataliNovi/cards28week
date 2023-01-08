import Card from './components/Card';
import './App.css';
import {useState} from 'react'

function App() {

  const[isActive, setIsActive] = useState(0);

  return (
    <div className="App">
     <Card price = "300" color="1" isActive={isActive==="1"} onButtonClick={setIsActive}/>
     <Card price = "450" color="2" isActive={isActive==="2"} onButtonClick={setIsActive}/>
     <Card price = "550" color="3" isActive={isActive==="3"} onButtonClick={setIsActive}/>
     <Card price = "1000" color="4" isActive={isActive==="4"} onButtonClick={setIsActive}/>
    </div>
  );
}

export default App;
