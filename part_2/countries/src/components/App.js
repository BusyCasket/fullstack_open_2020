import React, { useState, useEffect } from 'react';
import Search from './Search';
import Result from './Result';
import axios from 'axios';

const App = () => {
  const [newSearch, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => setCountries(response.data));
  }, []);

  return (
    <>
      <h1>Countries</h1>
      <p>Search for infos:</p>
      <Search searched={newSearch} handleChange={(e) => setSearch(e.target.value)} />
      <Result searched={newSearch} countries={countries} />
    </>
  );
};

export default App;
