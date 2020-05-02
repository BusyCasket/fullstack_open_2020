import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{isNaN(value) && typeof value !== 'string' ? 0 : value}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positiveMath = (good / all) * 100;
  const positive = positiveMath.toString().concat(' %');

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistic</h1>
      {all !== 0 ? (
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={all} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive} />
          </tbody>
        </table>
      ) : (
        <p>no feedback given</p>
      )}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
