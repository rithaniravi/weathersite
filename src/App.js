import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [place,setPlace]=useState("")
  
  const searching=()=>{
   
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=eb64b6e936c245683fd83bf0c4170197`)
      .then((res)=> {setPlace(res.data)})
      .catch((error)=>{
        alert("enter location name correctly")
      })
  }
  return (
    <div className="App">
      <div className="App-header">
        {/* header */}
        <h1>Weather App</h1>

        {/* Search box */}
        <div className='top'>
        <input 
        type='text' className='search'
        placeholder='Enter the location'
        onChange={(e)=>setPlace(e.target.value)}
        ></input>
        <button className="btn" onClick={searching}>Search</button>
        </div>
        
        {/* location */}

        <h3 className='location'>{place.name}{place.sys ? <h3>{place.sys.country}</h3>:null}</h3>

        <div className='temperature'>
        <p>Temperature</p>
        {place.main && <h3>{place.main.temp.toFixed()-273}&deg;C/{Math.round(place.main.temp.toFixed()*9/5-459.67)}&deg;F</h3>}
        

        </div>
        <div className='bottom'>
        {/* temperature */}
        <div className='humidity'>
          {place.main && <h3>{place.main.humidity}%</h3>}
          <p>Humidity</p>
          </div>
        {/* description */}
        <div className='condition'>
          {place.weather && <p>{place.weather[0].description}</p>}
        <p>Status</p>
        </div>
        {/* wind Speed */}
        <div className='wind'>
        
        {place.wind && (<h3>{place.wind.speed}MPH</h3>)}
        <p>Wind Speed</p>

        </div>

        </div>
       
      </div>
    </div>
  );
}

export default App;
