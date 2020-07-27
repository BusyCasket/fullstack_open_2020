import React from 'react';

const Weather = ({ match, weather }) => {
  let wc = weather.current;
  return (
    <>
      <h3>Current weather in {match.capital}</h3>
      <p>Temperature: {wc.temperature} degrees Celsius</p>
      <img src={wc.weather_icons[0]} alt={'Image matching the description: ' + wc.weather_descriptions[0]} />
      <p>
        Wind speed: {wc.wind_speed} mph in direction {wc.wind_dir}{' '}
      </p>
    </>
  );
};

export default Weather;
