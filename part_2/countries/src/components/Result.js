import React from 'react';
import ListMatch from './searchMatches/ListMatch';
import ExactMatch from './searchMatches/ExactMatch';

const Result = ({ searched, countries }) => {
  const countryFilter = countries.filter((country) => country.name.toLowerCase().includes(searched.toLowerCase()));
  const countryCount = countryFilter.length;

  return searched === '' ? (
    <p></p>
  ) : countryCount > 10 ? (
    <p>Too many matches, please specify</p>
  ) : countryCount > 1 ? (
    countryFilter.map((country) => {
      return <ListMatch match={country} />;
    })
  ) : countryCount === 1 ? (
    <ExactMatch match={countryFilter[0]} />
  ) : (
    <p>Check spelling</p>
  );
};

export default Result;
