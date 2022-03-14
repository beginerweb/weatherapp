import {useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState('');
  const formSubmitHandler = (event) => {
    event.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response =>response.json()).then(
        data => {
          const kelvin = data.main.temp;
          const celcius = kelvin - 273.15;
          setResult("Temperature at "+value+"\n" +Math.round(celcius) + "Deg Celcius");
          setValue('');
        }
      ).catch(error => console.log(error));
    
  }

  const changeHandler = event => {
    setValue(event.target.value);
  }
  return (
    <div className="App">
      <div className='card'>
        <div className='card-body'>
        <h4 className='card-title'>weather app</h4>
        <form onSubmit={formSubmitHandler}>
          <input type= 'text'  name = 'city' placeholder = 'enter city name' value = {value} onChange={changeHandler}/><br/> <br />
          
          <input type= 'submit' value = 'Get Temperature' />
          
        </form>
        {result}
        </div>
      </div>
    </div>
  );
}

export default App;
