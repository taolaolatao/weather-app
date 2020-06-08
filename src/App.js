import React, { useState } from 'react';

const api = {
	key: '9af6cd68130f3da7437aeabdc87cd4c8',
	url: 'https://api.openweathermap.org/data/2.5/'
}

const App = () => {
	const [query, setQuery] = useState('London');
	const [weather, setWeather] = useState({});

	const search = async e => {
		if(e.which === 13){
			const res = await fetch(`${api.url}weather?q=${query}&units=metric&appid=${api.key}`)
			const result = await res.json();
			setWeather(result);
		}
	}

	const dateBuilder = (d) => {
		let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();
  
		return `${day} ${date} ${month} ${year}`
	 }

	return (
		<div className={weather.main ? ((weather.main.temp > 30) ? 'app warm' : 'app') : 'app'}>
			<main>
				<div className="search-box">
					<input 
						type="text"
						defaultValue={query}
						className="search-bar"
						placeholder="Search..."
						onKeyPress={search}
						onChange={e => setQuery(e.target.value)}
					/>
				</div>
				{weather.main ? (
					<div>
						<div className="location-box">
							<div className="location">{weather.name} - {weather.sys.country}</div>
							<div className="date">{dateBuilder(new Date())}</div>
						</div>
						<div className="weather-box">
							<div className="temp">
								{Math.round(weather.main.temp)}°c
							</div>
							<div className="weather">
								{weather.weather[0].main}
							</div>
						</div>
					</div>
				) : null}
			</main>
		</div>
	);
};

export default App;