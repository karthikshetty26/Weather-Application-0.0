import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [tempF, setTempF] = useState('');
  const [tempK, setTempK] = useState('');
  const [iconV, setIconV] = useState(''); 
  const search = evt => {

      fetch('https://api.openweathermap.org/data/2.5/weather?q='+[query]+'&units=metric&appid={API Key}')

        .then(resp => resp.json())
        .then(result => {
          setWeather(result);
          setQuery('');

          console.log("Result from API:",result);

          const iconLink = 'https://openweathermap.org/img/w/'+[result.weather[0].icon]+'.png';

          const ct = result.main.temp;
          const ft = ( ct * (9/5)) + 32;
          const kt = ct + 273.15;
          setTempF(ft);
          setTempK(kt);
          setIconV(iconLink);

      });
  }

  const currentTime = new Date().toLocaleString();
  const date = `${currentTime}`;

  return (
    <div className='weatherApp-out-cover div-1'>

      <div className='weatherApp-main-container div-2'>

        <div className="weatherApp-sub-conatiner-1 div-2-1">

          <nav className='weatherApp-nav'>

            <div className='weatherApp-logo'>Weather Site</div>

            <div className='nav-btn'>
              <i className="fas fa-cloud-sun"></i>
            </div>
          </nav>

          <div className='weatherApp-search-mobile'>
            <div className='weatherApp-search-mobile-wrap'>
              <input className='weather-app-input' type="text" placeholder="Search city ..." onChange={e => setQuery(e.target.value)} value={query} />
              <div className='weather-app-search-btn' onClick={search} ><i className="fas fa-search-location"></i></div>
            </div>
          </div>
          

          {/* <div className='weatherApp-search-mobile' onSubmit={search}>
            <input className='weather-app-input' type="text" placeholder="Search city ..." onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div> */}

          {(typeof weather.main != "undefined") ? (

          <div className='weatherApp-data-hold-div'> 

            <div className='weatherApp-temp'>
              <h2>{Math.round(weather.main.temp)}°C</h2>
            </div>

            <div className='cityName-dateTime'>
              <div>
                <h3>{weather.name}, {weather.sys.country}</h3>
                <img src={iconV} alt='Weather Icon'></img>
              </div>
              <h4> {date}</h4>
              <p>{weather.weather[0].main}, {weather.weather[0].description}</p>
            </div>
          </div>
          ): (
          
            <div className='weatherApp-data-hold-div'> 

            <div className='weatherApp-temp'>
              <h2>00°C</h2>
            </div>

            <div className='cityName-dateTime'>
              <div>
                <h3>Location</h3>
              </div>
              <h4> {date}</h4>
              <p>Na, Na</p>
            </div>
          </div>
          )}
        </div>

        <div className="weatherApp-sub-conatiner-2 div-2-2">

          <div className='weatherApp-search-mobile'>
            <div className='weatherApp-search-mobile-wrap'>
              <input className='weather-app-input' type="text" placeholder="Search city ..." onChange={e => setQuery(e.target.value)} value={query} />
              <div className='weather-app-search-btn' onClick={search} ><i className="fas fa-search-location"></i></div>
            </div>
          </div>

          {(typeof weather.main != "undefined") ? (

          <div className='more-details-div'>
            <h5 className='more-details-div-head'>Temperature</h5>

            <hr />

            <div className='details'>
              <p>Max</p>
              <p>{Math.round(weather.main.temp_max)}°C</p>
            </div>

            <div className='details'>
              <p>Min</p>
              <p>{Math.round(weather.main.temp_min)}°C</p>
            </div>

            <div className='details'>
              <p>Feels Like</p>
              <p>{Math.round(weather.main.feels_like)}°C</p>
            </div>

            <h5 className='more-details-div-head'>Weather details</h5>

            <hr />

            <div className='details'>
              <p>Humidity</p>
              <p>{weather.main.humidity}%</p>
            </div>

            <div className='details'>
              <p>Wind</p>
              <p>{weather.wind.speed}m/s</p>
            </div>

            <h5 className='more-details-div-head'>Conversion: °C, °F, K</h5>
            <hr />

            <div className='details'>
              <p>Celsius</p>
              <p>{Math.round(weather.main.temp)}°F</p>
            </div>

            <div className='details'>
              <p>Fahrenheit</p>
              <p>{Math.round(tempF)}°F</p>
            </div>

            <div className='details'>
              <p>Kelvin</p>
              <p>{Math.round(tempK)}K</p>
            </div>

            <footer>
              <p>Made with <i className="fas fa-heart"></i> by <a href={'https://www.linkedin.com/in/karthik2000/'} rel='noopener' >Karthik Shetty</a></p>
            </footer>

          </div>
          ): (

            <div className='more-details-div'>
            <h5 className='more-details-div-head'>Weather details</h5>

            <hr />

            <div className='details'>
              <p>Max</p>
              <p>Na</p>
            </div>

            <div className='details'>
              <p>Min</p>
              <p>Na</p>
            </div>

            <div className='details'>
              <p>Feels Like</p>
              <p>Na</p>
            </div>

            <h5 className='more-details-div-head'>Weather details</h5>

            <hr />

            <div className='details'>
              <p>Humidity</p>
              <p>Na</p>
            </div>

            <div className='details'>
              <p>Wind</p>
              <p>Na</p>
            </div>

            <h5 className='more-details-div-head'>Conversion: °C, °F, K</h5>
            <hr />

            <div className='details'>
              <p>Celsius</p>
              <p>Na</p>
            </div>

            <div className='details'>
              <p>Fahrenheit</p>
              <p>Na</p>
            </div>

            <div className='details'>
              <p>Kelvin</p>
              <p>Na</p>
            </div>

            <footer>
              <p>Made with <i className="fas fa-heart"></i> by <a href={'https://www.linkedin.com/in/karthik2000/'} rel='noopener'>Karthik Shetty</a></p>
            </footer>

          </div>
          )}
        </div>
         

      </div>
    </div>
  );
}

export default App;
