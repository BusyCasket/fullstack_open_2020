import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Weather';

const weather_api_key = process.env.REACT_APP_API_KEY;

const ExactMatch = ({ match }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${weather_api_key}&query=${match.capital}&units=m`)
      .then((response) => setWeather(response.data));
  }, []);

  return (
    <>
      <h2>{match.name}</h2>
      <p>capital: {match.capital}</p>
      <p>population: {match.population} </p>
      <h3>Languages:</h3>
      <ul>
        {match.languages.map((language) => (
          <li key={language.iso639_1}>{language.name}</li>
        ))}
      </ul>
      <img alt={'Flag of ' + match.name} src={match.flag} />
      {!weather.current ? (
        <p>checking current weather in {match.capital}</p>
      ) : (
        <Weather match={match} weather={weather} />
      )}
    </>
  );
};

export default ExactMatch;
