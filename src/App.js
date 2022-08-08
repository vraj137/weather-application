import React, {useState} from 'react';
import axios from 'axios'



function App() {

  const[data,setData] = useState({})
  const  [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=2a84ac3c7ecce9d3e64f79219a03e285`
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  return (

    <div className="App">
      <div className='search'>
        <input 
        value = {location}
        onChange = {event => setLocation(event.target.value)}
        onKeyPress = {searchLocation}
        placeholder = "Enter Desired Location"
        type= "text"/>
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
            {data.sys ? <p>{data.sys.country}</p> : null}
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp} °F</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p>: null}
          </div>
        </div>


        {data.name != undefined &&
          <div className='bottom'>
          <div className='feels'>
          <p>Feels Like:</p>
            {data.main ? <p>{data.main.feels_like} °F</p> : null}
            
          </div>
          <div className='humidity'>
          <p>Humidity:</p>
            {data.main ? <p>{data.main.humidity}%</p> : null}
          
            
          </div>
          <div className='wind'>
          <p>Wind Speeds:</p>
            {data.wind ? <p>{data.wind.speed} MPH</p> : null}
            
          </div>
        </div>
        
        
        }
      </div>
    </div>
  );
}

export default App;
