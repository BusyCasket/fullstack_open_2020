import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => (
  <div>
    <p>
      Hello {props.name}, you are {props.age} years old.
    </p>
  </div>
);

const App = () => {
  const name = 'Patricia';
  const age = 33;

  return (
    <div>
      <h1>Greeting:</h1>
      <Hello name="Gary" age={3 + 45} />
      <Hello name={name} age={age} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
